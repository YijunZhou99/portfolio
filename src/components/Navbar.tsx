import React from 'react';
import { motion } from 'motion/react';
import { RabbitIcon } from './RabbitIcon';

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass px-6 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <a href="#about" className="group">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <RabbitIcon className="w-8 h-8 text-brand-purple" />
        </motion.div>
        <span className="font-serif text-xl font-bold tracking-tight hidden sm:block">
            Yijun Zhou
        </span>
      </motion.div>
      </a>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex gap-4 md:gap-8 text-sm font-medium text-black/60">
          {['About', 'Skills', 'Experience', 'Projects','Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-brand-purple transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);
