"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Lightbulb, Shield, Users, Award, Handshake, TrendingUp, Target } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const sections = [
  {
    id: "vision",
    title: "Vision",
    description: "Jethat Cybersecurity Private Limited envisions a digitally secure world, where businesses thrive without compromise on data integrity and user privacy.",
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "expertise",
    title: "Expertise",
    description: "We specialize in cybersecurity and software development, boasting a team of seasoned professionals with deep knowledge in both domains.",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "At the core of our ethos is innovation. We consistently leverage cutting-edge technologies to stay ahead of evolving cyber threats and deliver state-of-the-art software solutions.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "security",
    title: "Comprehensive Security",
    description: "Our cybersecurity services encompass advanced threat detection, risk assessment, and proactive measures to fortify organizations against cyber threats.",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "client-centric",
    title: "Client-Centric Approach",
    description: "Our focus is on understanding and addressing the specific challenges faced by our clients, ensuring tailored solutions that meet their objectives and exceed expectations.",
    icon: Users,
    color: "from-red-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "quality",
    title: "Commitment to Quality",
    description: "We adhere to the highest standards of quality in both cybersecurity practices and software development, ensuring reliability, scalability, and resilience in every solution we deliver.",
    icon: Award,
    color: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "partnerships",
    title: "Collaborative Partnerships",
    description: "Building lasting partnerships with our clients is integral to our mission. We work closely with organizations, providing ongoing support and adapting our services to meet evolving needs.",
    icon: Handshake,
    color: "from-teal-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "improvement",
    title: "Continuous Improvement",
    description: "In fields of cybersecurity and software development, we remain agile and responsive. We continually refine our approaches, adopting emerging technologies to keep our clients at the forefront of digital innovation and security.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
];

const WhoWeAreSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const activeSectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, descriptionRef.current, activeSectionRef.current, progressRef.current], {
        opacity: 0,
        y: 50
      });

      // Animate left panel on scroll
      const leftTl = gsap.timeline({
        scrollTrigger: {
          trigger: leftPanelRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      leftTl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .to(activeSectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.3")
      .to(progressRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.2");

      // Animate cards on scroll
      sectionRefs.current.forEach((card, index) => {
        if (card) {
          gsap.set(card, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotationX: 15
          });

          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationX: 0,
                duration: 1.2,
                ease: "power3.out"
              });

              // Parallax image effect
              const image = card.querySelector('.parallax-image');
              if (image) {
                gsap.fromTo(image, 
                  { y: "20%" },
                  {
                    y: "-20%",
                    scrollTrigger: {
                      trigger: card,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 1
                    }
                  }
                );
              }

              // Scale effect on scroll
              gsap.fromTo(card,
                { scale: 1 },
                {
                  scale: 1.05,
                  scrollTrigger: {
                    trigger: card,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                  }
                }
              );
            },
            onLeave: () => {
              gsap.to(card, {
                opacity: 0.7,
                scale: 0.95,
                duration: 0.5
              });
            },
            onEnterBack: () => {
              gsap.to(card, {
                opacity: 1,
                scale: 1,
                duration: 0.5
              });
            }
          });

          // Floating elements animation
          const floatingElements = card.querySelectorAll('.floating-element');
          floatingElements.forEach((element, i) => {
            gsap.to(element, {
              y: -10,
              duration: 2 + i * 0.5,
              ease: "power2.inOut",
              yoyo: true,
              repeat: -1
            });
          });
        }
      });

      // Smooth scroll for navigation dots
      const dots = document.querySelectorAll('.nav-dot');
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          const target = sectionRefs.current[index];
          if (target) {
            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: target,
                offsetY: window.innerHeight / 2
              },
              ease: "power3.inOut"
            });
          }
        });
      });

    }, [leftPanelRef, rightPanelRef]);

    return () => ctx.revert();
  }, []);

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      let maxVisibleArea = 0;
      let mostVisibleIndex = 0;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);
        
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          mostVisibleIndex = index;
        }
      });

      if (mostVisibleIndex !== activeSection) {
        setActiveSection(mostVisibleIndex);
        
        // Animate active section change
        if (activeSectionRef.current) {
          gsap.fromTo(activeSectionRef.current,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <section id="who-we-are" className="bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:flex lg:gap-12">
          {/* Fixed Left Side */}
          <div ref={leftPanelRef} className="lg:w-2/5 lg:sticky lg:top-32 lg:self-start py-16">
            <div className="max-w-lg">
              {/* Main Title */}
              <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Who <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">We Are</span>
              </h2>
              
              {/* Company Description */}
              <p ref={descriptionRef} className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Jethat Cybersecurity Private Limited is a cutting-edge firm specializing in cybersecurity and software development. With a relentless commitment to innovation, we safeguard digital landscapes through advanced threat detection and robust software solutions.
              </p>

              {/* Active Section Display */}
              <div
                ref={activeSectionRef}
                className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-[#FF8C00]/20"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${sections[activeSection].color} mr-4`}>
                    {React.createElement(sections[activeSection].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {sections[activeSection].title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {sections[activeSection].description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div ref={progressRef} className="mt-8 flex space-x-2">
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === activeSection 
                        ? 'w-8 bg-gradient-to-r from-[#FF8C00] to-[#FFB300]' 
                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Right Side */}
          <div ref={rightPanelRef} className="lg:w-3/5 py-4">
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  ref={(el) => { sectionRefs.current[index] = el; }}
                  className="flex items-center justify-center min-h-[90vh]"
                >
                  <div className={`relative w-full max-w-4xl h-[500px] rounded-sm overflow-hidden shadow-2xl `}>
                    {/* Background Image with Parallax */}
                    <div className="absolute inset-0 flex justify-center items-center h-[30vh] w-[90vh] overflow-hidden">
                      <div className="parallax-image ml-5 mt-52 relative w-full h-[120%] -top-[10%]">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    {/* <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-80`} /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-12 text-white">
                     
                      
                      <h3 className="text-4xl font-bold mb-4 leading-tight">
                        {section.title}
                      </h3>
                      
                      <p className="text-white/90 leading-relaxed text-lg max-w-lg mb-6">
                        {section.description}
                      </p>

                      {/* Learn More Button */}
                      
                       {/* Icon */}
                      {/* <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl mb-6 w-fit hover-scale">
                        {React.createElement(section.icon, { className: "w-16 h-16" })}
                      </div> */}
                      
                      <button className="group flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 w-fit hover-magnetic">
                        <span className="text-white font-medium">Learn More</span>
                        <svg 
                          className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>

                    {/* Section Number */}
                    <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white font-bold text-lg">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Floating Elements */}
                    <div className="floating-element absolute top-1/4 right-8 w-3 h-3 bg-white/40 rounded-full" />
                    <div className="floating-element absolute bottom-1/3 right-16 w-2 h-2 bg-white/30 rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator - Fixed to viewport */}
            {/* <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
              {sections.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSection 
                      ? 'bg-[#FF8C00] scale-125' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile View - Stack Layout */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Who <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">We Are</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Jethat Cybersecurity Private Limited is a cutting-edge firm specializing in cybersecurity and software development.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl mobile-card"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4">
                      {React.createElement(section.icon, { className: "w-6 h-6" })}
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.1) rotate(5deg);
        }
        .hover-magnetic {
          transition: transform 0.3s ease;
        }
        .hover-magnetic:hover {
          transform: scale(1.05);
        }
        .mobile-card {
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 0.6s ease forwards;
        }
        .mobile-card:nth-child(1) { animation-delay: 0.1s; }
        .mobile-card:nth-child(2) { animation-delay: 0.2s; }
        .mobile-card:nth-child(3) { animation-delay: 0.3s; }
        .mobile-card:nth-child(4) { animation-delay: 0.4s; }
        .mobile-card:nth-child(5) { animation-delay: 0.5s; }
        .mobile-card:nth-child(6) { animation-delay: 0.6s; }
        .mobile-card:nth-child(7) { animation-delay: 0.7s; }
        .mobile-card:nth-child(8) { animation-delay: 0.8s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAreSection;