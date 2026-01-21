'use client';

import { useState } from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
}

export function CTAButton({ children }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="px-12 py-6 text-lg font-bold rounded-lg transition-all duration-300"
      style={{
        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.9)' : '#000000',
        color: '#FFFFFF',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
