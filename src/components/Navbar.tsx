import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle nav background glassmorphism
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const scrollPosition = window.scrollY + 160;
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-slate-50/80 dark:bg-black/60 backdrop-blur-md border-b border-violet-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Initials / Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-2.5 text-xl font-bold tracking-wider hover:opacity-95 transition-opacity group"
        >
          {/* SVG Logo Badge */}
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_16px_rgba(99,102,241,0.45)] group-hover:drop-shadow-[0_6px_20px_rgba(99,102,241,0.6)] transition-all duration-300">
            <defs>
              <linearGradient id="tkGrad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="50%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="tkShine" x1="0" y1="0" x2="0" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.25" />
                <stop offset="60%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <clipPath id="tkClip">
                <rect width="42" height="42" rx="11" ry="11" />
              </clipPath>
            </defs>
            {/* Background gradient */}
            <rect width="42" height="42" rx="11" ry="11" fill="url(#tkGrad)" />
            {/* Glossy shine overlay */}
            <rect width="42" height="42" rx="11" ry="11" fill="url(#tkShine)" />
            {/* TK Text */}
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
          <span className="hidden sm:inline bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent font-extrabold">
            Taimour Sultan
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none ${
                activeSection === item.id
                  ? 'text-violet-600 dark:text-cyan-400 font-bold'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden lg:inline-flex items-center justify-center px-5.5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_4px_15px_rgba(99,102,241,0.15)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all duration-300"
        >
          Hire Me
        </button>

        {/* Mobile Hamburger menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-violet-500 dark:hover:text-cyan-400 focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-50/95 dark:bg-slate-950/95 border-b border-violet-500/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-2.5 text-left text-sm font-semibold tracking-wide border-b border-slate-100 dark:border-slate-800/40 last:border-0 ${
                    activeSection === item.id
                      ? 'text-violet-600 dark:text-cyan-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 w-full py-3 rounded-xl text-center text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
