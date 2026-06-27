import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

interface Article {
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

const ARTICLES: Article[] = [
  {
    title: 'Unlocking the Power of React 19: Compiler and Hooks',
    snippet: 'Explore the newly introduced React Compiler (React Forget), server-side action pipelines, and how the new use hook simplifies asynchronous state management.',
    date: 'June 12, 2026',
    readTime: '6 min read',
    category: 'React.js',
    link: '#',
  },
  {
    title: 'Biometric Security: Training Custom CNN Face Recognition Models',
    snippet: 'A deep-dive tutorial into configuring MTCNN grids for face detection and training triplet loss weights on FaceNet models using OpenCV and TensorFlow.',
    date: 'April 08, 2026',
    readTime: '12 min read',
    category: 'AI & ML',
    link: '#',
  },
  {
    title: 'Bridging Vector Databases: Pinecone with Node.js and OpenAI',
    snippet: 'How to build high-performance search systems by vectorizing kitchen ingredient data and executing cosine similarity algorithms with LLM prompt mappings.',
    date: 'January 20, 2026',
    readTime: '8 min read',
    category: 'SaaS Architecture',
    link: '#',
  },
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-cyan-400 mb-2">
            My Publications
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Latest Technical Writing
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={idx}
              className="p-6 rounded-[2rem] glass-panel-glow border border-violet-500/10 text-left flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="space-y-4">
                {/* Category Pill Tag */}
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-violet-500 dark:text-cyan-400">
                  {article.category}
                </span>

                {/* Title */}
                <h4 className="text-lg font-bold text-slate-800 dark:text-white leading-snug hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                  {article.title}
                </h4>

                {/* Snippet summary */}
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {article.snippet}
                </p>
              </div>

              {/* Meta Info footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/50 dark:border-slate-800/40 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" />
                    {article.readTime}
                  </span>
                </div>

                <a
                  href={article.link}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label={`Read Article: ${article.title}`}
                >
                  <FiArrowRight size={16} />
                </a>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
