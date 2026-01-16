import React, { useState } from 'react';
import { ArrowRight, Eye, Star, CheckCircle2, X } from 'lucide-react';
import ApexLogisticsDemo from './demos/ApexLogisticsDemo';
import NexusTechDemo from './demos/NexusTechDemo';
import ConstructOneDemo from './demos/ConstructOneDemo';
import PlumberDemo from './demos/PlumberDemo';
import NailSalonDemo from './demos/NailSalonDemo';
import CleaningDemo from './demos/CleaningDemo';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  result?: string;
  benefits: string[];
  hasDemo?: boolean;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Meridian Global",
    category: "Logistics & Freight",
    description: "Enterprise supply chain management with real-time tracking.",
    image: "/screenshots/meridian-global.png",
    result: "+340% more leads",
    benefits: [
      "More inbound customer calls",
      "Found on Google searches",
      "Professional brand image"
    ],
    hasDemo: true
  },
  {
    id: 2,
    title: "Nexus Cloud",
    category: "SaaS Product",
    description: "Real-time infrastructure monitoring dashboard.",
    image: "/screenshots/nexus-cloud.png",
    result: "2x conversions",
    benefits: [
      "Higher visitor-to-customer rate",
      "Clear value communication",
      "Easy sign-up process"
    ],
    hasDemo: true
  },
  {
    id: 3,
    title: "RapidFlow Plumbing",
    category: "Home Services",
    description: "Emergency plumbing service with 24/7 dispatch capabilities.",
    image: "/screenshots/estate-prime.png", // Placeholder image
    result: "Page 1 on Google",
    benefits: [
      "24/7 Leak Dispatch System",
      "Local SEO Domination",
      "Emergency Click-to-Call"
    ],
    hasDemo: true
  },
  {
    id: 4,
    title: "Lumière Nail Spa",
    category: "Beauty & Wellness",
    description: "Luxury salon booking system with Instagram portfolio integration.",
    image: "/screenshots/zenith-fitness.png", // Placeholder image
    result: "40% more bookings",
    benefits: [
      "Online Appointment Booking",
      "Instagram Feed Gallery",
      "Mobile-First Experience"
    ],
    hasDemo: true
  },
  {
    id: 5,
    title: "PureSpace Cleaning",
    category: "Cleaning Services",
    description: "Instant quote calculator and booking platform for cleaners.",
    image: "/screenshots/nova-boutique.png", // Placeholder image
    result: "3x online quotes",
    benefits: [
      "Instant Price Calculator",
      "Automated Scheduling",
      "Trust Badge Integration"
    ],
    hasDemo: true
  },
  {
    id: 6,
    title: "Construct One",
    category: "Construction",
    description: "Corporate identity and project portfolio showcase.",
    image: "/screenshots/construct-one.png",
    result: "First page Google",
    benefits: [
      "Win larger contracts",
      "Showcase past projects",
      "Stand out from competitors"
    ],
    hasDemo: true
  }
];

// Helper wrapper to give the new demos a "Close" button and modal behavior
const DemoWrapper: React.FC<{ children: React.ReactNode; onClose: () => void; title: string }> = ({ children, onClose, title }) => (
  <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans">
    {/* Floating Close Button */}
    <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-4">
      <div className="bg-white/90 backdrop-blur-md text-zinc-900 px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-zinc-200">
        <span className="text-xs font-bold uppercase tracking-widest border-r border-zinc-300 pr-4 text-zinc-500">Live Demo: {title}</span>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:text-zinc-900 transition-colors"
        >
          Close Preview <X className="w-4 h-4" />
        </button>
      </div>
    </div>
    {children}
  </div>
);

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
                    className="w-full h-full object-cover object-left-top origin-top-left transition-transform duration-700 group-hover:scale-105"
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
                  <p className="text-zinc-500 text-sm mb-3">{project.description}</p>

                  {/* Benefits List */}
                  <div className="space-y-1.5">
                    {project.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-zinc-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
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
      {/* Existing demos (Apex, Nexus, Construct) have their own wrappers */}
      {activeDemo === 1 && <ApexLogisticsDemo onClose={closeDemo} />}
      {activeDemo === 2 && <NexusTechDemo onClose={closeDemo} />}

      {/* New demos need the wrapper */}
      {activeDemo === 3 && (
        <DemoWrapper onClose={closeDemo} title="RapidFlow Plumbing">
          <PlumberDemo />
        </DemoWrapper>
      )}
      {activeDemo === 4 && (
        <DemoWrapper onClose={closeDemo} title="Lumière Nail Spa">
          <NailSalonDemo />
        </DemoWrapper>
      )}
      {activeDemo === 5 && (
        <DemoWrapper onClose={closeDemo} title="PureSpace Cleaning">
          <CleaningDemo />
        </DemoWrapper>
      )}

      {activeDemo === 6 && <ConstructOneDemo onClose={closeDemo} />}
    </>
  );
};

export default Work;
