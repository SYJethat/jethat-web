import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Cloud, Smartphone, Code, Shield, Globe } from "lucide-react"

export default function CoreTechnologiesPage() {
  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Advanced AI/ML solutions with multilingual capabilities",
      features: [
        "Natural Language Processing (NLP): Support for 22 Indian languages, powering chatbots, content digitization, and summarization",
        "Deep Learning & Neural Networks: Computer vision, generative models (GANs, Transformers), and anomaly detection for predictive analytics",
        "Specialized AI Tools: Coqui TTS and Whisper for real-time voice cloning, video dubbing, and speech-to-text pipelines",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & Scalability",
      description: "Comprehensive cloud solutions for modern businesses",
      features: [
        "Amazon Web Services (AWS): Comprehensive IaaS, PaaS, and SaaS for scalable computing, storage, and analytics",
        "Cloud-Native Development: Microservices, containerization (Docker, Kubernetes), and load balancing for high availability",
        "Secure Hosting: Encrypted data storage and transmission with role-based access controls",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Cross-platform mobile solutions optimized for Indian markets",
      features: [
        "Native Development: Swift, Kotlin, and Java for high-performance iOS and Android apps",
        "Cross-Platform Solutions: React Native and Flutter for unified, cost-effective apps",
        "Multilingual Support: Interfaces optimized for Indian languages and low-bandwidth environments",
      ],
    },
    {
      icon: Code,
      title: "Web Development Technologies",
      description: "Modern web development with security-first approach",
      features: [
        "Full-Stack Expertise: React, Angular, Node.js, and Django for dynamic, scalable web applications",
        "API & CMS Development: Custom APIs and content management systems for seamless integration",
        "Secure Web Hosting: Infrastructure with built-in cybersecurity and performance optimization",
      ],
    },
    {
      icon: Shield,
      title: "Security & Encryption",
      description: "Advanced cybersecurity solutions and secure development practices",
      features: [
        "Threat Detection: Advanced vulnerability assessments, penetration testing, and real-time monitoring",
        "Secure Design: End-to-end encryption, secure code practices, and compliance with global standards",
      ],
    },
    {
      icon: Globe,
      title: "Multilingual & Localized Interfaces",
      description: "Accessibility solutions for diverse Indian markets",
      features: [
        "AI-driven UI localization for Indian languages, ensuring accessibility across diverse regions",
        "Low-bandwidth optimization for rural and remote users",
      ],
    },
  ]

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

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {technologies.map((tech, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <tech.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-balance">{tech.title}</h2>
                        <p className="text-lg text-muted-foreground text-pretty">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {tech.features.map((feature, featureIndex) => (
                      <Card
                        key={featureIndex}
                        className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <p className="text-foreground text-pretty">{feature}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
