import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    id: "vision",
    title: "Vision",
    description: "Jethat Cybersecurity Private Limited envisions a digitally secure world, where businesses thrive without compromise on data integrity and user privacy.",
    image: "https://via.placeholder.com/400x300?text=Vision",
  },
  {
    id: "expertise",
    title: "Expertise",
    description: "We specialize in cybersecurity and software development, boasting a team of seasoned professionals with deep knowledge in both domains.",
    image: "https://via.placeholder.com/400x300?text=Expertise",
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "At the core of our ethos is innovation. We consistently leverage cutting-edge technologies to stay ahead of evolving cyber threats and deliver state-of-the-art software solutions.",
    image: "https://via.placeholder.com/400x300?text=Innovation",
  },
  {
    id: "security",
    title: "Comprehensive Security",
    description: "Our cybersecurity services encompass advanced threat detection, risk assessment, and proactive measures to fortify organizations against cyber threats.",
    image: "https://via.placeholder.com/400x300?text=Security",
  },
  {
    id: "client-centric",
    title: "Client-Centric Approach",
    description: "Our focus is on understanding and addressing the specific challenges faced by our clients, ensuring tailored solutions that meet their objectives and exceed expectations.",
    image: "https://via.placeholder.com/400x300?text=Client-Centric",
  },
  {
    id: "quality",
    title: "Commitment to Quality",
    description: "We adhere to the highest standards of quality in both cybersecurity practices and software development, ensuring reliability, scalability, and resilience in every solution we deliver.",
    image: "https://via.placeholder.com/400x300?text=Quality",
  },
  {
    id: "partnerships",
    title: "Collaborative Partnerships",
    description: "Building lasting partnerships with our clients is integral to our mission. We work closely with organizations, providing ongoing support and adapting our services to meet evolving needs.",
    image: "https://via.placeholder.com/400x300?text=Partnerships",
  },
  {
    id: "improvement",
    title: "Continuous Improvement",
    description: "In fields of cybersecurity and software development, we remain agile and responsive. We continually refine our approaches, adopting emerging technologies to keep our clients at the forefront of digital innovation and security.",
    image: "https://via.placeholder.com/400x300?text=Improvement",
  },
];

const WhoWeAreSection = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <section id="who-we-are" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Jethat Cybersecurity Private Limited is a cutting-edge firm specializing in cybersecurity and software
          development. With a relentless commitment to innovation, we safeguard digital landscapes through advanced
          threat detection and robust software solutions.
        </p>

        {/* Navbar */}
        <nav className="sticky top-0 bg-background z-10 py-4 border-b border-primary/20 mb-12">
          <ul className="flex flex-wrap justify-center gap-4">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedItem(item)}
                  className={`text-primary hover:text-primary/80 transition-colors ${
                    selectedItem.id === item.id ? 'font-bold underline' : ''
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedItem.id}
            initial={{ opacity: 0, x: items.indexOf(selectedItem) % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: items.indexOf(selectedItem) % 2 === 0 ? 100 : -100 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col ${
              items.indexOf(selectedItem) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-6 bg-card p-6 rounded-lg border border-primary/20`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={selectedItem.image}
                alt={`${selectedItem.title} illustration`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold text-primary mb-2">{selectedItem.title}</h3>
              <p className="text-muted-foreground">{selectedItem.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhoWeAreSection;