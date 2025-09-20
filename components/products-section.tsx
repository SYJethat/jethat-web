import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Shield, GraduationCap, Languages, FileText } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: Bot,
      title: "MagAI",
      description:
        "An AI-powered multilingual platform for magazine and journal publishing, streamlining content creation, editing, and distribution.",
      features: ["Content Creation", "Multilingual Support", "Distribution"],
    },
    {
      icon: Shield,
      title: "Virtual Naani",
      description: "AI-driven safety tracking with predictive alerts and real-time monitoring for enhanced security.",
      features: ["Predictive Alerts", "Real-time Monitoring", "Safety Tracking"],
    },
    {
      icon: GraduationCap,
      title: "E-Learning Platforms",
      description:
        "Interactive, adaptive learning systems with AI recommendation engines, optimized for low-bandwidth and multilingual environments.",
      features: ["AI Recommendations", "Low-bandwidth Optimized", "Multilingual"],
    },
    {
      icon: Languages,
      title: "Multilingual LLM",
      description:
        "Advanced AI models supporting 22 Indian languages for applications like chatbots, content generation, and analytics.",
      features: ["22 Indian Languages", "Content Generation", "Analytics"],
    },
    {
      icon: Bot,
      title: "JetChat",
      description:
        "A multilingual AI chatbot builder with integrated Coqui TTS and Whisper STT pipelines for real-time voice cloning, video dubbing, and conversational AI.",
      features: ["Voice Cloning", "Video Dubbing", "Real-time Chat"],
    },
    {
      icon: FileText,
      title: "OCR & Editing Platforms",
      description:
        "Tools for digitizing, extracting, and summarizing content in Indian languages, enhancing accessibility and efficiency.",
      features: ["Content Digitization", "Language Processing", "Summarization"],
    },
  ]

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Our Flagship Products</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Innovative AI-powered solutions designed for India's diverse linguistic and technological landscape,
            prioritizing accessibility, localization, and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-pretty">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
