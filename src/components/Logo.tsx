import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'horizontal' | 'minimal';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-start gap-4 ${className}`}>
        {/* Abstract Icon */}
        <div className="flex flex-col items-center flex-shrink-0 mt-1">
          <div className="w-2 h-2 bg-primary rounded-full mb-2"></div>
          <div className="w-[1.5px] h-12 bg-primary"></div>
        </div>
        <div className="flex flex-col pt-0.5">
          <span className="font-headline-md tracking-[0.2em] text-primary text-2xl md:text-3xl leading-none mb-2">LUMEN</span>
          <div className="font-label-caps tracking-[0.25em] text-on-surface-variant text-[8px] md:text-[9px] leading-[1.4] flex flex-col">
            <span>BIENESTAR Y</span>
            <span>MOVIMIENTO</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <span className="font-headline-md tracking-[0.2em] text-primary text-xl leading-none">LUMEN</span>
      </div>
    );
  }

  // Default (Stacked, like the main logo image)
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Abstract Icon (Centered above M) */}
      <div className="flex flex-col items-center mb-5">
        <div className="w-2.5 h-2.5 bg-primary rounded-full mb-3"></div>
        <div className="w-[2px] h-16 bg-primary"></div>
      </div>
      
      {/* Brand Name */}
      <div className="font-headline-md tracking-[0.25em] text-primary text-4xl md:text-5xl leading-none ml-[0.25em]">
        LUMEN
      </div>
      
      {/* Subtitle with divider */}
      <div className="w-8 h-[1px] bg-primary/30 my-5"></div>
      <div className="font-label-caps tracking-[0.3em] text-on-surface-variant text-[10px] md:text-xs ml-[0.3em]">
        BIENESTAR Y MOVIMIENTO
      </div>
    </div>
  );
};
