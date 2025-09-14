import { Navigation } from "@/components/navigation"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
