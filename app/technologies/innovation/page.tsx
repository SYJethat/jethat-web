import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Beaker, Rocket, Brain, Globe, Zap } from "lucide-react"

export default function InnovationLabPage() {
  const researchAreas = [
    {
      icon: Brain,
      title: "Advanced AI Research",
      description:
        "Pushing the boundaries of artificial intelligence with focus on multilingual NLP and computer vision.",
      projects: [
        "Next-generation language models for Indian languages",
        "Real-time emotion recognition in multilingual contexts",
        "Advanced voice synthesis with cultural nuances",
      ],
    },
    {
      icon: Globe,
      title: "Localization Technology",
      description: "Developing cutting-edge solutions for India's diverse linguistic and cultural landscape.",
      projects: [
        "AI-powered cultural context understanding",
        "Low-bandwidth optimization algorithms",
        "Regional dialect recognition systems",
      ],
    },
    {
      icon: Zap,
      title: "Performance Innovation",
      description: "Creating breakthrough technologies for enhanced performance and efficiency.",
      projects: [
        "Edge computing solutions for rural areas",
        "Quantum-inspired optimization algorithms",
        "Advanced caching and compression techniques",
      ],
    },
  ]

  const innovations = [
    {
      title: "Multilingual Voice Cloning",
      description:
        "Revolutionary voice synthesis technology that preserves cultural and linguistic nuances across 22 Indian languages.",
      status: "In Development",
      impact: "Game-changing for content localization",
    },
    {
      title: "AI-Powered Cultural Context Engine",
      description:
        "Advanced AI system that understands and adapts to regional cultural contexts for better user experiences.",
      status: "Research Phase",
      impact: "Enhanced user engagement and accessibility",
    },
    {
      title: "Quantum-Inspired Security Protocols",
      description:
        "Next-generation cybersecurity solutions inspired by quantum computing principles for unbreakable encryption.",
      status: "Prototype",
      impact: "Revolutionary security enhancement",
    },
  ]

  const partnerships = [
    { name: "Indian Institute of Technology", type: "Academic Partnership" },
    { name: "DRDO Research Labs", type: "Government Collaboration" },
    { name: "Microsoft Research India", type: "Industry Partnership" },
    { name: "Google AI India", type: "Technology Collaboration" },
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
                Innovation Lab
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Research & Development</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                At JetHat's Innovation Lab, we're pioneering the future of technology with cutting-edge research in AI,
                cybersecurity, and localized solutions that address India's unique technological challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                  Explore Research
                </Button>
                <Button size="lg" variant="outline">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Research Focus Areas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our research spans multiple domains, all aimed at solving real-world problems with innovative
                technology.
              </p>
            </div>

            <div className="space-y-12">
              {researchAreas.map((area, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <area.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{area.title}</h3>
                        <p className="text-muted-foreground text-pretty">{area.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Current Projects:</h4>
                    {area.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-foreground">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Innovations */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Current Innovations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Breakthrough technologies currently in development at our Innovation Lab.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovations.map((innovation, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{innovation.status}</Badge>
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{innovation.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-pretty">{innovation.description}</p>
                    <div className="pt-2 border-t">
                      <div className="text-sm font-medium text-primary">Expected Impact:</div>
                      <div className="text-sm text-muted-foreground">{innovation.impact}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Partnerships */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Research Partnerships</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Collaborating with leading institutions and organizations to drive innovation forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerships.map((partner, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                      <Badge variant="secondary">{partner.type}</Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Process */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Innovation Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                From ideation to implementation, our structured approach ensures breakthrough innovations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ideation</h3>
                <p className="text-muted-foreground text-pretty">
                  Identifying challenges and brainstorming innovative solutions.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Beaker className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Research</h3>
                <p className="text-muted-foreground text-pretty">
                  Deep research and feasibility analysis of proposed solutions.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Prototype</h3>
                <p className="text-muted-foreground text-pretty">
                  Building and testing proof-of-concept implementations.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Deploy</h3>
                <p className="text-muted-foreground text-pretty">
                  Scaling successful innovations into production solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Join Our Innovation Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Partner with us to explore cutting-edge technologies and create solutions that shape the future.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Collaborate With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
