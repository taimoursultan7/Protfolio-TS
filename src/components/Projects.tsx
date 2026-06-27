import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';


import mentalHealthImg from '../assets/mental_health_chatbot.png';
import faceRecImg from '../assets/face_recognition_system.png';
import foodAiImg from '../assets/food_ai_chatbot.png';
import dashboardImg from '../assets/react_dashboard.png';
import portfolioImg from '../assets/portfolio_website.png';
import aiDevImg from '../assets/ai_developer_workspace.png';

interface Project {
  id: number;
  title: string;
  category: 'React' | 'AI & ML' | 'Chatbot';
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Smarts Mental Health Chatbot',
    category: 'Chatbot',
    description: 'An AI-powered conversational agent providing empathetic cognitive behavioral support and therapy prompts.',
    longDescription: 'Designed as a wellness companion, Smarts Mental Health Chatbot uses Natural Language Processing (NLP) models to converse empathetically with users. It records journal entries, traces mood metrics over time, and triggers mindfulness exercise recommendations based on semantic analysis.',
    image: mentalHealthImg,
    technologies: ['React.js', 'Node.js', 'Python', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com/taimoursultan7',
    demo: 'https://github.com/taimoursultan7',
  },
  {
    id: 2,
    title: 'AI Face Recognition System',
    category: 'AI & ML',
    description: 'A deep learning computer vision model for real-time multi-face detection, alignment, and authentication.',
    longDescription: 'This application processes live media streams using Cascaded Convolutional Networks (MTCNN) for coordinate face detection and FaceNet for feature embeddings. Built with a React dashboard to add user profiles and query system logs.',
    image: faceRecImg,
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'React.js', 'Flask'],
    github: 'https://github.com/taimoursultan7',
    demo: 'https://github.com/taimoursultan7',
  },
  {
    id: 3,
    title: 'Food AI Chatbot',
    category: 'Chatbot',
    description: 'An intelligent recipe generator and grocery ingredient scanner using custom Large Language Models.',
    longDescription: 'Food AI uses vision models and text LLMs to analyze food ingredients available in a kitchen. It constructs step-by-step culinary cooking recipes, estimates preparation time, and breaks down nutritional information.',
    image: foodAiImg,
    technologies: ['React.js', 'Python', 'FastAPI', 'Tailwind CSS', 'Pinecone'],
    github: 'https://github.com/taimoursultan7',
    demo: 'https://github.com/taimoursultan7',
  },
  {
    id: 4,
    title: 'React Dashboard',
    category: 'React',
    description: 'A premium administration console showcasing server workloads, analytics widgets, and SaaS KPIs.',
    longDescription: 'A premium administration console featuring fully responsive charts, custom drag-and-drop widget editing, database management logs, and notification feeds. Highly optimized using React.memo and lightweight bundle structures.',
    image: dashboardImg,
    technologies: ['React.js', 'TypeScript', 'Recharts', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/taimoursultan7',
    demo: 'https://github.com/taimoursultan7',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'React',
    description: 'A responsive software engineer portfolio with canvas particle effects, custom cursor, and themes.',
    longDescription: 'My personal developer portfolio showcasing modern web capabilities. Built with Tailwind CSS v4, Framer Motion, canvas systems, and dynamic GitHub API integration, it ranks highly on Google Lighthouse speed and SEO audits.',
    image: portfolioImg,
    technologies: ['React.js', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/taimoursultan7',
    demo: 'https://github.com/taimoursultan7',
  },
  {
    id: 6,
    title: 'AI Developer Workspace',
    category: 'AI & ML',
    description: 'A premium deep learning interface visualizing neural network outputs with a highly responsive React.js dashboard.',
    longDescription: 'Designed to bridge frontend performance with complex machine intelligence. This system renders live training weights, accuracy charts, and compute metrics using a highly optimized React canvas renderer and custom WebGL graphs.',
    image: aiDevImg,
    technologies: ['React.js', 'TensorFlow.js', 'WebGL', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/taimoursultan7',
    demo: 'https://github.com/taimoursultan7',
  },
];


const CATEGORIES: ('All' | 'React' | 'AI & ML' | 'Chatbot')[] = ['All', 'React', 'AI & ML', 'Chatbot'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'React' | 'AI & ML' | 'Chatbot'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-indigo-600/5 rounded-full blur-3xl -z-10 animate-blob" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-cyan-400 mb-2">
            My Portfolio
          </h2>
          
        </div>

        {/* Filter Categories tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 border border-violet-500/10 dark:border-white/5 bg-slate-50 dark:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glass-panel-glow border border-violet-500/10 cursor-pointer flex flex-col justify-between"
                onClick={() => setActiveProject(project)}
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/10 dark:bg-slate-900/40 border-b border-violet-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-violet-600 px-3 py-1 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 text-left flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-violet-500 dark:text-cyan-400">
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-bold text-violet-500 dark:text-cyan-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Modal Card */}
              <motion.div
                className="relative w-full max-w-3xl rounded-[2.5rem] glass-panel border border-violet-500/20 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col bg-slate-50 dark:bg-[#070b19]"
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              >
                {/* Close trigger */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full border border-violet-500/20 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:scale-105 hover:bg-slate-200 dark:hover:bg-white/10 transition-all focus:outline-none"
                  aria-label="Close Modal"
                >
                  <FiX size={18} />
                </button>

                {/* Scrollable details */}
                <div className="overflow-y-auto no-scrollbar p-6 sm:p-8 space-y-6">
                  
                  {/* Aspect showcase image */}
                  <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900/10 dark:bg-slate-900/50 border border-violet-500/10">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="text-left space-y-4">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-[11px] font-extrabold tracking-widest uppercase text-white bg-violet-600 px-3 py-1 rounded-full">
                        {activeProject.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {activeProject.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                      {activeProject.longDescription}
                    </p>

                    {/* Tech details */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Technologies Used:</span>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-semibold text-slate-800 dark:text-slate-300 bg-slate-200/50 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-violet-500/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action links */}
                    <div className="flex items-center space-x-4 pt-6">
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md hover:from-violet-500 hover:to-indigo-500 transition-all duration-300"
                      >
                        <FiGithub className="mr-2 w-4 h-4" />
                        Code Repository
                      </a>

                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase border border-violet-500/20 text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white hover:border-violet-500/40 glass-button transition-all duration-300"
                      >
                        <FiExternalLink className="mr-2 w-4 h-4" />
                        Live Demo
                      </a>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
