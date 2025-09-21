"use client"

import { Button } from "@/components/ui/button"
import { Shield, Lock, Zap, Globe, Mail, ShieldAlert, Search, BookOpen, Smartphone, Cloud, Code, ChevronLeft, ChevronRight, Brain, Cpu, Terminal } from "lucide-react"
import { IndustriesSection } from "./industries-section"
import { ParticleBackground } from "./particle-background"
import { TypingAnimation } from "./typing-animation"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Tooltip } from "./tooltip"
import { Modal } from "./modal"
import { useState } from "react"
import WhoWeAreSection from "./WhoWeAreSection"
import { TestimonialsSection } from "./testimonials-section"
import { AnimatedStats } from "./animated-stats"
import BGImage from "../public/cybersecurity-concept-collage-design.jpg"
import Image from "next/image"
import HomeServicesSection from "./home-service"
import AdvancedProtection from "./protection-section"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroSection() {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation()
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="relative">
      {/* <ParticleBackground /> */}
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" /> */}
        {/* <div className="absolute inset-0 dark:bg-[url('/cybersecurity-network-pattern.jpg')] opacity-10" /> */}
        {/* <Image src={BGImage} alt="" fill className="absolute inset-0 opacity-10 object-cover" /> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
            {/* Content */}
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Empowering Tomorrow, <span className="text-primary">Securing Today</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl leading-relaxed">
                  Innovate with Confidence in Cybersecurity and Software Excellence. At JetHat, we fuse cybersecurity,
                  artificial intelligence, and cloud solutions to protect your growth, empowering you to innovate boldly
                  without compromise.
                </p>
                <p className="text-base sm:text-lg text-primary font-semibold">
                  <TypingAnimation text="अनुक्षणं रक्षामहे (We Protect Every Moment)" />
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-secondary text-primary-foreground animate-pulse-glow w-full sm:w-auto"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Free Consulting
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              {/* <AnimatedStats /> */}
            </div>

            {/* Visual Elements - Hidden on Mobile */}
            <div className="relative hidden md:block order-1 md:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-screen flex items-center justify-center">
                {/* Lottie animation */}
                <DotLottieReact
                  src="https://lottie.host/1b2cb0a6-2be2-4784-8fa4-e2097b917540/2OubVzJbtD.lottie"
                  loop
                  autoplay
                  style={{
                    width: "80%",
                    height: "80%",
                    maxWidth: "400px",
                    maxHeight: "400px"
                  }}
                />
              </div>

              {/* Floating Icons - Hidden on Mobile */}
              <div
                className="absolute top-20 left-12 sm:top-24 sm:left-16 md:top-36 md:left-24 w-10 h-10 sm:w-12 sm:h-12 bg-card rounded-lg flex items-center justify-center animate-float hidden md:flex"
                style={{ animationDelay: "0.5s" }}
              >
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div
                className="absolute top-20 right-12 sm:top-24 sm:right-16 md:top-36 md:right-36 w-10 h-10 sm:w-12 sm:h-12 bg-card rounded-lg flex items-center justify-center animate-float hidden md:flex"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>

              {/* New Floating Icons for AI, ML, Cybersecurity, Hacking */}
              <div
                className="absolute top-32 right-2 sm:top-40 sm:right-4 md:top-58 md:right-3 w-12 h-12 sm:w-14 sm:h-14 bg-card rounded-lg flex items-center justify-center animate-float hidden md:flex"
                style={{ animationDelay: "0.7s" }}
              >
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div
                className="absolute top-16 right-2 sm:top-20 sm:right-4 md:top-32 md:right-2 w-12 h-12 sm:w-14 sm:h-14 bg-card rounded-lg flex items-center justify-center animate-float hidden md:flex"
                style={{ animationDelay: "1.2s" }}
              >
                <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>

              {/* Scanning Animation - Hidden on Mobile */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex">
                <div className="w-64 h-64 sm:w-80 sm:h-80 border border-primary/30 rounded-full relative">
                  <div className="absolute top-0 left-1/2 w-1 h-32 sm:h-40 bg-gradient-to-b from-primary to-transparent transform -translate-x-0.5 origin-bottom animate-spin" style={{ animationDuration: '8s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />

      <HomeServicesSection />

      <WhoWeAreSection />

      <AdvancedProtection />

      <section id="clients" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide cybersecurity solutions to organizations across various industries.
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
                // Duplicate for seamless loop
                { name: "Tech Innovations Inc.", logo: "/image-1.png" },
                { name: "Global Banking Corp", logo: "/image-2.png" },
                { name: "Healthcare Solutions", logo: "/image-3.svg" },
                { name: "Retail Enterprises", logo: "/logo2.png" },
                { name: "Manufacturing Group", logo: "/placeholder-logo.png" },
                { name: "Education Systems", logo: "/placeholder-logo.svg" },
              ].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-card p-4 rounded-lg flex items-center justify-center border border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 mx-2"
                >
                  <Image src={client.logo} alt={client.name} width={64} height={64} className="w-16 h-16 object-contain" />
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
      </section>

      <TestimonialsSection />

      <section id="stay-updated" className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest cybersecurity insights, trends, and updates.
          </p>
          <div className="flex justify-center max-w-md mx-auto">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-l-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-secondary text-primary-foreground rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">We respect your privacy. You can unsubscribe at any time.</p>
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
            <p className="text-muted-foreground">{selectedService.description}</p>
            <div>
              <h5 className="font-semibold mb-2">Key Features:</h5>
              <ul className="list-disc pl-5 space-y-1">
                {selectedService.points.map((point: string, i: number) => (
                  <li key={i} className="text-sm text-muted-foreground">{point}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setSelectedService(null)}>
                Close
              </Button>
              <Button onClick={() => { setSelectedService(null); setIsContactModalOpen(true); }}>Contact Us</Button>
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
            Get in touch with our experts for a free consultation on your cybersecurity needs.
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
              <Button variant="outline" onClick={() => setIsContactModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}
