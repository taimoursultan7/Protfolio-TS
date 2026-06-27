import React, { useEffect, useState } from 'react';

const Counter: React.FC<{ target: number; suffix?: string; label: string }> = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = target;
          if (start === end) return;

          const totalDuration = 1800; // ~1.8 seconds animation
          const steps = 60; // count increments over 60 intervals
          const increment = Math.ceil(end / steps);
          const intervalTime = totalDuration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, intervalTime);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, target]);

  return (
    <div
      ref={setElement}
      className="flex flex-col items-center p-6 md:p-8 rounded-[2rem] glass-panel-glow border border-violet-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
    >
      <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent mb-2 font-mono tracking-tighter">
        {count}
        {suffix}
      </span>
      <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 text-center">
        {label}
      </span>
    </div>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="py-12 relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Counter target={35} suffix="+" label="Projects Completed" />
          <Counter target={20} suffix="+" label="Happy Clients" />
          <Counter target={4} suffix="+" label="Years Experience" />
          <Counter target={15} suffix="+" label="Technologies Mastered" />
        </div>
      </div>
    </section>
  );
};
