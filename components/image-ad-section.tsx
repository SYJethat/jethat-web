"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Brain, Zap, ArrowRight, Cog, User } from 'lucide-react';
import Image from 'next/image';
import Img from '/public/how-it-works1.jpg';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CybersecurityAdPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const learnMoreRef = useRef<HTMLButtonElement>(null);

  const howItWorksRef = useRef<HTMLDivElement>(null);
  const howItWorksImageRef = useRef<HTMLDivElement>(null);
  const howTitleRef = useRef<HTMLHeadingElement>(null);
  const howDescriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animations
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, descriptionRef.current, learnMoreRef.current], {
        opacity: 0,
        y: 50
      });

      // Parallax for hero image
      gsap.fromTo(heroImageRef.current,
        { scale: 1.1, y: "5%" },
        {
          scale: 1,
          y: "-5%",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );

      // Hero content timeline
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      heroTl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
            .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
            .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
            .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
            .to(learnMoreRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");

      // How It Works Section Animations
      gsap.set([howTitleRef.current, howDescriptionRef.current], { opacity: 0, y: 40 });
      gsap.set(featuresRef.current?.children || [], { opacity: 0, y: 30 });

      const howTl = gsap.timeline({
        scrollTrigger: {
          trigger: howItWorksRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      howTl.to(howTitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
           .to(howDescriptionRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
           .to(featuresRef.current?.children || [], { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }, "-=0.3");

      // Cards animation for How It Works
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

      // Parallax for How It Works image
      gsap.fromTo(howItWorksImageRef.current,
        { scale: 1, x: "5%" },
        {
          scale: 1.05,
          x: "-5%",
          scrollTrigger: {
            trigger: howItWorksRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );

      // Hover effects for Learn More button
      learnMoreRef.current?.addEventListener('mouseenter', () => {
        gsap.to(learnMoreRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      learnMoreRef.current?.addEventListener('mouseleave', () => {
        gsap.to(learnMoreRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: '🤖',
      title: "Predictive AI Models",
      description: "Detect anomalies and prevent zero-day exploits."
    },
    {
      icon: '⚡',
      title: "Automated Response",
      description: "Mitigates incidents within seconds.",
    },
    {
      icon: '🔄',
      title: "Continuous Adaptation",
      description: "Learns from every threat to stay ahead.",
    }
  ];

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-black dark:to-gray-800 text-white overflow-hidden">
      {/* Hero Section: Threat Prediction */}
      <section ref={heroRef} className="relative min-h-[0vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div ref={heroImageRef} className="relative w-full h-full">
            {/* <Image
              src=""
              alt="Cyber Attack Visualization"
              fill
              className="object-cover"
              priority
            /> */}

            {/* <video src="./public/jet_video_1.mp4"></video> */}
          </div>
        </div>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/70 to-purple-900/60" /> */}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroContentRef} className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30 mb-6 inline-block">
              {/* <Shield className="w-4 h-4 mr-2 text-red-400" /> */}
              {/* <span className="text-sm font-medium">Threat Prediction</span> */}
            </div>

            {/* Title */}
            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              {/* <span className="block text-5xl md:text-6xl lg:text-7xl">CYBER</span>
              <span className="block text-red-500">ATTACK</span> */}
            </h1>

            {/* Subtitle */}
            {/* <h2 ref={subtitleRef} className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              Anticipate attacks with deep-learning anomaly detection.
            </h2> */}

            {/* Description */}
            {/* <p ref={descriptionRef} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our AI engine analyzes billions of events to understand attack patterns, adapt in real-time, and deliver predictive protection.
            </p> */}

            {/* CTA */}
            {/* <button ref={learnMoreRef} className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-white shadow-lg transition-all duration-300">
              Learn More <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button> */}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 ref={howTitleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Intelligence That
                <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Learns And Protects
                </span>
              </h2>

              <p ref={howDescriptionRef} className="text-xl text-gray-300 mb-12 leading-relaxed max-w-lg">
                Segura's AI engine continuously analyzes billions of events to understand attack patterns, adapt in real-time, and deliver predictive protection across your infrastructure.
              </p>

              {/* Features */}
              <div ref={featuresRef} className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mt-1">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 bg-white p-6  lg:order-2 relative h-96 lg:h-[600px]">
              <div ref={howItWorksImageRef} className="relative w-full h-full  overflow-hidden shadow-2xl">
                <Image
                  src={Img}
                  alt="AI Intelligence Robot"
                  fill
                  className="object-cover"
                  priority
                
                />
                <div className="absolute inset-0 bg-gradient-to-br  from-blue-900/50 via-purple-900/40 to-red-900/50" />
              </div>

              {/* Floating Cards */}
              <div ref={cardsRef} className="absolute inset-0 p-6 space-y-4 pointer-events-none">
                {/* Card 1 */}
                <div className="absolute top-10 right-10 w-64 h-32 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-4 shadow-xl opacity-0 scale-80 -rotate-y-15">
                  <div className="flex items-center justify-between mb-3">
                    <Cog className="w-5 h-5 text-blue-400" />
                    <div className="text-xs bg-blue-500/20 px-2 py-1 rounded-full">Active</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/30 rounded-full w-4/5"></div>
                    <div className="h-3 bg-white/20 rounded-full w-3/5"></div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="absolute bottom-10 left-10 w-56 h-24 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 shadow-lg opacity-0 scale-80 rotate-y-15">
                  <div className="flex items-center mb-2">
                    <User className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-sm font-medium">Threat Analytics</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Blocked</span>
                    <span className="font-bold text-green-400">2,456</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1 mt-1">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-1 rounded-full w-80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityAdPage;