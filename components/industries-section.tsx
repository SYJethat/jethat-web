// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { GraduationCap, BookOpen, Building, Briefcase, Heart } from "lucide-react"

// export function IndustriesSection() {
//   const industries = [
//     {
//       icon: GraduationCap,
//       title: "Education & E-Learning",
//       description:
//         "Virtual classrooms and multilingual content for remote and rural education providers, optimized for low connectivity.",
//     },
//     {
//       icon: BookOpen,
//       title: "Research & Publishing",
//       description:
//         "OCR, NLP, and editing tools for academic journals and regional publishers, enabling efficient digitization.",
//     },
//     {
//       icon: Building,
//       title: "Government & Public Sector",
//       description: "Secure document digitization, identity management, and compliance solutions for public services.",
//     },
//     {
//       icon: Briefcase,
//       title: "Enterprises & Startups",
//       description: "Scalable, secure web, mobile, and cloud systems with continuous threat monitoring.",
//     },
//     {
//       icon: Heart,
//       title: "Healthcare & Finance",
//       description: "Privacy-focused solutions for sensitive data, compliance with regulatory standards.",
//     },
//   ]

//   return (
//     <section className="py-20 bg-secondary/20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-balance">Industries We Serve</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//             JetHat supports diverse sectors with tailored solutions addressing unique challenges across multiple
//             industries.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {industries.map((industry, index) => (
//             <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                   <industry.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl">{industry.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground text-pretty">{industry.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Building, Briefcase, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IndustriesSection() {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description:
        "Virtual classrooms and multilingual content for remote and rural education providers, optimized for low connectivity.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: BookOpen,
      title: "Research & Publishing",
      description:
        "OCR, NLP, and editing tools for academic journals and regional publishers, enabling efficient digitization.",
      image: "https://images.unsplash.com/photo-1581093588401-7a1a1a1a1a1a?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Building,
      title: "Government & Public Sector",
      description: "Secure document digitization, identity management, and compliance solutions for public services.",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Briefcase,
      title: "Enterprises & Startups",
      description: "Scalable, secure web, mobile, and cloud systems with continuous threat monitoring.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Heart,
      title: "Healthcare & Finance",
      description: "Privacy-focused solutions for sensitive data, compliance with regulatory standards.",
      image: "https://images.unsplash.com/photo-1588776814546-1a1a1a1a1a1a?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const selectedIndustry = industries[currentIndex];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, industries.length]);

  return (
    <section className="py-20 bg-secondary/20" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            JetHat supports diverse sectors with tailored solutions addressing unique challenges across multiple
            industries.
          </p>
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 bg-secondary/20 z-10 py-4 border-b border-primary/20 mb-12">
          <ul className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <li key={index}>
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`text-primary hover:text-primary/80 transition-colors ${
                    currentIndex === index ? 'font-bold underline' : ''
                  }`}
                >
                  {industry.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Animated Industry Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry.title}
            initial={{ opacity: 0, scale: 0.8, y: industries.indexOf(selectedIndustry) % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: industries.indexOf(selectedIndustry) % 2 === 0 ? 20 : -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex flex-col ${
              industries.indexOf(selectedIndustry) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-6 bg-card p-6 rounded-lg border border-primary/20`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={selectedIndustry.image}
                alt={`${selectedIndustry.title} illustration`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <selectedIndustry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{selectedIndustry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{selectedIndustry.description}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}