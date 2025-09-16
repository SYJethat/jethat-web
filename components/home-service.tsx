import React, { useState, useEffect, useRef } from 'react';
import { Code, Cloud, Smartphone, ShieldAlert, BookOpen, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      shortDescription: "Crafting seamless digital experiences.",
      fullDescription: "Crafting seamless digital experiences through expert web development, where innovation meets user-centric design.",
      points: ["Full-stack development", "Responsive web design"],
      icon: <Code className="w-6 h-6 text-primary" />,
      image: "https://via.placeholder.com/600x400?text=Web+Development",
    },
    {
      title: "Cloud Services",
      shortDescription: "Unlock unparalleled scalability and efficiency.",
      fullDescription: "Unlock unparalleled scalability and efficiency with our transformative cloud services, reshaping the way you harness and leverage digital resources.",
      points: ["Scalability", "Flexibility and Accessibility"],
      icon: <Cloud className="w-6 h-6 text-primary" />,
      image: "https://via.placeholder.com/600x400?text=Cloud+Services",
    },
    {
      title: "Mobile Application Development",
      shortDescription: "Elevate your brand's presence and engagement.",
      fullDescription: "Elevate your brand's presence and engagement with expertly crafted mobile applications.",
      points: ["Cross-Platform Compatibility", "User-Centric Design"],
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      image: "https://via.placeholder.com/600x400?text=Mobile+App+Development",
    },
    {
      title: "Cyber Security",
      shortDescription: "Protect your systems from threats.",
      fullDescription: "Protect your computer systems, networks, and data from theft, damage, or unauthorized access.",
      points: ["Advanced Threat Detection and Prevention", "Security Awareness Training"],
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      image: "https://via.placeholder.com/600x400?text=Cyber+Security",
    },
    {
      title: "E-Learning",
      shortDescription: "Revolutionize education with dynamic online learning.",
      fullDescription: "Revolutionize education with our e-learning services, fostering dynamic online learning experiences.",
      points: ["Accessibility", "Interactive Learning Tools"],
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      image: "https://via.placeholder.com/600x400?text=E-Learning",
    },
    {
      title: "Secure Code Review",
      shortDescription: "Elevate your software's security posture.",
      fullDescription: "Elevate your software's security posture with our meticulous secure code review service, identifying and fortifying vulnerabilities for a resilient codebase.",
      points: ["Vulnerability Detection", "Comprehensive Analysis"],
      icon: <Search className="w-6 h-6 text-primary" />,
      image: "https://via.placeholder.com/600x400?text=Secure+Code+Review",
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [servicesVisible, setServicesVisible] = useState(false);
  const servicesRef = useRef(null);

  // Intersection Observer for triggering animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-100 dark:bg-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Our Services</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Fortify your digital fortress with our cutting-edge cybersecurity solutions. Elevate your business through
          bespoke software development, where innovation meets functionality.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 min-h-[500px]">
          {/* Left side: 40% width, compact service headings */}
          <div className="w-full lg:w-[40%] dark:bg-secondary-foreground rounded-lg border border-primary/20 shadow-lg p-4">
            <div className="grid grid-cols-1 gap-2" ref={servicesRef}>
              {services.map((service, index) => {
                if (!service.title) return null;
                return (
                  <div
                    key={index}
                    className={`dark:bg-secondary-foreground p-3 rounded-md border border-primary/20 animate-fade-in hover:shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-102 cursor-pointer ${selectedService?.title === service.title ? 'bg-primary/20 border-primary' : ''}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="tooltip" data-tip={`${service.title} - Click to learn more`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-primary">{service.title}</h3>
                        <p className="text-gray-600 text-xs">{service.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right side: 60% width, full content with image */}
          <div className="w-full lg:w-[60%]  rounded-lg border border-primary/20 shadow-lg p-6 dark:bg-secondary-foreground">
            {selectedService ? (
              <div
                key={selectedService.title}
                className="animate-slide-in-right opacity-0 translate-x-10"
                style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-chart-1 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      {selectedService.title}
                    </h3>
                    <p className="text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      {selectedService.fullDescription}
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      {selectedService.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-auto max-h-64 object-cover rounded-lg shadow-md animate-fade-in"
                      style={{ animationDelay: '0.4s' }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-600">
                Select a service from the left to view details.
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }
        .tooltip {
          position: relative;
        }
        .tooltip::after {
          content: attr(data-tip);
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: #333;
          color: #fff;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
        }
        .tooltip:hover::after {
          opacity: 1;
        }
        .min-h-\[500px\] {
          min-height: 500px;
        }
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;