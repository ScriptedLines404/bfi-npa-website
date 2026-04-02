/* src/components/AnimatedText.jsx */
import React, { useRef, useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AnimatedText = ({ 
  children, 
  className = '',
  tag: Tag = 'p',
  delay = 0,
  threshold = 0.3
}) => {
  const { elementRef, isVisible } = useScrollAnimation(threshold);
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (typeof children === 'string') {
      setWords(children.split(' '));
    }
  }, [children]);

  return (
    <Tag 
      ref={elementRef}
      className={`${className} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transition: `opacity 0.5s ease-out ${delay}ms` }}
    >
      {typeof children === 'string' ? (
        words.map((word, idx) => (
          <span
            key={idx}
            className="inline-block transition-all duration-500"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${delay + idx * 50}ms`,
              transitionProperty: 'transform, opacity'
            }}
          >
            {word}&nbsp;
          </span>
        ))
      ) : (
        children
      )}
    </Tag>
  );
};

export default AnimatedText;