
"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Newspaper, GraduationCap, Video, BookOpen, Bot, Languages, Library } from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeProductsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const cards = [
    {
      title: 'MAG-AI',
      bullets: [
        'AI-powered content management system',
        'Streamlines content organization',
        'Intelligent automation & distribution',
      ],
      icon: <Newspaper className="h-6 w-6" />,
      smallIcon: <Newspaper className="h-4 w-4" />,
      bgColor: 'bg-[#FF8C00]',
      glowColor: 'shadow-[0_0_20px_rgba(255,140,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Virtual Naani',
      bullets: [
        'AI-powered magazine platform',
        'Subscription tracking & management',
        'Automated content delivery',
      ],
      icon: <Bot className="h-6 w-6" />,
      smallIcon: <Bot className="h-4 w-4" />,
      bgColor: 'bg-[#FFB300]',
      glowColor: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Anukaran AI',
      bullets: [
        'Advanced AI simulation platform',
        'Machine learning integration',
        'Intelligent data processing',
      ],
      icon: <Bot className="h-6 w-6" />,
      smallIcon: <Bot className="h-4 w-4" />,
      bgColor: 'bg-[#FF8C00]',
      glowColor: 'shadow-[0_0_20px_rgba(255,140,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'AI Based Multilingual LMS',
      bullets: [
        'Next-gen learning management system',
        'Multilingual support for global reach',
        'Personalized learning paths',
      ],
      icon: <GraduationCap className="h-6 w-6" />,
      smallIcon: <GraduationCap className="h-4 w-4" />,
      bgColor: 'bg-[#FFB300]',
      glowColor: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Virtual Classroom Solution',
      bullets: [
        'Secure video conferencing platform',
        'Interactive learning tools',
        'Designed for remote education',
      ],
      icon: <Video className="h-6 w-6" />,
      smallIcon: <Video className="h-4 w-4" />,
      bgColor: 'bg-[#FF8C00]',
      glowColor: 'shadow-[0_0_20px_rgba(255,140,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'E-Library Solution',
      bullets: [
        'Digital library management',
        'Centralized content delivery',
        'Advanced search & accessibility',
      ],
      icon: <BookOpen className="h-6 w-6" />,
      smallIcon: <BookOpen className="h-4 w-4" />,
      bgColor: 'bg-[#FFB300]',
      glowColor: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Multi Lingual Dictionary',
      bullets: [
        'Comprehensive language support',
        'AI-powered translations',
        'Cross-language reference tool',
      ],
      icon: <Languages className="h-6 w-6" />,
      smallIcon: <Languages className="h-4 w-4" />,
      bgColor: 'bg-[#FF8C00]',
      glowColor: 'shadow-[0_0_20px_rgba(255,140,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Sambhasini Multilingual AI',
      bullets: [
        'Advanced multilingual AI framework',
        'Natural language processing',
        'Cross-language communication',
      ],
      icon: <Library className="h-6 w-6" />,
      smallIcon: <Library className="h-4 w-4" />,
      bgColor: 'bg-[#FFB300]',
      glowColor: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=600&q=80',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for header elements
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 50
      });

      // Header animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      headerTl.to(titleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .to(descriptionRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.7, 
        ease: "power2.out" 
      }, "-=0.5");

      // Proper stacked cards scroll animation
      const numCards = cards.length;
      const cardGap = 25;

      // Set initial positions - all cards start in their final stacked positions
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.set(card, {
          y: index === 0 ? 0 : 800, // First card visible, others below
          opacity: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 0.9,
          zIndex: index + 1, // Higher index = higher z-index (front)
          filter: index === 0 ? "blur(0px)" : "blur(2px)"
        });
      });

      // Create ScrollTrigger for stacked animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          
          cardRefs.current.forEach((card, index) => {
            if (!card) return;

            // Sequential timing - each card waits for previous to start
            const cardStart = index * 0.15; // 15% gap between each card start
            const cardEnd = cardStart + 0.25; // Each card takes 25% to animate
            const finalY = index * cardGap; // Final stacked position

            let y, scale, opacity, blur;

            if (progress <= cardStart) {
              // Card hasn't started yet - stays hidden below
              y = index === 0 ? finalY : 800;
              scale = index === 0 ? 1 : 0.9;
              opacity = index === 0 ? 1 : 0;
              blur = index === 0 ? 0 : 2;
            } else if (progress >= cardEnd) {
              // Card animation complete - in final stacked position
              y = finalY;
              scale = 1;
              opacity = 1;
              blur = 0;
            } else {
              // Card is currently animating up
              const cardProgress = (progress - cardStart) / (cardEnd - cardStart);
              const eased = 1 - Math.pow(1 - cardProgress, 3); // easeOutCubic
              
              y = index === 0 ? finalY : 800 * (1 - eased) + finalY * eased;
              scale = 0.9 + (0.1 * eased);
              opacity = index === 0 ? 1 : eased;
              blur = 2 * (1 - eased);
            }

            // Apply smooth transforms
            gsap.set(card, {
              y: y,
              scale: scale,
              opacity: opacity,
              filter: `blur(${blur}px)`,
              zIndex: index + 1 // Cards with higher index appear in front
            });
          });
        }
      });

      // Hover effects
      cardRefs.current.forEach((card) => {
        if (!card) return;

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [cards.length]);

  const handleLearnMore = (title: string) => {
    console.log(`${title} clicked`);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-black/30 dark:via-black dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center z-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-black/30 dark:via-black dark:to-gray-800 py-4">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#ff6a00] to-[#FF8C00] dark:from-[#FF8C00] dark:text-white dark:via-[#ff8000] dark:to-[#FF8C00] bg-clip-text text-transparent mb-4"
          >
            Our Products
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Fortify your digital fortress with our cutting-edge cybersecurity solutions.
            Elevate your business through bespoke software development, where innovation meets functionality.
          </p>
        </div>

        {/* Cards container */}
        <div
          ref={containerRef}
          className="relative"
        >
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-16">
            <div className="relative mt-28 h-full md:h-[90vh] w-full max-w-6xl mx-auto">
              {cards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="card absolute top-0 left-0 right-0 mx-auto w-full h-[600px] bg-white/95 dark:bg-black/90 backdrop-blur-sm will-change-transform border-t-0 border-amber-50 shadow-2xl hover:border-[#FF8C00]/40 dark:hover:border-[white]/50 overflow-hidden rounded-2xl"
                >
                  <div className="flex items-center h-full p-6 md:p-10">
                    {/* Left side - Content */}
                    <div className="flex-1 pr-8 flex flex-col justify-center h-full">
                      {/* Icon with gradient background */}
                      <div className={`inline-flex p-4 rounded-2xl ${card.bgColor} ${card.glowColor} text-white mb-4 transform hover:scale-110 transition-all duration-300 w-fit`}>
                        {card.icon}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight line-clamp-2">
                        {card.title}
                      </h3>

                      {/* Bullets with enhanced styling */}
                      <ul className="space-y-3 mb-6 flex-grow">
                        {card.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start text-gray-800 dark:text-gray-200 group">
                            <span
                              className={`inline-block w-2 h-2 rounded-full ${card.bgColor} mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-200 ${card.glowColor}`}
                            />
                            <span className="text-sm md:text-base leading-relaxed font-medium line-clamp-2">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA with enhanced hover effects */}
                      <button
                        type="button"
                        className={`group flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${card.bgColor} text-white shadow-lg border border-[#FF8C00]/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${card.glowColor} w-fit`}
                        onClick={() => handleLearnMore(card.title)}
                      >
                        <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:scale-110 transition-transform duration-300">
                          {card.smallIcon}
                        </div>
                        <span className="text-sm md:text-base font-semibold">Learn more</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Right side - Image with overlay effect */}
                    <div className="flex-shrink-0 w-[45%] h-full relative group flex items-center">
                      <div className="relative w-full h-[380px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/10 via-transparent to-[#FFB300]/10 rounded-2xl z-10 pointer-events-none" />
                        <div className="absolute inset-0 rounded-2xl ring-2 ring-[#FF8C00]/20 group-hover:ring-[#FF8C00]/40 transition-all duration-500" />
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer to enable scrolling */}
          <div className="h-[400vh]" />
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSection;