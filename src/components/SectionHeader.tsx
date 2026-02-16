import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light }) => (
  <div className="text-center mb-16">
    <h2 className={`text-4xl md:text-5xl font-serif mb-4 ${light ? 'text-[var(--accent-contrast)]' : 'text-[var(--app-fg)]'}`}>
      {title}
    </h2>
    {subtitle && <p className="text-[var(--accent)] tracking-[0.3em] uppercase text-xs font-medium">{subtitle}</p>}
  </div>
);

export default SectionHeader;
