import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ClientsMarqueeSection from "@/components/clients-marquee"
import ImageAdSection from "@/components/image-ad-section"

export default function AdPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="">
        <ClientsMarqueeSection />
        <ImageAdSection />
      </main>
      
      <Footer />
    </div>
  )
}