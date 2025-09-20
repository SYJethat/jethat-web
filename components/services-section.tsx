import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Code, Cloud, GraduationCap, Brain } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access.",
      features: ["Advanced Threat Detection and Prevention", "Security Awareness Training"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Secure, scalable, and reliable cloud services, including AWS, Azure, and Google Cloud, leveraging digital networks.",
      features: ["Scalability", "Flexibility and Accessibility"],
    },
    {
      icon: Code,
      title: "Mobile Application Development",
      description: "Elevate your brand presence and engagement with cutting-edge mobile applications.",
      features: ["Cross-Platform Compatibility", "User-Centric Design"],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Crafting exceptional digital experiences that captivate expert web development, where innovation meets functionality.",
      features: ["Full-Stack Development", "Responsive Web Design"],
    },
    {
      icon: GraduationCap,
      title: "E-Learning",
      description:
        "Revolutionizing education with our e-learning services, fostering online, opening doors to learning opportunities.",
      features: ["Accessibility", "Interactive Learning Tools"],
    },
    {
      icon: Brain,
      title: "Secure Code Review",
      description:
        "Elevate your software's security posture with our meticulous secure code review service, identifying and mitigating vulnerabilities.",
      features: ["Vulnerability Detection", "Comprehensive Analysis"],
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Easily build digital presence and marketing-ready solutions, where innovation meets functionality. Elevate
            your business through bespoke software development, where innovation meets functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
