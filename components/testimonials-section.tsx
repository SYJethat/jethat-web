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
    <section className="py-16 bg-gray-100 dark:bg-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#FF8C00] hover:bg-[#FFB300] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#FF8C00] hover:bg-[#FFB300] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-[#FF8C00]/20 dark:border-[#FF8C00]/30 hover:border-[#FF8C00]/40 bg-white dark:bg-gray-900/95">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFB300] text-[#FFB300]" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonials[currentIndex].content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#FF8C00]/30">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-[#FF8C00] font-medium">{testimonials[currentIndex].role}</p>
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