import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Mic, Video, Languages, Zap, Users } from "lucide-react"

export default function JetChatPage() {
  const features = [
    {
      icon: Mic,
      title: "Voice Cloning",
      description: "Advanced Coqui TTS integration for real-time voice cloning and natural speech synthesis.",
    },
    {
      icon: Video,
      title: "Video Dubbing",
      description: "Automated video dubbing with lip-sync technology for multilingual content.",
    },
    {
      icon: Languages,
      title: "22 Indian Languages",
      description: "Native support for all 22 official Indian languages with cultural context understanding.",
    },
    {
      icon: Zap,
      title: "Real-time Chat",
      description: "Lightning-fast conversational AI with context awareness and memory.",
    },
    {
      icon: Bot,
      title: "Custom AI Models",
      description: "Train custom chatbot models tailored to your specific business needs.",
    },
    {
      icon: Users,
      title: "Multi-platform",
      description: "Deploy across web, mobile, and messaging platforms with unified management.",
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
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Multilingual AI Chatbot</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">JetChat</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  A multilingual AI chatbot builder with integrated Coqui TTS and Whisper STT pipelines for real-time
                  voice cloning, video dubbing, and conversational AI across 22 Indian languages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Build Your Bot
                  </Button>
                  <Button size="lg" variant="outline">
                    Try Demo
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
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Powerful Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Advanced AI capabilities that bring your chatbots to life with voice, video, and multilingual support.
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

        {/* Use Cases */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Perfect For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                JetChat serves diverse industries with tailored conversational AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    24/7 multilingual customer support with voice and text capabilities for enhanced user experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">E-commerce</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    Product recommendations, order tracking, and shopping assistance in local languages.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    Interactive learning assistants with voice-enabled tutoring and multilingual content delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Build Your AI Assistant?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Create powerful multilingual chatbots with voice capabilities in minutes, not months.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Start Building Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
