import React, { useRef } from 'react';
import loginVid from '../../images/mainVid.mp4';
import TypewriterEffect from '../TypewriterEffect';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { stagger, fadeUp } from '../../motion';
import './Home.css';

const Home = () => {
    const ref = useRef(null);
    const reduce = useReducedMotion();

    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

    // Pointer parallax on the name
    const px = useSpring(useMotionValue(0), { stiffness: 80, damping: 18 });
    const py = useSpring(useMotionValue(0), { stiffness: 80, damping: 18 });
    const handleMove = (e) => {
        if (reduce) return;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        px.set((e.clientX - cx) / 40);
        py.set((e.clientY - cy) / 40);
    };

    return (
        <section className="home" id="home" ref={ref} onMouseMove={handleMove}>
            <motion.div className="home__video-wrap" style={{ y: yBg, opacity: opacityBg }}>
                <video src={loginVid} autoPlay loop muted playsInline className="back-video" />
                <div className="home__video-veil" />
            </motion.div>

            <motion.div className="intro" variants={stagger(0.15, 0.2)} initial="hidden" animate="visible">
                <motion.div className="intro-content" variants={fadeUp}>
                    <motion.h1 className="main-title" variants={fadeUp}>
                        <span className="greeting">Welcome, I am</span>
                        <motion.span className="name-highlight neon-text" style={{ x: px, y: py, display: 'inline-block' }}>
                            Kishor Kumar
                        </motion.span>
                    </motion.h1>

                    <motion.div className="title-description" variants={fadeUp}>
                        <h2>
                            Tech Enthusiast Bridging <TypewriterEffect words={['DESIGN', 'TECHNOLOGY', 'PEOPLE']} speed={100} deleteSpeed={80} pauseTime={1500} className="typewriter-text" />
                        </h2>
                        <div className="location">📍 Singapore</div>
                    </motion.div>

                    <motion.p className="main-description" variants={fadeUp}>
                        I turn coffee into code and bugs into features <br />
                        (just kidding, I actually fix them)
                    </motion.p>

                    <motion.a
                        href="#freelance"
                        className="hero-cta"
                        variants={fadeUp}
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.querySelector('#freelance');
                            const offset = document.querySelector('.header')?.offsetHeight || 0;
                            if (el) window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
                        }}
                        whileHover={reduce ? {} : { scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Let's Build Together →
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;
