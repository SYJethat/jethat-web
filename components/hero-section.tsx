"use client";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Zap,
  Globe,
  Mail,
  ShieldAlert,
  Search,
  BookOpen,
  Smartphone,
  Cloud,
  Code,
  ChevronLeft,
  ChevronRight,
  Brain,
  Cpu,
  Terminal,
  Key,
  Eye,
  Network,
  Server,
} from "lucide-react";
import { IndustriesSection } from "./industries-section";
import { ParticleBackground } from "./particle-background";
import { TypingAnimation } from "./typing-animation";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Tooltip } from "./tooltip";
import { Modal } from "./modal";
import { useState, useRef, useEffect } from "react";
import WhoWeAreSection from "./WhoWeAreSection";
import { TestimonialsSection } from "./testimonials-section";
import { AnimatedStats } from "./animated-stats";
import BGImage from "../public/cybersecurity-concept-collage-design.jpg";
import Image from "next/image";
import HomeProductsSection from "./home-products";
import HomeServicesSection from "./home-service";
import AdvancedProtection from "./protection-section";
import RegistrationSection from "./registration-section";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HomeSection } from "./home-section";
// import ServicesSectionFixed from "./home-service-fixed";
import Testimonials from "./home-testimonial";
import Client from "./clients-marquee";
import { VideoBackground } from "./video-background";

export function HeroSection() {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // State for cursor position and scanning effects
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const containerRef = useRef(null);
  // const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // State for stacked sliding texts
  const [stackedTexts, setStackedTexts] = useState<{ id: number; text: string; delay: number }[]>([]);
  const [marqueeTexts, setMarqueeTexts] = useState<string[]>([]);

  // Split the phrase into words for stacking
  const phraseWords = ["अनुक्षणं", "रक्षामहे"];

  // Initialize stacked texts (one by one slide down)
  useEffect(() => {
    const newStackedTexts = phraseWords.map((word, index) => ({
      id: index,
      text: word,
      delay: index * 1, // 1s delay between each
    }));
    setStackedTexts(newStackedTexts);
  }, []);

  // For marquee: Duplicate the full phrase for seamless loop
  useEffect(() => {
    const fullPhrase = "अनुक्षणं रक्षामहे ";
    const marqueeArray = Array(10).fill(fullPhrase).flat(); // Repeat for smooth marquee
    setMarqueeTexts(marqueeArray);
  }, []);

  // Handle mouse movement for scanning effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    const handleMouseEnter = () => {
      setIsScanning(true);
    };
    const handleMouseLeave = () => {
      setIsScanning(false);
      setScanProgress(0);
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  // Simulate scanning progress
  useEffect(() => {
    let interval;
    if (isScanning) {
      interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isScanning]);
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        ref={containerRef}
      >
        {/* Video Background */}
        <VideoBackground />

        <div className="absolute   inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full  inset-0 bg-opacity-30 filter backdrop-blur-xs max-w-[90%]  h-118 mt-4 border border-primary/20 rounded-lg">
            {/* Vertical Scanning Lines */}
            <div className="absolute inset-0 hidden md:block overflow-hidden">
              {/* Primary scanning line */}
              <div className="absolute left-1/4 w-0.5 h-20 bg-primary shadow-[0_0_15px_5px_rgba(255, 165, 0, 1.0)] animate-scan-vertical"
                style={{ animationDelay: '0s' }}></div>
              <div className="absolute left-1/2 w-0.5 h-20 bg-primary shadow-[0_0_15px_5px_rgba(255, 165, 0, 1.0)] animate-scan-vertical"
                style={{ animationDelay: '1s' }}></div>
              <div className="absolute left-3/4 w-0.5 h-20 bg-primary shadow-[0_0_15px_5px_rgba(255, 165, 0, 1.0)] animate-scan-vertical"
                style={{ animationDelay: '2s' }}></div>
              {/* Reverse scanning line */}
              <div className="absolute right-1/4 w-0.5 h-20 bg-accent shadow-[0_0_15px_5px_rgba(255, 0, 0, 0.5)] animate-scan-vertical-reverse"
                style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute right-1/2 w-0.5 h-20 bg-accent shadow-[0_0_15px_5px_rgba(255, 0, 0, 0.5)] animate-scan-vertical-reverse"
                style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute right-3/4 w-0.5 h-20 bg-accent shadow-[0_0_15px_5px_rgba(255, 0, 0, 0.55)] animate-scan-vertical-reverse"
                style={{ animationDelay: '2.5s' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-primary/30" style={{ top: `${i * 5}%` }}></div>
              ))}
              {[...Array(20)].map((_, i) => (
                <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-primary/30" style={{ left: `${i * 5}%` }}></div>
              ))}
            </div>

            {/* Central Security Sphere */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-6 border-4 border-primary/50 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute inset-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-4 right-42 hidden md:block border border-primary/30 rounded-lg p-2 font-mono text-xs text-primary">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                SYSTEM SECURE
              </div>
            </div>
            {/* Threat Level */}
            <div className="absolute bottom-4 right-4 hidden md:block border border-primary/30 rounded-lg p-2 font-mono text-xs text-primary">
              THREAT LEVEL: <span className="text-primary">LOW</span>
            </div>
          </div>
        </div>
        {/* Animated Scanning Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Horizontal Scan Line */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_15px_5px_rgba(255, 165, 0, 1.0)] opacity-70"
            style={{
              top: `${cursorPosition.y}px`,
              transform: 'translateY(-50%)',
              display: isScanning ? 'block' : 'none'
            }}
          ></div>
          {/* Vertical Scan Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_15px_5px_rgba(255, 165, 0, 1.0)] opacity-70"
            style={{
              left: `${cursorPosition.x}px`,
              transform: 'translateX(-50%)',
              display: isScanning ? 'block' : 'none'
            }}
          ></div>
          {/* Circular Radar Pulse */}
          <div
            className="absolute rounded-full border-2 border-primary opacity-0"
            style={{
              width: '100px',
              height: '100px',
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: 'translate(-50%, -50%)',
              animation: isScanning ? 'radar-pulse 2s infinite' : 'none'
            }}
          ></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-primary/30" style={{ top: `${i * 5}%` }}></div>
            ))}
            {[...Array(20)].map((_, i) => (
              <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-primary/30" style={{ left: `${i * 5}%` }}></div>
            ))}
          </div>
        </div>

        {/* New: Stacked Slide Down Animation (One by One from Top to Bottom) */}
        {/* <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
          <div className="relative h-full w-full flex flex-col justify-center items-center">
            {stackedTexts.map((stackedText) => (
              <div
                key={stackedText.id}
                className="text-4xl md:text-6xl font-bold font-mono tracking-wide text-primary/60 animate-stack-slide-down"
                style={{
                  animationDelay: `${stackedText.delay}s`,
                  animationDuration: '2s',
                }}
              >
                {stackedText.text}
              </div>
            ))}
          </div>
        </div> */}

        {/* New: Marquee Slide Right to Left */}
        {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-black/20 flex items-center overflow-hidden z-5">
          <div className="flex whitespace-nowrap animate-marquee-right-to-left">
            {marqueeTexts.map((text, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-bold font-mono tracking-wide text-primary/50 mx-8"
              >
                {text}
              </span>
            ))}
          </div>
        </div> */}

        {/* Scanning Status Indicator */}
        <div className="absolute bottom-4 right-4 bg-card/80 border border-primary/30  rounded-lg p-3 font-mono text-xs text-primary z-10">
          <div className="flex items-center mb-2">
            <div className={`w-2 h-2 rounded-full mr-2 ${isScanning ? 'bg-primary animate-pulse' : 'bg-muted-foreground'}`}></div>
            {isScanning ? 'SCANNING...' : 'SYSTEM IDLE'}
          </div>
          {isScanning && (
            <div className="w-full bg-muted rounded-full h-1 mt-1">
              <div
                className="bg-primary h-1 rounded-full transition-all duration-300"
                style={{ width: `${scanProgress}%` }}
              ></div>
            </div>
          )}
        </div>
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1  md:grid-cols-2  gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 px-4 ml-[10%] text-center md:text-left md:space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl text-center font-extrabold md:text-5xl md:text-left text-foreground">
                  Empowering Tomorrow,{" "} <span className="text-primary text-7xl">Securing Today</span>

                </h1>
                <p className="text-xl text-text max-w-2xl">
                  Innovate boldly with Atche Cyber—where cybersecurity,
                  AI, and cloud solutions protect your growth and fuel software excellence.
                </p>
                <p className="text-lg text-primary font-semibold">
                  <TypingAnimation text="   We Protect Every Moment" />
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary animate-pulse-glow"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Free Consulting
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Learn More
                </Button>
              </div>
            </div>
            {/* Visual Elements */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Central Security Sphere */}
                <div className="relative w-64 h-64">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-spin-slow"></div>
                  {/* Middle Ring */}
                  <div className="absolute inset-8 border-4 border-primary/50 rounded-full animate-spin-slow-reverse"></div>
                  {/* Inner Core */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
                    <div className="relative h-full w-full flex flex-col justify-center items-center">
                      {stackedTexts.map((stackedText) => (
                        <div
                          key={stackedText.id}
                          className="text-2xl md:text-6xl font-bold font-mono tracking-wide text-primary/60 animate-stack-slide-down"
                          style={{
                            animationDelay: `${stackedText.delay}s`,
                            animationDuration: '2s',
                          }}
                        >
                          {stackedText.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary" />
                      {/* <h1>अनुक्षणं रक्षामहे </h1> */}
                    </div>
                  </div>
                  {/* Orbiting Elements */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Lock className="w-4 h-4 text-primary" />  अनुक्षणं
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-orbit-reverse">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />  रक्षामहे
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-orbit-delayed">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-primary" /> अनुक्षणं
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-delayed-reverse">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-primary" />  रक्षामहे
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/4 transform -translate-x-1/4 -translate-y-1/4 animate-orbit">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Lock className="w-4 h-4 text-primary" />  अनुक्षणं
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/3 transform -translate-x-1/3 translate-y-1/3 animate-orbit-reverse">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />  रक्षामहे
                    </div>
                  </div>
                  <div className="absolute top-1/7 right-1/8 transform translate-x-1/1 -translate-y-1/1 animate-orbit-delayed">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-primary" /> अनुक्षणं
                    </div>
                  </div>
                  <div className="absolute top-1/8 left-5 transform -translate-x-1/5 -translate-y-1/5 animate-orbit-delayed-reverse">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-primary" />  रक्षामहे
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes radar-pulse {
            0% {
              transform: translate(-50%, -50%) scale(0.5);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-slow-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          @keyframes orbit {
            from { transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg) translateX(80px) rotate(-360deg); }
          }
          @keyframes orbit-reverse {
            from { transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(-360deg) translateX(80px) rotate(360deg); }
          }
          @keyframes orbit-delayed {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg); }
            50% { transform: translate(-50%, -50%) rotate(180deg) translateX(80px) rotate(-180deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg) translateX(80px) rotate(-360deg); }
          }
          @keyframes orbit-delayed-reverse {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg); }
            50% { transform: translate(-50%, -50%) rotate(-180deg) translateX(80px) rotate(180deg); }
            100% { transform: translate(-50%, -50%) rotate(-360deg) translateX(80px) rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes scan-vertical {
            0% {
              top: -10%;
            }
            100% {
              top: 110%;
            }
          }
          @keyframes scan-vertical-reverse {
            0% {
              bottom: -10%;
            }
            100% {
              bottom: 110%;
            }
          }
          .animate-scan-vertical {
            animation: scan-vertical 3s linear infinite;
          }
          .animate-scan-vertical-reverse {
            animation: scan-vertical-reverse 3s linear infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 12s linear infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-orbit {
            animation: orbit 8s linear infinite;
          }
          .animate-orbit-reverse {
            animation: orbit-reverse 10s linear infinite;
          }
          .animate-orbit-delayed {
            animation: orbit-delayed 12s linear infinite;
          }
          .animate-orbit-delayed-reverse {
            animation: orbit-delayed-reverse 14s linear infinite;
          }
          /* New: Stack Slide Down Animation */
          @keyframes stack-slide-down {
            0% {
              opacity: 0;
              transform: translateY(-100px) scale(0.8);
            }
            100% {
              opacity: 0.6;
              transform: translateY(0) scale(1);
            }
          }
          .animate-stack-slide-down {
            animation: stack-slide-down ease-out forwards;
          }
          /* New: Marquee Right to Left */
          @keyframes marquee-right-to-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee-right-to-left {
            animation: marquee-right-to-left 20s linear infinite;
          }
        `}</style>
      </section>
      <IndustriesSection />

      {/* <HomeSection/> */}
      {/* <HomeServicesSection /> */}
      <HomeProductsSection />
      {/* <IndustriesSection /> */}

      {/* Who We Are Section */}
      <WhoWeAreSection />
      {/* Enhanced Advanced Protection Section with Animated Threads */}
      <AdvancedProtection />

      {/* Registration Section */}


      {/* <section id="clients" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide cybersecurity solutions to organizations across various
            industries.
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee [--marquee-speed:20s] hover:pause-marquee">
              {[
                { name: "Tech Innovations Inc.", logo: "/image-1.png" },
                { name: "Global Banking Corp", logo: "/image-2.png" },
                { name: "Healthcare Solutions", logo: "/image-3.svg" },
                { name: "Retail Enterprises", logo: "/logo2.png" },
                { name: "Manufacturing Group", logo: "/placeholder-logo.png" },
                { name: "Education Systems", logo: "/placeholder-logo.svg" },
                { name: "Atche Cyber", logo: "/atche-cyber-logo.png" }, // Added Atche Cyber as a client example
                // Duplicate for seamless loop
                { name: "Tech Innovations Inc.", logo: "/image-1.png" },
                { name: "Global Banking Corp", logo: "/image-2.png" },
                { name: "Healthcare Solutions", logo: "/image-3.svg" },
                { name: "Retail Enterprises", logo: "/logo2.png" },
                { name: "Manufacturing Group", logo: "/placeholder-logo.png" },
                { name: "Education Systems", logo: "/placeholder-logo.svg" },
                { name: "Atche Cyber", logo: "/atche-cyber-logo.png" }, // Duplicate for loop
              ].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-card p-4 rounded-lg flex items-center justify-center border border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 mx-2"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .animate-marquee {
            display: flex;
            animation: marquee var(--marquee-speed) linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .pause-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section> */}

      <Client />

      <RegistrationSection />

      {/* Stay Updated Section */}
      {/* <section id="stay-updated" className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest cybersecurity insights,
            trends, and updates.
          </p>
          <div className="flex justify-center max-w-md mx-auto">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-l-lg border border-primary/20 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-secondary h-14 text-primary-foreground rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </section> */}
      {/* testimonial */}
      <section>


        <Testimonials />
      </section>
      {/* Call to Action Section */}
      <section id="cta" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive cybersecurity solutions today.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-secondary"
            >
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background hover:bg-background text-black hover:text-primary"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
      >
        {selectedService && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {selectedService.icon}
              <h4 className="text-lg font-semibold">{selectedService.title}</h4>
            </div>
            <p className="text-muted-foreground">
              {selectedService.description}
            </p>
            <div>
              <h5 className="font-semibold mb-2">Key Features:</h5>
              <ul className="list-disc pl-5 space-y-1">
                {selectedService.points.map((point: string, i: number) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button
                variant="outline"
                onClick={() => setSelectedService(null)}
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setSelectedService(null);
                  setIsContactModalOpen(true);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </Modal>
      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Us"
      >
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Get in touch with our experts for a free consultation on your
            cybersecurity needs.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsContactModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}