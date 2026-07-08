import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({
  children,
  icon,
  iconPosition = 'left',
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {

  if (variant === 'secondary') {
    return (
      <button
        className={`flex items-center justify-center gap-2.5 px-8 py-3 rounded-full text-base font-semibold transition-all transform hover:-translate-y-px bg-[#F1F2F4] text-[#0B1B3D] hover:bg-[#E2E4E9] shadow-sm hover:shadow ${className}`}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }

  return (
    <button
      className={`relative flex items-center justify-center gap-2 bg-linear-to-r from-[#FF6BCC] to-[#FF46ED] text-white text-base font-semibold rounded-full cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-[0_0_30px_rgba(255,107,204,0.35)] overflow-hidden px-8 py-3 ${className}`}
      {...props}
    >
      {/* Gradient Stroke (Inside border using mask technique) */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none border border-transparent z-20"
        style={{
          background: 'linear-gradient(to bottom, #FFB3E6, #D400B8) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Inner Glow SVG */}
      <svg
        className="absolute w-[85%] -top-5 left-1/2 -translate-x-1/2 mix-blend-plus-lighter blur-xl pointer-events-none z-0"
        viewBox="0 0 211 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="105.5" cy="8" rx="105.5" ry="8" fill="#FF9EE8" />
      </svg>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </span>
    </button>
  );
}
