import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCpu, FiTerminal, FiBookOpen } from 'react-icons/fi';

interface Milestone {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const EXPERIENCES: Milestone[] = [
  {
    role: 'Web Development',
    company: 'Freelance / Projects',
    period: '2025 - Present',
    description: 'Web development is the process of creating and maintaining websites and web applications. It involves designing the user interface (front-end), building server-side functionality (back-end), and managing databases. Web developers use technologies like HTML, CSS, JavaScript, and frameworks to build responsive, interactive, and user-friendly websites that work across all devices.',
    icon: <FiTerminal className="w-5 h-5" />,
    color: 'from-cyan-500 to-teal-400',
  },
  {
    role: 'Backend Development',
    company: 'Projects',
    period: '2025 - 2026',
    description: 'Backend development is the part of web development that focuses on server-side logic, databases, and application functionality. It handles how data is stored, processed, and delivered between the server and the user interface. Backend developers use languages like Python, Java, PHP, Node.js, and databases like MySQL or MongoDB to build secure, fast, and efficient web systems.',
    icon: <FiCpu className="w-5 h-5" />,
    color: 'from-violet-500 to-indigo-500',
  },
  {
    role: 'UI/UX Design',
    company: 'Creative Studio',
    period: '2021 - 2026',
    description: "I create logos, color schemes and typography for a brand's identity. Also I develop graphics for websites, social media and digital ads with applications that enhance user experience.",
    icon: <FiBriefcase className="w-5 h-5" />,
    color: 'from-indigo-500 to-sky-500',
  },
  {
    role: 'Digital Marketing',
    company: 'Freelance',
    period: '2025 - 2026',
    description: 'Digital marketing is the practice of promoting products or services using digital platforms such as social media, search engines, websites, and email. It helps businesses reach a wider audience, increase brand awareness, and boost sales through online strategies like SEO, social media marketing, and paid advertising. Taimour Sultan has knowledge of digital marketing, focusing on online growth and audience engagement techniques.',
    icon: <FiBookOpen className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-400',
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-cyan-400 mb-2">
            My Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Work Experience & Milestones
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800/60 max-w-3xl mx-auto pl-8 sm:pl-10 space-y-12">
          
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Timeline dot icon bubble */}
              <div className={`absolute -left-[3.25rem] sm:-left-[3.75rem] top-1 w-10 h-10 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-md flex items-center justify-center border-4 border-slate-50 dark:border-[#020c1b]`}>
                {exp.icon}
              </div>

              {/* Card content container */}
              <div className="p-6 rounded-[2rem] glass-panel border border-violet-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-violet-500 dark:text-cyan-400 font-mono">
                    {exp.period}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {exp.company}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h4>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
