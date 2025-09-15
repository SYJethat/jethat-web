
// import Image from "next/image"
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Shield, Lock, Zap, Globe, CheckCircle, ArrowRight, Eye } from "lucide-react"
// import { useState } from "react"
// // import { Navigation } from "@/components/navigation"
// // import { Footer } from "@/components/footer"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Modal } from "@/components/modal"
// // import { Shield, Lock, Zap, Globe, CheckCircle, ArrowRight, Eye } from "lucide-react"
// // import Image from "next/image"
// // 
// interface CaseStudy {
//   id: string
//   title: string
//   client: string
//   description: string
//   challenge: string
//   solution: string
//   results: string[]
//   image: string
// }

// const caseStudies: CaseStudy[] = [
//   {
//     id: "securebank",
//     title: "SecureBank Transformation",
//     client: "SecureBank",
//     description: "How JetHat helped SecureBank implement enterprise-grade cybersecurity solutions, protecting millions of customer accounts and ensuring regulatory compliance.",
//     challenge: "SecureBank was facing increasing cyber threats targeting their online banking platform. Legacy systems lacked modern security measures, and compliance requirements were becoming more stringent with new regulations.",
//     solution: "JetHat implemented a comprehensive cybersecurity framework combining advanced threat detection, secure infrastructure, and continuous monitoring.",
//     results: ["99.9% Uptime Achieved", "85% Reduction in Threats", "100% Compliance Rate", "3x Faster Response"],
//     image: "/logo2.png"
//   },
//   {
//     id: "techcorp",
//     title: "TechCorp Digital Migration",
//     client: "TechCorp Inc.",
//     description: "Complete digital transformation for a Fortune 500 company, migrating legacy systems to modern cloud infrastructure with zero downtime.",
//     challenge: "TechCorp's outdated systems were causing operational inefficiencies and increasing maintenance costs. The company needed to modernize while maintaining 24/7 service availability.",
//     solution: "Implemented a phased migration strategy with automated testing, real-time monitoring, and rollback capabilities to ensure seamless transition.",
//     results: ["Zero Downtime Migration", "40% Cost Reduction", "200% Performance Improvement", "Enhanced Scalability"],
//     image: "/logo2.png"
//   },
//   {
//     id: "healthcare-plus",
//     title: "Healthcare Plus Data Security",
//     client: "Healthcare Plus",
//     description: "Secured patient data and implemented HIPAA-compliant systems for a major healthcare provider, protecting sensitive medical information.",
//     challenge: "Healthcare Plus needed to comply with strict HIPAA regulations while handling millions of patient records. Previous breaches had eroded patient trust.",
//     solution: "Deployed end-to-end encryption, multi-factor authentication, and automated compliance monitoring systems.",
//     results: ["100% HIPAA Compliance", "Zero Data Breaches", "95% Patient Satisfaction", "50% Faster Data Access"],
//     image: "/logo2.png"
//   }
// ]
//  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const openModal = (caseStudy: CaseStudy) => {
//     setSelectedCaseStudy(caseStudy)
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//     setSelectedCaseStudy(null)
//   }

// export default function CaseStudyPage() {
 
// // export default function CaseStudyPage() {
//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       <main>



//         {/* Case Studies Grid */}
//         <section className="py-16 bg-background">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {caseStudies.map((caseStudy) => (
//                 <Card key={caseStudy.id} className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
//                   <CardHeader>
//                     <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                       <Image
//                         src={caseStudy.image}
//                         alt={caseStudy.client}
//                         width={32}
//                         height={32}
//                         className="rounded"
//                       />
//                     </div>
//                     <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
//                     <p className="text-primary font-medium">{caseStudy.client}</p>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground mb-6 line-clamp-3">
//                       {caseStudy.description}
//                     </p>
//                     <Button
//                       onClick={() => openModal(caseStudy)}
//                       className="w-full group-hover:bg-secondary transition-colors"
//                     >
//                       <Eye className="w-4 h-4 mr-2" />
//                       Read More
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

      

//       {/* Modal for Case Study Details */}
//       {selectedCaseStudy && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           title={selectedCaseStudy.title}
//         >
//           <div className="space-y-6">
//             <div>
//               <h4 className="font-semibold text-primary mb-2">Client: {selectedCaseStudy.client}</h4>
//               <p className="text-muted-foreground">{selectedCaseStudy.description}</p>
//             </div>

//             <div>
//               <h4 className="font-semibold text-primary mb-2">The Challenge</h4>
//               <p className="text-muted-foreground">{selectedCaseStudy.challenge}</p>
//             </div>

//             <div>
//               <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
//               <p className="text-muted-foreground">{selectedCaseStudy.solution}</p>
//             </div>

//             <div>
//               <h4 className="font-semibold text-primary mb-2">Key Results</h4>
//               <ul className="space-y-2">
//                 {selectedCaseStudy.results.map((result, index) => (
//                   <li key={index} className="flex items-center gap-2 text-muted-foreground">
//                     <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
//                     {result}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </Modal>
//       )}




//         {/* Hero Section */}





//         <section className="py-20 bg-gradient-to-br from-background via-background to-card">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center space-y-6">
//               <h1 className="text-4xl md:text-6xl font-bold text-balance">
//                 Case Study: <span className="text-primary">SecureBank Transformation</span>
//               </h1>
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//                 How JetHat helped SecureBank implement enterprise-grade cybersecurity solutions,
//                 protecting millions of customer accounts and ensuring regulatory compliance.
//               </p>
//               <div className="flex justify-center gap-4">
//                 <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
//                   Download Full Case Study
//                 </Button>
//                 <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
//                   View Similar Projects
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Challenge Section */}
//         <section className="py-16 bg-muted/50">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 <h2 className="text-3xl md:text-4xl font-bold">The Challenge</h2>
//                 <p className="text-lg text-muted-foreground">
//                   SecureBank was facing increasing cyber threats targeting their online banking platform.
//                   Legacy systems lacked modern security measures, and compliance requirements were becoming
//                   more stringent with new regulations.
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
//                     <span className="text-muted-foreground">Outdated security infrastructure vulnerable to modern attacks</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
//                     <span className="text-muted-foreground">Non-compliance with PCI DSS and other financial regulations</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
//                     <span className="text-muted-foreground">Increasing frequency of DDoS attacks and phishing attempts</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="relative">
//                 <div className="bg-card p-8 rounded-lg border border-primary/20">
//                   <div className="text-center space-y-4">
//                     <div className="text-4xl font-bold text-primary">2.3M</div>
//                     <div className="text-muted-foreground">Customer Accounts</div>
//                   </div>
//                   <div className="text-center space-y-4 mt-6">
//                     <div className="text-4xl font-bold text-primary">$50B+</div>
//                     <div className="text-muted-foreground">Assets Under Management</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Solution Section */}
//         <section className="py-16 bg-background">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center space-y-6 mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold">Our Solution</h2>
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//                 JetHat implemented a comprehensive cybersecurity framework combining advanced threat detection,
//                 secure infrastructure, and continuous monitoring.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
//                 <CardHeader>
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                     <Shield className="w-6 h-6 text-primary" />
//                   </div>
//                   <CardTitle>Advanced Threat Detection</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     Implemented AI-powered threat detection system that identifies and blocks malicious activities in real-time.
//                   </p>
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
//                 <CardHeader>
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                     <Lock className="w-6 h-6 text-primary" />
//                   </div>
//                   <CardTitle>Secure Infrastructure</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     Migrated to cloud-based infrastructure with end-to-end encryption and multi-factor authentication.
//                   </p>
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
//                 <CardHeader>
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                     <Globe className="w-6 h-6 text-primary" />
//                   </div>
//                   <CardTitle>Compliance Automation</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     Automated compliance monitoring and reporting systems to ensure continuous regulatory adherence.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* Results Section */}
//         <section className="py-16 bg-muted/50">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center space-y-6 mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold">Measurable Results</h2>
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//                 The implementation delivered significant improvements in security posture and operational efficiency.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               <div className="text-center space-y-4">
//                 <div className="text-4xl font-bold text-primary">99.9%</div>
//                 <div className="text-muted-foreground">Uptime Achieved</div>
//                 <div className="text-sm text-muted-foreground">Previously 95%</div>
//               </div>
//               <div className="text-center space-y-4">
//                 <div className="text-4xl font-bold text-primary">85%</div>
//                 <div className="text-muted-foreground">Reduction in Threats</div>
//                 <div className="text-sm text-muted-foreground">Blocked attacks</div>
//               </div>
//               <div className="text-center space-y-4">
//                 <div className="text-4xl font-bold text-primary">100%</div>
//                 <div className="text-muted-foreground">Compliance Rate</div>
//                 <div className="text-sm text-muted-foreground">Regulatory standards</div>
//               </div>
//               <div className="text-center space-y-4">
//                 <div className="text-4xl font-bold text-primary">3x</div>
//                 <div className="text-muted-foreground">Faster Response</div>
//                 <div className="text-sm text-muted-foreground">To security incidents</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Timeline Section */}
//         <section className="py-16 bg-background">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center space-y-6 mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold">Project Timeline</h2>
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//                 The transformation was completed in phases over 8 months with minimal disruption to operations.
//               </p>
//             </div>

//             <div className="space-y-8">
//               {[
//                 { phase: "Phase 1: Assessment", duration: "Month 1-2", description: "Comprehensive security audit and risk assessment" },
//                 { phase: "Phase 2: Planning", duration: "Month 2-3", description: "Detailed implementation plan and architecture design" },
//                 { phase: "Phase 3: Implementation", duration: "Month 3-6", description: "System migration and security feature deployment" },
//                 { phase: "Phase 4: Testing & Go-Live", duration: "Month 6-7", description: "Thorough testing and production deployment" },
//                 { phase: "Phase 5: Monitoring", duration: "Month 7-8", description: "Continuous monitoring and optimization" },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start gap-6">
//                   <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
//                     <CheckCircle className="w-6 h-6 text-primary-foreground" />
//                   </div>
//                   <div className="flex-grow">
//                     <div className="flex items-center gap-4 mb-2">
//                       <h3 className="text-xl font-semibold">{item.phase}</h3>
//                       <span className="text-primary font-medium">{item.duration}</span>
//                     </div>
//                     <p className="text-muted-foreground">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-primary text-primary-foreground">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Security?</h2>
//             <p className="text-xl mb-8 max-w-3xl mx-auto">
//               Learn how JetHat can help your organization achieve enterprise-grade cybersecurity.
//             </p>
//             <div className="flex justify-center gap-4">
//               <Button size="lg" className="bg-background text-primary hover:bg-secondary">
//                 Schedule Consultation
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-background text-background hover:bg-background hover:text-primary"
//               >
//                 View All Case Studies
//               </Button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }

"use client";

import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Zap, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "securebank",
    title: "SecureBank Transformation",
    client: "SecureBank",
    description: "How JetHat helped SecureBank implement enterprise-grade cybersecurity solutions, protecting millions of customer accounts and ensuring regulatory compliance.",
    challenge: "SecureBank was facing increasing cyber threats targeting their online banking platform. Legacy systems lacked modern security measures, and compliance requirements were becoming more stringent with new regulations.",
    solution: "JetHat implemented a comprehensive cybersecurity framework combining advanced threat detection, secure infrastructure, and continuous monitoring.",
    results: ["99.9% Uptime Achieved", "85% Reduction in Threats", "100% Compliance Rate", "3x Faster Response"],
    image: "/logo2.png",
  },
  {
    id: "techcorp",
    title: "TechCorp Digital Migration",
    client: "TechCorp Inc.",
    description: "Complete digital transformation for a Fortune 500 company, migrating legacy systems to modern cloud infrastructure with zero downtime.",
    challenge: "TechCorp's outdated systems were causing operational inefficiencies and increasing maintenance costs. The company needed to modernize while maintaining 24/7 service availability.",
    solution: "Implemented a phased migration strategy with automated testing, real-time monitoring, and rollback capabilities to ensure seamless transition.",
    results: ["Zero Downtime Migration", "40% Cost Reduction", "200% Performance Improvement", "Enhanced Scalability"],
    image: "/logo2.png",
  },
  {
    id: "healthcare-plus",
    title: "Healthcare Plus Data Security",
    client: "Healthcare Plus",
    description: "Secured patient data and implemented HIPAA-compliant systems for a major healthcare provider, protecting sensitive medical information.",
    challenge: "Healthcare Plus needed to comply with strict HIPAA regulations while handling millions of patient records. Previous breaches had eroded patient trust.",
    solution: "Deployed end-to-end encryption, multi-factor authentication, and automated compliance monitoring systems.",
    results: ["100% HIPAA Compliance", "Zero Data Breaches", "95% Patient Satisfaction", "50% Faster Data Access"],
    image: "/logo2.png",
  },
];

export default function CaseStudyPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy>(caseStudies[0]);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Case Study: <span className="text-primary">{selectedCaseStudy.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {selectedCaseStudy.description}
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                  Download Full Case Study
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Similar Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Navigation and Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation */}
            <nav className="sticky top-0 bg-background z-10 py-4 border-b border-primary/20 mb-12">
              <ul className="flex flex-wrap justify-center gap-4">
                {caseStudies.map((caseStudy, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCaseStudy(caseStudy)}
                      className={`text-primary hover:text-primary/80 transition-colors ${
                        selectedCaseStudy.id === caseStudy.id ? 'font-bold underline' : ''
                      }`}
                    >
                      {caseStudy.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Animated Case Study Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCaseStudy.id}
                initial={{ opacity: 0, x: caseStudies.indexOf(selectedCaseStudy) % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: caseStudies.indexOf(selectedCaseStudy) % 2 === 0 ? 100 : -100 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${
                  caseStudies.indexOf(selectedCaseStudy) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-6 bg-card p-6 rounded-lg border border-primary/20`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={selectedCaseStudy.image}
                    alt={`${selectedCaseStudy.client} illustration`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Client: {selectedCaseStudy.client}</h3>
                    <p className="text-muted-foreground">{selectedCaseStudy.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">{selectedCaseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">{selectedCaseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Key Results</h4>
                    <ul className="space-y-2">
                      {selectedCaseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">The Challenge</h2>
                <p className="text-lg text-muted-foreground">
                  {selectedCaseStudy.challenge}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Outdated security infrastructure vulnerable to modern attacks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Non-compliance with PCI DSS and other financial regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Increasing frequency of DDoS attacks and phishing attempts</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-card p-8 rounded-lg border border-primary/20">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">2.3M</div>
                    <div className="text-muted-foreground">Customer Accounts</div>
                  </div>
                  <div className="text-center space-y-4 mt-6">
                    <div className="text-4xl font-bold text-primary">$50B+</div>
                    <div className="text-muted-foreground">Assets Under Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Solution</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {selectedCaseStudy.solution}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Advanced Threat Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Implemented AI-powered threat detection system that identifies and blocks malicious activities in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Secure Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Migrated to cloud-based infrastructure with end-to-end encryption and multi-factor authentication.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Compliance Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automated compliance monitoring and reporting systems to ensure continuous regulatory adherence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Measurable Results</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The implementation delivered significant improvements in security posture and operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {selectedCaseStudy.results.map((result, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">
                    {result.split(' ')[0]}
                  </div>
                  <div className="text-muted-foreground">
                    {result.split(' ').slice(1).join(' ')}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {index === 0 ? 'Previously 95%' : index === 1 ? 'Blocked attacks' : index === 2 ? 'Regulatory standards' : 'To security incidents'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Project Timeline</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The transformation was completed in phases over 8 months with minimal disruption to operations.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { phase: "Phase 1: Assessment", duration: "Month 1-2", description: "Comprehensive security audit and risk assessment" },
                { phase: "Phase 2: Planning", duration: "Month 2-3", description: "Detailed implementation plan and architecture design" },
                { phase: "Phase 3: Implementation", duration: "Month 3-6", description: "System migration and security feature deployment" },
                { phase: "Phase 4: Testing & Go-Live", duration: "Month 6-7", description: "Thorough testing and production deployment" },
                { phase: "Phase 5: Monitoring", duration: "Month 7-8", description: "Continuous monitoring and optimization" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">{item.phase}</h3>
                      <span className="text-primary font-medium">{item.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Security?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Learn how JetHat can help your organization achieve enterprise-grade cybersecurity.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-background text-primary hover:bg-secondary">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background text-background hover:bg-background hover:text-primary"
              >
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}