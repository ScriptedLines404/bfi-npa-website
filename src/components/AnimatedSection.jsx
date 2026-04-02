/* src/components/AnimatedSection.jsx */
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '',
  direction = 'up',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const { elementRef, isVisible } = useScrollAnimation(threshold, rootMargin);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(60px)';
        case 'down': return 'translateY(-60px)';
        case 'left': return 'translateX(-60px)';
        case 'right': return 'translateX(60px)';
        default: return 'translateY(60px)';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'all'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;