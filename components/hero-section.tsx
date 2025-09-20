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
      <section id="home" className="min-h-screen   flex items-center justify-center relative overflow-hidden ">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" /> */}
        {/* <div className="absolute inset-0 dark:bg-[url('/cybersecurity-network-pattern.jpg')] opacity-10" /> */}
        {/* <Image src={BGImage} alt="" fill className="absolute inset-0 opacity-10 object-cover" /> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-balance">
                  Empowering Tomorrow, <span className="text-primary">Securing Today</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Innovate with Confidence in Cybersecurity and Software Excellence. At JetHat, we fuse cybersecurity,
                  artificial intelligence, and cloud solutions to protect your growth, empowering you to innovate boldly
                  without compromise.
                </p>
                <p className="text-lg text-primary font-semibold">
                  <TypingAnimation text="अनुक्षणं रक्षामहे (We Protect Every Moment)" />
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-secondary text-primary-foreground animate-pulse-glow"
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

              {/* Stats */}
              {/* <AnimatedStats /> */}
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="relative w-full h-screen flex items-center justify-center">
                {/* Lottie animation */}
                <DotLottieReact
                  src="https://lottie.host/1b2cb0a6-2be2-4784-8fa4-e2097b917540/2OubVzJbtD.lottie"
                  loop
                  autoplay
                  style={{ width: "40%", height: "40%" }}
                />

                {/* Optional overlay to match OKLCH color tint */}
               
                  {/* <div
                    className="absolute inset-0 mix-blend-multiply pointer-events-none"
                    style={{
                      backgroundColor: "",
                      opacity: 0.6,
                      width:'40%', height: '40%',
                      top:"10%"
                    }}
                  /> */}



                  {/* <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-60 pointer-events-none" /> */}
              </div>
              {/* Central Shield */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Shield className="w-16 h-16 text-primary animate-float" />
                </div>
              </div> */}

              {/* Floating Icons */}
              <div
                className="absolute top-36 left-24 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div
                className="absolute top-36 right-36 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="w-6 h-6 text-primary" />
              </div>
              {/* <div
                className="absolute bottom-36 left-16 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Globe className="w-6 h-6 text-primary" />
              </div> */}

              {/* New Floating Icons for AI, ML, Cybersecurity, Hacking */}
              <div
                className="absolute top-58 right-3 w-14 h-14 bg-card rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "0.7s" }}
              >
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <div
                className="absolute top-32 right-2 w-14 h-14 bg-card rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              {/* <div
                className="absolute bottom-20 right-16 w-14 h-14 bg-card rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "1.7s" }}
              >
                <ShieldAlert className="w-7 h-7 text-primary" />
              </div>
              <div
                className="absolute bottom-36 right-58 w-14 h-14 bg-card rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "2.2s" }}
              >
                <Terminal className="w-7 h-7 text-primary" />
              </div> */}

              {/* Scanning Animation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 border border-primary/30 rounded-full relative">
                  <div className="absolute top-0 left-1/2 w-1 h-40 bg-gradient-to-b from-primary to-transparent transform -translate-x-0.5 origin-bottom animate-spin" style={{ animationDuration: '8s' }}></div>
                </div>
              </div>
            </div>
          </div>
        
    </div>
    
      </section >

    <IndustriesSection />

  {/* Our Services Section */ }
  {/* <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Fortify your digital fortress with our cutting-edge cybersecurity solutions. Elevate your business through
            bespoke software development, where innovation meets functionality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development",
                description: "Crafting seamless digital experiences through expert web development, where innovation meets user-centric design.",
                points: ["Full-stack development", "Responsive web design"],
                icon: <Code className="w-8 h-8 text-primary" />,
              },
              {
                title: "Cloud Services",
                description: "Unlock unparalleled scalability and efficiency with our transformative cloud services, reshaping the way you harness and leverage digital resources.",
                points: ["Scalability", "Flexibility and Accessibility"],
                icon: <Cloud className="w-8 h-8 text-primary" />,
              },
              {
                title: "Mobile Application Development",
                description: "Elevate your brand's presence and engagement with expertly crafted mobile applications.",
                points: ["Cross-Platform Compatibility", "User-Centric Design"],
                icon: <Smartphone className="w-8 h-8 text-primary" />,
              },
              {
                title: "Cyber Security",
                description: "Protect your computer systems, networks, and data from theft, damage, or unauthorized access.",
                points: ["Advanced Threat Detection and Prevention", "Security Awareness Training"],
                icon: <ShieldAlert className="w-8 h-8 text-primary" />,
              },
              {
                title: "E-Learning",
                description: "Revolutionize education with our e-learning services, fostering dynamic online learning experiences.",
                points: ["Accessibility", "Interactive Learning Tools"],
                icon: <BookOpen className="w-8 h-8 text-primary" />,
              },
              {
                title: "Secure Code Review",
                description: "Elevate your software's security posture with our meticulous secure code review service, identifying and fortifying vulnerabilities for a resilient codebase.",
                points: ["Vulnerability Detection", "Comprehensive Analysis"],
                icon: <Search className="w-8 h-8 text-primary" />,
              },
            ].map((service, index) => {
              if (!service.title) return null
              return (
                <div
                  key={index}
                  className={`bg-card p-6 rounded-lg border border-primary/20 animate-fade-in hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  ref={index === 0 ? servicesRef : null}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Tooltip content={`${service.title} - Click to learn more`}>
                      {service.icon}
                    </Tooltip>
                    <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}


  <HomeServicesSection />

  {/* Readme Section with Arrow Buttons */ }


  {/* Who We Are Section */ }
  <WhoWeAreSection />

  {/* Call to Action Section */ }
  {/* <section id="cta" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive cybersecurity solutions today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-background text-primary hover:bg-secondary">
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-primary"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section> */}
  {/* Enhanced Advanced Protection Section with Animated Threads */ }
  <AdvancedProtection />

  {/* Client Testimonials Section */ }
  {/* <section id="testimonials" className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience with our cybersecurity solutions.
          </p>
          <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground italic">
              "Jethat's cloud security implementation was seamless and highly effective. Their team worked closely with us
              to understand our unique requirements and delivered a solution that perfectly addressed our needs."
            </p>
            <div className="mt-4 text-right">
              <p className="text-primary font-semibold">Emily Rodriguez</p>
              <p className="text-muted-foreground">IT Director, Healthcare Innovations</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Button key={i} variant="outline" size="sm" className="text-primary">
                {i}
              </Button>
            ))}
          </div>
        </div>
      </section> */}

  {/* Our Clients Section */ }
  {/* <section id="clients" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide cybersecurity solutions to organizations across various industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Tech Innovations Inc.", logo: "/placeholder-logo.png" },
              { name: "Global Banking Corp", logo: "/placeholder-logo.png" },
              { name: "Healthcare Solutions", logo: "/placeholder-logo.png" },
              { name: "Retail Enterprises", logo: "/placeholder-logo.png" },
              { name: "Manufacturing Group", logo: "/placeholder-logo.png" },
              { name: "Education Systems", logo: "/placeholder-logo.png" },
            ].map((client, index) => (
              <div key={index} className="bg-card p-4 rounded-lg flex items-center justify-center border border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <img src={client.logo} alt={client.name} className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

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

  {/* Team Section */ }
  {/* <section id="team" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in cybersecurity, software development, and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                image: "/placeholder-user.jpg",
                bio: "Leading JetHat with vision and expertise in cybersecurity since 2018.",
              },
              {
                name: "Jane Smith",
                role: "CTO",
                image: "/placeholder-user.jpg",
                bio: "Driving technological innovation and AI/ML development across projects.",
              },
              {
                name: "Mike Johnson",
                role: "Head of Security",
                image: "/placeholder-user.jpg",
                bio: "Ensuring the highest standards of cybersecurity for all our clients.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-primary/20 text-center group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

  <TestimonialsSection />

  {/* Stay Updated Section */ }
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

  {/* Service Detail Modal */ }
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

  {/* Contact Modal */ }
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

    </div >
  )
}
