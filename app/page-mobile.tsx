import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section-mobile"
import { IndustriesSection } from "@/components/industries-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />

      </main>
      <Footer />
    </div>
  )
}
