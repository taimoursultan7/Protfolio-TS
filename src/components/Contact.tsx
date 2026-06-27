import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Mock API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 4s
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-cyan-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl -z-10 animate-blob" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600 dark:text-cyan-400 mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Let's Collaborate On Something Big
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Google Maps */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                Contact Information
              </h4>
              
              <div className="space-y-4">
                {/* Email link */}
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/10 flex items-center justify-center text-violet-600 dark:text-cyan-400">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Email</span>
                    <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200">
                      taimoursultan07@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone link */}
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/10 flex items-center justify-center text-violet-600 dark:text-cyan-400">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Phone</span>
                    <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200">
                      +92 3490799233
                    </p>
                  </div>
                </div>

                {/* Location link */}
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/10 flex items-center justify-center text-violet-600 dark:text-cyan-400">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Location</span>
                    <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200">
                      Iahore, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="rounded-[2rem] overflow-hidden border border-violet-500/10 dark:border-white/5 shadow-sm h-64 bg-slate-900/10 relative">
              <iframe
                title="Google Maps Iahore"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19447.93370950221!2d74.3252964!3d31.531531499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1781904236138!5m2!1sen!2s" 
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[2.5rem] p-8 sm:p-10 glass-panel border border-violet-500/10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] h-full flex flex-col justify-center">
              
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-500/5 focus:bg-slate-500/10 focus:border-violet-500/30 text-slate-800 dark:text-white text-sm outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-500/5 focus:bg-slate-500/10 focus:border-violet-500/30 text-slate-800 dark:text-white text-sm outline-none transition-all"
                      placeholder="tk@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-500/5 focus:bg-slate-500/10 focus:border-violet-500/30 text-slate-800 dark:text-white text-sm outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-violet-500/10 dark:border-white/5 bg-slate-500/5 focus:bg-slate-500/10 focus:border-violet-500/30 text-slate-800 dark:text-white text-sm outline-none transition-all resize-none"
                    placeholder="Hi Taimour, I would like to talk about a potential job position..."
                  />
                </div>

                {/* Form response states */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold text-center"
                  >
                    Message sent successfully! I will reply shortly.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs font-extrabold tracking-widest uppercase text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md hover:from-violet-500 hover:to-indigo-500 flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend />
                    </>
                  )}
                </button>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
