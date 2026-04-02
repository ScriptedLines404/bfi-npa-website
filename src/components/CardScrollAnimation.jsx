/* src/components/CardScrollAnimation.jsx */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardScrollAnimation = ({ children, className = '', delay = 0, threshold = 0.9 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    // Kill any existing ScrollTrigger for this element
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars && trigger.vars.trigger === element) {
        trigger.kill();
      }
    });

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      filter: 'blur(4px)'
    });

    // Create animation timeline for scrolling down
    const animateIn = () => {
      const tl = gsap.timeline();
      tl.to(element, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.6,
        delay: delay,
        ease: "back.out(0.8)",
        overwrite: true
      });
      return tl;
    };

    // Create reverse animation for scrolling up (entering from top)
    const animateReverse = () => {
      const tl = gsap.timeline();
      tl.to(element, {
        opacity: 0,
        y: -50,
        scale: 0.9,
        filter: 'blur(4px)',
        duration: 0.6,
        delay: delay,
        ease: "back.in(0.8)",
        overwrite: true
      });
      return tl;
    };

    // Create scroll-triggered animation - only entry animations, no exit
    ScrollTrigger.create({
      trigger: element,
      start: `top ${threshold * 100}%`,
      end: 'bottom 60%',
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
  }, [delay, threshold]);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
};

export default CardScrollAnimation;