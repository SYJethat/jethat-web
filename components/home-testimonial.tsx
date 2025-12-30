"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { gsapAnimations, GSAP_CONFIG } from '@/lib/gsap-utils';
import "swiper/css";
import "swiper/css/navigation";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Shri Lakshminarasimhan",
    role: "Executive Officer",
    company: "Samskrit Promotion Foundation",
    content: "Seamless multilingual Sanskrit learning platform with enhanced student engagement and exceptional security measures.",
    avatar: "/Laxminarsimhan.jpg",
    rating: 5,
  },
  {
    name: "Amit Kumar Tiwari",
    role: "CTO",
    company: "OCIO Technology Pvt. Ltd.",
    content: "Streamlined multilingual customer support with improved efficiency, satisfaction, and robust cybersecurity protocols.",
    avatar: "/Laxminarsimhan.jpg",
    rating: 5,
  },
  {
    name: "Ravi Prakash",
    role: "CEO",
    company: "Branding Spoon",
    content: "Natural Hindi voice responses made our platform accessible to regional audiences with enterprise-grade security.",
    avatar: "/Laxminarsimhan.jpg",
    rating: 5,
  },
  {
    name: "Anurag Bishwas",
    role: "CEO",
    company: "Xhadow Media Pvt. Ltd.",
    content: "Tamil and Gujarati support delivered inclusive healthcare communication effortlessly with advanced threat protection.",
    avatar: "/Laxminarsimhan.jpg",
    rating: 5,
  },
  {
    name: "Dheeraj Singh",
    role: "CEO",
    company: "Jethat",
    content: "Outstanding cybersecurity solutions that protect our digital assets while maintaining seamless user experience.",
    avatar: "/Laxminarsimhan.jpg",
    rating: 5,
  },
  {
    name: "Suraj Yadav",
    role: "CTO",
    company: "SecureFlow Systems",
    content: "Comprehensive security infrastructure that scales with our business needs and provides 24/7 threat monitoring.",
    avatar: "/Laxminarsimhan.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const testimonialCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP Animations
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate badge
      if (badgeRef.current) {
        gsap.fromTo(badgeRef.current,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.normal,
            ease: GSAP_CONFIG.ease.bounce,
            scrollTrigger: {
              trigger: badgeRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate title and description
      if (titleRef.current && descriptionRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth }
        )
        .fromTo(descriptionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: GSAP_CONFIG.duration.normal, ease: GSAP_CONFIG.ease.smooth },
          "-=0.3"
        );
      }

      // Animate swiper container
      if (swiperRef.current) {
        gsap.fromTo(swiperRef.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: swiperRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate testimonial cards with stagger
      testimonialCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: GSAP_CONFIG.duration.normal,
              ease: GSAP_CONFIG.ease.smooth,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Add hover animations
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: GSAP_CONFIG.ease.smooth
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: GSAP_CONFIG.ease.smooth
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#FF8C00]/5 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left justify-start ">
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-start space-x-2 bg-gradient-to-r from-[#FF8C00]/10 to-[#FFB300]/10 dark:bg-gradient-to-r dark:from-[#FF8C00]/20 dark:to-[#FFB300]/20 rounded-full px-6 py-3 mb-6 shadow-lg border border-[#FF8C00]/30 backdrop-blur-sm">
            <Quote className="h-5 w-5 text-[#FF8C00]" />
            <span className="text-sm font-bold text-[#FF8C00]">Client Reviews</span>
          </div>

          {/* Title */}
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Trusted by India's <br />
            <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">
              Leading Businesses
            </span>
          </h2>

          {/* Description */}
          {/* <p ref={descriptionRef} className="text-xl text-left text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See why top companies rely on our cybersecurity and AI solutions to elevate their digital security and customer engagement.
          </p> */}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-end items-center mb-4">
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-3  bg-white dark:bg-gray-800 border-[#FF8C00]/30 hover:border-[#FF8C00]/60 hover:bg-[#FF8C00]/10 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-[#FF8C00]" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3  bg-white dark:bg-gray-800  border-[#FF8C00]/30 hover:border-[#FF8C00]/60 hover:bg-[#FF8C00]/10 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-[#FF8C00]" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div ref={swiperRef}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            navigation={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={el => { testimonialCardsRef.current[index] = el; }}
                  className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm  p-8 shadow-xl hover:shadow-sm transition-all duration-500 border border-[#FF8C00]/20 dark:border-[#FF8C00]/30 hover:border-[#FF8C00]/50 h-full group cursor-pointer relative overflow-hidden"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/5 to-[#FFB300]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 text-[#FFB300] fill-[#FFB300] group-hover:scale-110 transition-transform duration-300" 
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <Quote className="w-12 h-12 text-[#FF8C00]" />
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed text-base font-medium">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-[#FF8C00]/30 group-hover:ring-[#FF8C00]/60 transition-all duration-300">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-[#FF8C00] transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-[#FF8C00] font-semibold">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF8C00]/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-4 w-1 h-1 bg-[#FFB300]/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '1s' }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slide Indicators */}
        {/* <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperInstance?.slideTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#FF8C00] scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-[#FF8C00]/50'
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;