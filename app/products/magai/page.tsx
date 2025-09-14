import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, FileText, Globe, Zap, Users, Shield } from "lucide-react"

export default function MagAIPage() {
  const features = [
    {
      icon: FileText,
      title: "Content Creation",
      description: "AI-powered content generation and editing tools for magazines and journals.",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Support for 22 Indian languages with advanced NLP capabilities.",
    },
    {
      icon: Zap,
      title: "Fast Distribution",
      description: "Streamlined content distribution across multiple platforms and formats.",
    },
    {
      icon: Users,
      title: "Collaborative Editing",
      description: "Real-time collaborative editing with version control and approval workflows.",
    },
    {
      icon: Shield,
      title: "Secure Publishing",
      description: "End-to-end encryption and secure content management.",
    },
  ]

  const benefits = [
    "40% faster content turnaround time",
    "Improved accessibility across languages",
    "Significant cost savings in publishing",
    "Enhanced content quality with AI assistance",
    "Seamless integration with existing workflows",
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
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">AI-Powered Publishing</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">MagAI</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  An AI-powered multilingual platform for magazine and journal publishing, streamlining content
                  creation, editing, and distribution with advanced language processing capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Key Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Powerful AI-driven tools designed to revolutionize content creation and publishing.
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

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Choose MagAI?</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  MagAI has helped regional publishers digitize and streamline their content processes, resulting in
                  significant improvements in efficiency and accessibility.
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
                    <div className="text-4xl font-bold text-primary">40%</div>
                    <div className="text-lg font-semibold">Faster Content Turnaround</div>
                    <p className="text-muted-foreground text-pretty">
                      Regional publishers using MagAI have seen a 40% improvement in content processing speed with
                      enhanced quality and accessibility.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Transform Your Publishing?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Join the publishers who are already using MagAI to streamline their content creation and reach wider
                audiences.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
