/* src/components/SectionTitle.jsx */
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '',
  titleColor = '#0A2540',
  accentColor = '#F59E0B',
  subtitleColor = '#4B5563'
}) => {
  const { elementRef, isVisible } = useScrollAnimation(0.3, '0px 0px -100px 0px');

  return (
    <div 
      ref={elementRef}
      className={`text-center mb-12 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      <h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="text-xl max-w-3xl mx-auto"
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      )}
      <div 
        className="w-24 h-1 rounded-full mx-auto mt-4"
        style={{ backgroundColor: accentColor }}
      ></div>
    </div>
  );
};

export default SectionTitle;