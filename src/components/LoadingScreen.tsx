import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Smooth transition window
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4; // realistic steps
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020c1b] text-white font-sans"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-6">
        {/* Animated logo/initials */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 relative flex items-center justify-center w-24 h-24 rounded-full border border-violet-500/30 bg-[#0a192f]/50 shadow-[0_0_50px_rgba(139,92,246,0.15)]"
        >
          <span className="text-3xl font-extrabold bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            TS
          </span>
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Text loading info */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold tracking-[0.2em] mb-2 uppercase text-center bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
        >
          Taimour Sultan
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-slate-400 tracking-wider mb-6 text-center"
        >
          Software Engineer & Web Developer
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#112240] h-[2px] rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Counter */}
        <div className="mt-4 text-sm font-mono text-cyan-400 font-semibold tracking-widest">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
};
