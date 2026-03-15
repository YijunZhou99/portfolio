import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';
import PIC from '../assets/avatar.png'

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 text-center md:text-left"
        >
          <motion.span variants={item} className="text-brand-purple font-medium tracking-widest uppercase text-[10px] md:text-xs mb-4 block">
            Hello, I'm Yijun!
          </motion.span>
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[1.1] mb-6 md:mb-8 max-w-3xl">
            Building <span className="italic text-brand-purple">intelligent</span> applications that solve real-world problems.
          </motion.h1>
          <motion.p variants={item} className="text-base md:text-xl text-black/60 max-w-2xl leading-relaxed mb-8 md:mb-10 mx-auto md:mx-0">
            Data Scientist ➔ AI Engineer | Building Scalable LLM & RAG Systems
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3 bg-brand-purple text-white rounded-full font-medium hover:bg-brand-purple/90 transition-all duration-300 soft-shadow text-center"
            >
              View Projects
            </a>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/yijunzzz/" className="text-black/40 hover:text-brand-purple transition-colors"><Linkedin size={22} /></a>
              <a href="https://github.com/YijunZhou99" className="text-black/40 hover:text-brand-purple transition-colors"><Github size={22} /></a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            y: [0, -15, 0]
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            rotate: { duration: 1, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
        >
          <motion.div 
            animate={{ 
              rotate: [6, 12, 6],
              scale: [1, 1.1, 1],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-brand-purple/15 rounded-[2.5rem] md:rounded-[3rem] -z-10" 
          />
          <motion.div 
            animate={{ 
              rotate: [-3, -10, -3],
              scale: [1, 1.05, 1],
              x: [0, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-brand-pink/15 rounded-[2.5rem] md:rounded-[3rem] -z-10" 
          />
          <div className="w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-2 border-white soft-shadow relative z-10">
            <img 
              src={PIC} 
              alt="Yijun Zhou" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};