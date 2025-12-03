"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, Hospital, Landmark, Building, ShoppingBag, Factory, Briefcase, Globe } from "lucide-react";
import Image from "next/image";

export function IndustriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const industries = [
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description: "Virtual classrooms and multilingual content for remote and rural education providers, optimized for low connectivity.",
      features: ["Virtual Classrooms", "Multilingual Content", "Low Connectivity Support", "Interactive Learning"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
      color: "bg-blue-500",
    },
    {
      icon: Hospital,
      title: "Healthcare & Telemedicine",
      description: "Privacy-focused solutions for sensitive medical data with HIPAA compliance and secure patient management systems.",
      features: ["HIPAA Compliance", "Patient Data Security", "Telemedicine Platforms", "Medical Records Management"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      color: "bg-red-500",
    },
    {
      icon: Landmark,
      title: "Banking & Finance",
      description: "Secure financial systems with advanced fraud detection, regulatory compliance, and real-time transaction monitoring.",
      features: ["Fraud Detection", "Regulatory Compliance", "Secure Transactions", "Risk Management"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      color: "bg-green-500",
    },
    {
      icon: Building,
      title: "Government & Public Sector",
      description: "Secure document digitization, identity management, and compliance solutions for public services.",
      features: ["Document Digitization", "Identity Management", "Compliance Solutions", "Public Service Portals"],
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
      color: "bg-purple-500",
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-Commerce",
      description: "Scalable e-commerce platforms with AI-powered recommendations, inventory management, and secure payment gateways.",
      features: ["AI Recommendations", "Inventory Management", "Secure Payments", "Customer Analytics"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      color: "bg-orange-500",
    },
    {
      icon: Factory,
      title: "Manufacturing & Industry",
      description: "IoT-enabled smart manufacturing solutions with predictive maintenance and supply chain optimization.",
      features: ["IoT Integration", "Predictive Maintenance", "Supply Chain Optimization", "Quality Control"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      color: "bg-gray-500",
    },
    {
      icon: Briefcase,
      title: "Enterprises & Startups",
      description: "Scalable, secure web, mobile, and cloud systems with continuous threat monitoring and DevOps automation.",
      features: ["Cloud Infrastructure", "Threat Monitoring", "DevOps Automation", "Scalable Architecture"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      color: "bg-indigo-500",
    },
    {
      icon: Globe,
      title: "Media & Entertainment",
      description: "Content delivery networks, streaming platforms, and digital rights management for media companies.",
      features: ["Content Delivery", "Streaming Solutions", "DRM Protection", "Analytics Dashboard"],
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80",
      color: "bg-pink-500",
    },
  ];

  useEffect(() => {
    const numCards = industries.length;
    const cardGap = 20;
    let ticking = false;

    const updateCards = () => {
      if (!containerRef.current) return;

      const start = containerRef.current.offsetTop;
      const end = start + containerRef.current.offsetHeight - window.innerHeight;
      let progress = 0;
      if (end > start) {
        progress = Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)));
      }

      industries.forEach((_, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const cardStart = index / numCards;
        const cardEnd = (index + 0.7) / numCards;
        const stackedPosition = index * cardGap;
        const isFirst = index === 0;
        const isEven = index % 2 === 0;

        // Smooth easing functions
        const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
        const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

        // Y position with smooth easing
        let y;
        if (progress <= cardStart) {
          y = isFirst ? stackedPosition : 900;
        } else if (progress >= cardEnd) {
          y = stackedPosition;
        } else {
          const frac = (progress - cardStart) / (cardEnd - cardStart);
          const easedFrac = easeOutQuart(frac);
          y = isFirst ? stackedPosition : 900 + easedFrac * (stackedPosition - 900);
        }

        // X position - alternating left and right
        let x;
        if (progress <= cardStart) {
          x = isFirst ? 0 : (isEven ? -800 : 800);
        } else if (progress >= cardEnd) {
          x = 0;
        } else {
          const frac = (progress - cardStart) / (cardEnd - cardStart);
          const easedFrac = easeOutQuart(frac);
          if (isFirst) {
            x = 0;
          } else {
            x = isEven ? -800 + easedFrac * 800 : 800 - easedFrac * 800;
          }
        }

        // Scale with smooth easing
        let scale;
        if (progress <= cardStart) {
          scale = isFirst ? 1 : 0.9;
        } else if (progress >= cardEnd) {
          scale = 1;
        } else {
          const frac = (progress - cardStart) / (cardEnd - cardStart);
          const easedFrac = easeInOutQuart(frac);
          scale = isFirst ? 1 : 0.9 + easedFrac * 0.1;
        }

        // Opacity with smooth fade
        let opacity = 1;
        if (!isFirst) {
          const fadeStart = cardStart;
          const fadeEnd = cardStart + 0.12 / numCards;
          if (progress <= fadeStart) {
            opacity = 0;
          } else if (progress < fadeEnd) {
            const fadeFrac = (progress - fadeStart) / (fadeEnd - fadeStart);
            opacity = easeInOutQuart(fadeFrac);
          } else {
            opacity = 1;
          }
        }

        // Blur effect for depth
        const blur = progress < cardStart ? (isFirst ? 0 : 3) : 0;

        card.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.filter = `blur(${blur}px)`;
        card.style.zIndex = `${index + 1}`;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateCards);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateCards();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [industries.length]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Industries We <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            JetHat supports diverse sectors with tailored solutions addressing unique challenges across multiple industries.
          </p>
        </div>

        {/* Cards container */}
        <div ref={containerRef} className="relative" data-container>
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-8">
            <div className="relative h-[500px] md:h-[500px] w-full">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="card absolute top-0 left-0 right-0 mx-auto w-full h-[500px] bg-white dark:bg-gray-900/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#FF8C00]/20 dark:border-[#FF8C00]/30 will-change-transform hover:border-[#FF8C00]/40 dark:hover:border-[#FF8C00]/50 overflow-hidden"
                  data-index={index}
                  style={{ transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out, filter 0.5s ease-out' }}
                >
                  <div className="flex items-center h-full">
                    {/* Left side - Image */}
                    <div className={`flex-shrink-0 ${index % 2 === 0 ? 'order-1' : 'order-2'} w-[45%] h-full relative group`}>
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/10 via-transparent to-[#FFB300]/10 z-10 pointer-events-none" />
                        <div className="absolute inset-0 ring-2 ring-[#FF8C00]/20 group-hover:ring-[#FF8C00]/40 transition-all duration-500" />
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'order-2 pl-8 pr-10' : 'order-1 pr-8 pl-10'} flex flex-col justify-center h-full py-8`}>
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-2xl ${industry.color} shadow-[0_0_20px_rgba(255,140,0,0.4)] text-white mb-4 w-fit`}>
                        <industry.icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {industry.title}
                      </h3>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
                        {industry.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {industry.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB300]" />
                            <span className="text-gray-800 dark:text-gray-200 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className="group flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB300] text-white shadow-lg border border-[#FF8C00]/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 w-fit">
                        <span className="text-sm md:text-base font-semibold">Learn More</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer to enable scrolling */}
          <div className="h-[300vh]" />
        </div>
      </div>
    </section>
  );
}
