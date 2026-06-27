import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaBrain, FaCamera } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 95, icon: <FaReact className="w-8 h-8" />, color: 'text-sky-400' },
      { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="w-8 h-8" />, color: 'text-cyan-400' },
      { name: 'HTML5', level: 92, icon: <FaHtml5 className="w-8 h-8" />, color: 'text-orange-500' },
      { name: 'CSS3', level: 88, icon: <FaCss3Alt className="w-8 h-8" />, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Core Languages & Backend',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90, icon: <FaJs className="w-8 h-8" />, color: 'text-amber-400' },
      { name: 'Python', level: 85, icon: <FaPython className="w-8 h-8" />, color: 'text-sky-500' },
      { name: 'Node.js', level: 80, icon: <FaNodeJs className="w-8 h-8" />, color: 'text-green-500' },
    ],
  },
  {
    title: 'AI & Computational Vision',
    skills: [
      { name: 'AI & Machine Learning', level: 85, icon: <FaBrain className="w-8 h-8" />, color: 'text-violet-400' },
      { name: 'Face Recognition', level: 80, icon: <FaCamera className="w-8 h-8" />, color: 'text-rose-400' },
    ],
  },
  {
    title: 'Collaboration & Tools',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: <FaGithub className="w-8 h-8" />, color: 'text-slate-700 dark:text-slate-300' },
    ],
  },
];

// Single Skill Progress Bar
const SkillBar: React.FC<{ skill: Skill; inView: boolean }> = ({ skill, inView }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
        <span className="font-mono text-xs font-bold text-violet-500 dark:text-cyan-400">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return (
    <section id="skills" ref={setElement} className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Glow blobs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-cyan-400 mb-2">
            Skills Inventory
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            My Technical Armament
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              className="p-6 md:p-8 rounded-[2rem] glass-panel border border-violet-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] text-left flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                {cat.title}
              </h4>

              {/* Skills cards within category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="p-4 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-500/5 hover:bg-slate-500/10 transition-all flex flex-col space-y-4 hover:scale-[1.03] duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-xl bg-white dark:bg-[#0a192f] shadow-sm flex items-center justify-center ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                    </div>

                    <SkillBar skill={skill} inView={inView} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
