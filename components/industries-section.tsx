import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Building, Briefcase, Heart } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description:
        "Virtual classrooms and multilingual content for remote and rural education providers, optimized for low connectivity.",
    },
    {
      icon: BookOpen,
      title: "Research & Publishing",
      description:
        "OCR, NLP, and editing tools for academic journals and regional publishers, enabling efficient digitization.",
    },
    {
      icon: Building,
      title: "Government & Public Sector",
      description: "Secure document digitization, identity management, and compliance solutions for public services.",
    },
    {
      icon: Briefcase,
      title: "Enterprises & Startups",
      description: "Scalable, secure web, mobile, and cloud systems with continuous threat monitoring.",
    },
    {
      icon: Heart,
      title: "Healthcare & Finance",
      description: "Privacy-focused solutions for sensitive data, compliance with regulatory standards.",
    },
  ]

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            JetHat supports diverse sectors with tailored solutions addressing unique challenges across multiple
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
