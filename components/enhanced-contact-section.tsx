"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, CheckCircle, MessageCircle } from "lucide-react"
import { useState } from "react"

export function EnhancedContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    }, 3000)
  }

  const openInMaps = () => {
    const address = "B-508, Bhutani TechnoPark, Sector-127, Noida, Uttar Pradesh, 201304, India"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  return (
    <section id="contact" className="bg-card/50">
      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Ready to secure your digital future? Our cybersecurity experts are here to help.
              Contact us for a free consultation and discover how we can protect and grow your business.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information - Left Column */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="group p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">Office Address</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        B-508, Bhutani TechnoPark, Sector-127,
                        <br />
                        Noida, Uttar Pradesh, 201304, India
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 p-0 h-auto text-primary hover:text-primary/80"
                        onClick={openInMaps}
                      >
                        <Navigation className="w-3 h-3 mr-1" />
                        View on Maps
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-muted-foreground text-sm">+91-120-4188947</p>
                      <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-muted-foreground text-sm">info@jethat.in</p>
                      <p className="text-xs text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Support</p>
                      <p className="text-muted-foreground text-sm">24/7 Live Support Available</p>
                      <p className="text-xs text-muted-foreground mt-1">Emergency support for existing clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Why Choose JetHat?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg hover:bg-primary/15 transition-colors cursor-pointer">
                    <div className="text-xl font-bold text-primary">Free</div>
                    <div className="text-xs text-muted-foreground">Consultations</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg hover:bg-primary/15 transition-colors cursor-pointer">
                    <div className="text-xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg hover:bg-primary/15 transition-colors cursor-pointer">
                    <div className="text-xl font-bold text-primary">22+</div>
                    <div className="text-xs text-muted-foreground">Languages</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg hover:bg-primary/15 transition-colors cursor-pointer">
                    <div className="text-xl font-bold text-primary">Secure</div>
                    <div className="text-xs text-muted-foreground">Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map - Middle Column */}
          <div className="lg:col-span-1">
            <Card className="h-full border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-96 w-full rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.365123456789!2d77.39102631538415!3d28.613939982423456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff7b5b5b5b5%3A0x1234567890abcdef!2sBhutani%20TechnoPark%2C%20Sector-127%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-lg"
                    title="JetHat Office Location"
                  ></iframe>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 backdrop-blur-sm hover:bg-background"
                      onClick={openInMaps}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Full Map
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-muted/50">
                  <p className="text-sm text-muted-foreground text-center">
                    📍 Located in the heart of Noida's tech hub
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form - Right Column */}
          <div className="lg:col-span-1">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Input
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="company"
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project or security needs..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
