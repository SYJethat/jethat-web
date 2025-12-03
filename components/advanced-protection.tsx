"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Server, Activity, AlertTriangle, CheckCircle } from 'lucide-react';

const AdvancedProtectionSystem = () => {
  const [threatsBlocked, setThreatsBlocked] = useState(1247);
  const [activeScans, setActiveScans] = useState(3);
  const [systemStatus, setSystemStatus] = useState('SECURE');
  const [scanProgress, setScanProgress] = useState(0);

  const protectionLayers = [
    {
      icon: Shield,
      title: "Firewall Protection",
      description: "Advanced firewall with AI-powered threat detection",
      status: "Active",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Military-grade 256-bit AES encryption",
      status: "Active",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Real-time threat monitoring and response",
      status: "Active",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Automated threat neutralization system",
      status: "Active",
      color: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    const threatInterval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);

    const scanInterval = setInterval(() => {
      setActiveScans(prev => Math.max(1, Math.min(5, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 3000);

    const progressInterval = setInterval(() => {
      setScanProgress(prev => (prev + 1) % 101);
    }, 100);

    return () => {
      clearInterval(threatInterval);
      clearInterval(scanInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
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
              Advanced <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">Protection System</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Multi-layered security architecture protecting your digital assets 24/7 with AI-powered threat detection
            </p>
          </motion.div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-[#FF8C00]/20 hover:border-[#FF8C00]/40 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  {threatsBlocked.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Threats Blocked</div>
              </div>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-[#FF8C00]/20 hover:border-[#FF8C00]/40 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  {activeScans}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Scans</div>
              </div>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                    i < activeScans ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-[#FF8C00]/20 hover:border-[#FF8C00]/40 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  {systemStatus}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">System Status</div>
              </div>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                animate={{ width: `${scanProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Protection Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {protectionLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-[#FF8C00]/20 hover:border-[#FF8C00]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${layer.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {layer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {layer.description}
                  </p>

                  {/* Status Badge */}
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-green-500">{layer.status}</span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${layer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 bg-white dark:bg-gray-900/50 rounded-3xl p-8 border border-[#FF8C00]/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Real-Time Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our advanced AI-powered system continuously monitors and protects your infrastructure against emerging threats, ensuring maximum security at all times.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FFB300] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Security Dashboard
              </button>
            </div>
            
            <div className="relative w-full md:w-1/2 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated Circles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-2 border-[#FF8C00]/30"
                    style={{
                      width: `${(i + 1) * 80}px`,
                      height: `${(i + 1) * 80}px`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                
                {/* Center Shield */}
                <div className="relative z-10 p-6 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB300] shadow-2xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedProtectionSystem;
