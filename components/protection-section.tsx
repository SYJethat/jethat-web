import { motion } from "framer-motion";
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
import { useState, useEffect, useRef } from "react";
import { TypingAnimation } from "./typing-animation";

const AdvancedProtection = () => {
  const [threatsBlocked, setThreatsBlocked] = useState(1247);
  const [scansPerformed, setScansPerformed] = useState(5678);
  const [activeScans, setActiveScans] = useState(3);
  const [uptime, setUptime] = useState(0);
  const [threatLevel, setThreatLevel] = useState("LOW");
  const [currentMessage, setCurrentMessage] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [commandInput, setCommandInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "output", text: 'System initialized. Type "help" for commands.' },
    { type: "output", text: "Running initial security scan..." },
  ]);
  const terminalRef = useRef(null);

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

  const addToTerminal = (type, text) => {
    setTerminalHistory((prev) => [...prev, { type, text }]);
  };

  const handleCommand = (cmd) => {
    addToTerminal("command", `user@security:~$ ${cmd}`);

    if (commands[cmd]) {
      if (commands[cmd].response) {
        commands[cmd].response.forEach((line) => addToTerminal("output", line));
      }
      if (commands[cmd].action) {
        commands[cmd].action();
      }
    } else {
      addToTerminal(
        "output",
        `Command not found: ${cmd}. Type "help" for available commands.`
      );
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

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
      const weights = [0.6, 0.3, 0.08, 0.02]; // Weighted probabilities
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
        const newAlert = {
          id: Date.now(),
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
          ip: ips[Math.floor(Math.random() * ips.length)],
          time: new Date().toLocaleTimeString(),
        };
        setAlerts((prev) => [newAlert, ...prev.slice(0, 4)]);

        // Add critical alerts to terminal
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commandInput.trim()) {
      handleCommand(commandInput.trim().toLowerCase());
      setCommandInput("");
    }
  };

  return (
    <section
      id="advanced-protection"
      className="py-12 bg-background text-foreground font-mono"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Advanced Protection System
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
          Real-time threat detection and prevention system active
        </p>

        {/* Live Stats - More compact */}
        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          <div className="bg-card p-2 rounded-lg border border-primary/20">
            <div className="flex items-center mb-1">
              <ShieldAlert className="w-3 h-3 text-primary mr-2" />
              <span className="text-primary text-sm font-semibold">Threats Blocked</span>
            </div>
            <div className="text-xl font-bold text-foreground">{threatsBlocked.toLocaleString()}</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-primary/20">
            <div className="flex items-center mb-1">
              <Activity className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary text-sm font-semibold">Scans</span>
            </div>
            <div className="text-xl font-bold text-foreground">{scansPerformed.toLocaleString()}</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-primary/20">
            <div className="flex items-center mb-1">
              <Zap className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary text-sm font-semibold">Active</span>
            </div>
            <div className="text-xl font-bold text-foreground">{activeScans}</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-primary/20">
            <div className="flex items-center mb-1">
              <Server className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary text-sm font-semibold">Uptime</span>
            </div>
            <div className="text-xl font-bold text-foreground">{Math.floor(uptime / 3600)}h {Math.floor((uptime % 3600) / 60)}m</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-primary/20">
            <div className="flex items-center mb-1">
              <AlertTriangle className={`w-5 h-5 mr-2 ${threatLevel === 'LOW' ? 'text-green-500' : threatLevel === 'MEDIUM' ? 'text-yellow-500' : threatLevel === 'HIGH' ? 'text-orange-500' : 'text-red-500'}`} />
              <span className="text-primary text-sm font-semibold">Threat Level</span>
            </div>
            <div className={`text-xl font-bold ${threatLevel === 'LOW' ? 'text-green-500' : threatLevel === 'MEDIUM' ? 'text-yellow-500' : threatLevel === 'HIGH' ? 'text-orange-500' : 'text-red-500'}`}>{threatLevel}</div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security Visualization - More compact */}
          {/* <div className="relative flex justify-center items-center h-56 md:h-72 bg-card rounded-lg border border-primary/20 p-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-dashed border-primary/30 animate-pulse"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-3 w-full max-w-xs">
              <div className="bg-background/80 p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                <Shield className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-primary font-semibold">Firewall</span>
                <span className="text-xs text-green-500">Active</span>
              </div>
              <div className="bg-background/80 p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                <Cpu className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-primary font-semibold">AI Defense</span>
                <span className="text-xs text-green-500">Online</span>
              </div>
              <div className="bg-background/80 p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                <Globe className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-primary font-semibold">Network</span>
                <span className="text-xs text-green-500">Secure</span>
              </div>
              <div className="bg-background/80 p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                <Cctv className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-primary font-semibold">Monitoring</span>
                <span className="text-xs text-green-500">24/7</span>
              </div>
            </div>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i <= activeScans ? 'bg-green-500' : 'bg-primary/20'}`}></div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="relative flex justify-center items-center h-56 md:h-72 bg-transparent rounded-lg border border-green-500/30 p-4 overflow-hidden">
            {/* Container top and bottom bars */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gray-700"></div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700"></div>

            {/* Test tube holders */}
            <div className="absolute top-1 left-3 w-2 h-3 bg-green-500 rounded-t-full"></div>
            <div className="absolute top-1 right-3 w-2 h-3 bg-green-500 rounded-t-full"></div>

            {/* Scanning effect - now from bottom to top */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-0 right-0 h-1 bg-green-400 shadow-[0_0_15px_5px_rgba(0,255,0,0.5)] animate-scan-updown"></div>
            </div>

            {/* Grid of security elements */}
            <div className="relative z-10 grid grid-cols-2 gap-3 w-full max-w-xs">
              <div className=" p-3 rounded border border-green-500/20 flex flex-col items-center backdrop-blur-sm">
                <Shield className="w-5 h-5 text-green-400 mb-1" />
                <span className="text-xs text-green-400 font-semibold">
                  Firewall
                </span>
                <span className="text-xs text-green-500">Active</span>
              </div>
              <div className=" p-3 rounded border border-green-500/20 flex flex-col items-center backdrop-blur-sm">
                <Cpu className="w-5 h-5 text-green-400 mb-1" />
                <span className="text-xs text-green-400 font-semibold">
                  AI Defense
                </span>
                <span className="text-xs text-green-500">Online</span>
              </div>
              <div className=" p-3 rounded border border-green-500/20 flex flex-col items-center backdrop-blur-sm">
                <Globe className="w-5 h-5 text-green-400 mb-1" />
                <span className="text-xs text-green-400 font-semibold">
                  Network
                </span>
                <span className="text-xs text-green-500">Secure</span>
              </div>
              <div className=" p-3 rounded border border-green-500/20 flex flex-col items-center backdrop-blur-sm">
                <Cctv className="w-5 h-5 text-green-400 mb-1" />
                <span className="text-xs text-green-400 font-semibold">
                  Monitoring
                </span>
                <span className="text-xs text-green-500">24/7</span>
              </div>
            </div>

            {/* Status indicators */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-4">
              <div className="text-xs text-green-400 font-mono flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                SCANNING
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i <= activeScans ? "bg-green-500" : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Pulsing border effect */}
            <div className="absolute inset-0 rounded border border-green-400/20 animate-pulse-slow pointer-events-none"></div>
          </div>

          <style jsx>{`
            @keyframes scan-updown {
              0% {
                top: 100%;
                opacity: 0.7;
              }
              50% {
                top: 0%;
                opacity: 1;
              }
              100% {
                top: 100%;
                opacity: 0.7;
              }
            }
            @keyframes pulse-slow {
              0%,
              100% {
                opacity: 0.3;
              }
              50% {
                opacity: 0.6;
              }
            }
            .animate-scan-updown {
              animation: scan-updown 3s ease-in-out infinite;
            }
            .animate-pulse-slow {
              animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
          `}</style>

          {/* Terminal Interface - More interactive */}
          <div className="rounded-lg border border-primary/20 h-56 md:h-72 overflow-hidden flex flex-col">
            <div className="flex items-center px-4 py-2 bg-primary/10">
              <div className="flex space-x-1 mr-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-400 text-sm font-semibold">
                security-terminal
              </span>
              <div className="ml-auto flex items-center">
                <div className="text-xs text-green-400 bg-primary/10 px-2 py-1 rounded">
                  {threatLevel} THREAT
                </div>
              </div>
            </div>

            <div
              className="flex-1 overflow-auto p-3 bg-background font-mono text-sm"
              ref={terminalRef}
            >
              {terminalHistory.map((item, index) => (
                <div
                  key={index}
                  className={`mb-1 ${
                    item.type === "command"
                      ? "text-green-400"
                      : item.type === "alert"
                      ? "text-green-4000 animate-pulse"
                      : "text-foreground"
                  }`}
                >
                  {item.type === "command" ? (
                    <span>{item.text}</span>
                  ) : (
                    <span>&gt; {item.text}</span>
                  )}
                </div>
              ))}
              <div className="text-green-400 mb-1">
                <TypingAnimation text={currentMessage} speed={30} />
              </div>
            </div>

            <div className="border-t border-primary/20 p-2">
              <form onSubmit={handleSubmit} className="flex items-center">
                <span className="text-green-400 mr-2">user@security:~$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  className="flex-1 bg-transparent text-green-400 outline-none font-mono text-sm"
                  placeholder="Type a command..."
                />
                {commandInput && (
                  <button
                    type="submit"
                    className="ml-2 text-green-400 text-sm font-semibold"
                  >
                    ↵
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Continuous Security Event Log */}
       
       
     
      </div>
    </section>
  );
};

export default AdvancedProtection;
