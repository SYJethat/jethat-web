"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Award, Users, Star } from 'lucide-react';

const ClientsMarqueeSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const clients = [
    { name: "Tech Innovations Inc.", logo: "/image-1.png", industry: "Technology" },
    { name: "Global Banking Corp", logo: "/image-2.png", industry: "Finance" },
    { name: "Healthcare Solutions", logo: "/image-3.svg", industry: "Healthcare" },
    { name: "Retail Enterprises", logo: "/logo2.png", industry: "Retail" },
    { name: "Manufacturing Group", logo: "/placeholder-logo.png", industry: "Manufacturing" },
    { name: "Education Systems", logo: "/placeholder-logo.svg", industry: "Education" },
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clients, ...clients];

  const stats = [
    { icon: Building2, value: "200+", label: "Enterprise Clients" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ];

  return (
    <section id="clients" className="py-4 bg-transparent ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
 <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">Industry Leaders</span>
          </h2> */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide cybersecurity solutions to organizations across various industries, helping them secure their digital future.
          </p>
        </motion.div>

        {/* Stats Row */}
       

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-orange-50 via-orange-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-50 via-orange-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10 pointer-events-none" /> */}

          {/* Marquee */}
          <div 
            className="overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`flex gap-6 ${isPaused ? '' : 'animate-marquee'}`}
              style={{ 
                animationPlayState: isPaused ? 'paused' : 'running',
                width: 'max-content'
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 group"
                >
                  <div className="relative    hover:border-[#FF8C00]   hover:shadow-sm hover:shadow-[#FF8C00]/20 w-48 h-12 flex flex-col items-center justify-center">
                    {/* Logo */}
                    <div className="relative w-20 h-12 mb-2">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Industry Badge */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs px-3 py-1 bg-gradient-to-r from-[#FF8C00] to-[#FFB300] text-white rounded-full font-medium whitespace-nowrap">
                        {client.industry}
                      </span>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF8C00] to-[#FFB300] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-4"
        >
          {[
            { text: "ISO 27001 Certified", icon: "🏆" },
            { text: "SOC 2 Compliant", icon: "✓" },
            { text: "GDPR Ready", icon: "🔒" },
            { text: "24/7 Support", icon: "⚡" },
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-900/50 rounded-full border border-[#FF8C00]/30 hover:border-[#FF8C00] transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsMarqueeSection;
