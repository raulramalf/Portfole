import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import GithubGraph from './components/GithubGraph';
import Blog from './components/Blog';


function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GithubGraph />
        <Blog />
        <Education />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <div className="font-body relative bg-white min-h-screen text-ink">
      <div className="relative z-10 h-full min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;