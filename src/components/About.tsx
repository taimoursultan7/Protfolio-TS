import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookOpen, FiAward, FiHeart } from 'react-icons/fi';

const EDUCATION = [
  {
    degree: 'Software Engineering',
    institution: 'University of swat',
    period: '2021 - 2025',
    details: 'The University of Swat is a public sector university located in Khyber Pakhtunkhwa, Pakistan. It offers a range of undergraduate and postgraduate programs, including Software Engineering. Taimour Sultan is currently studying Software Engineering at the University of Swat, where he is gaining skills in programming, software development, and modern computing technologies.',
  },
  {
    degree: 'F.Sc (Pre-Engineering)',
    institution: 'Govt,Degree College Jowar,Buner',
    period: '2019 - 2021',
    details: 'Government Degree College Jowar, Buner is a public educational institution located in District Buner, Khyber Pakhtunkhwa, Pakistan. It provides intermediate and degree-level education in various disciplines. Taimour Sultan completed F.Sc (Pre-Engineering) from this college, gaining a strong foundation in mathematics, physics, and chemistry for further studies in engineering and technology.',
  },
];

const CERTIFICATIONS = [
  {
    title: 'SQL Course (Self Learning)',
    issuer: 'SkillCourse (ID: SC-5705C6B006)',
    date: 'Jun 2026',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'dub.ai',
    date: 'Jun 2026',
  },
];

const HOBBIES = [
  { name: 'Generative AI Research', icon: '🤖' },
  { name: 'Open Source Development', icon: '💻' },
  { name: 'FootBall', icon: '⚽' },
  { name: 'Cricket', icon: '🏏' },
];

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certs' | 'interests'>('education');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden px-6 md:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-cyan-400 mb-2">
            About Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Bridging Frontend Elegance with Machine Intelligence
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Column */}
          <motion.div
            className="lg:col-span-6 space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              Who is Taimour Sultan?
            </h4>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              Hello! My name is Taimour Sultan. I am a passionate Software Engineering student with strong interest in Web Development, Artificial Intelligence, and modern technologies. I enjoy creating responsive and attractive websites using HTML, CSS, JavaScript, React JS, and Tailwind CSS.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              I also work on AI-based projects such as chatbots and face recognition systems. Currently, I am working on my final year project named Smarts, an AI-powered mental health chatbot designed to help users through intelligent conversation and smart technology. My goal is to become a professional Full Stack Developer and AI Engineer by building innovative and useful software solutions.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-emerald-500 text-lg">✓</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Clean Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-500 text-lg">✓</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Web Developer</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-500 text-lg">✓</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">FrontEnd Developer</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-500 text-lg">✓</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Responsive Layouts</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Info Tabs Column */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-[2rem] p-6 glass-panel border border-violet-500/15 shadow-md">
              
              {/* Tab Selector Buttons */}
              <div className="flex border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 space-x-1 sm:space-x-2">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none ${
                    activeTab === 'education'
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <FiBookOpen />
                  <span>Education</span>
                </button>

                <button
                  onClick={() => setActiveTab('certs')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none ${
                    activeTab === 'certs'
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <FiAward />
                  <span>Certificates</span>
                </button>

                <button
                  onClick={() => setActiveTab('interests')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none ${
                    activeTab === 'interests'
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <FiHeart />
                  <span>Interests</span>
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[220px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'education' && (
                    <motion.div
                      key="education"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-6 text-left"
                    >
                      {EDUCATION.map((edu, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="relative pl-6 border-l-2 border-violet-500/20">
                          <span className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-500" />
                          <span className="text-xs font-bold text-violet-600 dark:text-cyan-400 font-mono">{edu.period}</span>
                          <h5 className="text-base font-bold text-slate-800 dark:text-slate-100">{edu.degree}</h5>
                          <h6 className="text-sm font-semibold text-slate-500 dark:text-slate-400">{edu.institution}</h6>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{edu.details}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'certs' && (
                    <motion.div
                      key="certs"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-4 text-left"
                    >
                      {CERTIFICATIONS.map((cert, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                        >
                          <FiAward className="text-cyan-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">{cert.title}</h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {cert.issuer} • <span className="font-mono text-cyan-500 font-bold">{cert.date}</span>
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'interests' && (
                    <motion.div
                      key="interests"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="grid grid-cols-2 gap-4 text-left"
                    >
                      {HOBBIES.map((hobby, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="p-4 rounded-2xl glass-panel border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center text-center hover:border-violet-500/20 hover:shadow-sm transition-all"
                        >
                          <span className="text-3xl mb-2">{hobby.icon}</span>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{hobby.name}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
