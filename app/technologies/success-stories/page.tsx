import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, FileText, Shield, TrendingUp, Users, Award } from "lucide-react"

export default function SuccessStoriesPage() {
  const successStories = [
    {
      icon: GraduationCap,
      title: "Virtual Classroom for Remote Education",
      challenge: "Remote regions faced connectivity and infrastructure barriers to effective e-learning.",
      solution:
        "JetHat's Virtual Classroom with adaptive streaming, multilingual interfaces, and analytics for attendance and engagement.",
      results: [
        "30% increase in student participation",
        "20% reduction in dropouts",
        "Accessible education in low-bandwidth areas",
      ],
      impact: "30%",
      impactLabel: "Increase in Participation",
    },
    {
      icon: FileText,
      title: "Multilingual AI OCR & Publishing",
      challenge: "Regional publishers needed to digitize and summarize content in Indian languages.",
      solution: "Custom OCR and NLP models integrated into MagAI for efficient content processing.",
      results: ["40% faster content turnaround", "Improved accessibility", "Significant cost savings"],
      impact: "40%",
      impactLabel: "Faster Content Processing",
    },
    {
      icon: Shield,
      title: "Security Audit for Enterprise App",
      challenge: "An enterprise required a secure launch for a large-scale web and mobile application.",
      solution: "Comprehensive vulnerability assessments, penetration testing, and secure code remediation.",
      results: ["Zero major security incidents post-launch", "Enhanced compliance", "Increased customer trust"],
      impact: "100%",
      impactLabel: "Security Success Rate",
    },
  ]

  const metrics = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Average Performance Improvement",
      description: "Across all client projects",
    },
    { icon: Users, value: "50K+", label: "Users Impacted", description: "Through our solutions" },
    { icon: Award, value: "100%", label: "Client Satisfaction", description: "Project completion rate" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Proven Results</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover how JetHat's innovative solutions have transformed businesses across industries, delivering
                measurable results and driving digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {successStories.map((story, index) => (
                <div key={index} className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Story Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <story.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-balance">{story.title}</h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-red-600 mb-2">Challenge</h3>
                        <p className="text-muted-foreground text-pretty">{story.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">Solution</h3>
                        <p className="text-muted-foreground text-pretty">{story.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-green-600 mb-2">Results</h3>
                        <ul className="space-y-2">
                          {story.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                              <span className="text-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Impact Card */}
                  <div className="lg:col-span-1">
                    <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                      <div className="text-5xl font-bold text-primary mb-2">{story.impact}</div>
                      <div className="text-lg font-semibold mb-2">{story.impactLabel}</div>
                      <p className="text-muted-foreground text-pretty">
                        Measurable improvement achieved through our innovative solution.
                      </p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Impact by Numbers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Quantifiable results that demonstrate the effectiveness of our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                    <CardTitle className="text-xl">{metric.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-pretty">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">What Our Clients Say</h2>
              <Card className="max-w-4xl mx-auto p-8">
                <blockquote className="text-xl text-muted-foreground text-pretty mb-6">
                  "JetHat's innovative approach to multilingual AI and their deep understanding of the Indian market
                  helped us achieve results we never thought possible. Their technical expertise combined with cultural
                  sensitivity made all the difference."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold">Regional Publisher Client</div>
                  <div className="text-muted-foreground">Content Digitization Project</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Create Your Success Story?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Join our growing list of successful clients and experience the transformative power of our innovative
                solutions.
              </p>
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
