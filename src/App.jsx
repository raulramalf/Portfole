import { Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

import SupportChatbotDemo from './components/apps/SupportChatbotDemo';
import EcommerceDemo from './components/apps/EcommerceDemo';
import CRMDemo from './components/apps/CRMDemo';

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
        <Education />
        <Contact />
      </main>
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <div className="font-body relative bg-[#07080C] min-h-screen text-slate-100 selection:bg-garnet selection:text-white">
      <AnimatedBackground />
      <div className="relative z-10 h-full min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/chatbot" element={<SupportChatbotDemo />} />
          <Route path="/demo/ecommerce" element={<EcommerceDemo />} />
          <Route path="/demo/crm" element={<CRMDemo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;