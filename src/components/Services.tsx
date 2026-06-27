import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiLayers, FiCpu, FiLayout } from 'react-icons/fi';

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Building high-performance, accessible, and SEO-optimized full-stack web applications using modern HTML5, CSS3, JavaScript, and Node.js backend integrations.',
    icon: <FiGlobe className="w-6 h-6" />,
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'React Development',
    description: 'Architecting complex single-page apps with reusable React components, custom Hooks, global state systems, Tailwind CSS styling, and TypeScript safety.',
    icon: <FiLayers className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-cyan-500',
  },
  {
    title: 'AI Solutions',
    description: 'Training and deploying custom Deep Learning models, real-time computer vision classifiers, neural face recognition, and context-aware LLM agents.',
    icon: <FiCpu className="w-6 h-6" />,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting premium digital experiences, focusing on sleek layouts, responsive structural wireframes, micro-interactions, dark/light modes, and branding.',
    icon: <FiLayout className="w-6 h-6" />,
    gradient: 'from-purple-500 to-rose-500',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-cyan-400 mb-2">
            My Services
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            How I Bring Value to Your Products
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((svc, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-[2rem] glass-panel-glow border border-violet-500/10 text-left flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="space-y-6">
                {/* Icon wrapper with custom gradient */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {svc.icon}
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                    {svc.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                    {svc.description}
                  </p>
                </div>
              </div>

              {/* Glowing bottom indicator */}
              <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-violet-500 dark:text-cyan-400 hover:opacity-80 transition-opacity">
                <span>Learn more</span>
                <span className="ml-1.5">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
