import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustriesSection } from "@/components/industries-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Zap, Shield, Globe, Users } from "lucide-react"

export default function WebDevelopmentPage() {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern frameworks like React, Next.js, and Node.js.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first, responsive web applications that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance web applications with optimized loading times and smooth user experiences.",
    },
    {
      icon: Shield,
      title: "Secure Development",
      description: "Security-first approach with built-in protection against common web vulnerabilities.",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Internationalization and localization for Indian languages and global markets.",
    },
    {
      icon: Users,
      title: "User Experience Design",
      description: "Intuitive, user-centered design that enhances engagement and conversion rates.",
    },
  ]

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "TypeScript & JavaScript",
    "Tailwind CSS & SCSS",
    "MongoDB & PostgreSQL",
    "AWS & Vercel Deployment",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Modern Web Development</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Web Development</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Craft exceptional digital experiences with our expert web development services. From responsive design
                  to full-stack applications, we build scalable, secure, and user-friendly web solutions.
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground text-pretty">
                    <strong className="text-primary">Our Web Services:</strong> Full-stack development with
                    React/Next.js, responsive design, performance optimization, security-first approach, multilingual
                    support, and UX design with 99% uptime guarantee.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Start Your Project
                  </Button>
                  <Button size="lg" variant="outline">
                    View Portfolio
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Code className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Web Development Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive web development solutions that combine innovation with functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Modern Tech Stack</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  We use cutting-edge technologies and frameworks to build fast, scalable, and maintainable web
                  applications that meet today's digital standards.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">99%</div>
                    <div className="text-lg font-semibold">Uptime Guarantee</div>
                    <p className="text-muted-foreground text-pretty">
                      Our web applications are built for reliability with robust architecture and performance
                      optimization.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Development Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                A structured approach that ensures quality, efficiency, and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Discovery</h3>
                <p className="text-muted-foreground text-pretty">
                  Understanding your requirements, goals, and target audience.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Design</h3>
                <p className="text-muted-foreground text-pretty">
                  Creating wireframes, mockups, and user experience designs.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Development</h3>
                <p className="text-muted-foreground text-pretty">
                  Building your application with clean, scalable, and secure code.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold">Launch</h3>
                <p className="text-muted-foreground text-pretty">
                  Testing, deployment, and ongoing support for your web application.
                </p>
              </div>
            </div>
          </div>
        </section>

        <IndustriesSection />

        {/* CTA Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Build Your Web Presence?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Let's create a web application that drives your business forward with modern technology and exceptional
                design.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
