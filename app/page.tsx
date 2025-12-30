import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import WhoWeAreSection from "@/components/WhoWeAreSection"
import ClientsMarqueeSection from "@/components/clients-marquee"
import HomeProductsSection from "@/components/home-products"
import HomeServicesSection from "@/components/home-service"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="">
        <HeroSection />
        {/* <ClientsMarqueeSection /> */}
        {/* <HomeProductsSection />
        <HomeServicesSection /> */}
        {/* <WhoWeAreSection /> */}
      </main>
      <Footer />
    </div>
  )
}
