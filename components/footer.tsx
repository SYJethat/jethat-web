import { Shield, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

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
      <div className="container mx-auto px-4 sm:px-6 sm:justify-items-center lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center md:place-items-start">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left w-full md:w-auto">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">JetHat Cyber Security Pvt Ltd</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto md:mx-0">
              Securing Tomorrow's Digital Innovation since 2018. Empowering businesses with cybersecurity, AI, and cloud
              solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91-120-4188947</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@jethat.in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left w-full md:w-auto">
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
          <div className="text-center md:text-left w-full md:w-auto">
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
          <div className="text-center md:text-left w-full md:w-auto">
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

        {/* Social Media */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright 2025 JetHat Cyber Security Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
