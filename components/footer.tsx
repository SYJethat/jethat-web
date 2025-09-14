import { Shield, Mail, Phone } from "lucide-react"

export function Footer() {
  const services = [
    "Cyber Security",
    "Web Application Development",
    "Mobile Application Development",
    "Cloud Technologies",
    "E-Learning",
    "AI/ML Research",
  ]

  const technologies = [
    "Web Technologies",
    "Cloud Technologies",
    "Mobile Technologies",
    "AI/ML Technologies",
    "Security Technologies",
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">JetHat Cyber Security Pvt Ltd</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Securing Tomorrow's Digital Innovation since 2018. Empowering businesses with cybersecurity, AI, and cloud
              solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91-120-4188947</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@jethat.in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((service, index) => (
                <li key={index} className="hover:text-primary cursor-pointer transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {technologies.map((tech, index) => (
                <li key={index} className="hover:text-primary cursor-pointer transition-colors">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Career</li>
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright 2024 JetHat Cyber Security Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
