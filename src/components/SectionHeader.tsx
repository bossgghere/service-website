
import React from 'react';

interface Props {
  title: string;
  description: string;
  className?: string;
}

const SectionHeader: React.FC<Props> = ({ title, description, className = "" }) => {
  return (
    <div className={`max-w-3xl mx-auto px-6 mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 text-black dark:text-white">{title}</h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">{description}</p>
    </div>
  );
};

export default SectionHeader;
