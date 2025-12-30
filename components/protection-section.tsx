"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Lock,
  Globe,
  Shield,
  Zap,
  ShieldAlert,
  Activity,
  AlertTriangle,
  Wifi,
  Server,
  Terminal,
  Cpu,
  Cctv,
} from "lucide-react";
import { TypingAnimation } from "./typing-animation";
import { gsapAnimations, GSAP_CONFIG } from '@/lib/gsap-utils';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Alert {
  id: number;
  type: string;
  ip: string;
  time: string;
}

interface TerminalItem {
  type: string;
  text: string;
}

const AdvancedProtection = () => {
  const [threatsBlocked, setThreatsBlocked] = useState(1247);
  const [scansPerformed, setScansPerformed] = useState(5678);
  const [activeScans, setActiveScans] = useState(3);
  const [uptime, setUptime] = useState(0);
  const [threatLevel, setThreatLevel] = useState("LOW");
  const [currentMessage, setCurrentMessage] = useState("");
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [commandInput, setCommandInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<TerminalItem[]>([
    { type: "output", text: 'System initialized. Type "help" for commands.' },
    { type: "output", text: "Running initial security scan..." },
  ]);

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const visualizationRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const securityCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scanningLineRef = useRef<HTMLDivElement>(null);

  const messages = [
    "Scanning network for vulnerabilities...",
    "Detecting intrusion attempts...",
    "Analyzing traffic patterns...",
    "Checking firewall integrity...",
    "Monitoring system logs...",
  ];

  // Terminal commands and responses
  const commands = {
    help: {
      response: [
        "Available commands:",
        "scan - Run security scan",
        "status - Show system status",
        "clear - Clear terminal",
        "protect - Enable advanced protection",
        "history - View attack history",
      ],
    },
    scan: {
      response: [
        "Initiating deep scan...",
        "Scanning ports 0-65535",
        "Checking for known vulnerabilities...",
      ],
      action: () => {
        setScanProgress(0);
        const interval = setInterval(() => {
          setScanProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              addToTerminal(
                "output",
                "Scan complete. 0 critical vulnerabilities found."
              );
              return 100;
            }
            return prev + 1;
          });
        }, 50);
      },
    },
    status: {
      response: [
        `System Status:`,
        `Threats Blocked: ${threatsBlocked}`,
        `Active Scans: ${activeScans}`,
        `Uptime: ${Math.floor(uptime / 3600)}h ${Math.floor(
          (uptime % 3600) / 60
        )}m ${uptime % 60}s`,
        `Threat Level: ${threatLevel}`,
      ],
    },
    clear: {
      action: () => setTerminalHistory([]),
    },
    protect: {
      response: [
        "Enabling advanced protection matrix...",
        "All systems secured.",
      ],
      action: () => {
        setThreatLevel("LOW");
        addToTerminal("output", "Protection level elevated to MAXIMUM");
      },
    },
    history: {
      response: ["Recent attack history:"],
      action: () => {
        alerts.slice(0, 5).forEach((alert) => {
          addToTerminal(
            "output",
            `[${alert.time}] ${alert.type} from ${alert.ip} - BLOCKED`
          );
        });
      },
    },
  };

  const addToTerminal = (type: string, text: string) => {
    setTerminalHistory((prev) => [...prev, { type, text }]);
  };

  const handleCommand = (cmd: string) => {
    addToTerminal("command", `user@security:~$ ${cmd}`);

    if (commands[cmd as keyof typeof commands]) {
      const command = commands[cmd as keyof typeof commands];
      if ('response' in command && command.response) {
        command.response.forEach((line) => addToTerminal("output", line));
      }
      if ('action' in command && command.action) {
        command.action();
      }
    } else {
      addToTerminal(
        "output",
        `Command not found: ${cmd}. Type "help" for available commands.`
      );
    }
  };

  // GSAP Animations
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
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

      // Animate visualization container
      if (visualizationRef.current) {
        gsap.fromTo(visualizationRef.current,
          { opacity: 0, x: -100, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: visualizationRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate terminal
      if (terminalRef.current) {
        gsap.fromTo(terminalRef.current,
          { opacity: 0, x: 100, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: terminalRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate security cards with stagger
      securityCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 50, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: GSAP_CONFIG.duration.normal,
              ease: GSAP_CONFIG.ease.bounce,
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
              scale: 1.05,
              y: -5,
              duration: 0.3,
              ease: GSAP_CONFIG.ease.smooth
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: GSAP_CONFIG.ease.smooth
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      // Animate scanning line
      if (scanningLineRef.current) {
        gsap.to(scanningLineRef.current, {
          y: "100vh",
          duration: 3,
          ease: "none",
          repeat: -1,
          yoyo: true
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      const terminalContent = terminalRef.current.querySelector('.terminal-content') as HTMLElement;
      if (terminalContent) {
        terminalContent.scrollTop = terminalContent.scrollHeight;
      }
    }
  }, [terminalHistory]);

  // Initialize intervals and effects
  useEffect(() => {
    const threatInterval = setInterval(() => {
      setThreatsBlocked((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);

    const scanInterval = setInterval(() => {
      setScansPerformed((prev) => prev + Math.floor(Math.random() * 10) + 1);
    }, 1500);

    const activeScanInterval = setInterval(() => {
      setActiveScans((prev) =>
        Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1))
      );
    }, 3000);

    const uptimeInterval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);

    const threatLevelInterval = setInterval(() => {
      const levels = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];
      const weights = [0.6, 0.3, 0.08, 0.02];
      let num = Math.random();
      let s = 0;
      let levelIndex = levels.length - 1;
      for (let i = 0; i < weights.length; i++) {
        s += weights[i];
        if (num < s) {
          levelIndex = i;
          break;
        }
      }
      setThreatLevel(levels[levelIndex]);
    }, 10000);

    const progressInterval = setInterval(() => {
      setScanProgress((prev) => (prev + 0.5) % 101);
    }, 100);

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setCurrentMessage(messages[messageIndex]);
      messageIndex = (messageIndex + 1) % messages.length;
    }, 4000);

    const alertInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const threatTypes = [
          "SQL Injection",
          "XSS Attack",
          "DDoS Attempt",
          "Brute Force",
          "Malware",
          "Phishing",
          "Ransomware",
        ];
        const ips = [
          "192.168.1.",
          "10.0.0.",
          "172.16.0.",
          "203.0.113.",
          "198.51.100.",
        ].map((prefix) => prefix + Math.floor(Math.random() * 255));
        const newAlert: Alert = {
          id: Date.now(),
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
          ip: ips[Math.floor(Math.random() * ips.length)],
          time: new Date().toLocaleTimeString(),
        };
        setAlerts((prev) => [newAlert, ...prev.slice(0, 4)]);

        if (
          newAlert.type === "DDoS Attempt" ||
          newAlert.type === "Ransomware"
        ) {
          addToTerminal(
            "alert",
            `WARNING: ${newAlert.type} detected from ${newAlert.ip}`
          );
        }
      }
    }, 5000);

    return () => {
      clearInterval(threatInterval);
      clearInterval(scanInterval);
      clearInterval(activeScanInterval);
      clearInterval(uptimeInterval);
      clearInterval(threatLevelInterval);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearInterval(alertInterval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commandInput.trim()) {
      handleCommand(commandInput.trim().toLowerCase());
      setCommandInput("");
    }
  };

  return (
    <section
      ref={containerRef}
      id="advanced-protection"
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 text-foreground font-mono overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-left">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF8C00] to-[#FFB300] bg-clip-text text-transparent">
          Advanced Protection System
        </h2>
        <p ref={descriptionRef} className="text-lg text-muted-foreground  mb-12 max-w-3xl mx-auto">
          Real-time threat detection and prevention system with AI-powered security monitoring
        </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Visualization */}
          <div ref={visualizationRef} className="relative flex justify-center items-center h-80 bg-gradient-to-br from-[#FF8C00]/5 to-[#FFB300]/5 rounded-2xl border border-[#FF8C00]/20 p-6 overflow-hidden shadow-xl">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#FF8C00]/30" style={{ top: `${i * 5}%` }}></div>
              ))}
              {[...Array(20)].map((_, i) => (
                <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-[#FF8C00]/30" style={{ left: `${i * 5}%` }}></div>
              ))}
            </div>

            {/* Container frame */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#FF8C00] to-[#FFB300] rounded-t-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#FF8C00] to-[#FFB300] rounded-b-2xl"></div>

            {/* Scanning effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                ref={scanningLineRef}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent shadow-[0_0_20px_5px_rgba(255,140,0,0.6)]"
              ></div>
            </div>

            {/* Security modules grid */}
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { icon: Shield, label: "Firewall", status: "Active", color: "text-green-400" },
                { icon: Cpu, label: "AI Defense", status: "Online", color: "text-blue-400" },
                { icon: Globe, label: "Network", status: "Secure", color: "text-[#FF8C00]" },
                { icon: Cctv, label: "Monitor", status: "24/7", color: "text-purple-400" },
              ].map((module, index) => {
                const Icon = module.icon;
                return (
                  <div
                    key={index}
                    ref={el => { securityCardsRef.current[index] = el; }}
                    className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-[#FF8C00]/30 hover:border-[#FF8C00]/60 transition-all duration-300 flex flex-col items-center group"
                  >
                    <Icon className={`w-6 h-6 ${module.color} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-xs text-[#FF8C00] font-semibold mb-1">
                      {module.label}
                    </span>
                    <span className={`text-xs ${module.color} font-medium`}>
                      {module.status}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Status indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-6">
              <div className="text-xs text-[#FF8C00] font-mono flex items-center">
                <div className="w-2 h-2 bg-[#FF8C00] rounded-full mr-2 animate-pulse"></div>
                SCANNING ACTIVE
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      i <= activeScans ? "bg-[#FF8C00]" : "bg-gray-400 dark:bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-[#FF8C00]/60 rounded-full animate-pulse" />
            <div className="absolute top-12 right-12 w-1 h-1 bg-[#FFB300]/80 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-[#FF8C00]/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Terminal Interface */}
          <div ref={terminalRef} className="rounded-2xl border border-[#FF8C00]/20 h-80 overflow-hidden flex flex-col shadow-xl bg-gradient-to-br from-gray-900 to-black">
            {/* Terminal header */}
            <div className="flex items-center px-4 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FFB300]">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white text-sm font-bold">
                Security Terminal
              </span>
              <div className="ml-auto flex items-center">
                <div className={`text-xs text-white bg-black/20 px-3 py-1 rounded-full font-bold ${
                  threatLevel === 'LOW' ? 'bg-green-500/20' : 
                  threatLevel === 'MEDIUM' ? 'bg-yellow-500/20' : 
                  threatLevel === 'HIGH' ? 'bg-orange-500/20' : 'bg-red-500/20'
                }`}>
                  {threatLevel} THREAT
                </div>
              </div>
            </div>

            {/* Terminal content */}
            <div className="flex-1 overflow-auto p-4 bg-black font-mono text-sm terminal-content">
              {terminalHistory.map((item, index) => (
                <div
                  key={index}
                  className={`mb-1 ${
                    item.type === "command"
                      ? "text-[#FF8C00]"
                      : item.type === "alert"
                      ? "text-red-400 animate-pulse"
                      : "text-green-400"
                  }`}
                >
                  {item.type === "command" ? (
                    <span>{item.text}</span>
                  ) : (
                    <span>&gt; {item.text}</span>
                  )}
                </div>
              ))}
              <div className="text-[#FFB300] mb-1">
                <TypingAnimation text={currentMessage} speed={30} />
              </div>
            </div>

            {/* Terminal input */}
            <div className="border-t border-[#FF8C00]/20 p-3 bg-gray-900">
              <form onSubmit={handleSubmit} className="flex items-center">
                <span className="text-[#FF8C00] mr-2 font-bold">user@security:~$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  className="flex-1 bg-transparent text-[#FFB300] outline-none font-mono text-sm placeholder-gray-500"
                  placeholder="Type a command..."
                />
                {commandInput && (
                  <button
                    type="submit"
                    className="ml-2 text-[#FF8C00] text-sm font-bold hover:text-[#FFB300] transition-colors"
                  >
                    ↵
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedProtection;