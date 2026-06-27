import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import profileImg from '../assets/taimour_profile.png';
import CVDocument from './CVDocument';

// Custom typewriter component for full compatibility and flexibility
const TypingText: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  // Cursor blink
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className="font-mono text-cyan-500 dark:text-cyan-400 font-bold">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity text-violet-500`}>|</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  const words = ['Software Engineer', 'Web Developer', 'React Developer'];
  const cvRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (id: string) => {
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

  // Real PDF Download — captures hidden CVDocument and saves as PDF
  const handleDownloadCV = async () => {
    if (!cvRef.current) return;
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save('Taimour_Sultan_CV.pdf');
    } catch (err) {
      console.error('PDF generation failed:', err);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6 md:px-12"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-blob dark:bg-violet-900/15" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob dark:bg-cyan-900/15 animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-blob dark:bg-indigo-900/10 animation-delay-4000" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)]" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Hi, I am <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Taimour Sultan
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
            I am a <TypingText words={words} />
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Crafting world-class React web applications, designing cutting-edge deep learning models, and building seamless SaaS interfaces. Specializing in high-performance Javascript architectures and automated AI agents.
          </p>

          {/* Social Icons Quick Links */}
          <div className="flex items-center space-x-4 py-2">
            <a
              href="https://github.com/taimoursultan7"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 hover:border-violet-500/30 text-slate-700 dark:text-slate-300 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/taimour-sultan-/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 hover:border-violet-500/30 text-slate-700 dark:text-slate-300 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://wa.me/923490799233"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 hover:border-violet-500/30 text-slate-700 dark:text-slate-300 transition-all duration-300"
              aria-label="WhatsApp Contact"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold tracking-wide text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.35)] transition-all duration-300"
            >
              View Projects
              <FiArrowRight className="ml-2 w-4 h-4" />
            </button>
            
            <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold tracking-wide border border-violet-500/20 text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white hover:border-violet-500/40 glass-button transition-all duration-300"
            >
              Download CV
              <FiDownload className="ml-2 w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold tracking-wide border border-violet-500/20 text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white hover:border-violet-500/40 glass-button transition-all duration-300"
            >
              Contact Me
              <FiMail className="ml-2 w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right Graphic/Avatar */}
        <motion.div
          className="lg:col-span-5 flex justify-center relative mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Glowing Card container */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[2.5rem] p-3 border border-violet-500/20 glass-panel shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-visible">
            
            {/* Outer spinning aura */}
            <div className="absolute -inset-1.5 rounded-[2.8rem] bg-gradient-to-tr from-violet-600 via-cyan-500 to-indigo-600 opacity-20 blur-sm -z-10 animate-pulse" />
            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-900/10 dark:bg-slate-900/50 relative border border-white/10 group">
              <img
                src={profileImg}
                alt="Taimour Sultan"
                className="w-full h-full object-cover object-center scale-[1.03] hover:scale-[1.08] transition-transform duration-500"
              />
            </div>

            {/* Floating Info Tag 1: FrontEnd Developer */}
            <motion.div
              className="absolute -top-4 -left-6 sm:-left-12 glass-panel px-4 py-2 rounded-2xl border border-violet-500/20 shadow-lg flex items-center gap-2 z-20"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              <span className="text-sm font-bold text-slate-800 dark:text-white">
                FrontEnd Developer
              </span>
            </motion.div>

            {/* Floating Info Tag 2: Web Developer */}
            <motion.div
              className="absolute -bottom-6 -right-6 sm:-right-8 glass-panel px-4 py-2 rounded-2xl border border-cyan-500/20 shadow-lg flex items-center gap-2 z-20"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              <span className="text-sm font-bold text-slate-800 dark:text-white">
                Web Developer
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Hidden CV for PDF export — positioned off-screen */}
      <CVDocument ref={cvRef} />
    </section>
  );
};
