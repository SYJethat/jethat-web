"use client";

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lightbulb, 
  Users, 
  ArrowRight, 
  Briefcase,
  TrendingUp,
  Award,
  Clock,
  Calendar,
  User,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';
import Image from 'next/image';
import { gsapAnimations, GSAP_CONFIG } from '@/lib/gsap-utils';

import Jethat from "../public/jethat.jpeg"

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CareerOpportunityAd = () => {
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);
  
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const insightsSectionRef = useRef<HTMLDivElement>(null);
  const careerSectionRef = useRef<HTMLDivElement>(null);
  const insightCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const coreValueRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const careerTitleRef = useRef<HTMLHeadingElement>(null);
  const careerDescRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const insights = [
    {
      category: "AI & Automation",
      date: "February 12, 2025",
      title: "How AI Is Revolutionizing Cyber Defense",
      description: "From predictive analytics to autonomous response, explore how AI",
      image: "public/jethat.jpeg",
      categoryColor: "bg-red-500"
    },
    {
      category: "Network Security", 
      date: "April 10, 2025",
      title: "Zero Trust Architecture – The Future Security",
      description: "Why traditional perimeter defenses no longer suffice—and how Zero Trust",
      image: "public/jethat.jpeg",
      categoryColor: "bg-blue-500"
    },
    {
      category: "Cybersecurity",
      date: "May 21, 2025", 
      title: "The Hidden Costs Of Ignoring Cybersecurity",
      description: "A single breach can do more than drain your budget — it can damage trust.",
      image: "public/jethat.jpeg",
      categoryColor: "bg-red-500",
      badge: "Hidden Gem"
    },
    {
      category: "Threat Intelligence",
      date: "October 19, 2025",
      title: "Unlocking Enterprise Security: A Comprehensive Guide", 
      description: "Secure your enterprise infrastructure with best practices and compliance.",
      image: "public/jethat.jpeg",
      categoryColor: "bg-orange-500"
    }
  ];

  const coreValues = [
    {
      title: "Integrity First",
      description: "Every action we take upholds our commitment to confidentiality and trust."
    },
    {
      title: "Innovation At Scale", 
      description: "We thrive on creativity, automation, and the pursuit of smarter defense."
    },
    {
      title: "Collaboration Always",
      description: "Security is a shared responsibility — across teams, clients, and partners.",
    
    }
  ];

  // GSAP Animations
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate insights section
      if (insightsSectionRef.current) {
        gsap.fromTo(insightsSectionRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.normal,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: insightsSectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate title and subtitle
      if (titleRef.current && subtitleRef.current) {
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
        .fromTo(subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth },
          "-=0.3"
        );
      }

      // Animate insight cards with stagger
      insightCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 80, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: GSAP_CONFIG.duration.normal,
              ease: GSAP_CONFIG.ease.smooth,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Add hover animations
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: GSAP_CONFIG.ease.smooth
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: GSAP_CONFIG.ease.smooth
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      // Animate career section
      if (careerSectionRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: careerSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        if (careerTitleRef.current) {
          tl.fromTo(careerTitleRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth }
          );
        }

        if (careerDescRef.current) {
          tl.fromTo(careerDescRef.current,
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth },
            "-=0.4"
          );
        }

        // Animate core values with stagger
        coreValueRefs.current.forEach((valueRef, index) => {
          if (valueRef) {
            tl.fromTo(valueRef,
              { opacity: 0, x: -60, scale: 0.95 },
              { 
                opacity: 1, 
                x: 0, 
                scale: 1,
                duration: GSAP_CONFIG.duration.normal, 
                ease: GSAP_CONFIG.ease.smooth 
              },
              `-=${0.6 - index * 0.1}`
            );
          }
        });

        if (buttonRef.current) {
          tl.fromTo(buttonRef.current,
            { opacity: 0, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.bounce },
            "-=0.3"
          );
        }

        if (imageRef.current) {
          tl.fromTo(imageRef.current,
            { opacity: 0, x: 100, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: GSAP_CONFIG.duration.slow, ease: GSAP_CONFIG.ease.smooth },
            "-=1"
          );
        }
      }

      // Add magnetic hover effect to button
      if (buttonRef.current) {
        gsapAnimations.magneticHover(buttonRef.current);
      }

      // Add floating animation to image
      if (imageRef.current) {
        gsapAnimations.float(imageRef.current, 15);
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Smooth carousel transition
  const nextInsight = () => {
    const newIndex = (currentInsightIndex + 1) % insights.length;
    
    // Animate out current cards
    gsap.to(insightCardsRef.current, {
      x: -50,
      opacity: 0.7,
      duration: 0.3,
      ease: GSAP_CONFIG.ease.smooth,
      onComplete: () => {
        setCurrentInsightIndex(newIndex);
        // Animate in new cards
        gsap.fromTo(insightCardsRef.current,
          { x: 50, opacity: 0.7 },
          { x: 0, opacity: 1, duration: 0.4, ease: GSAP_CONFIG.ease.smooth, stagger: 0.05 }
        );
      }
    });
  };

  const prevInsight = () => {
    const newIndex = (currentInsightIndex - 1 + insights.length) % insights.length;
    
    // Animate out current cards
    gsap.to(insightCardsRef.current, {
      x: 50,
      opacity: 0.7,
      duration: 0.3,
      ease: GSAP_CONFIG.ease.smooth,
      onComplete: () => {
        setCurrentInsightIndex(newIndex);
        // Animate in new cards
        gsap.fromTo(insightCardsRef.current,
          { x: -50, opacity: 0.7 },
          { x: 0, opacity: 1, duration: 0.4, ease: GSAP_CONFIG.ease.smooth, stagger: 0.05 }
        );
      }
    });
  };

  const visibleInsights = [
    insights[currentInsightIndex],
    insights[(currentInsightIndex + 1) % insights.length],
    insights[(currentInsightIndex + 2) % insights.length],
    insights[(currentInsightIndex + 3) % insights.length]
  ];

  return (
    <section ref={containerRef} className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Insights Section */}
        <div ref={insightsSectionRef} className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p ref={subtitleRef} className="text-[#FF8C00] text-sm font-medium mb-2">Insights</p>
              <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Cyber Intelligence Insights
              </h2>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevInsight}
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={nextInsight}
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleInsights.map((insight, index) => (
              <div
                key={`${currentInsightIndex}-${index}`}
                ref={el => { insightCardsRef.current[index] = el; }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group border border-gray-200 dark:border-gray-700 hover:border-[#FF8C00]/50"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#FF8C00] to-[#FFB300] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/80 to-[#FFB300]/80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                           <Image
      src={Jethat}
    //   alt="Picture of the author"
     
    />
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      {/* <Shield className="w-8 h-8 text-white" /> */}
               
                    </div>
                  </div>
                  {/* Animated particles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                  <div className="absolute top-8 right-6 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white ${insight.categoryColor}`}>
                      {insight.category}
                    </span>
                    {insight.badge && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-[#FF8C00]/20 text-[#FF8C00] border border-[#FF8C00]/30">
                        {insight.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {insight.date}
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#FF8C00] transition-colors line-clamp-2">
                    {insight.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Section */}
        <div ref={careerSectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-[#FF8C00] text-sm font-medium">Career Opportunity</p>

              <h2 ref={careerTitleRef} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Join The Future Of{" "}
                <br />
                <span className="bg-gradient-to-r from-[#FF8C00] to-[#FFB300] bg-clip-text text-transparent">
                  Cyber Defense
                </span>
              </h2>

              <div ref={careerDescRef} className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>At Segura, we don't just protect systems — we protect trust.</p>
                <p>Our mission is to secure the digital backbone of the world's leading enterprises through intelligence, innovation, and teamwork.</p>
              </div>

              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    ref={el => { coreValueRefs.current[index] = el; }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#FF8C00] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                ref={buttonRef}
                size="lg" 
                className="bg-gradient-to-r from-[#FF8C00] to-[#FFB300] hover:from-[#FF8C00]/90 hover:to-[#FFB300]/90 text-white group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Open Roles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div ref={imageRef} className="relative">
            <div className="relative h-96 lg:h-[70vh] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700  overflow-hidden shadow-2xl">
              {/* Animated background */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/10 to-[#FFB300]/10" /> */}

              <div className="" >
                {/* <img src={Jethat} alt="" srcset="" /> */}
                <Image
      src={Jethat}
    //   alt="Picture of the author"
     
    />
          
              </div>

              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-[#FF8C00]/30 rounded-full animate-pulse" />
              <div className="absolute top-16 right-12 w-3 h-3 bg-[#FFB300]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-20 left-12 w-2 h-2 bg-[#FF8C00]/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#FF8C00]/20 to-[#FFB300]/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <User className="w-12 h-12 text-[#FF8C00]" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Professional Image Placeholder</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunityAd;