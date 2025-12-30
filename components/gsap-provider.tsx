"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

interface GSAPProviderProps {
  children: React.ReactNode;
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

    // Set global GSAP defaults
    gsap.defaults({
      duration: 0.6,
      ease: "power2.out"
    });

    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: "play pause resume reverse",
      markers: false // Set to true for debugging
    });

    // Smooth scroll configuration
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    // Global page enter animation
    gsap.set("main", { opacity: 0, y: 20 });
    gsap.to("main", { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power2.out",
      delay: 0.1
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}