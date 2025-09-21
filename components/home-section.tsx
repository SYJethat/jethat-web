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
  Server,
  Network,
  Eye,
  Key,
  Bug,
  Fingerprint,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { TypingAnimation } from "./typing-animation";

export function HomeSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Handle mouse movement for interactive effects
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950"
        ref={containerRef}
      >


        















        
        {/* Continuous Vertical Scanning Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-4xl h-96 bg-black/30 border border-green-500/20 rounded-lg p-6">
            {/* Vertical Scanning Lines */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Primary scanning line */}
              <div className="absolute left-1/4 w-0.5 h-20 bg-green-400 shadow-[0_0_15px_5px_rgba(0,255,0,0.5)] animate-scan-vertical" 
                   style={{ animationDelay: '0s' }}></div>
              <div className="absolute left-1/2 w-0.5 h-20 bg-green-400 shadow-[0_0_15px_5px_rgba(0,255,0,0.5)] animate-scan-vertical" 
                   style={{ animationDelay: '1s' }}></div>
              <div className="absolute left-3/4 w-0.5 h-20 bg-green-400 shadow-[0_0_15px_5px_rgba(0,255,0,0.5)] animate-scan-vertical" 
                   style={{ animationDelay: '2s' }}></div>
              
              {/* Reverse scanning line */}
              <div className="absolute right-1/4 w-0.5 h-20 bg-cyan-400 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] animate-scan-vertical-reverse" 
                   style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute right-1/2 w-0.5 h-20 bg-cyan-400 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] animate-scan-vertical-reverse" 
                   style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute right-3/4 w-0.5 h-20 bg-cyan-400 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] animate-scan-vertical-reverse" 
                   style={{ animationDelay: '2.5s' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-green-500/30" style={{top: `${i * 5}%`}}></div>
              ))}
              {[...Array(20)].map((_, i) => (
                <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-green-500/30" style={{left: `${i * 5}%`}}></div>
              ))}
            </div>

            {/* Floating Security Icons */}
            <div className="absolute top-8 left-8 animate-float" style={{animationDelay: '0.5s'}}>
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute top-16 right-12 animate-float" style={{animationDelay: '1s'}}>
              <Lock className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute bottom-20 left-16 animate-float" style={{animationDelay: '1.5s'}}>
              <Zap className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute bottom-8 right-8 animate-float" style={{animationDelay: '2s'}}>
              <Brain className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute top-1/2 left-1/4 animate-float" style={{animationDelay: '2.5s'}}>
              <Server className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float" style={{animationDelay: '3s'}}>
              <Network className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute bottom-1/3 left-1/3 animate-float" style={{animationDelay: '3.5s'}}>
              <Eye className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute top-1/4 right-1/3 animate-float" style={{animationDelay: '4s'}}>
              <Key className="w-8 h-8 text-green-400" />
            </div>

            {/* Central Security Sphere */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-4 border-green-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-6 border-4 border-green-500/50 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute inset-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-4 left-4 bg-black/80 border border-green-500/30 rounded-lg p-2 font-mono text-xs text-green-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                SYSTEM SECURE
              </div>
            </div>

            {/* Threat Level */}
            <div className="absolute bottom-4 right-4 bg-black/80 border border-green-500/30 rounded-lg p-2 font-mono text-xs text-green-400">
              THREAT LEVEL: <span className="text-green-500">LOW</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  Empowering Tomorrow,{" "}
                  <span className="text-green-400">Securing Today</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Innovate with Confidence in Cybersecurity and Software
                  Excellence. At JetHat, we fuse cybersecurity, artificial
                  intelligence, and cloud solutions to protect your growth,
                  empowering you to innovate boldly without compromise.
                </p>
                <p className="text-lg text-green-400 font-semibold">
                  <TypingAnimation text="अनुक्षणं रक्षामहे (We Protect Every Moment)" />
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white border-green-600 animate-pulse-glow"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Free Consulting
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white bg-transparent"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right side placeholder for balance */}
            <div className="relative hidden md:block">
              <div className="w-full h-96 flex items-center justify-center opacity-50">
                <div className="text-center text-green-400">
                  <Server className="w-16 h-16 mx-auto mb-4" />
                  <p>Advanced Security Matrix</p>
                  <p className="text-sm mt-2">Real-time Threat Detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
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
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-slow-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
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
        `}</style>
      </section>
    </div>
  );
}
