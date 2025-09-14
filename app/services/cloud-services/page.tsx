import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, Zap, BarChart, Settings } from "lucide-react"

export default function CloudServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration of your existing infrastructure to AWS, Azure, or Google Cloud platforms.",
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Complete cloud infrastructure setup, monitoring, and maintenance for optimal performance.",
    },
    {
      icon: Shield,
      title: "Secure Cloud Hosting",
      description: "Encrypted data storage and transmission with role-based access controls and compliance.",
    },
    {
      icon: Zap,
      title: "Auto-Scaling Solutions",
      description: "Dynamic resource allocation that scales with your business needs and traffic demands.",
    },
    {
      icon: BarChart,
      title: "Performance Monitoring",
      description: "Real-time monitoring and analytics to ensure optimal cloud performance and cost efficiency.",
    },
    {
      icon: Settings,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and continuous integration for faster development cycles.",
    },
  ]

  const cloudProviders = [
    { name: "Amazon Web Services", description: "Comprehensive IaaS, PaaS, and SaaS solutions" },
    { name: "Microsoft Azure", description: "Enterprise-grade cloud computing services" },
    { name: "Google Cloud", description: "Advanced analytics and machine learning capabilities" },
    { name: "Hybrid Solutions", description: "Custom hybrid cloud architectures" },
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
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Scalable Cloud Solutions</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Cloud Services</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Secure, scalable, and reliable cloud services leveraging AWS, Azure, and Google Cloud. Transform your
                  infrastructure with cloud-native solutions designed for high availability and performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Get Cloud Assessment
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Cloud className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Cloud Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive cloud solutions that provide scalability, flexibility, and accessibility for your
                business.
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

        {/* Cloud Providers */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Cloud Platforms We Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Expert implementation across all major cloud platforms with certified professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cloudProviders.map((provider, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{provider.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{provider.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Cloud Benefits</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Experience the advantages of cloud computing with our expertly managed solutions that provide
                  scalability, flexibility, and cost efficiency.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">Scalability on demand</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">Enhanced security and compliance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">Cost optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">High availability and disaster recovery</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">Global accessibility</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Card className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">99.9%</div>
                    <div className="text-lg font-semibold">Uptime Guarantee</div>
                    <p className="text-muted-foreground text-pretty">
                      Our cloud infrastructure ensures maximum availability with robust disaster recovery and
                      monitoring.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Move to the Cloud?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Let us help you migrate to the cloud and unlock the benefits of scalable, secure, and cost-effective
                infrastructure.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Schedule Cloud Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
