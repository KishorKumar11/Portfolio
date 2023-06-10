import './App.css';
import { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AnimCursor from './components/AnimCursor';
import { Fade } from 'react-reveal';

function App() {
    const [activeNav, setActiveNav] = useState('home');

    return (
        <div>
            <AnimCursor />

            <div className="App">
                <Navbar activeNav={activeNav} />

                <section id="home">
                    <Home setActiveNav={setActiveNav} />
                </section>

                <Fade bottom delay={150}>
                    <section id="about">
                        <About setActiveNav={setActiveNav} />
                    </section>
                </Fade>

                <Fade bottom delay={150}>
                    <section id="work">
                        <Work setActiveNav={setActiveNav} />
                    </section>
                </Fade>

                <Fade bottom delay={150}>
                    <section id="skills">
                        <Skills setActiveNav={setActiveNav} />
                    </section>
                </Fade>

                <Fade bottom delay={100}>
                    <section id="projects">
                        <Projects setActiveNav={setActiveNav} />
                    </section>
                </Fade>

                <Fade bottom delay={150}>
                    <section id="contact">
                        <Contact setActiveNav={setActiveNav} />
                    </section>
                </Fade>

                <Footer />
            </div>
        </div>
    );
}

export default App;
