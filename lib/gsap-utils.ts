import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Animation configurations
export const GSAP_CONFIG = {
  ease: {
    smooth: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
    expo: "expo.out",
    circ: "circ.out"
  },
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    verySlow: 2
  }
};

// Common animation functions
export const gsapAnimations = {
  // Fade in from bottom
  fadeInUp: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element, 
      { 
        y: 100, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: GSAP_CONFIG.duration.normal,
        ease: GSAP_CONFIG.ease.smooth,
        delay
      }
    );
  },

  // Fade in from left
  fadeInLeft: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: GSAP_CONFIG.duration.normal,
        ease: GSAP_CONFIG.ease.smooth,
        delay
      }
    );
  },

  // Fade in from right
  fadeInRight: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: GSAP_CONFIG.duration.normal,
        ease: GSAP_CONFIG.ease.smooth,
        delay
      }
    );
  },

  // Scale in animation
  scaleIn: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: GSAP_CONFIG.duration.normal,
        ease: GSAP_CONFIG.ease.bounce,
        delay
      }
    );
  },

  // Stagger animation for multiple elements
  staggerIn: (elements: string | Element[], delay = 0) => {
    return gsap.fromTo(elements,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: GSAP_CONFIG.duration.normal,
        ease: GSAP_CONFIG.ease.smooth,
        stagger: 0.1,
        delay
      }
    );
  },

  // Parallax effect
  parallax: (element: string | Element, speed = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  },

  // Smooth reveal with ScrollTrigger
  scrollReveal: (element: string | Element, direction = "up") => {
    const fromVars: any = { opacity: 0 };
    const toVars: any = { opacity: 1, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth };

    switch (direction) {
      case "up":
        fromVars.y = 100;
        toVars.y = 0;
        break;
      case "down":
        fromVars.y = -100;
        toVars.y = 0;
        break;
      case "left":
        fromVars.x = -100;
        toVars.x = 0;
        break;
      case "right":
        fromVars.x = 100;
        toVars.x = 0;
        break;
      case "scale":
        fromVars.scale = 0;
        toVars.scale = 1;
        break;
    }

    return gsap.fromTo(element, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  },

  // Typing animation
  typeWriter: (element: string | Element, text: string, speed = 0.05) => {
    return gsap.to(element, {
      duration: text.length * speed,
      text: text,
      ease: "none"
    });
  },

  // Floating animation
  float: (element: string | Element, intensity = 10) => {
    return gsap.to(element, {
      y: -intensity,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  },

  // Rotate animation
  rotate: (element: string | Element, degrees = 360, duration = 10) => {
    return gsap.to(element, {
      rotation: degrees,
      duration,
      ease: "none",
      repeat: -1
    });
  },

  // Magnetic hover effect
  magneticHover: (element: string | Element) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = (el as Element).getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: GSAP_CONFIG.ease.smooth
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: GSAP_CONFIG.ease.elastic
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }
};

// Page transition animations
export const pageTransitions = {
  fadeIn: () => {
    return gsap.fromTo("main", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth }
    );
  },

  slideIn: (direction = "right") => {
    const fromX = direction === "right" ? "100%" : "-100%";
    return gsap.fromTo("main",
      { x: fromX, opacity: 0 },
      { x: "0%", opacity: 1, duration: GSAP_CONFIG.duration.slow, ease: GSAP_CONFIG.ease.expo }
    );
  }
};

// Smooth scrolling setup
export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return;

  // Smooth scroll behavior
  gsap.registerPlugin(ScrollTrigger);
  
  // Refresh ScrollTrigger on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });

  // Custom smooth scroll (optional)
  const smoothScroll = (target: string | Element) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: GSAP_CONFIG.ease.expo
    });
  };

  return { smoothScroll };
};

// Cleanup function
export const cleanupGSAP = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf("*");
};