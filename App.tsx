import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Extracurricular />
        <Contact />
      </main>
    </div>
  );
}

export default App;
