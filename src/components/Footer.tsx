import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiChevronUp, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/40 bg-slate-100/30 dark:bg-slate-950/20 py-12 relative z-10 px-6 md:px-12 text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Brand name */}
        <div className="flex items-center space-x-2.5">
          <svg width="36" height="36" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_12px_rgba(99,102,241,0.4)]">
            <defs>
              <linearGradient id="tkGradFooter" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="50%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="tkShineFooter" x1="0" y1="0" x2="0" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.25" />
                <stop offset="60%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="42" height="42" rx="11" ry="11" fill="url(#tkGradFooter)" />
            <rect width="42" height="42" rx="11" ry="11" fill="url(#tkShineFooter)" />
            <text
              x="21"
              y="27"
              textAnchor="middle"
              fontFamily="'Inter', 'Segoe UI', sans-serif"
              fontWeight="800"
              fontSize="16"
              fill="white"
              letterSpacing="0.5"
            >TS</text>
          </svg>
          <span className="font-bold text-slate-850 dark:text-white text-sm sm:text-base">
            Taimour Sultan
          </span>
        </div>

        {/* Quick links list */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <button onClick={() => handleLinkClick('home')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">Home</button>
          <button onClick={() => handleLinkClick('about')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">About</button>
          <button onClick={() => handleLinkClick('skills')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">Skills</button>
          <button onClick={() => handleLinkClick('services')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">Services</button>
          <button onClick={() => handleLinkClick('projects')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">Projects</button>
          <button onClick={() => handleLinkClick('experience')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">Experience</button>
          <button onClick={() => handleLinkClick('testimonials')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">Testimonials</button>
          <button onClick={() => handleLinkClick('blog')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">Blog</button>
          <button onClick={() => handleLinkClick('contact')} className="hover:text-violet-500 dark:hover:text-cyan-400 transition-colors">Contact</button>
        </div>

        {/* Social media connections */}
        <div className="flex items-center space-x-3.5">
          <a
            href="https://github.com/taimoursultan7"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-violet-500/10 dark:border-white/5 bg-slate-200/50 dark:bg-white/5 hover:border-violet-500/30 text-slate-600 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="GitHub Link"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/taimour-sultan-/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-violet-500/10 dark:border-white/5 bg-slate-200/50 dark:bg-white/5 hover:border-violet-500/30 text-slate-600 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="LinkedIn Link"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href="https://wa.me/923490799233"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-violet-500/10 dark:border-white/5 bg-slate-200/50 dark:bg-white/5 hover:border-violet-500/30 text-slate-600 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="WhatsApp Link"
          >
            <FaWhatsapp size={16} />
          </a>
        </div>

      </div>

      {/* Copyright notes */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/40 flex justify-center items-center text-xs text-slate-400 dark:text-slate-500">
        <p className="text-center">
          © 2026 Taimour Sultan. All rights reserved.
        </p>
      </div>
      

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full glass-panel border border-violet-500/20 shadow-lg flex items-center justify-center bg-[#f8fafc] dark:bg-[#0a192f] text-slate-700 dark:text-slate-200 hover:border-violet-500/40"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FiChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
