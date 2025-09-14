import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Tablet, Zap, Shield, Globe } from "lucide-react"

export default function MobileDevelopmentPage() {
  const services = [
    {
      icon: Smartphone,
      title: "Native iOS Development",
      description: "High-performance iOS applications built with Swift and optimized for Apple devices.",
    },
    {
      icon: Smartphone,
      title: "Native Android Development",
      description: "Feature-rich Android applications using Kotlin and Java for optimal performance.",
    },
    {
      icon: Tablet,
      title: "Cross-Platform Development",
      description: "Cost-effective solutions using React Native and Flutter for multiple platforms.",
    },
    {
      icon: Globe,
      title: "Multilingual Apps",
      description: "Mobile applications with support for 22 Indian languages and cultural localization.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimized for low-bandwidth environments and various device specifications.",
    },
    {
      icon: Shield,
      title: "Secure Mobile Apps",
      description: "Built-in security features with data encryption and secure authentication.",
    },
  ]

  const platforms = [
    { name: "iOS", description: "Swift, Objective-C" },
    { name: "Android", description: "Kotlin, Java" },
    { name: "React Native", description: "Cross-platform" },
    { name: "Flutter", description: "Dart framework" },
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
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Mobile App Development</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Mobile Development</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Elevate your brand presence with cutting-edge mobile applications. We create engaging, user-centric
                  mobile experiences that work seamlessly across iOS and Android platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Start Your App
                  </Button>
                  <Button size="lg" variant="outline">
                    View Our Apps
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Mobile Development Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive mobile app development solutions for iOS, Android, and cross-platform needs.
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

        {/* Platforms */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Platforms We Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Native and cross-platform development expertise across all major mobile platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Choose Our Mobile Development?</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  We specialize in creating mobile applications that are optimized for India's diverse market, including
                  support for multiple languages and low-bandwidth environments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">Cross-platform compatibility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">User-centric design approach</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">Optimized for Indian market</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">Low-bandwidth optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground">Multilingual interface support</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Card className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">22</div>
                    <div className="text-lg font-semibold">Languages Supported</div>
                    <p className="text-muted-foreground text-pretty">
                      Our mobile apps support all 22 official Indian languages with cultural localization.
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
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Launch Your Mobile App?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Transform your idea into a powerful mobile application that engages users and drives business growth.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Start Your Mobile Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
