import React from 'react';
import { motion } from 'motion/react';
import { Experience, Education } from '../types';
import { SectionHeader } from './SectionHeader';

const ExperienceItem = ({ exp, index }: { exp: Experience; index: number; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover="hover"
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 pb-10 md:pb-12 border-l border-brand-purple/20 last:pb-0 group cursor-default"
  >
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-pink transition-transform duration-300 group-hover:scale-150" />
    <span className="text-xs font-mono text-black/40 mb-1 block">{exp.period}</span>
    <h4 className="text-lg md:text-xl font-serif mb-1 group-hover:text-brand-purple transition-colors">{exp.role}</h4>
    <p className="text-sm font-medium text-black/60">{exp.company}</p>
    
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      variants={{
        hover: { height: 'auto', opacity: 1, marginTop: 12 }
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <p className="text-black/50 text-sm leading-relaxed max-w-xl">
        {exp.description}
      </p>
    </motion.div>
  </motion.div>
);

const EducationItem = ({ edu, index }: { edu: Education; index: number; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover="hover"
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 pb-10 md:pb-12 border-l border-brand-purple/20 last:pb-0 group cursor-default"
  >
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-purple transition-transform duration-300 group-hover:scale-150" />
    <span className="text-xs font-mono text-black/40 mb-1 block">{edu.period}</span>
    <h4 className="text-lg md:text-xl font-serif mb-1 group-hover:text-brand-purple transition-colors">{edu.degree}</h4>
    <p className="text-sm font-medium text-black/60">{edu.school}</p>
    
    {edu.description && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        variants={{
          hover: { height: 'auto', opacity: 1, marginTop: 12 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-black/50 text-sm leading-relaxed max-w-xl">
          {edu.description}
        </p>
      </motion.div>
    )}
  </motion.div>
);

export const ExperienceSection = ({ experiences, education }: { experiences: Experience[]; education: Education[] }) => (
  <section id="experience" className="min-h-screen flex items-center py-20 px-6 bg-white/50 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader title="The Journey" subtitle="My career has been a continuous evolution from data analysis to building intelligent systems." />
        <div className="p-6 md:p-8 rounded-[2rem] bg-brand-purple/5 border border-brand-purple/10">
          <h4 className="font-serif text-brand-purple mb-2">Current Focus</h4>
          <p className="text-sm text-brand-purple/70 leading-relaxed">
            I am focused on architecting Agentic Workflows and optimizing RAG pipelines to handle complex business logic.
          </p>
        </div>
      </motion.div>
      <div className="pt-8 md:pt-0">
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-widest font-bold text-brand-purple mb-8">Professional Experience</h3>
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.company + exp.role} exp={exp} index={i} />
          ))}
        </div>
        
        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold text-brand-purple mb-8">Education</h3>
          {education.map((edu, i) => (
            <EducationItem key={edu.school + edu.degree} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
