import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import ApexLogisticsDemo from './demos/ApexLogisticsDemo';
import NexusTechDemo from './demos/NexusTechDemo';
import EstatePrimeDemo from './demos/EstatePrimeDemo';
import ZenithFitnessDemo from './demos/ZenithFitnessDemo';
import NovaBoutiqueDemo from './demos/NovaBoutiqueDemo';
import ConstructOneDemo from './demos/ConstructOneDemo';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  hasDemo?: boolean;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Meridian Global",
    category: "Logistics & Freight",
    description: "Enterprise supply chain management with real-time tracking.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    hasDemo: true
  },
  {
    id: 2,
    title: "Nexus Cloud",
    category: "SaaS Product",
    description: "Real-time infrastructure monitoring dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    hasDemo: true
  },
  {
    id: 3,
    title: "Estate Prime",
    category: "Real Estate",
    description: "Luxury property listing portal with virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    hasDemo: true
  },
  {
    id: 4,
    title: "Zenith Fitness",
    category: "Health & Wellness",
    description: "Membership portal and class scheduling app.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    hasDemo: true
  },
  {
    id: 5,
    title: "Nova Boutique",
    category: "E-Commerce",
    description: "High-fashion retail store with seamless checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    hasDemo: true
  },
  {
    id: 6,
    title: "Construct One",
    category: "Construction",
    description: "Corporate identity and project portfolio showcase.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    hasDemo: true
  }
];

const Work: React.FC = () => {
  const [projects] = useState<Project[]>(initialProjects);
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    e.preventDefault();
    if (project.hasDemo) {
      setActiveDemo(project.id);
      document.body.style.overflow = 'hidden'; // Prevent scrolling main site
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const closeDemo = () => {
    setActiveDemo(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <>
      <section id="work" className="py-24 bg-zinc-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Real Results For Real Businesses</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Take a look at some of the websites we've built for small business owners just like you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a 
                  href="#contact" 
                  key={project.id} 
                  onClick={(e) => handleProjectClick(e, project)}
                  className="group block cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 bg-white border border-zinc-200 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-4px]">
                  
                  {/* Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className={`px-6 py-3 ${project.hasDemo ? 'bg-brand-lime text-black' : 'bg-white text-black'} rounded-full font-bold shadow-xl flex items-center gap-2`}>
                       {project.hasDemo ? (
                         <>View Live Demo <Eye className="w-4 h-4" /></>
                       ) : (
                         <>Request Case Study <ArrowRight className="w-4 h-4" /></>
                       )}
                     </div>
                  </div>
                </div>
                <div>
                   <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-zinc-900 group-hover:text-brand-limeDark transition-colors">{project.title}</h4>
                      <span className="text-xs font-medium px-2 py-1 bg-white border border-zinc-100 rounded text-zinc-500">{project.category}</span>
                   </div>
                   <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
              <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="inline-flex items-center justify-center gap-2 text-brand-black font-bold text-lg hover:text-brand-limeDark transition-colors"
              >
              Get a Website Like This <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Render Demo Overlays if Active */}
      {activeDemo === 1 && <ApexLogisticsDemo onClose={closeDemo} />}
      {activeDemo === 2 && <NexusTechDemo onClose={closeDemo} />}
      {activeDemo === 3 && <EstatePrimeDemo onClose={closeDemo} />}
      {activeDemo === 4 && <ZenithFitnessDemo onClose={closeDemo} />}
      {activeDemo === 5 && <NovaBoutiqueDemo onClose={closeDemo} />}
      {activeDemo === 6 && <ConstructOneDemo onClose={closeDemo} />}
    </>
  );
};

export default Work;