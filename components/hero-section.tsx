// "use client"

// import { Button } from "@/components/ui/button"
// import { Shield, Lock, Zap, Globe } from "lucide-react"

// export function HeroSection() {
//   return (
//     <section id="home" className="min-h-screen  flex items-center justify-center relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
//       <div className="absolute inset-0 bg-[url('/cybersecurity-network-pattern.jpg')] opacity-10" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h1 className="text-4xl md:text-6xl font-bold text-balance">
//                 Empowering Tomorrow, <span className="text-primary">Securing Today</span>
//               </h1>
//               <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
//                 Innovate with Confidence in Cybersecurity and Software Excellence. At JetHat, we fuse cybersecurity,
//                 artificial intelligence, and cloud solutions to protect your growth, empowering you to innovate boldly
//                 without compromise.
//               </p>
//               {/* <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
//                 <p className="text-sm text-muted-foreground text-pretty">
//                   <strong className="text-primary">Our Expertise:</strong> Comprehensive cybersecurity solutions, AI/ML
//                   development with 22+ language support, full-stack web & mobile development, cloud services, and
//                   innovative products like MagAI, Virtual Naani, and JetChat serving diverse industries worldwide.
//                 </p>
//               </div> */}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground animate-pulse-glow">
//                 Free Consulting
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
//               >
//                 Learn More
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 pt-8">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary">2018</div>
//                 <div className="text-sm text-muted-foreground">Founded</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary">22+</div>
//                 <div className="text-sm text-muted-foreground">Languages Supported</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary">24/7</div>
//                 <div className="text-sm text-muted-foreground">Live Support</div>
//               </div>
//             </div>
//           </div>

//           {/* Visual Elements */}
//           <div className="relative">
//             <div className="relative w-full h-96 flex items-center justify-center">
//               {/* Central Shield */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
//                   <Shield className="w-16 h-16 text-primary animate-float" />
//                 </div>
//               </div>

//               {/* Floating Icons */}
//               <div
//                 className="absolute top-8 left-8 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
//                 style={{ animationDelay: "0.5s" }}
//               >
//                 <Lock className="w-6 h-6 text-primary" />
//               </div>
//               <div
//                 className="absolute top-8 right-8 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
//                 style={{ animationDelay: "1s" }}
//               >
//                 <Zap className="w-6 h-6 text-primary" />
//               </div>
//               <div
//                 className="absolute bottom-8 left-16 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
//                 style={{ animationDelay: "1.5s" }}
//               >
//                 <Globe className="w-6 h-6 text-primary" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




"use client"

import { Button } from "@/components/ui/button"
import { Shield, Lock, Zap, Globe, Mail, ShieldAlert, Search, BookOpen, Smartphone, Cloud, Code } from "lucide-react"
import { IndustriesSection } from "./industries-section"

export function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen   flex items-center justify-center relative overflow-hidden ">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
        <div className="absolute inset-0 dark:bg-[url('/cybersecurity-network-pattern.jpg')] opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-balance">
                  Empowering Tomorrow, <span className="text-primary">Securing Today</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Innovate with Confidence in Cybersecurity and Software Excellence. At JetHat, we fuse cybersecurity,
                  artificial intelligence, and cloud solutions to protect your growth, empowering you to innovate boldly
                  without compromise.
                </p>
                <p className="text-lg text-primary font-semibold">अनुक्षणं रक्षामहे (We Protect Every Moment)</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground animate-pulse-glow">
                  Free Consulting
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2018</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">22+</div>
                  <div className="text-sm text-muted-foreground">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Live Support</div>
                </div>
              </div> */}
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Central Shield */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Shield className="w-16 h-16 text-primary animate-float" />
                  </div>
                </div>

                {/* Floating Icons */}
                <div
                  className="absolute top-8 left-8 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div
                  className="absolute top-8 right-8 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div
                  className="absolute bottom-8 left-16 w-12 h-12 bg-card rounded-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Globe className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 <IndustriesSection />

 {/* Our Services Section */}
      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Fortify your digital fortress with our cutting-edge cybersecurity solutions. Elevate your business through
            bespoke software development, where innovation meets functionality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development",
                description: "Crafting seamless digital experiences through expert web development, where innovation meets user-centric design.",
                points: ["Full-stack development", "Responsive web design"],
                icon: <Code className="w-8 h-8 text-primary" />,
              },
              {
                title: "Cloud Services",
                description: "Unlock unparalleled scalability and efficiency with our transformative cloud services, reshaping the way you harness and leverage digital resources.",
                points: ["Scalability", "Flexibility and Accessibility"],
                icon: <Cloud className="w-8 h-8 text-primary" />,
              },
              {
                title: "Mobile Application Development",
                description: "Elevate your brand's presence and engagement with expertly crafted mobile applications.",
                points: ["Cross-Platform Compatibility", "User-Centric Design"],
                icon: <Smartphone className="w-8 h-8 text-primary" />,
              },
              {
                title: "Cyber Security",
                description: "Protect your computer systems, networks, and data from theft, damage, or unauthorized access.",
                points: ["Advanced Threat Detection and Prevention", "Security Awareness Training"],
                icon: <ShieldAlert className="w-8 h-8 text-primary" />,
              },
              {
                title: "E-Learning",
                description: "Revolutionize education with our e-learning services, fostering dynamic online learning experiences.",
                points: ["Accessibility", "Interactive Learning Tools"],
                icon: <BookOpen className="w-8 h-8 text-primary" />,
              },
              {
                title: "Secure Code Review",
                description: "Elevate your software's security posture with our meticulous secure code review service, identifying and fortifying vulnerabilities for a resilient codebase.",
                points: ["Vulnerability Detection", "Comprehensive Analysis"],
                icon: <Search className="w-8 h-8 text-primary" />,
              },
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Who We Are</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Jethat Cybersecurity Private Limited is a cutting-edge firm specializing in cybersecurity and software
            development. With a relentless commitment to innovation, we safeguard digital landscapes through advanced
            threat detection and robust software solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Vision",
                description: "Jethat Cybersecurity Private Limited envisions a digitally secure world, where businesses thrive without compromise on data integrity and user privacy.",
              },
              {
                title: "Expertise",
                description: "We specialize in cybersecurity and software development, boasting a team of seasoned professionals with deep knowledge in both domains.",
              },
              {
                title: "Innovation",
                description: "At the core of our ethos is innovation. We consistently leverage cutting-edge technologies to stay ahead of evolving cyber threats and deliver state-of-the-art software solutions.",
              },
              {
                title: "Comprehensive Security",
                description: "Our cybersecurity services encompass advanced threat detection, risk assessment, and proactive measures to fortify organizations against cyber threats.",
              },
              {
                title: "Client-Centric Approach",
                description: "Our focus is on understanding and addressing the specific challenges faced by our clients, ensuring tailored solutions that meet their objectives and exceed expectations.",
              },
              {
                title: "Commitment to Quality",
                description: "We adhere to the highest standards of quality in both cybersecurity practices and software development, ensuring reliability, scalability, and resilience in every solution we deliver.",
              },
              {
                title: "Collaborative Partnerships",
                description: "Building lasting partnerships with our clients is integral to our mission. We work closely with organizations, providing ongoing support and adapting our services to meet evolving needs.",
              },
              {
                title: "Continuous Improvement",
                description: "In fields of cybersecurity and software development, we remain agile and responsive. We continually refine our approaches, adopting emerging technologies to keep our clients at the forefront of digital innovation and security.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Call to Action Section */}
      {/* <section id="cta" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive cybersecurity solutions today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-background text-primary hover:bg-secondary">
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-primary"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section> */}
      {/* Enhanced Advanced Protection Section with Animated Threads */}
      <section id="advanced-protection" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Advanced Protection</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Experience our comprehensive security approach that protects your digital assets from all angles.
          </p>
          <div className="relative flex justify-center items-center h-64 md:h-96">
            {/* Rotating Circle with Threads */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 animate-spin-slow">
              {/* Thread Lines (Dashed) */}
              <div className="absolute  inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow-reverse" />
              {[
                { name: "Encryption", icon: <Lock className="w-6 h-6 text-primary" /> },
                { name: "Global Protection", icon: <Globe className="w-6 h-6 text-primary" /> },
                { name: "Secure Infrastructure", icon: <Shield className="w-6 h-6 text-primary" /> },
                { name: "AI Defense", icon: <Zap className="w-6 h-6 text-primary" /> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="absolute w-24 h-24 bg-card rounded-full flex flex-col items-center justify-center border border-primary/20 animate-float"
                  style={{
                    transform: `rotate(${index * 90}deg) translate(100px) rotate(-${index * 90}deg)`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  {item.icon}
                  <span className="text-primary text-sm font-semibold mt-2 text-center">{item.name}</span>
                </div>
              ))}
              {/* In-between Animated Icons */}
              {[
                <ShieldAlert className="w-5 h-5 text-primary/70" />,
                <Lock className="w-5 h-5 text-primary/70" />,
                <Zap className="w-5 h-5 text-primary/70" />,
                <Globe className="w-5 h-5 text-primary/70" />,
              ].map((icon, index) => (
                <div
                  key={`in-between-${index}`}
                  className="absolute w-12 h-12 bg-card/50  rounded-full flex items-center justify-center animate-float"
                  style={{
                    transform: `rotate(${index * 90 + 45}deg) translate(80px) rotate(-${index * 90 + 45}deg)`,
                    animationDelay: `${index * 0.4 + 0.15}s`,
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      {/* <section id="testimonials" className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience with our cybersecurity solutions.
          </p>
          <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground italic">
              "Jethat's cloud security implementation was seamless and highly effective. Their team worked closely with us
              to understand our unique requirements and delivered a solution that perfectly addressed our needs."
            </p>
            <div className="mt-4 text-right">
              <p className="text-primary font-semibold">Emily Rodriguez</p>
              <p className="text-muted-foreground">IT Director, Healthcare Innovations</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Button key={i} variant="outline" size="sm" className="text-primary">
                {i}
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Clients Section */}
      <section id="clients" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide cybersecurity solutions to organizations across various industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Tech Innovations Inc.",
              "Global Banking Corp",
              "Healthcare Solutions",
              "Retail Enterprises",
              "Manufacturing Group",
              "Education Systems",
            ].map((client, index) => (
              <div key={index} className="bg-card p-4 rounded-lg flex items-center justify-center border border-primary/20">
                <span className="text-primary font-semibold">{client} Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section id="stay-updated" className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest cybersecurity insights, trends, and updates.
          </p>
          <div className="flex justify-center max-w-md mx-auto">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-l-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-secondary text-primary-foreground rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">We respect your privacy. You can unsubscribe at any time.</p>
        </div>
      </section>

      
    </div>
  )
}
