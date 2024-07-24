// src/components/Typography/Typography.tsx
import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
  children: React.ReactNode;
  className?: string;
}

const variantClasses = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-base',
  small: 'text-base text-sm'
};

export const Typography: React.FC<TypographyProps> = ({ variant = 'p', children, className = '' }) => {
  const Tag = variant.startsWith('h') ? variant : 'p';
  return (
    <Tag className={`font-nunito-sans ${variantClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
};