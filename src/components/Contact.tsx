import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export const Contact = () => (
  <section id="contact" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto text-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-brand-purple/20 text-white rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-24 soft-shadow relative overflow-hidden"
      >
        {/* Subtle animated background element for the contact card */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        
        <h2 className="text-3xl md:text-6xl font-serif mb-6 md:mb-8 relative z-10 text-black/80">Let's build something <span className="italic text-brand-pink">extraordinary</span> together.</h2>
        <p className="text-black/60 max-w-xl mx-auto mb-10 md:mb-12 text-base md:text-lg relative z-10">
          I’m always open to connecting with fellow builders and thinkers to discuss the future of AI, and its impact on our lives. Let’s bridge the gap between AI research and production.
        </p>
      <div className="flex flex-col items-center gap-10 relative z-10">
        <div className="group relative">
          <a 
            href="mailto:yijunzhou.work@gmail.com" 
            className="flex items-center gap-3 text-2xl md:text-2xl font-medium text-brand-purple/80 hover:text-brand-pink transition-all duration-300 tracking-tight"
          >
            <Mail 
              size={24} 
              className="text-white/40 group-hover:text-brand-pink group-hover:translate-x-1 transition-all duration-300" 
            />
            <span>yijunzhou.work@gmail.com</span>
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand-pink transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex gap-10 text-xs tracking-[0.2em] uppercase">
          <a 
            href="https://www.linkedin.com/in/yijunzzz/" 
            target="_blank" 
            className="text-brand-purple/60 hover:text-brand-purple hover:translate-y-[-2px] transition-all duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/YijunZhou99" 
            target="_blank" 
            className="text-brand-purple/60 hover:text-brand-purple hover:translate-y-[-2px] transition-all duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://medium.com/@yijunnnnnn" 
            target="_blank" 
            className="text-brand-purple/60 hover:text-brand-purple hover:translate-y-[-2px] transition-all duration-300"
          >
            Medium
          </a>
        </div>
      </div>
      </motion.div>
    </div>
  </section>
);
