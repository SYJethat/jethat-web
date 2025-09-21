import { Navigation } from "@/components/navigation"
import { EnhancedContactSection } from "@/components/enhanced-contact-section"
import { Footer } from "@/components/footer"

export default function EnhancedContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <EnhancedContactSection />
      </main>
      <Footer />
    </div>
  )
}
