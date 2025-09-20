"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Cloud, Smartphone, Code, Shield, Globe } from "lucide-react"

// Define TypeScript interface for technology objects
interface Technology {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  shortDescription?: string
}

export default function CoreTechnologiesPage() {
  const technologies: Technology[] = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      shortDescription: "Advanced AI/ML solutions with multilingual capabilities",
      description: "Transform your business with cutting-edge AI and machine learning solutions, featuring comprehensive multilingual support for 22 Indian languages and specialized tools for voice processing and computer vision.",
      features: [
        "Natural Language Processing (NLP): Support for 22 Indian languages, powering chatbots, content digitization, and summarization",
        "Deep Learning & Neural Networks: Computer vision, generative models (GANs, Transformers), and anomaly detection for predictive analytics",
        "Specialized AI Tools: Coqui TTS and Whisper for real-time voice cloning, video dubbing, and speech-to-text pipelines",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & Scalability",
      shortDescription: "Comprehensive cloud solutions for modern businesses",
      description: "Scale your operations effortlessly with our robust cloud infrastructure solutions, featuring enterprise-grade AWS services and cloud-native architecture designed for maximum availability and performance.",
      features: [
        "Amazon Web Services (AWS): Comprehensive IaaS, PaaS, and SaaS for scalable computing, storage, and analytics",
        "Cloud-Native Development: Microservices, containerization (Docker, Kubernetes), and load balancing for high availability",
        "Secure Hosting: Encrypted data storage and transmission with role-based access controls",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      shortDescription: "Cross-platform mobile solutions optimized for Indian markets",
      description: "Create engaging mobile experiences that resonate with Indian users through our specialized mobile development services, featuring native and cross-platform solutions with multilingual support.",
      features: [
        "Native Development: Swift, Kotlin, and Java for high-performance iOS and Android apps",
        "Cross-Platform Solutions: React Native and Flutter for unified, cost-effective apps",
        "Multilingual Support: Interfaces optimized for Indian languages and low-bandwidth environments",
      ],
    },
    {
      icon: Code,
      title: "Web Development Technologies",
      shortDescription: "Modern web development with security-first approach",
      description: "Build robust, scalable web applications with our full-stack development expertise, combining modern frameworks with enterprise-grade security measures and performance optimization.",
      features: [
        "Full-Stack Expertise: React, Angular, Node.js, and Django for dynamic, scalable web applications",
        "API & CMS Development: Custom APIs and content management systems for seamless integration",
        "Secure Web Hosting: Infrastructure with built-in cybersecurity and performance optimization",
      ],
    },
    {
      icon: Shield,
      title: "Security & Encryption",
      shortDescription: "Advanced cybersecurity solutions and secure development practices",
      description: "Fortify your digital assets with our comprehensive cybersecurity solutions, featuring advanced threat detection, secure coding practices, and compliance with global security standards.",
      features: [
        "Threat Detection: Advanced vulnerability assessments, penetration testing, and real-time monitoring",
        "Secure Design: End-to-end encryption, secure code practices, and compliance with global standards",
      ],
    },
    {
      icon: Globe,
      title: "Multilingual & Localized Interfaces",
      shortDescription: "Accessibility solutions for diverse Indian markets",
      description: "Bridge linguistic and cultural gaps with our specialized localization services, delivering AI-powered UI translation and low-bandwidth optimization for pan-India accessibility.",
      features: [
        "AI-driven UI localization for Indian languages, ensuring accessibility across diverse regions",
        "Low-bandwidth optimization for rural and remote users",
      ],
    },
  ]

  const [selectedTech, setSelectedTech] = useState<Technology>(technologies[0])
  const [techsVisible, setTechsVisible] = useState(false)
  const techsRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for triggering animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTechsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (techsRef.current) {
      observer.observe(techsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Duplicate array for seamless marquee loop
  const marqueeItems = [...technologies, ...technologies]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                Core Technologies
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Our Technology Stack</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                JetHat leverages cutting-edge technologies to deliver secure, efficient, and localized solutions that
                are specifically designed for India's diverse technological landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Section - With Marquee Header */}
        <section id="technologies" className="py-16 bg-gray-100 dark:bg-secondary-foreground overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              Our Core Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Powering India's digital transformation with innovative, secure, and localized technology solutions 
              designed to meet the unique needs of diverse markets and industries.
            </p>
            {/* Marquee Header - Right to Left Scrolling Icons */}
            <div className="relative mb-12">
              {/* Background gradient mask for seamless loop */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100 to-transparent dark:from-secondary-foreground dark:via-secondary-foreground dark:to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-100 dark:to-secondary-foreground w-32"></div>
              
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {marqueeItems.map((tech, index) => (
                    <div 
                      key={`${tech.title}-${index}`}
                      className="flex items-center justify-center mx-6 h-20 w-20 flex-shrink-0"
                    >
                      <div className="w-16 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow duration-300 hover:scale-110">
                        <tech.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pause on hover */}
              <div className="absolute inset-0 group">
                <div 
                  className="flex animate-marquee-paused whitespace-nowrap pointer-events-none group-hover:pointer-events-auto"
                  style={{ display: 'none' }}
                >
                  {marqueeItems.map((tech, index) => (
                    <div 
                      key={`${tech.title}-${index}-paused`}
                      className="flex items-center justify-center mx-6 h-20 w-20 flex-shrink-0"
                    >
                      <div className="w-16 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                        <tech.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 min-h-[500px]">
              {/* Left side: 40% width, compact technology headings */}
              <div 
                className="w-full lg:w-[40%] dark:bg-secondary-foreground rounded-lg border border-primary/20 shadow-lg p-4"
                ref={techsRef}
              >
                <div className="grid grid-cols-1 gap-2">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`dark:bg-secondary-foreground p-3 rounded-md border border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/20 cursor-pointer ${
                        techsVisible 
                          ? `animate-fade-in ${selectedTech === tech ? 'bg-primary/20 border-primary scale-102' : 'hover:scale-102'}` 
                          : 'opacity-0'
                      }`}
                      style={{ 
                        animationDelay: `${index * 0.15}s`,
                        transform: selectedTech === tech ? 'scale(1.02)' : 'scale(1)'
                      }}
                      onClick={() => setSelectedTech(tech)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="tooltip" data-tip={`${tech.title} - Click to explore`}>
                          <tech.icon className="w-6 h-6 text-primary flex-shrink-0" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold text-primary truncate">
                            {tech.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-xs line-clamp-2">
                            {tech.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: 60% width, full content with features */}
              <div className="w-full lg:w-[60%] rounded-lg border border-primary/20 shadow-lg p-6 dark:bg-secondary-foreground">
                {selectedTech ? (
                  <div
                    key={selectedTech.title}
                    className={`animate-slide-in-right opacity-0 translate-x-0 transition-all duration-500 ${
                      techsVisible ? 'opacity-100 translate-x-0' : ''
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <selectedTech.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                            {selectedTech.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-400">
                            {selectedTech.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {selectedTech.description}
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                            Key Features
                          </h4>
                          <div className="space-y-3">
                            {selectedTech.features.map((feature, i) => (
                              <div 
                                key={i} 
                                className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all duration-200"
                              >
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 mt-3"></div>
                                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-600 dark:text-gray-400">
                    Select a technology from the left to view details.
                  </div>
                )}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes fade-in {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes slide-in-right {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @keyframes marquee-paused {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .animate-marquee-paused {
              animation-play-state: paused;
            }
            .animate-fade-in {
              animation: fade-in 0.6s ease-out forwards;
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.6s ease-out forwards;
            }
            .tooltip {
              position: relative;
            }
            .tooltip::after {
              content: attr(data-tip);
              position: absolute;
              top: -40px;
              left: 50%;
              transform: translateX(-50%);
              background: #3b82f6;
              color: white;
              padding: 6px 10px;
              border-radius: 6px;
              font-size: 12px;
              white-space: nowrap;
              opacity: 0;
              transition: opacity 0.2s, transform 0.2s;
              pointer-events: none;
              z-index: 10;
              box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            }
            .tooltip:hover::after {
              opacity: 1;
              transform: translateX(-50%) translateY(-2px);
            }
            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .min-h-\[500px\] {
              min-height: 500px;
            }
            .hover\:scale-102:hover {
              transform: scale(1.02);
            }
            /* Pause marquee on hover */
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}</style>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="text-4xl font-bold text-primary mb-2">22</div>
                <div className="text-lg font-semibold mb-2">Indian Languages</div>
                <p className="text-muted-foreground text-pretty">
                  Complete support for all official Indian languages with cultural context understanding.
                </p>
              </Card>
              <Card className="text-center p-8">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-2">Uptime Guarantee</div>
                <p className="text-muted-foreground text-pretty">
                  Robust cloud infrastructure ensuring maximum availability and reliability.
                </p>
              </Card>
              <Card className="text-center p-8">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-lg font-semibold mb-2">Support & Monitoring</div>
                <p className="text-muted-foreground text-pretty">
                  Round-the-clock technical support and system monitoring for peace of mind.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Leverage Our Technology?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover how our cutting-edge technology stack can transform your business with secure, scalable, and
                localized solutions.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Schedule Technology Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}