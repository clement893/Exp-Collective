'use client';

import { useState } from 'react';

interface ValueCardProps {
  children: React.ReactNode;
}

export function ValueCard({ children }: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-lg border-2 transition-colors"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: isHovered ? '#FFD400' : 'rgba(255, 212, 0, 0.3)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
