import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => (
  <div className={`mb-12 md:mb-16 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
    {subtitle && <p className="text-black/40 max-w-md">{subtitle}</p>}
  </div>
);
