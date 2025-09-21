import { Navigation } from "@/components/navigation"
import { HomeSectionFixed } from "@/components/home-section-fixed"
import { IndustriesSection } from "@/components/industries-section"
import { Footer } from "@/components/footer"

export default function EnhancedHome() {
  return (
    <div className="min-h-screen ">
      <Navigation />
      <main className="">
        <HomeSectionFixed />

      </main>
      <Footer />
    </div>
  )
}
