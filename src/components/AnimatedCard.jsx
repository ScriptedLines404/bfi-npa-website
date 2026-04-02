/* src/components/AnimatedCard.jsx */
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right'
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const { elementRef, isVisible } = useScrollAnimation(threshold, rootMargin);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(50px)';
        case 'down': return 'translateY(-50px)';
        case 'left': return 'translateX(-50px)';
        case 'right': return 'translateX(50px)';
        default: return 'translateY(50px)';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } ${className}`}
      style={{
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
        transitionProperty: 'all'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;