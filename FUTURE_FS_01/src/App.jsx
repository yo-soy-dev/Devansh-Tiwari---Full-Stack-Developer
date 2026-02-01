import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Achievements from "./sections/Achievements";
import Certificates from "./sections/Certificates";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-gray-200">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
