import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '2mb' }));

  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const inquiriesFile = path.join(dataDir, 'inquiries.json');

  // Inquiries API
  app.post('/api/inquiry', (req, res) => {
    try {
      const { referenceId, timestamp, data } = req.body;
      if (!data || !data.fullName || !data.email) {
        return res.status(400).json({ error: 'Missing required inquiry fields' });
      }

      let existing = [];
      if (fs.existsSync(inquiriesFile)) {
        try {
          existing = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
        } catch {
          existing = [];
        }
      }

      const newRecord = {
        referenceId: referenceId || `VTX-${Date.now()}`,
        receivedAt: timestamp || new Date().toISOString(),
        client: data,
      };

      existing.unshift(newRecord);
      fs.writeFileSync(inquiriesFile, JSON.stringify(existing.slice(0, 100), null, 2), 'utf8');

      return res.status(200).json({
        success: true,
        referenceId: newRecord.referenceId,
        message: 'Inquiry successfully saved on VELTRIX studio server.',
      });
    } catch (err) {
      console.error('Error handling inquiry submission:', err);
      return res.status(500).json({ error: 'Internal server error processing inquiry' });
    }
  });

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'operational',
      brand: 'VELTRIX',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    });
  });

  // In dev, mount Vite middleware
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In prod, serve dist static files
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`VELTRIX Studio Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
