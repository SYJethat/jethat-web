"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className=" bg-card/50">



       {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Contact and Join Us</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                At JetHat, you'll contribute to transformative projects in AI/ML, cybersecurity, and localized
                technology. Our collaborative, ethical, and innovative culture fosters continuous learning and
                meaningful impact.
              </p>
            </div>
          </div>
        </section>

      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Ready to secure your digital future? Contact us for a free consultation and discover how we can help protect
            and grow your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">
                      B-508, Bhutani TechnoPark, Sector-127,
                      <br />
                      Noida, Uttar Pradesh, 201304, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+91-120-4188947</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">info@jethat.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Support</p>
                    <p className="text-muted-foreground text-sm">24/7 Live Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose JetHat?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-lg font-bold text-primary">Free</div>
                    <div className="text-xs">Consultations</div>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-lg font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-lg font-bold text-primary">22+</div>
                    <div className="text-xs text-muted-foreground">Languages</div>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-lg font-bold text-primary">Secure</div>
                    <div className="text-xs text-muted-foreground">Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4 ">
                  <Input placeholder="First Name" className=" dark:bg-primary-foreground" />
                  <Input placeholder="Last Name" className="dark:bg-primary-foreground"/>
                </div>
                <Input placeholder="Email Address" type="email" className="dark:bg-primary-foreground" />
                <Input placeholder="Phone Number" type="tel"  className="dark:bg-primary-foreground"/>
                <Input placeholder="Company (Optional)"  className="dark:bg-primary-foreground"/>
                <Textarea placeholder="Tell us about your project or security needs..." rows={4} className="dark:bg-primary-foreground"/>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
