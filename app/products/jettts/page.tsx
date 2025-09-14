import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, Volume2, Languages, Zap, Users, Settings } from "lucide-react"

export default function JetTTSPage() {
  const features = [
    {
      icon: Volume2,
      title: "Natural Voice Synthesis",
      description: "High-quality, natural-sounding voice synthesis with emotional expression capabilities.",
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Support for 22 Indian languages with native pronunciation and cultural context.",
    },
    {
      icon: Mic,
      title: "Voice Cloning",
      description: "Create custom voice models from audio samples for personalized speech synthesis.",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast text-to-speech conversion for real-time applications.",
    },
    {
      icon: Settings,
      title: "Customizable Voices",
      description: "Adjust pitch, speed, tone, and emotion to match your specific requirements.",
    },
    {
      icon: Users,
      title: "Multi-platform API",
      description: "Easy integration across web, mobile, and desktop applications with RESTful API.",
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
                    <Volume2 className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Advanced TTS Technology</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">JetTTS</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Advanced text-to-speech technology with natural voice synthesis, multilingual support, and voice
                  cloning capabilities for creating engaging audio experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Try JetTTS
                  </Button>
                  <Button size="lg" variant="outline">
                    Listen to Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Volume2 className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Advanced TTS Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Cutting-edge text-to-speech technology with natural voice synthesis and multilingual capabilities.
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

        {/* Applications */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Perfect For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                JetTTS powers diverse applications across industries with natural, multilingual voice synthesis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">E-learning Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    Create engaging educational content with natural voice narration in multiple Indian languages.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Accessibility Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    Make digital content accessible with high-quality text-to-speech for visually impaired users.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Voice Assistants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    Power voice assistants and chatbots with natural, contextually appropriate speech synthesis.
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
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Give Your Applications a Voice</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Transform text into natural, engaging speech with JetTTS's advanced multilingual capabilities.
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
