import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;
    const maxDistance = 120;
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      radius: number = 0;
      alpha: number = 0;

      constructor(w: number, h: number) {
        this.reset(w);
        // Random distribution on initial load
        this.x = Math.random() * w;
        this.y = Math.random() * h;
      }

      reset(w: number) {
        this.x = Math.random() * w;
        this.y = 0;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() * 0.4) + 0.15; // gentle downwards drift
        this.radius = Math.random() * 1.5 + 1;
        this.alpha = Math.random() * 0.4 + 0.1;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around borders
        if (this.x < 0 || this.x > w || this.y > h) {
          this.reset(w);
          this.x = Math.random() * w;
        }
      }


      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const isDark = document.documentElement.classList.contains('dark');
        c.fillStyle = isDark
          ? `rgba(6, 182, 212, ${this.alpha})` // Cyan in dark mode
          : `rgba(99, 102, 241, ${this.alpha})`; // Indigo in light mode
        c.fill();
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawLines = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const lineColor = isDark ? '6, 182, 212' : '99, 102, 241';

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw connections to mouse cursor
        const mDist = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
        if (mDist < maxDistance + 40) {
          const alpha = (1 - mDist / (maxDistance + 40)) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particle-canvas" ref={canvasRef} className="opacity-40 pointer-events-none" />;
};
