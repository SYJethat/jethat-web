import React, { useEffect, useRef } from 'react';
import { Newspaper, GraduationCap, Video, BookOpen, Bot, Languages, Library } from 'lucide-react';

const JetHatScrollFeatureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cards = [
    {
      title: 'MAG-AI',
      bullets: [
        'AI-powered content management system',
        'Streamlines content organization',
        'Intelligent automation & distribution',
      ],
      icon: <Newspaper className="h-6 w-6" />,
      smallIcon: <Newspaper className="h-4 w-4" />,
      bgColor: 'bg-[#FF8C00]',
      glowColor: 'shadow-[0_0_20px_rgba(255,140,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Virtual Naani',
      bullets: [
        'AI-powered magazine platform',
        'Subscription tracking & management',
        'Automated content delivery',
      ],
      icon: <Bot className="h-6 w-6" />,
      smallIcon: <Bot className="h-4 w-4" />,
      bgColor: 'bg-[#FFB300]',
      glowColor: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Anukaran AI',
      bullets: [
        'Advanced AI simulation platform',
        'Machine learning integration',
        'Intelligent data processing',
      ],
      icon: <Bot className="h-6 w-6" />,
      smallIcon: <Bot className="h-4 w-4" />,
      bgColor: 'bg-[#FF8C00]',
      glowColor: 'shadow-[0_0_20px_rgba(255,140,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'AI Based Multilingual LMS',
      bullets: [
        'Next-gen learning management system',
        'Multilingual support for global reach',
        'Personalized learning paths',
      ],
      icon: <GraduationCap className="h-6 w-6" />,
      smallIcon: <GraduationCap className="h-4 w-4" />,
      bgColor: 'bg-[#FFB300]',
      glowColor: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Virtual Classroom Solution',
      bullets: [
        'Secure video conferencing platform',
        'Interactive learning tools',
        'Designed for remote education',
      ],
      icon: <Video className="h-6 w-6" />,
      smallIcon: <Video className="h-4 w-4" />,
      bgColor: 'bg-[#FF8C00]',
      glowColor: 'shadow-[0_0_20px_rgba(255,140,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'E-Library Solution',
      bullets: [
        'Digital library management',
        'Centralized content delivery',
        'Advanced search & accessibility',
      ],
      icon: <BookOpen className="h-6 w-6" />,
      smallIcon: <BookOpen className="h-4 w-4" />,
      bgColor: 'bg-[#FFB300]',
      glowColor: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Multi Lingual Dictionary',
      bullets: [
        'Comprehensive language support',
        'AI-powered translations',
        'Cross-language reference tool',
      ],
      icon: <Languages className="h-6 w-6" />,
      smallIcon: <Languages className="h-4 w-4" />,
      bgColor: 'bg-[#FF8C00]',
      glowColor: 'shadow-[0_0_20px_rgba(255,140,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Sambhasini Multilingual AI',
      bullets: [
        'Advanced multilingual AI framework',
        'Natural language processing',
        'Cross-language communication',
      ],
      icon: <Library className="h-6 w-6" />,
      smallIcon: <Library className="h-4 w-4" />,
      bgColor: 'bg-[#FFB300]',
      glowColor: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]',
      image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=600&q=80',
    },
  ];

  useEffect(() => {
    const numCards = cards.length;
    const cardGap = 20;
    let ticking = false;

    const updateCards = () => {
      if (!containerRef.current) return;

      const start = containerRef.current.offsetTop;
      const end = start + containerRef.current.offsetHeight - window.innerHeight;
      let progress = 0;
      if (end > start) {
        progress = Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)));
      }

      cards.forEach((_, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const cardStart = index / numCards;
        const cardEnd = (index + 0.7) / numCards;
        const stackedPosition = index * cardGap;
        const isFirst = index === 0;

        // Smooth easing functions
        const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
        const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

        // Y position with smooth easing
        let y;
        if (progress <= cardStart) {
          y = isFirst ? stackedPosition : 900;
        } else if (progress >= cardEnd) {
          y = stackedPosition;
        } else {
          const frac = (progress - cardStart) / (cardEnd - cardStart);
          const easedFrac = easeOutQuart(frac);
          y = isFirst ? stackedPosition : 900 + easedFrac * (stackedPosition - 900);
        }

        // Scale with smooth easing
        let scale;
        if (progress <= cardStart) {
          scale = isFirst ? 1 : 0.9;
        } else if (progress >= cardEnd) {
          scale = 1;
        } else {
          const frac = (progress - cardStart) / (cardEnd - cardStart);
          const easedFrac = easeInOutQuart(frac);
          scale = isFirst ? 1 : 0.9 + easedFrac * 0.1;
        }

        // Opacity with smooth fade
        let opacity = 1;
        if (!isFirst) {
          const fadeStart = cardStart;
          const fadeEnd = cardStart + 0.12 / numCards;
          if (progress <= fadeStart) {
            opacity = 0;
          } else if (progress < fadeEnd) {
            const fadeFrac = (progress - fadeStart) / (fadeEnd - fadeStart);
            opacity = easeInOutQuart(fadeFrac);
          } else {
            opacity = 1;
          }
        }

        // Blur effect for depth
        const blur = progress < cardStart ? (isFirst ? 0 : 3) : 0;

        card.style.transform = `translateY(${y}px) scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.filter = `blur(${blur}px)`;
        card.style.zIndex = `${index + 1}`;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateCards);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateCards(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cards.length]);

  const handleLearnMore = (title: string) => {
    console.log(`${title} clicked`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50
     via-amber-50 to-orange-100 dark:from-black/30
  dark:via-black dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl 
          font-bold bg-gradient-to-r from-[#FF8C00] via-[#ff6a00] to-[#FF8C00]
           dark:from-[#FF8C00]  dark:text-white
          dark:via-[#ff8000] dark:to-[#FF8C00] bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300
           max-w-3xl mx-auto">
            Fortify your digital fortress with our cutting-edge cybersecurity solutions.
            Elevate your business through bespoke software development, where innovation meets functionality.
          </p>
        </div>

        {/* Cards container */}
        <div
          ref={containerRef}
          className="relative mb-20 "
          data-container
        >
          <div className="sticky top-0 h-screen flex items-center justify-center 
          overflow-hidden py-8">
            <div className="relative h-[500px] md:h-[500px] w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="card absolute top-0 left-0 right-0 mx-auto w-full h-[500px] bg-white/95 dark:bg-black/90 
                  backdrop-blur-sm rounded-3xl shadow-2xl border border-[#FF8C00]/20 dark:border-[gray]/30 will-change-transform
                   hover:border-[#FF8C00]/40 dark:hover:border-[white]/50 overflow-hidden"
                  data-index={index}
                  style={{ transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out, filter 0.5s ease-out' }}
                >
                  <div className="flex items-center h-full p-6 md:p-10">
                    {/* Left side - Content */}
                    <div className="flex-1 pr-8 flex flex-col justify-center h-full">
                      {/* Icon with gradient background */}
                      <div className={`inline-flex p-4 rounded-2xl ${card.bgColor} ${card.glowColor} text-white mb-4 transform hover:scale-110 transition-all duration-300 w-fit`}>
                        {card.icon}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight line-clamp-2">
                        {card.title}
                      </h3>

                      {/* Bullets with enhanced styling */}
                      <ul className="space-y-3 mb-6 flex-grow">
                        {card.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start text-gray-800 dark:text-gray-200 group">
                            <span
                              className={`inline-block w-2 h-2 rounded-full ${card.bgColor} mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-200 ${card.glowColor}`}
                            />
                            <span className="text-sm md:text-base leading-relaxed font-medium line-clamp-2">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA with enhanced hover effects */}
                      <button
                        type="button"
                        className={`group flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${card.bgColor} text-white shadow-lg border border-[#FF8C00]/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${card.glowColor} w-fit`}
                        onClick={() => handleLearnMore(card.title)}
                      >
                        <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:scale-110 transition-transform duration-300">
                          {card.smallIcon}
                        </div>
                        <span className="text-sm md:text-base font-semibold">Learn more</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Right side - Image with overlay effect */}
                    <div className="flex-shrink-0 w-[45%] h-full relative group flex items-center">
                      <div className="relative w-full h-[380px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/10 via-transparent to-[#FFB300]/10 rounded-2xl z-10 pointer-events-none" />
                        <div className="absolute inset-0 rounded-2xl ring-2 ring-[#FF8C00]/20 group-hover:ring-[#FF8C00]/40 transition-all duration-500" />
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer to enable scrolling */}
          <div className="h-[300vh]" />
        </div>
      </div>
    </section>
  );
};

export default JetHatScrollFeatureSection;