"use client";

import React, { useState } from 'react';
import { Code, Cloud, Smartphone, ShieldAlert, BookOpen, Search, Database, Cpu, Lock, Zap } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      shortDescription: "Crafting seamless digital experiences",
      fullDescription: "Transform your digital presence with cutting-edge web development. We create responsive, scalable, and user-centric web applications that drive business growth and deliver exceptional user experiences.",
      points: ["Full-stack Development", "Responsive Design", "Progressive Web Apps", "API Integration"],
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Cloud Services",
      shortDescription: "Unlock unparalleled scalability",
      fullDescription: "Harness the power of cloud computing with our comprehensive cloud services. We help you migrate, optimize, and manage your infrastructure for maximum efficiency and cost-effectiveness.",
      points: ["Cloud Migration", "Infrastructure Management", "Auto-scaling Solutions", "Cost Optimization"],
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Mobile App Development",
      shortDescription: "Elevate your brand's presence",
      fullDescription: "Create powerful mobile experiences that engage users and drive conversions. Our expert team delivers native and cross-platform applications with stunning UI/UX design.",
      points: ["iOS & Android Development", "Cross-Platform Solutions", "UI/UX Design", "App Store Optimization"],
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Cyber Security",
      shortDescription: "Protect your digital assets",
      fullDescription: "Safeguard your business with enterprise-grade cybersecurity solutions. We provide comprehensive protection against evolving threats with advanced detection and prevention systems.",
      points: ["Threat Detection & Prevention", "Security Audits", "Penetration Testing", "Compliance Management"],
      icon: ShieldAlert,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
    },
    {
      title: "E-Learning Solutions",
      shortDescription: "Revolutionize education",
      fullDescription: "Transform learning experiences with our innovative e-learning platforms. We create engaging, interactive, and accessible educational solutions for modern learners.",
      points: ["LMS Development", "Interactive Content", "Virtual Classrooms", "Progress Tracking"],
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Secure Code Review",
      shortDescription: "Elevate software security",
      fullDescription: "Ensure your codebase is secure and resilient with our comprehensive code review services. We identify vulnerabilities and provide actionable recommendations for improvement.",
      points: ["Vulnerability Assessment", "Code Quality Analysis", "Security Best Practices", "Compliance Verification"],
      icon: Search,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      title: "AI & Machine Learning",
      shortDescription: "Intelligent automation solutions",
      fullDescription: "Leverage artificial intelligence and machine learning to automate processes, gain insights, and make data-driven decisions that propel your business forward.",
      points: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation Solutions"],
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
    },
    {
      title: "DevOps & Automation",
      shortDescription: "Streamline your workflow",
      fullDescription: "Accelerate development and deployment with our DevOps expertise. We implement CI/CD pipelines, infrastructure as code, and automation to boost productivity.",
      points: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"],
      icon: Zap,
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fortify your digital fortress with our cutting-edge cybersecurity solutions. Elevate your business through
            bespoke software development, where innovation meets functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Service Cards */}
          <div className="lg:col-span-1 space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                    selectedService.title === service.title
                      ? `${service.bgColor} border-[#FF8C00] shadow-lg shadow-[#FF8C00]/20`
                      : 'bg-white dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-[#FF8C00]/50'
                  } ${hoveredIndex === index ? 'scale-105' : ''}`}
                  onClick={() => setSelectedService(service)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-xl ${service.bgColor} transition-all duration-300 ${
                      selectedService.title === service.title ? 'scale-110' : ''
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        selectedService.title === service.title ? 'text-[#FF8C00]' : 'text-gray-600 dark:text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm mb-1 transition-colors ${
                        selectedService.title === service.title
                          ? 'text-[#FF8C00]'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Content - Selected Service Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900/95 rounded-3xl shadow-2xl border border-[#FF8C00]/20 dark:border-[#FF8C00]/30 overflow-hidden h-full"
              >
                {/* Image Header */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${selectedService.color} shadow-xl`}>
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {selectedService.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {selectedService.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedService.fullDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {selectedService.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-[#FF8C00]/50 transition-all duration-300 group"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedService.color} mt-2 group-hover:scale-150 transition-transform duration-300`} />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex-1">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FFB300] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <span>Get Started</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border-2 border-[#FF8C00] hover:bg-[#FF8C00] hover:text-white transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
