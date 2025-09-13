import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AnimCursor from './components/AnimCursor';
import ScrollIndicator from './components/ScrollIndicator';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [activeNav, setActiveNav] = useState('home');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });

        // Simulate loading
        setTimeout(() => setLoading(false), 2000);
    }, []);

    if (loading) {
        return (
            <motion.div className="loading-screen" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <motion.div
                    className="loading-content"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <div className="loading-spinner"></div>
                    <motion.h2 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        Loading Portfolio...
                    </motion.h2>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                {/* Glare effect removed */}
                <AnimCursor />
                <ScrollIndicator />

                <div className="App">
                    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                        <Navbar activeNav={activeNav} />
                    </motion.div>

                    <section id="home">
                        <Home setActiveNav={setActiveNav} />
                    </section>

                    <motion.section id="about" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100">
                        <About setActiveNav={setActiveNav} />
                    </motion.section>

                    <motion.section id="work" data-aos="fade-right" data-aos-offset="200" data-aos-delay="150">
                        <Work setActiveNav={setActiveNav} />
                    </motion.section>

                    <motion.section id="skills" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="100">
                        <Skills setActiveNav={setActiveNav} />
                    </motion.section>

                    <motion.section id="projects" data-aos="fade-left" data-aos-offset="200" data-aos-delay="150">
                        <Projects setActiveNav={setActiveNav} />
                    </motion.section>

                    <motion.section id="hobbies" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100">
                        <Hobbies setActiveNav={setActiveNav} />
                    </motion.section>

                    <motion.section id="contact" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200">
                        <Contact setActiveNav={setActiveNav} />
                    </motion.section>

                    <Footer />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default App;
