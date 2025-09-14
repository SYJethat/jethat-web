import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Eye, Heart, Phone, Clock } from "lucide-react"

export default function VirtualNaaniPage() {
  const features = [
    {
      icon: AlertTriangle,
      title: "Predictive Alerts",
      description: "AI-powered predictive analytics to identify potential safety risks before they occur.",
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 monitoring with instant notifications for emergency situations.",
    },
    {
      icon: Heart,
      title: "Health Tracking",
      description: "Continuous health monitoring with vital signs tracking and medication reminders.",
    },
    {
      icon: Phone,
      title: "Emergency Response",
      description: "Automatic emergency contact notification and response coordination.",
    },
    {
      icon: Clock,
      title: "Daily Assistance",
      description: "Daily routine assistance, reminders, and companionship features.",
    },
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
                  <Badge variant="secondary">AI-Powered Safety</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Virtual Naani</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  AI-driven safety tracking with predictive alerts and real-time monitoring for enhanced security. Your
                  digital grandmother watching over your loved ones with care and intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Get Started
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

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Comprehensive Care Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Advanced AI technology combined with compassionate care to ensure safety and well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">How Virtual Naani Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Simple setup, intelligent monitoring, and proactive care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Easy Setup</h3>
                <p className="text-muted-foreground text-pretty">
                  Simple installation and configuration with user-friendly interface in multiple Indian languages.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Smart Monitoring</h3>
                <p className="text-muted-foreground text-pretty">
                  AI continuously learns patterns and monitors for any unusual activities or health changes.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Proactive Care</h3>
                <p className="text-muted-foreground text-pretty">
                  Instant alerts, emergency response, and daily assistance to ensure safety and well-being.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Protect Your Loved Ones Today</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Give your family peace of mind with Virtual Naani's intelligent safety monitoring and care.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
