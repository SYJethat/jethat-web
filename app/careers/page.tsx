'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Users, Target, Award, Lightbulb, ChevronDown, ChevronUp, MapPin, Clock, DollarSign } from "lucide-react"
import { useState } from "react"

export default function CareersPage() {
  const [expandedRoles, setExpandedRoles] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleRoleExpansion = (index: number) => {
    setExpandedRoles(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const openRoles = [
    {
      title: "AI/ML Researcher",
      department: "Research & Development",
      location: "Noida, UP",
      type: "Full-time",
      salary: "₹8-15 LPA",
      description: "We are seeking a talented AI/ML Researcher to join our innovative team. You will work on cutting-edge projects involving natural language processing, computer vision, and generative AI models. This role offers the opportunity to contribute to groundbreaking research that impacts real-world applications in cybersecurity and beyond.",
      requirements: [
        "PhD or Master's in Computer Science, AI, or related field",
        "Strong experience with Python, TensorFlow, PyTorch",
        "Knowledge of NLP, CV, or generative models",
        "Experience with research publications preferred",
        "Ability to work in collaborative, fast-paced environment"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Flexible working hours",
        "Continuous learning and conference attendance",
        "State-of-the-art research facilities",
        "Health and wellness programs"
      ],
      techStack: ["Python", "TensorFlow", "PyTorch", "CUDA", "Jupyter", "Git"]
    },
    {
      title: "Cybersecurity Engineer",
      department: "Security",
      location: "Noida, UP",
      type: "Full-time",
      salary: "₹6-12 LPA",
      description: "Join our cybersecurity team as an Engineer where you'll focus on penetration testing, vulnerability assessment, and threat mitigation. You'll work on securing enterprise applications, conducting security audits, and implementing robust security measures to protect our clients' digital assets.",
      requirements: [
        "Bachelor's in Computer Science or related field",
        "Certifications like CEH, OSCP, CISSP preferred",
        "Experience with penetration testing tools",
        "Knowledge of web application security",
        "Strong problem-solving skills"
      ],
      benefits: [
        "Comprehensive health insurance",
        "Professional development budget",
        "Flexible work arrangements",
        "Team building activities",
        "Performance bonuses"
      ],
      techStack: ["Kali Linux", "Metasploit", "Burp Suite", "Wireshark", "Nessus", "SIEM tools"]
    },
    {
      title: "Web & Mobile Developer",
      department: "Development",
      location: "Noida, UP",
      type: "Full-time",
      salary: "₹5-10 LPA",
      description: "As a Web & Mobile Developer, you'll build responsive, secure, and scalable applications for our clients. You'll work with modern frameworks and technologies to create user-friendly interfaces and robust backend systems that meet enterprise standards.",
      requirements: [
        "Bachelor's in Computer Science or equivalent",
        "Experience with React, Node.js, or mobile frameworks",
        "Knowledge of RESTful APIs and databases",
        "Understanding of security best practices",
        "Version control with Git"
      ],
      benefits: [
        "Modern development environment",
        "Learning and growth opportunities",
        "Work-life balance",
        "Collaborative team culture",
        "Competitive compensation"
      ],
      techStack: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Cloud/DevOps Engineer",
      department: "Infrastructure",
      location: "Noida, UP",
      type: "Full-time",
      salary: "₹7-13 LPA",
      description: "We're looking for a Cloud/DevOps Engineer to manage our scalable and secure cloud infrastructure. You'll design, implement, and maintain CI/CD pipelines, containerized applications, and cloud-native solutions that support our growing business needs.",
      requirements: [
        "Experience with AWS, Azure, or GCP",
        "Proficiency in Docker, Kubernetes",
        "Knowledge of IaC tools like Terraform",
        "Scripting with Bash/Python",
        "Understanding of monitoring and logging"
      ],
      benefits: [
        "Cloud certification reimbursements",
        "Remote work options",
        "Innovation time for personal projects",
        "Comprehensive benefits package",
        "Career advancement opportunities"
      ],
      techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "ELK Stack"]
    },
    {
      title: "Product/UX Designer",
      department: "Design",
      location: "Noida, UP",
      type: "Full-time",
      salary: "₹4-9 LPA",
      description: "As a Product/UX Designer, you'll craft intuitive and multilingual user interfaces for our diverse client base. You'll collaborate with cross-functional teams to create user-centered designs that balance functionality, security, and aesthetic appeal.",
      requirements: [
        "Degree in Design, HCI, or related field",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Experience with user research and prototyping",
        "Understanding of accessibility standards",
        "Portfolio showcasing design projects"
      ],
      benefits: [
        "Design tool subscriptions",
        "Creative freedom and autonomy",
        "User research budget",
        "Flexible schedule",
        "Professional design community"
      ],
      techStack: ["Figma", "Sketch", "Adobe XD", "InVision", "Principle", "Miro"]
    },
    {
      title: "Customer Success Specialist",
      department: "Customer Success",
      location: "Noida, UP",
      type: "Full-time",
      salary: "₹3-7 LPA",
      description: "Join our Customer Success team to deliver exceptional support and consultation to our clients. You'll act as the primary point of contact, ensuring client satisfaction, gathering feedback, and driving product adoption and retention.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "Experience in customer support or account management",
        "Strong communication and interpersonal skills",
        "Knowledge of SaaS business models",
        "Problem-solving and analytical abilities"
      ],
      benefits: [
        "Client interaction training",
        "Performance incentives",
        "Professional development",
        "Team collaboration events",
        "Work-life balance initiatives"
      ],
      techStack: ["CRM systems", "Helpdesk software", "Analytics tools", "Communication platforms"]
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

      
        {/* Open Positions */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Open Positions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore exciting opportunities to grow your career with us.
              </p>
              <div className="max-w-md mx-auto mt-6 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                  type="search"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10"
                  aria-label="Search jobs"
                />
              </div>
            </div>

            <div className="grid gap-6">
              {openRoles
                .filter(role =>
                  role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  role.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  role.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  role.type.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((role, index) => {
                  const isExpanded = expandedRoles.includes(index)
                  return (
                    <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge variant="secondary">{role.department}</Badge>
                              <Badge variant="outline">{role.location}</Badge>
                              <Badge variant="outline">{role.type}</Badge>
                              <Badge variant="default" className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />
                                {role.salary}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              onClick={() => toggleRoleExpansion(index)}
                              className="flex items-center gap-2"
                            >
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              {isExpanded ? 'Read Less' : 'Read More'}
                            </Button>
                            <Button className="bg-primary hover:bg-secondary text-primary-foreground">Apply Now</Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{role.description}</p>
                        {isExpanded && (
                          <div className="space-y-6 pt-4 border-t border-border">
                            <div>
                              <h4 className="font-semibold mb-2 text-primary">Requirements</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                {role.requirements.map((req, reqIndex) => (
                                  <li key={reqIndex}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-primary">Benefits</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                {role.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-primary">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {role.techStack.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
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

  {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Join JetHat?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                We offer more than just a job – we provide an environment where you can thrive, innovate, and make a real impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Competitive Compensation</h3>
                <p className="text-muted-foreground">Attractive salary packages, performance bonuses, and equity options for key roles.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Learning & Growth</h3>
                <p className="text-muted-foreground">Continuous learning opportunities, conference attendance, and professional development budgets.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Collaborative Culture</h3>
                <p className="text-muted-foreground">Work with talented professionals in a supportive, innovative environment.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Work-Life Balance</h3>
                <p className="text-muted-foreground">Flexible working hours, remote work options, and comprehensive wellness programs.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Modern Facilities</h3>
                <p className="text-muted-foreground">State-of-the-art office in Noida with cutting-edge technology and comfortable workspaces.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Innovation Focus</h3>
                <p className="text-muted-foreground">Dedicated time for personal projects and exploration of emerging technologies.</p>
              </div>
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
