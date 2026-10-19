import React from 'react';

interface VeltrixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const VeltrixLogo: React.FC<VeltrixLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const symbolSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-xl tracking-[0.24em]',
    lg: 'text-2xl tracking-[0.28em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric V Symbol: Precision architectural facets */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${symbolSizes[size]} shrink-0 transition-transform duration-300 hover:scale-105`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="vFacetLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="60%" stopColor="#9B5CFF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="vFacetRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#171027" />
          </linearGradient>
          <linearGradient id="vCoreAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9B5CFF" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
        </defs>

        {/* Outer faceted geometric shield / V */}
        <polygon
          points="6,6 16,6 20,20 12,20"
          fill="url(#vFacetLeft)"
        />
        <polygon
          points="34,6 24,6 20,20 28,20"
          fill="url(#vFacetRight)"
          stroke="#30263F"
          strokeWidth="0.5"
        />
        {/* Lower acute intersection */}
        <polygon
          points="12,20 20,20 20,34"
          fill="url(#vFacetLeft)"
        />
        <polygon
          points="28,20 20,20 20,34"
          fill="url(#vFacetRight)"
        />
        {/* Subtle center precision notch */}
        <polygon
          points="19,6 21,6 20,10"
          fill="url(#vCoreAccent)"
        />
      </svg>

      {showWordmark && (
        <span
          className={`font-display font-extrabold text-[#F7F5FC] dark:text-[#F7F5FC] light:text-[#08080D] uppercase transition-colors ${textSizes[size]}`}
          style={{ letterSpacing: '0.22em' }}
        >
          VELTRIX
        </span>
      )}
    </div>
  );
};
