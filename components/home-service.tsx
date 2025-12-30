"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Cloud, Smartphone, ShieldAlert, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Crafting Digital Excellence",
    description: "Transform your digital presence with cutting-edge web development. We create responsive, scalable, and user-centric web applications that drive business growth and deliver exceptional user experiences.",
    features: [
      "Full-stack Development",
      "Responsive Design", 
      "Progressive Web Apps",
      "API Integration"
    ],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    badge: "Development"
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    subtitle: "Scalable Infrastructure Solutions",
    description: "Harness the power of cloud computing with our comprehensive cloud services. We help you migrate, optimize, and manage your infrastructure for maximum efficiency and cost-effectiveness.",
    features: [
      "Cloud Migration",
      "Infrastructure Management",
      "Auto-scaling Solutions",
      "Cost Optimization"
    ],
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    badge: "Cloud"
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    subtitle: "Mobile-First Innovation",
    description: "Create powerful mobile experiences that engage users and drive conversions. Our expert team delivers native and cross-platform applications with stunning UI/UX design.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Store Optimization"
    ],
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    badge: "Mobile"
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    subtitle: "Advanced Threat Protection",
    description: "Safeguard your business with enterprise-grade cybersecurity solutions. We provide comprehensive protection against evolving threats with advanced detection and prevention systems.",
    features: [
      "Threat Detection & Prevention",
      "Security Audits",
      "Penetration Testing",
      "Compliance Management"
    ],
    icon: ShieldAlert,
    color: "from-red-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    badge: "Security"
  }
];

const HomeServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      });
      gsap.set(featuresRef.current?.children || [], { opacity: 0, y: 30 });

      // Parallax for image
      gsap.fromTo(imageRef.current,
        { scale: 1, x: "5%" },
        {
          scale: 1.05,
          x: "-5%",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );

      // Content animation timeline
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      contentTl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
              .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
              .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
              .to(featuresRef.current?.children || [], { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }, "-=0.3")
              .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");

      // Cards animation
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Auto-rotate services
      const interval = setInterval(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
      }, 5000);

      return () => clearInterval(interval);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate content change when service changes
  useEffect(() => {
    if (titleRef.current && subtitleRef.current && descriptionRef.current) {
      gsap.fromTo([titleRef.current, subtitleRef.current, descriptionRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [currentService]);

  const currentServiceData = services[currentService];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,140,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,140,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-2">
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center px-4 py-2 bg-[#FF8C00]/20 backdrop-blur-sm rounded-full border border-[#FF8C00]/30 mb-6">
              <currentServiceData.icon className="w-4 h-4 mr-2 text-[#FF8C00]" />
              <span className="text-sm font-medium text-[#FF8C00]">{currentServiceData.badge}</span>
            </div>

            {/* Title */}
            <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {currentServiceData.title}
            </h2>

            {/* Subtitle */}
            <h3 ref={subtitleRef} className="text-xl md:text-2xl font-semibold mb-6">
              <span className={`bg-gradient-to-r ${currentServiceData.color} bg-clip-text text-transparent`}>
                {currentServiceData.subtitle}
              </span>
            </h3>

            {/* Description */}
            <p ref={descriptionRef} className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              {currentServiceData.description}
            </p>

            {/* Features */}
            <div ref={featuresRef} className="space-y-4 mb-8">
              {currentServiceData.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-r ${currentServiceData.color} rounded-full flex items-center justify-center mt-1`}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button ref={ctaRef} className={`px-8 py-4 bg-gradient-to-r ${currentServiceData.color} hover:shadow-xl rounded-full font-semibold text-white shadow-lg transition-all duration-300 group`}>
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Service Navigation Dots */}
            <div className="flex space-x-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentService 
                      ? `bg-gradient-to-r ${currentServiceData.color} scale-125` 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 bg-white lg:order-1 relative h-96 lg:h-[500px]">
            <div ref={imageRef} className="relative w-[60vh]  mr-10 h-[50vh]  overflow-hidden shadow-2xl">
              <Image
                src={currentServiceData.image}
                alt={currentServiceData.title}
                fill
                className="object-cover transition-all duration-1000"
                priority
              />
              {/* <div className={`absolute inset-0 bg-gradient-to-br ${currentServiceData.color} opacity-20`} /> */}
            </div>

            {/* Floating Cards */}
            <div ref={cardsRef} className="absolute inset-0 p-6 space-y-4 pointer-events-none">
              {/* Card 1 - Service Stats */}
              <div className="absolute top-10 right-10 w-64 h-32 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-4 shadow-xl opacity-0 scale-80">
                <div className="flex items-center justify-between mb-3">
                  <currentServiceData.icon className="w-5 h-5 text-white" />
                  <div className="text-xs bg-green-500/20 px-2 py-1 rounded-full text-white">Active</div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/30 rounded-full w-4/5"></div>
                  <div className="h-3 bg-white/20 rounded-full w-3/5"></div>
                </div>
                <div className="text-xs text-white/80 mt-2">Projects Completed: 150+</div>
              </div>

              {/* Card 2 - Performance Metrics */}
              <div className="absolute bottom-10 left-10 w-56 h-24 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 shadow-lg opacity-0 scale-80">
                <div className="flex items-center mb-2">
                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium text-white">Performance</span>
                </div>
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Success Rate</span>
                  <span className="font-bold text-green-400">99.8%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1 mt-1">
                  <div className={`bg-gradient-to-r ${currentServiceData.color} h-1 rounded-full w-[99%]`}></div>
                </div>
              </div>

              {/* Card 3 - Client Satisfaction */}
              <div className="absolute top-1/2 left-4 w-48 h-20 bg-white/8 backdrop-blur-xl rounded-xl border border-white/15 p-3 shadow-lg opacity-0 scale-80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/70">Client Satisfaction</div>
                    <div className="text-lg font-bold text-white">4.9/5</div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;