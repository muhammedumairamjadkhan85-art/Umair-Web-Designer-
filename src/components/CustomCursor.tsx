import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (not touch screens)
    // and respect prefers-reduced-motion
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          window.getComputedStyle(target).cursor === 'pointer')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isEnabled || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-150"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      {/* Outer subtle ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9B5CFF]/40 transition-all duration-150 ease-out ${
          isPointer
            ? 'w-10 h-10 bg-[#7C3AED]/15 scale-125 border-[#9B5CFF]'
            : 'w-6 h-6 bg-transparent scale-100'
        }`}
      />
      {/* Center sharp dot */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD] transition-all duration-100 ${
          isPointer ? 'w-2 h-2 opacity-80' : 'w-1.5 h-1.5 opacity-90'
        }`}
      />
    </div>
  );
};
