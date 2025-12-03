"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Award, Users } from 'lucide-react';

const ClientsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const clients = [
    { name: "Tech Innovations Inc.", logo: "/image-1.png", industry: "Technology" },
    { name: "Global Banking Corp", logo: "/image-2.png", industry: "Finance" },
    { name: "Healthcare Solutions", logo: "/image-3.svg", industry: "Healthcare" },
    { name: "Retail Enterprises", logo: "/logo2.png", industry: "Retail" },
    { name: "Manufacturing Group", logo: "/placeholder-logo.png", industry: "Manufacturing" },
    { name: "Education Systems", logo: "/placeholder-logo.svg", industry: "Education" },
  ];

  const stats = [
    { icon: Building2, value: "200+", label: "Enterprise Clients", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "from-green-500 to-emerald-500" },
    { icon: Award, value: "15+", label: "Industry Awards", color: "from-purple-500 to-pink-500" },
    { icon: Users, value: "500+", label: "Projects Delivered", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="clients" className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide cybersecurity solutions to organizations across various industries, helping them secure their digital infrastructure and achieve their business goals.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-[#FF8C00]/20 hover:border-[#FF8C00]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client Logos - Animated Grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-gray-900 dark:via-transparent dark:to-gray-900 z-10 pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <div className={`bg-white dark:bg-gray-900/50 rounded-2xl p-6 border transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'border-[#FF8C00] shadow-xl shadow-[#FF8C00]/20 scale-110'
                    : 'border-gray-200 dark:border-gray-700 hover:border-[#FF8C00]/50'
                }`}>
                  <div className="relative h-16 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={80}
                      height={80}
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Hover Tooltip */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-20 shadow-xl"
                    >
                      {client.name}
                      <div className="text-xs opacity-75">{client.industry}</div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          {[
            { text: "ISO 27001 Certified", icon: "🏆" },
            { text: "SOC 2 Compliant", icon: "✓" },
            { text: "GDPR Ready", icon: "🔒" },
            { text: "24/7 Support", icon: "⚡" },
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-900/50 rounded-full border border-[#FF8C00]/30 hover:border-[#FF8C00] transition-all duration-300 hover:shadow-lg"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
