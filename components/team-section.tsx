import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Suraj from '../public/suraj.jpeg'
import Dheeraj from '../public/dheeraj.png'
import Rajat from '../public/rajat.jpeg'
import Madhusudhan from '../public/madhusudhan.jpeg'
import Pawan from '../public/pawan.jpeg'
import Shashank from '../public/shashank.jpeg'
export function TeamSection() {
  const team = [
    {
      name: "Dheeraj Kumar Singh",
      role: "Director & Promoter",
      description: "Guides vision, strategy, and innovation across cybersecurity and AI.",
      initials: Dheeraj,
    },
    {
      name: "Susheela",
      role: "Director",
      description: "Oversees governance, operations, and strategic partnerships.",
      initials: "S",
    },
    {
      name: "Shashank Shukla",
      role: "Project Manager & Senior Android Developer",
      description: "Leads mobile and AI projects with expertise in AI/ML.",
      initials: Shashank,
    },
    {
      name: "Madhusodhan Pandey",
      role: "Team Lead, Android Developer",
      description: "Manages Android development and team coordination.",
      initials: Madhusudhan,
    },
    {
      name: "Rajat Sharma",
      role: "Senior Full Stack Developer",
      description: "Drives software excellence across full-stack development.",
      initials: Rajat,
    },
    {
      name: "Pawan Joshi",
      role: "Full Stack Software Developer",
      description: "Builds robust solutions with comprehensive development skills.",
      initials: Pawan,
    },
    {
      name: "Suraj Yadav",
      role: "AI/ML Engineer & Backend Developer",
      description: "Advances AI research and applications with backend expertise.",
      initials: Suraj,
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Meet our experienced team of cybersecurity experts, AI researchers, and software developers who are
            passionate about building secure, innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center"
            >
              <CardContent className="p-6">
                <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                    
                    <img src={member.initials.src} alt=""  />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm text-pretty">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Specialized Teams</h3>
              <p className="text-muted-foreground text-sm">
                <strong>AI & R&D Team:</strong> Experts in NLP, ML, and Indian language tools
                <br />
                <strong>Security & Development Teams:</strong> Specialists in secure code, penetration testing, and
                scalable platforms
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
