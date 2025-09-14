import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Languages, Zap, Shield, Eye, Download } from "lucide-react"

export default function JetOCRPage() {
  const features = [
    {
      icon: Languages,
      title: "22 Indian Languages",
      description: "Advanced OCR technology supporting all major Indian languages with high accuracy.",
    },
    {
      icon: Eye,
      title: "Content Digitization",
      description: "Convert physical documents, books, and manuscripts into digital formats.",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "High-speed text extraction and processing with batch operation support.",
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "End-to-end encryption ensures your documents remain private and secure.",
    },
    {
      icon: FileText,
      title: "Smart Summarization",
      description: "AI-powered content summarization and key information extraction.",
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Export to various formats including PDF, Word, Excel, and plain text.",
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
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Advanced OCR Technology</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">JetOCR</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Advanced OCR solutions for digitizing, extracting, and summarizing content in Indian languages,
                  enhancing accessibility and efficiency for businesses and institutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Try JetOCR
                  </Button>
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Powerful OCR Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                State-of-the-art optical character recognition with multilingual support and AI-powered enhancements.
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
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Industry Applications</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                JetOCR serves various industries with specialized document processing needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Publishing & Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty mb-4">
                    Digitize books, magazines, and newspapers with high accuracy OCR for Indian languages.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      Historical document preservation
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      Content digitization for archives
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      Automated content indexing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Government & Legal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty mb-4">
                    Process legal documents, certificates, and government forms with precision.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      Legal document processing
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      Certificate verification
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      Form data extraction
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Transform Your Documents Today</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Experience the power of advanced OCR technology with multilingual support and AI-powered features.
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
