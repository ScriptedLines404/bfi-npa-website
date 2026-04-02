/* src/components/UnifiedScrollAnimation.jsx */
import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UnifiedScrollAnimation = ({
  children,
  containerClassName = '',
  textClassName = '',
  stagger = 0.02,
  delay = 0,
  threshold = 0.85
}) => {
  const containerRef = useRef(null);

  // Split text into individual characters for maximum animation control
  const splitChars = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => {
      const isSpace = char === ' ';
      return (
        <span 
          key={index} 
          className="inline-block animated-char"
          style={{ 
            display: isSpace ? 'inline' : 'inline-block',
            minWidth: isSpace ? '0.25em' : 'auto'
          }}
        >
          {isSpace ? '\u00A0' : char}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const chars = element.querySelectorAll('.animated-char');
    if (chars.length === 0) return;

    // Kill any existing ScrollTrigger for this element
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars && trigger.vars.trigger === element) {
        trigger.kill();
      }
    });

    // Set initial state - hidden and transformed
    gsap.set(chars, {
      opacity: 0,
      y: 80,
      rotationX: 90,
      scale: 0.8,
      filter: 'blur(8px)',
      transformOrigin: '50% 50%'
    });

    // Create animation timeline
    const animateIn = () => {
      const tl = gsap.timeline();
      tl.to(chars, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: stagger,
        delay: delay,
        ease: "back.out(1.2)",
        overwrite: true
      });
      return tl;
    };

    // Create reverse animation (for scrolling up)
    const animateReverse = () => {
      const tl = gsap.timeline();
      tl.to(chars, {
        opacity: 0,
        y: -80,
        rotationX: -90,
        scale: 0.8,
        filter: 'blur(8px)',
        duration: 0.8,
        stagger: stagger,
        delay: delay,
        ease: "back.in(1.2)",
        overwrite: true
      });
      return tl;
    };

    // Create scroll-triggered animation - only entry animations, no exit
    ScrollTrigger.create({
      trigger: element,
      start: `top ${threshold * 100}%`,
      end: 'bottom 50%',
      onEnter: () => {
        animateIn().play();
      },
      onLeave: () => {
        // Do nothing on leave - keep the animated state
      },
      onEnterBack: () => {
        // When scrolling back up, play reverse animation (entering from top)
        animateReverse().play();
      },
      onLeaveBack: () => {
        // Do nothing on leave back
      },
      toggleActions: 'play none none none',
      markers: false
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [stagger, delay, threshold]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <div className={`${textClassName}`}>
        {splitChars}
      </div>
    </div>
  );
};

export default UnifiedScrollAnimation;