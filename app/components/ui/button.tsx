'use client';

import Image from 'next/image';
import { ReactNode, useState, memo } from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'hovering' | 'disabled' | 'opacity';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: 's' | 'm' | 'l';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

function Button({
  variant = 'primary',
  size = 'm',
  children,
  onClick,
  className = '',
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeMap = {
    s: { width: 120, height: 44 },
    m: { width: 160, height: 52 },
    l: { width: 200, height: 60 },
  };

  const displayVariant = variant === 'ghost' && isHovered ? 'hovering' : variant;

  const variantMap: Record<ButtonVariant, (size: string) => string> = {
    primary: (size) => `/component/naming/primary_btn-${size}.svg`,
    ghost: (size) => `/component/naming/ghost_btn-${size}.svg`,
    hovering: (size) => `/component/naming/hovering_btn-${size}.svg`,
    disabled: (size) => `/component/naming/disabled_btn-${size}.svg`,
    opacity: (size) => `/component/naming/opacity_btn-${size}.svg`,
  };

  const svgSrc = variantMap[displayVariant](size);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={variant === 'disabled'}
      className={`relative inline-flex items-center justify-center transition-all duration-200 ${className}`}
    >
      <Image
        src={svgSrc}
        alt=""
        width={sizeMap[size].width}
        height={sizeMap[size].height}
        className="w-full h-auto"
      />
      <span 
        className="absolute text-[#330819] font-medium text-sm leading-none pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </span>
    </button>
  );
}

export default memo(Button);