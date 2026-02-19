import React from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) => {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
    >
      <div
        className={`transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      >
        {children}
      </div>
    </Tag>
  );
};

interface RevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerMs?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const RevealStagger: React.FC<RevealStaggerProps> = ({
  children,
  className = '',
  staggerMs = 80,
  as: Tag = 'div',
}) => {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
    >
      {React.Children.map(children, (child, i) => (
        <div
          className={`transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: inView ? `${i * staggerMs}ms` : '0ms' }}
        >
          {child}
        </div>
      ))}
    </Tag>
  );
};
