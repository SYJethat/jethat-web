import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustriesSection } from "@/components/industries-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Eye, Lock, Search, Users } from "lucide-react"

export default function CybersecurityPage() {
  const services = [
    {
      icon: AlertTriangle,
      title: "Threat Detection & Prevention",
      description: "Advanced threat detection systems with real-time monitoring and automated response capabilities.",
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits and penetration testing to identify and address vulnerabilities.",
    },
    {
      icon: Lock,
      title: "Security Architecture",
      description: "Design and implement robust security frameworks tailored to your business needs.",
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security monitoring with incident response and threat intelligence.",
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Employee security awareness training and best practices implementation.",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Ensure compliance with industry standards and regulatory requirements.",
    },
  ]

  const benefits = [
    "Zero major security incidents post-implementation",
    "Enhanced compliance with global standards",
    "Increased customer trust and confidence",
    "Reduced security-related operational costs",
    "Proactive threat mitigation and response",
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
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Comprehensive Security</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Cybersecurity Services</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Protect your digital assets with our comprehensive cybersecurity solutions. From threat detection to
                  compliance management, we provide end-to-end security services tailored to your business needs.
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground text-pretty">
                    <strong className="text-primary">Our Services:</strong> Advanced threat detection, vulnerability
                    assessments, security architecture design, 24/7 monitoring, employee training, and compliance
                    management with 100% success rate across enterprise clients.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Get Security Assessment
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Security Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive cybersecurity solutions to protect your business from evolving threats.
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

        {/* Success Story */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Proven Results</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Our comprehensive security audit for a large-scale enterprise application resulted in zero major
                  security incidents post-launch and enhanced customer trust.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Card className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">100%</div>
                    <div className="text-lg font-semibold">Security Success Rate</div>
                    <p className="text-muted-foreground text-pretty">
                      Zero major security incidents across all our enterprise clients post-implementation.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <IndustriesSection />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Secure Your Business Today</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Don't wait for a security breach. Get a comprehensive security assessment and protect your digital
                assets.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Schedule Security Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
