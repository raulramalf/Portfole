import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base text-ink">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-14">
        <ProfileCard />
        <main className="min-w-0">
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
