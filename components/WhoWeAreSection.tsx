"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Lightbulb, Shield, Users, Award, Handshake, TrendingUp, Target } from 'lucide-react';
import Image from 'next/image';

const items = [
  {
    id: "vision",
    title: "Vision",
    description: "Jethat Cybersecurity Private Limited envisions a digitally secure world, where businesses thrive without compromise on data integrity and user privacy.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
    stats: { value: "100%", label: "Secure" }
  },
  {
    id: "expertise",
    title: "Expertise",
    description: "We specialize in cybersecurity and software development, boasting a team of seasoned professionals with deep knowledge in both domains.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    stats: { value: "15+", label: "Years Experience" }
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "At the core of our ethos is innovation. We consistently leverage cutting-edge technologies to stay ahead of evolving cyber threats and deliver state-of-the-art software solutions.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    stats: { value: "50+", label: "Innovations" }
  },
  {
    id: "security",
    title: "Comprehensive Security",
    description: "Our cybersecurity services encompass advanced threat detection, risk assessment, and proactive measures to fortify organizations against cyber threats.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    stats: { value: "99.9%", label: "Protection Rate" }
  },
  {
    id: "client-centric",
    title: "Client-Centric Approach",
    description: "Our focus is on understanding and addressing the specific challenges faced by our clients, ensuring tailored solutions that meet their objectives and exceed expectations.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    icon: Users,
    color: "from-red-500 to-pink-500",
    stats: { value: "200+", label: "Happy Clients" }
  },
  {
    id: "quality",
    title: "Commitment to Quality",
    description: "We adhere to the highest standards of quality in both cybersecurity practices and software development, ensuring reliability, scalability, and resilience in every solution we deliver.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    icon: Award,
    color: "from-indigo-500 to-purple-500",
    stats: { value: "ISO", label: "Certified" }
  },
  {
    id: "partnerships",
    title: "Collaborative Partnerships",
    description: "Building lasting partnerships with our clients is integral to our mission. We work closely with organizations, providing ongoing support and adapting our services to meet evolving needs.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    icon: Handshake,
    color: "from-teal-500 to-cyan-500",
    stats: { value: "95%", label: "Retention Rate" }
  },
  {
    id: "improvement",
    title: "Continuous Improvement",
    description: "In fields of cybersecurity and software development, we remain agile and responsive. We continually refine our approaches, adopting emerging technologies to keep our clients at the forefront of digital innovation and security.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    stats: { value: "24/7", label: "Support" }
  },
];

const WhoWeAreSection = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="who-we-are" className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">We Are</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Jethat Cybersecurity Private Limited is a cutting-edge firm specializing in cybersecurity and software
            development. With a relentless commitment to innovation, we safeguard digital landscapes through advanced
            threat detection and robust software solutions.
          </p>
        </div>

        {/* Interactive Pills Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedItem(item)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex items-center space-x-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                  selectedItem.id === item.id
                    ? 'bg-gradient-to-r from-[#FF8C00] to-[#FFB300] text-white shadow-lg shadow-[#FF8C00]/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#FF8C00]/50 hover:shadow-md'
                } ${hoveredIndex === index ? 'scale-105' : ''}`}
              >
                <Icon className={`w-4 h-4 ${
                  selectedItem.id === item.id ? 'text-white' : 'text-[#FF8C00]'
                }`} />
                <span className="text-sm font-semibold">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedItem.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative"
          >
            <div className={`flex flex-col ${
              items.indexOf(selectedItem) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8 bg-white dark:bg-gray-900/95 p-8 md:p-12 rounded-3xl shadow-2xl border border-[#FF8C00]/20 dark:border-[#FF8C00]/30 overflow-hidden`}>
              
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedItem.color} opacity-5 pointer-events-none`} />

              {/* Image Side */}
              <div className="relative w-full md:w-1/2 group">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Floating Stats Badge */}
                  <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-[#FF8C00]/30">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${selectedItem.color} bg-clip-text text-transparent`}>
                      {selectedItem.stats.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {selectedItem.stats.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${selectedItem.color} shadow-lg mb-6`}>
                  <selectedItem.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {selectedItem.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                {/* Decorative Line */}
                <div className={`h-1 w-24 bg-gradient-to-r ${selectedItem.color} rounded-full mb-6`} />

                {/* CTA Button */}
                <button className="group flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB300] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "200+", label: "Happy Clients" },
            { value: "15+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-[#FF8C00]/20 hover:border-[#FF8C00]/40 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF8C00] to-[#FFB300] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
