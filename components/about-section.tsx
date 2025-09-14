import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To deliver secure, scalable digital ecosystems that fuel innovation without the shadow of risk.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "A digitally inclusive India where language, bandwidth, or geographic barriers do not limit access, and security is seamlessly integrated into every solution.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "24/7 live support, personalized consultations, and a commitment to building trust through ethical & explainable AI.",
    },
    {
      icon: Users,
      title: "Localization",
      description:
        "Solutions tailored for India's 22 official languages, ensuring accessibility for all with security-first approach.",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Who We Are</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Established in 2018 in Noida, Uttar Pradesh, JetHat Cyber Security Pvt. Ltd. is a technology innovator
                dedicated to secure and sustainable digital transformation. Our expertise spans cybersecurity, AI/ML
                research, cloud infrastructure, and custom software and mobile app development.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                We empower organizations to navigate the complexities of the digital age with confidence, building
                secure, scalable, and future-ready systems that enable businesses across industries to thrive in a
                digital-first world.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">Founded</div>
                <div className="text-sm text-muted-foreground">2018</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">Location</div>
                <div className="text-sm text-muted-foreground">Noida, UP</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
