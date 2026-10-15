import { MotionConfig } from 'framer-motion';
import GridLines from './components/GridLines';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-base text-ink">
        <GridLines />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Marquee />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
