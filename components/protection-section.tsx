import { motion } from 'framer-motion';
import { Lock, Globe, Shield, Zap, ShieldAlert, Activity, AlertTriangle, Wifi, Server } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TypingAnimation } from './typing-animation';

const featureItems = [
  { name: 'Encryption', icon: <Lock className="w-8 h-8 text-primary" /> },
  { name: 'Global Protection', icon: <Globe className="w-8 h-8 text-primary" /> },
  { name: 'Secure Infrastructure', icon: <Shield className="w-8 h-8 text-primary" /> },
  { name: 'AI Defense', icon: <Zap className="w-8 h-8 text-primary" /> },
];

const inBetweenIcons = [
  <ShieldAlert className="w-6 h-6 text-primary/90" />,
  <Lock className="w-6 h-6 text-primary/90" />,
  <Zap className="w-6 h-6 text-primary/90" />,
  <Globe className="w-6 h-6 text-primary/90" />,
];

const AdvancedProtection = () => {
  const [threatsBlocked, setThreatsBlocked] = useState(1247);
  const [scansPerformed, setScansPerformed] = useState(5678);
  const [activeScans, setActiveScans] = useState(3);
  const [uptime, setUptime] = useState(0);
  const [threatLevel, setThreatLevel] = useState('LOW');
  const [currentMessage, setCurrentMessage] = useState('');
  const [alerts, setAlerts] = useState<{id: number, type: string, ip: string, time: string}[]>([]);
  const [scanProgress, setScanProgress] = useState(0);

  const messages = [
    'Scanning network for vulnerabilities...',
    'Detecting intrusion attempts...',
    'Analyzing traffic patterns...',
    'Checking firewall integrity...',
    'Monitoring system logs...',
  ];

  useEffect(() => {
    const threatInterval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);

    const scanInterval = setInterval(() => {
      setScansPerformed(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 1500);

    const activeScanInterval = setInterval(() => {
      setActiveScans(prev => Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1)));
    }, 3000);

    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);

    const threatLevelInterval = setInterval(() => {
      const levels = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
      setThreatLevel(levels[Math.floor(Math.random() * levels.length)]);
    }, 10000);

    const progressInterval = setInterval(() => {
      setScanProgress(prev => (prev + 1) % 101);
    }, 100);

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setCurrentMessage(messages[messageIndex]);
      messageIndex = (messageIndex + 1) % messages.length;
    }, 4000);

    const alertInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const threatTypes = ['SQL Injection', 'XSS Attack', 'DDoS Attempt', 'Brute Force', 'Malware Detected', 'Phishing Attempt', 'Ransomware Block'];
        const ips = ['192.168.1.1', '10.0.0.5', '172.16.0.10', '203.0.113.1', '198.51.100.2', '104.28.1.1', '8.8.8.8'];
        const newAlert = {
          id: Date.now(),
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
          ip: ips[Math.floor(Math.random() * ips.length)],
          time: new Date().toLocaleTimeString(),
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
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

  return (
    <section id="advanced-protection" className="py-16 bg-background text-foreground font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">Advanced Protection</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Experience our comprehensive security approach that protects your digital assets from all angles.
        </p>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg border border-primary/20">
            <div className="flex items-center mb-2">
              <ShieldAlert className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold">Threats Blocked</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{threatsBlocked.toLocaleString()}</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-primary/20">
            <div className="flex items-center mb-2">
              <Activity className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold">Scans Performed</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{scansPerformed.toLocaleString()}</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-primary/20">
            <div className="flex items-center mb-2">
              <Zap className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold">Active Scans</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{activeScans}</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-primary/20">
            <div className="flex items-center mb-2">
              <Server className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold">System Uptime</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{Math.floor(uptime / 3600)}h {Math.floor((uptime % 3600) / 60)}m {uptime % 60}s</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-primary/20">
            <div className="flex items-center mb-2">
              <AlertTriangle className={`w-6 h-6 mr-2 ${threatLevel === 'LOW' ? 'text-green-500' : threatLevel === 'MEDIUM' ? 'text-yellow-500' : threatLevel === 'HIGH' ? 'text-orange-500' : 'text-red-500'}`} />
              <span className="text-primary font-semibold">Threat Level</span>
            </div>
            <div className={`text-2xl font-bold ${threatLevel === 'LOW' ? 'text-green-500' : threatLevel === 'MEDIUM' ? 'text-yellow-500' : threatLevel === 'HIGH' ? 'text-orange-500' : 'text-red-500'}`}>{threatLevel}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rotating Circle */}
          <div className="relative flex justify-center items-center h-64 md:h-96">
            <div className="relative w-48 h-48 md:w-64 md:h-64 animate-spin-slow">
              <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow-reverse" />
              {[
                { name: "Encryption", icon: <Lock className="w-6 h-6 text-primary" /> },
                { name: "Global Protection", icon: <Globe className="w-6 h-6 text-primary" /> },
                { name: "Secure Infrastructure", icon: <Shield className="w-6 h-6 text-primary" /> },
                { name: "AI Defense", icon: <Zap className="w-6 h-6 text-primary" /> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="absolute w-24 h-24 bg-card rounded-full flex flex-col items-center justify-center border border-primary/20 animate-float"
                  style={{
                    transform: `rotate(${index * 90}deg) translate(100px) rotate(-${index * 90}deg)`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  {item.icon}
                  <span className="text-primary text-sm font-semibold mt-2 text-center">{item.name}</span>
                </div>
              ))}
              {[
                <ShieldAlert className="w-5 h-5 text-primary/70" />,
                <Lock className="w-5 h-5 text-primary/70" />,
                <Zap className="w-5 h-5 text-primary/70" />,
                <Globe className="w-5 h-5 text-primary/70" />,
              ].map((icon, index) => (
                <div
                  key={`in-between-${index}`}
                  className="absolute w-12 h-12 bg-card/50 rounded-full flex items-center justify-center animate-float"
                  style={{
                    transform: `rotate(${index * 90 + 45}deg) translate(80px) rotate(-${index * 90 + 45}deg)`,
                    animationDelay: `${index * 0.4 + 0.15}s`,
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Interface */}
          <div className="bg-card p-6 rounded-lg border border-primary/20 h-64 md:h-96 overflow-hidden">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-primary text-sm">security-terminal</span>
            </div>
            <div className="w-full bg-primary/20 rounded-full h-2 mb-4">
              <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{width: `${scanProgress}%`}}></div>
            </div>
            <div className="text-foreground text-sm mb-4">
              <span className="text-primary">$</span> <TypingAnimation key={currentMessage} text={currentMessage} speed={50} />
            </div>
            <div className="bg-background p-2 rounded mb-4 font-mono text-xs">
              <div className="text-primary mb-1">Running security scan...</div>
              <TypingAnimation text="nmap -sV -O 192.168.1.0/24" speed={30} delay={1000} className="text-foreground" />
              <br />
              <TypingAnimation text="firewall --check-rules" speed={30} delay={3000} className="text-foreground" />
              <br />
              <TypingAnimation text="ai-defense --analyze-logs" speed={30} delay={5000} className="text-foreground" />
              <br />
              <TypingAnimation text="user@jet-hat:~$" speed={50} delay={7000} className="text-primary" />
              <br />
              <TypingAnimation text="sudo ./run-advanced-protection" speed={50} delay={7500} className="text-foreground" />
            </div>
            <div className="space-y-2 text-xs overflow-y-auto h-24">
              {alerts.map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center text-destructive animate-pulse"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  [{alert.time}] {alert.type} from {alert.ip} - BLOCKED
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AdvancedProtection;
