import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { SectionHeader } from './SectionHeader';

const ProjectCard = React.memo(({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ delay: Math.min(index * 0.1, 0.4) }}
    className="group relative bg-white rounded-[2rem] overflow-hidden soft-shadow card-hover border border-black/5 h-full flex flex-col"
    style={{ willChange: 'transform, opacity' }}
  >
    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
      <img 
        src={project.image || `https://picsum.photos/seed/${project.title}/800/500`} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6 md:p-8 flex-grow flex flex-col">
      <div className="flex gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-brand-purple/60 px-2 py-1 bg-brand-purple/5 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl md:text-2xl font-serif mb-3">{project.title}</h3>
      <p className="text-black/60 text-sm leading-relaxed mb-6 flex-grow">
        {project.description || "A deep dive into building intelligent systems and data-driven solutions."}
      </p>
      {project.link && (
        <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium group/link text-brand-purple mt-auto">
          Explore Case Study 
          <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-1" />
        </a>
      )}
    </div>
  </motion.div>
));

const ComingSoonCard = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-brand-purple/5 rounded-[2rem] overflow-hidden border-2 border-dashed border-brand-purple/20 h-full flex flex-col items-center justify-center p-8 text-center min-h-[400px]"
  >
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 soft-shadow group-hover:scale-110 transition-transform duration-500">
      <Sparkles className="text-brand-purple animate-pulse" size={24} />
    </div>
    <h3 className="text-xl font-serif mb-3">More in the works</h3>
    <p className="text-black/40 text-sm italic leading-relaxed">
      I'm currently developing new AI solutions and data stories. Check back soon for more case studies!
    </p>
  </motion.div>
);

interface ProjectsProps {
  projects?: Project[];
}

export const Projects = ({ projects = [] }: ProjectsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  if (projects.length === 0) {
    return (
      <section id="projects" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader title="Selected Works" className="text-center mx-auto" />
            <div className="p-10 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border-2 border-dashed border-black/10">
              <Sparkles className="mx-auto text-brand-purple mb-4" size={32} />
              <p className="text-black/40 italic text-sm md:text-base">Projects are currently in development. Check back soon!</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
        >
          <SectionHeader 
            title="Selected Works" 
            subtitle="A collection of projects where I've applied AI and Data Science to solve tangible problems."
            className="mb-0"
          />
          <div className="hidden md:flex gap-4 pb-4 items-center">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple hover:bg-brand-purple/20 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple hover:bg-brand-purple/20 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
            <div className="w-8 h-[1px] bg-black/20 ml-2" />
            <span className="text-xs font-mono text-black/30">
              Explore
            </span>
          </div>
        </motion.div>
        
        <div className="relative group/carousel">
          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((p, i) => (
              <div 
                key={p.title + i} 
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[calc(33.333%-1.5rem)] snap-start"
              >
                <ProjectCard project={p} index={i} />
              </div>
            ))}
            
            {/* Always show Coming Soon card at the end */}
            <div className="min-w-[85%] sm:min-w-[45%] lg:min-w-[calc(33.333%-1.5rem)] snap-start">
              <ComingSoonCard index={projects.length} />
            </div>
          </div>

          {/* Mobile Arrows (Visible on touch devices or small screens) */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple active:bg-brand-purple/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple active:bg-brand-purple/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};
