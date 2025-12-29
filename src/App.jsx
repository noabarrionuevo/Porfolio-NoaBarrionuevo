import Navigation from './components/Navagation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/AbourMe/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactMe/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Noa Barrionuevo. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
