import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../types';

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center justify-center p-2 rounded-lg text-[#A7A2B5] hover:text-[#F7F5FC] dark:text-[#A7A2B5] dark:hover:text-[#F7F5FC] light:text-[#4A4458] light:hover:text-[#08080D] border border-transparent hover:border-[#30263F] dark:hover:border-[#30263F] light:hover:border-[#D1C9DE] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#9B5CFF] ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[#C4B5FD] transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#7C3AED] transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
