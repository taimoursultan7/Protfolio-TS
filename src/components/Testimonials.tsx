import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'SaaS Founder, LaunchPad',
    comment: 'Taimour delivered our enterprise React dashboard two weeks ahead of schedule. The component architecture was exceptionally clean, modular, and easy to extend. A true engineering partner!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'Dr. Asim Raza',
    role: 'Director, NUST Vision Lab',
    comment: 'Collaborating with Taimour on computer vision models was highly productive. His insights into deep learning network layers and real-time processing bottlenecks were remarkable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  },
  {
    name: 'David Chen',
    role: 'Product Lead, FoodByte',
    comment: 'Taimour possesses a rare ability to bridge the gap between heavy backend AI mechanics and gorgeous, intuitive React interfaces. Our users absolutely love the food chatbot.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
];

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // auto-rotate every 6 seconds

    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeTestimonial = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background elements */}
      <div className="absolute top-1/2 right-1/10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-violet-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-cyan-400 mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            What Clients & Colleagues Say
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonial slider card wrapper */}
        <div className="relative rounded-[2.5rem] p-8 sm:p-12 glass-panel border border-violet-500/10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] min-h-[340px] flex flex-col justify-between">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="space-y-6 text-left"
            >
              {/* Star ratings */}
              <div className="flex items-center space-x-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-amber-400 w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg italic font-medium leading-relaxed">
                "{activeTestimonial.comment}"
              </p>

              {/* User Avatar & Identity info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-violet-500/20 bg-slate-900/10">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls buttons */}
          <div className="flex items-center justify-end space-x-3 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none"
              aria-label="Next Testimonial"
            >
              <FiChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
