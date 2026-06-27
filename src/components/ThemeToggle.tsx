import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true); // Default is dark navy

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const dark = savedTheme === 'dark';
      setIsDark(dark);
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full glass-panel border border-violet-500/20 shadow-lg flex items-center justify-center bg-neutral-900/10 dark:bg-white/5 text-slate-800 dark:text-slate-100 hover:border-violet-500/40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
      >
        {isDark ? (
          <FiSun className="text-amber-400 w-5 h-5" />
        ) : (
          <FiMoon className="text-violet-600 w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};
