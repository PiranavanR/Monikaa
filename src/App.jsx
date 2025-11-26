import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import useThemeToggle from './assets/ThemeProvider';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  useEffect(() => {
    AOS.init({ once: false, mirror: true, duration: 1000 });
  }, []);
  useThemeToggle();
  return (
    <>
      <Header />
      <main>
        <div className="bg-red-500 text-white z-100 p-4 text-center">
          Tailwind CSS is working!
        </div>
        <Analytics />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
