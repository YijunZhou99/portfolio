import React from 'react';
import { motion } from 'motion/react';
import { SkillGroup } from '../types';
import { SectionHeader } from './SectionHeader';

const skillGroups: SkillGroup[] = [
  {
    category: "Core AI & LLM",
    skills: ["LLMs (GPT-4, Claude, Llama)", "RAG Architecture", "Prompt Engineering", "Agentic Workflows", "DSPy", "MCP", "Vector & Graph DBs (Milvus, Neo4j)"]
  },
  {
    category: "Data Intelligence",
    skills: ["SQL", "Pandas/NumPy", "Statistical Modeling", "Predictive Analytics", "Data Visualization"]
  },
  {
    category: "Engineering",
    skills: ["Python", "Docker", "API Design (FastAPI)", "Git", "Kubernetes", "React & Node.js","HTML & CSS"]
  }
];

export const Skills = () => (
  <section id="skills" className="min-h-screen flex items-center py-20 px-6 bg-brand-purple/[0.03]">
    <div className="max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="Technical Expertise" subtitle="A summary of the tools and technologies I use to build intelligent solutions." />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillGroups.map((group, i) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 md:p-8 bg-white rounded-[2rem] soft-shadow border border-black/5"
          >
            <h3 className="text-xl font-serif mb-6 text-brand-purple">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-brand-purple/5 text-black/60 text-sm rounded-full border border-brand-purple/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
