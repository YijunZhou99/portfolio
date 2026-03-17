import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { RabbitIcon } from './RabbitIcon';
import { Menu, X } from 'lucide-react'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 glass px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#about" className="group">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <RabbitIcon className="w-8 h-8 text-brand-purple" />
            </motion.div>
            <span className="font-serif text-xl font-bold tracking-tight">
                Yijun Zhou
            </span>
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-black/60">
            {navItems.map((item) => (
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

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-black/60 hover:text-brand-purple transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full border-t border-black/5"
          >
            <div className="flex flex-col gap-4 p-6 text-sm font-medium text-black/60">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="hover:text-brand-purple transition-colors duration-300 py-2 border-b border-black/5 last:border-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};