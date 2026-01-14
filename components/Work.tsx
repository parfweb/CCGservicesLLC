import React, { useState } from 'react';
import { ArrowRight, Eye, Star } from 'lucide-react';
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
  result?: string;
  hasDemo?: boolean;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Meridian Global",
    category: "Logistics & Freight",
    description: "Enterprise supply chain management with real-time tracking.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    result: "+340% more leads",
    hasDemo: true
  },
  {
    id: 2,
    title: "Nexus Cloud",
    category: "SaaS Product",
    description: "Real-time infrastructure monitoring dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    result: "2x conversions",
    hasDemo: true
  },
  {
    id: 3,
    title: "Estate Prime",
    category: "Real Estate",
    description: "Luxury property listing portal with virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    result: "Page 1 on Google",
    hasDemo: true
  },
  {
    id: 4,
    title: "Zenith Fitness",
    category: "Health & Wellness",
    description: "Membership portal and class scheduling app.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    result: "40% more bookings",
    hasDemo: true
  },
  {
    id: 5,
    title: "Nova Boutique",
    category: "E-Commerce",
    description: "High-fashion retail store with seamless checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    result: "3x online sales",
    hasDemo: true
  },
  {
    id: 6,
    title: "Construct One",
    category: "Construction",
    description: "Corporate identity and project portfolio showcase.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    result: "First page Google",
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
      document.body.style.overflow = 'hidden';
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        const headerOffset = 100;
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
    document.body.style.overflow = 'auto';
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
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
      <section id="work" className="py-16 md:py-20 bg-zinc-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 rounded-full text-sm font-semibold text-zinc-600 mb-4">
              <Star className="w-4 h-4 text-yellow-500" />
              Real Results for Real Businesses
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Websites That Actually Bring in Customers
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Click on any project below to see a live, interactive demo of the websites we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <a
                href="#contact"
                key={project.id}
                onClick={(e) => handleProjectClick(e, project)}
                className="group block cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-white border border-zinc-200 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-4px]">

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Result Badge */}
                  {project.result && (
                    <div className="absolute top-3 left-3 bg-brand-lime text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {project.result}
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 py-3 bg-white text-black rounded-full font-bold shadow-xl flex items-center gap-2">
                      View Live Demo <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-lg font-bold text-zinc-900 group-hover:text-brand-limeDark transition-colors">{project.title}</h4>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-100 rounded text-zinc-500">{project.category}</span>
                  </div>
                  <p className="text-zinc-500 text-sm">{project.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-primary rounded-xl font-bold"
            >
              I Want a Website Like This <ArrowRight className="w-5 h-5" />
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
