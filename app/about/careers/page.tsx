import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb } from "lucide-react"

export default function CareersPage() {
  const openRoles = [
    {
      title: "AI/ML Researcher",
      department: "Research & Development",
      location: "Noida, UP",
      type: "Full-time",
      description: "Specializing in NLP, computer vision, or generative AI.",
    },
    {
      title: "Cybersecurity Engineer",
      department: "Security",
      location: "Noida, UP",
      type: "Full-time",
      description: "Focused on penetration testing and threat mitigation.",
    },
    {
      title: "Web & Mobile Developer",
      department: "Development",
      location: "Noida, UP",
      type: "Full-time",
      description: "Building responsive, secure applications.",
    },
    {
      title: "Cloud/DevOps Engineer",
      department: "Infrastructure",
      location: "Noida, UP",
      type: "Full-time",
      description: "Managing scalable, secure cloud infrastructure.",
    },
    {
      title: "Product/UX Designer",
      department: "Design",
      location: "Noida, UP",
      type: "Full-time",
      description: "Crafting intuitive, multilingual interfaces.",
    },
    {
      title: "Customer Success Specialist",
      department: "Customer Success",
      location: "Noida, UP",
      type: "Full-time",
      description: "Delivering exceptional support and consultation.",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Technical Excellence",
      description: "We value technical excellence and a security-first mindset in everything we do.",
    },
    {
      icon: Target,
      title: "Ownership & Curiosity",
      description: "Take ownership of your work and maintain curiosity for solving real-world challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong communication and collaboration in multicultural, multilingual settings.",
    },
    {
      icon: Lightbulb,
      title: "Ethical Innovation",
      description: "Commitment to ethical innovation and building customer trust.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Join Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                At JetHat, you'll contribute to transformative projects in AI/ML, cybersecurity, and localized
                technology. Our collaborative, ethical, and innovative culture fosters continuous learning and
                meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* What We Value */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">What We Value</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our culture is built on these core principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Open Positions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore exciting opportunities to grow your career with us.
              </p>
            </div>

            <div className="grid gap-6">
              {openRoles.map((role, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{role.department}</Badge>
                          <Badge variant="outline">{role.location}</Badge>
                          <Badge variant="outline">{role.type}</Badge>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-secondary text-primary-foreground">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Join Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Don't see a role that fits? We're always looking for talented individuals. Send us your resume!
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Send Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
