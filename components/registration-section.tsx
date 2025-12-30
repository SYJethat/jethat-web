"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle, Shield, Building2 } from 'lucide-react';

const RegistrationSection = () => {
  const registrations = [
    // {
    //   name: "Ministry of Corporate Affairs",
    //   logo: "/placeholder-logo.png",
    //   description: "Registered under Companies Act, 2013",
    //   badge: "CIN: U72900DL2020PTC123456",
    // },
    {
      name: "Startup India",
      logo: "/india.png",
      description: "Recognized by DPIIT",
      badge: "DIPP12345",
    },
    {
      name: "ISO 9001",
      logo: "/iso-9001.png",
      description: "Information Security Management",
      badge: "Certified",
    },
    {
      name: "ISO 27001:2013",
      logo: "/iso-27001.png",
      description: "Information Security Management",
      badge: "Certified",
    },
    {
      name: "MSME Registered",
      logo: "/msme.png",
      description: "Micro, Small & Medium Enterprises",
      badge: "UDYAM-DL-00-1234567",
    },
    // {
    //   name: "GST Registered",
    //   logo: "/image-3.svg",
    //   description: "Goods and Services Tax",
    //   badge: "07XXXXX1234X1ZX",
    // },
    // {
    //   name: "Data Protection",
    //   logo: "/logo2.png",
    //   description: "GDPR Compliant",
    //   badge: "Certified",
    // },
  ];

  const certifications = [
    { icon: Shield, text: "ISO 27001 Certified", color: "from-blue-500 to-cyan-500" },
    { icon: Award, text: "SOC 2 Compliant", color: "from-green-500 to-emerald-500" },
    { icon: CheckCircle, text: "GDPR Ready", color: "from-purple-500 to-pink-500" },
    { icon: Building2, text: "Government Approved", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="container justify-start mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-row'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl  text-left md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            We are <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">Registered With</span>
          </h2>
          <p className="text-xl text-left text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Certified and registered with leading government bodies and international standards organizations
          </p>
        </motion.div>

        {/* Certifications Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900/50 rounded-xl p-4 border border-[#FF8C00]/20 hover:border-[#FF8C00]/40 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${cert.color} mb-2`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {cert.text}
                </div>
              </motion.div>
            );
          })}
        </div>

        </div>

        {/* Registration Cards Grid - Circular Design */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {registrations.map((reg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group relative flex flex-col items-center"
            >
              {/* Circular Card */}
              <div className="relative">
                {/* Outer Ring */}
                <div className="absolute inset-0   opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                {/* Main Circle */}
                <div className="relative w-16 h-16 md:w-16 md:h-16  rounded-full transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#FF8C00]/30 flex items-center justify-center overflow-hidden">
                  {/* Logo */}
                  <div className="relative w-16 h-16 md:w-24 md:h-24">
                    <Image
                      src={reg.logo}
                      alt={reg.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 p-2"
                    />
                  </div>
                  
                  {/* Rotating Border Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF8C00]/30 group-hover:animate-spin-slow" />
                </div>

                {/* Verified Badge */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content Below Circle */}
              <div className="mt-4 text-center">
                <h3 className="text-[0.9rem] md:text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                  {reg.name}
                </h3>
                <p className="text-[0.8rem] text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                  {reg.description}
                </p>
                
                {/* Badge */}
                {/* <div className="inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-[#FF8C00]/10 to-[#FFB300]/10 rounded-full border border-[#FF8C00]/30">
                  <span className="text-xs font-semibold text-[#FF8C00] truncate">{reg.badge}</span>
                </div> */}
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>

        {/* Bottom Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          {/* <div className="inline-flex items-center space-x-3 px-8 py-4 bg-white dark:bg-gray-900/50 rounded-full border border-[#FF8C00]/30 shadow-lg">
            <Shield className="w-6 h-6 text-[#FF8C00]" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Trusted by 200+ Organizations Across India
            </span>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
