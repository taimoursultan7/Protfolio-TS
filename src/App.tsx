import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Statistics } from './components/Statistics';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="content" className="min-h-screen relative w-full overflow-hidden">
            {/* Custom Interactive Cursor Follower */}
            <CustomCursor />

            {/* Background Canvas Particles */}
            <ParticleBackground />

            {/* Floating theme toggle button (bottom-left) */}
            <ThemeToggle />

            {/* Sticky glassmorphic navbar */}
            <Navbar />

            {/* Scrollable sections */}
            <main className="relative z-10 w-full">
              <Hero />
              <About />
              <Statistics />
              <Skills />
              <Services />
              <Projects />
              <Experience />
              <Testimonials />
              <Blog />
              <Contact />
            </main>

            {/* Footer with quick links and floating back to top (bottom-right) */}
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
