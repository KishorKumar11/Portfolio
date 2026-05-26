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
import Freelance from './components/Freelance/Freelance';
import Footer from './components/Footer/Footer';
import AnimCursor from './components/AnimCursor';
import ScrollIndicator from './components/ScrollIndicator';
import Glare from './components/Glare/Glare';
import PokemonFollower from './components/SquirtleFollower/SquirtleFollower';
import { motion, AnimatePresence } from 'framer-motion';

const POKEMON_ZONES = [
  { name: 'Squirtle', sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif', message: 'Squirtle! 💧',        startSection: 'about',   endSection: 'work'     },
  { name: 'Piplup',   sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/piplup.gif',   message: 'Piplup piplup! 💦', startSection: 'skills',  endSection: 'projects' },
  { name: 'Mudkip',   sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif',   message: 'Mudkip! 🌊',        startSection: 'hobbies', endSection: 'freelance'  },
];

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1400);
        return () => clearTimeout(t);
    }, []);

    // Parallax CSS variable for section backgrounds
    useEffect(() => {
        const onScroll = () => {
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div key="loader" className="loading-screen" exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6 }}>
                    <motion.div className="loading-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <motion.div
                            className="loading-spinner"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.h2 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.6, repeat: Infinity }}>
                            <span className="loading-bracket">&lt;</span>
                            booting kishor
                            <span className="loading-bracket">/&gt;</span>
                        </motion.h2>
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <AnimCursor />
                    <ScrollIndicator />
                    <PokemonFollower zones={POKEMON_ZONES} />

                    <div className="App" id="main-content">
                        <Navbar />
                        <Glare />

                        <Home />
                        <About />
                        <Work />
                        <Skills />
                        <Projects />
                        <Hobbies />
                        <Freelance />
                        <Footer />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
