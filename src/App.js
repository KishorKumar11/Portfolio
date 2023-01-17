import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Fade } from 'react-reveal';

function App() {

  return (
    <div>
      <div className='App'>
        <Navbar />
        <Home />
        <Fade delay={400}>
        <About />
        </Fade>
        <Fade delay={400}>
        <Work />
        </Fade>
        <Fade delay={400}>
        <Skills />
        </Fade>
        <Fade delay={400}>
        <Projects />
        </Fade>
        <Fade delay={400}>
        <Contact />
        </Fade>
        <Footer />
      </div>
    </div>
  );
}

export default App;
