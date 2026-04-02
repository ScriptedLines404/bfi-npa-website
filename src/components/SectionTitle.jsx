/* src/components/SectionTitle.jsx */
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  const { elementRef, isVisible } = useScrollAnimation(0.3, '0px 0px -100px 0px');

  return (
    <div 
      ref={elementRef}
      className={`text-center mb-12 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-orange to-primary-orange/70 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-orange/50 rounded-full mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;