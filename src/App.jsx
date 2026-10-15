import BackgroundFx from './components/BackgroundFx';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFx />
      <div className="relative z-10 lg:grid lg:grid-cols-[340px_1fr]">
        <Sidebar />
        <main className="min-w-0">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
