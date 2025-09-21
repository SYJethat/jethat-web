import { Navigation } from "@/components/navigation"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">

        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Team </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover how JetHat's innovative solutions have transformed businesses across industries, delivering
                measurable results and driving digital transformation.
              </p>
            </div>
          </div>
        </section>
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
