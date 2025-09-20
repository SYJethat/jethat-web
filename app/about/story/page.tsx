import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
// import { Badge } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutStoryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
         <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Proven Results</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover how JetHat's innovative solutions have transformed businesses across industries, delivering
                measurable results and driving digital transformation.
              </p>
            </div>
          </div>
        </section>

        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
