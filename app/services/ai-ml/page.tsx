import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndustriesSection } from "@/components/industries-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Bot, Eye, Languages, Zap, BarChart } from "lucide-react"

export default function AIMLPage() {
  const services = [
    {
      icon: Languages,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions supporting 22 Indian languages for chatbots, content analysis, and more.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analytics powered by deep learning models.",
    },
    {
      icon: Bot,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants with multilingual capabilities and context awareness.",
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "Machine learning models for forecasting, anomaly detection, and business intelligence.",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Automate complex business processes with intelligent decision-making capabilities.",
    },
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Tailored AI solutions designed specifically for your industry and business requirements.",
    },
  ]

  const technologies = [
    "TensorFlow & PyTorch",
    "Transformers & BERT",
    "Coqui TTS & Whisper STT",
    "OpenCV & Computer Vision",
    "Scikit-learn & MLOps",
    "AWS SageMaker & Azure ML",
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
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">AI & Machine Learning</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">AI/ML Development</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Transform your business with cutting-edge AI and machine learning solutions. From NLP to computer
                  vision, we build intelligent systems that understand, learn, and adapt to your specific needs.
                </p>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground text-pretty">
                    <strong className="text-primary">Our AI Expertise:</strong> Advanced NLP with 22 Indian language
                    support, computer vision, conversational AI, predictive analytics, automation, and custom AI models
                    using TensorFlow, PyTorch, and cloud ML platforms.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Start AI Project
                  </Button>
                  <Button size="lg" variant="outline">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">AI/ML Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive AI and machine learning solutions tailored to your business objectives.
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
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Advanced Technologies</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  We leverage the latest AI/ML frameworks and tools to deliver state-of-the-art solutions that are
                  scalable, efficient, and production-ready.
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
                    <div className="text-4xl font-bold text-primary">22</div>
                    <div className="text-lg font-semibold">Indian Languages Supported</div>
                    <p className="text-muted-foreground text-pretty">
                      Our AI models are specifically trained to understand and process content in all major Indian
                      languages.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <IndustriesSection />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Harness AI Power?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Let's discuss how AI and machine learning can transform your business processes and drive innovation.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Schedule AI Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
