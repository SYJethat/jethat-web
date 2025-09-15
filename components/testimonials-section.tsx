"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      image: "/placeholder-user.jpg",
      content: "JetHat's cybersecurity solutions have been instrumental in protecting our infrastructure. Their AI-powered threat detection is unparalleled.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLabs",
      image: "/placeholder-user.jpg",
      content: "The team's expertise in cloud security and AI development helped us scale our operations securely. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Director, EduTech Solutions",
      image: "/placeholder-user.jpg",
      content: "Their multilingual AI solutions transformed our e-learning platform. Students from diverse backgrounds can now learn effectively.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic transition every 2 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isPaused, testimonials.length]);

  // Manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what industry leaders have to say about working with JetHat.
          </p>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Animated Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 max-h-64">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic text-sm">"{testimonials[currentIndex].content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonials[currentIndex].name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}