"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, TrendingUp, Award, Star } from 'lucide-react';
import { gsapAnimations, GSAP_CONFIG } from '@/lib/gsap-utils';
import CareerOpportunityAd from './career-opportunity-ad';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ClientsMarqueeSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const clientCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const clients = [
    { name: "Tech Innovations Inc.", logo: "/image-1.png", industry: "Technology" },
    { name: "Global Banking Corp", logo: "/image-2.png", industry: "Finance" },
    { name: "Healthcare Solutions", logo: "/image-3.svg", industry: "Healthcare" },
    { name: "Retail Enterprises", logo: "/logo2.png", industry: "Retail" },
    { name: "Manufacturing Group", logo: "/placeholder-logo.png", industry: "Manufacturing" },
    { name: "Education Systems", logo: "/placeholder-logo.svg", industry: "Education" },
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clients, ...clients];

  const stats = [
    { icon: Building2, value: "200+", label: "Enterprise Clients" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ];

  // GSAP Animations
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title and description
      if (titleRef.current && descriptionRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth }
        )
        .fromTo(descriptionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth },
          "-=0.3"
        );
      }

      // Animate stats with stagger
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.fromTo(stat,
            { opacity: 0, y: 60, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: GSAP_CONFIG.duration.normal,
              ease: GSAP_CONFIG.ease.bounce,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Add hover animations
          const handleMouseEnter = () => {
            gsap.to(stat, {
              scale: 1.05,
              y: -5,
              duration: 0.3,
              ease: GSAP_CONFIG.ease.smooth
            });
          };

          const handleMouseLeave = () => {
            gsap.to(stat, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: GSAP_CONFIG.ease.smooth
            });
          };

          stat.addEventListener('mouseenter', handleMouseEnter);
          stat.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      // Animate marquee container
      if (marqueeRef.current) {
        gsap.fromTo(marqueeRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: marqueeRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Add floating animation to client cards
      clientCardsRef.current.forEach((card, index) => {
        if (card) {
          // Staggered entrance animation
          gsap.fromTo(card,
            { opacity: 0, scale: 0.8, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: GSAP_CONFIG.duration.normal,
              ease: GSAP_CONFIG.ease.smooth,
              delay: index * 0.05,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Continuous floating animation
          gsapAnimations.float(card, 5 + (index % 3) * 2);
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="clients" className="py-16 bg-gradient-to-br from-[#FF8C00]/5 via-white to-[#FFB300]/5 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p ref={descriptionRef} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide cybersecurity solutions to organizations across various industries, helping them secure their digital future.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={el => { statsRef.current[index] = el; }}
                className="relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FF8C00]/20 hover:border-[#FF8C00]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#FF8C00]/20 text-center group cursor-pointer"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FFB300] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FF8C00] to-[#FFB300] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
                
                {/* Animated background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF8C00]/10 to-[#FFB300]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Marquee Container */}
        <div ref={marqueeRef} className="relative">
          {/* Enhanced gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#FF8C00]/10 via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#FF8C00]/10 via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10 pointer-events-none" />

          {/* Marquee */}
          <div 
            className="overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`flex gap-8 ${isPaused ? '' : 'animate-marquee'}`}
              style={{ 
                animationPlayState: isPaused ? 'paused' : 'running',
                width: 'max-content'
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  ref={el => { clientCardsRef.current[index] = el; }}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-[#FF8C00]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF8C00]/25 w-48 h-40 flex flex-col items-center justify-center group-hover:scale-105">
                    {/* Logo */}
                    <div className="relative w-24 h-20 mb-3">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Industry Badge */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs px-4 py-2 bg-gradient-to-r from-[#FF8C00] to-[#FFB300] text-white rounded-full font-semibold whitespace-nowrap shadow-lg">
                        {client.industry}
                      </span>
                    </div>

                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF8C00]/20 to-[#FFB300]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#FF8C00] to-[#FFB300] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" 
                         style={{ 
                           background: 'linear-gradient(45deg, #FF8C00, #FFB300, #FF8C00)',
                           backgroundSize: '200% 200%',
                           animation: isPaused ? 'none' : 'gradientShift 3s ease infinite'
                         }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Career Opportunity Ad Section */}
      {/* <CareerOpportunityAd /> */}
    </section>
  );
};

export default ClientsMarqueeSection;