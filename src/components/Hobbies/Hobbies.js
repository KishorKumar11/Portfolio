import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ParticleField, MotionSection, fadeUp } from '../../motion';
import SectionBubbles from '../SectionBubbles';
import './Hobbies.css';

const HOBBIES = [
    { name: 'Reading Books',        icon: '📚', funFact: '"Love exploring different perspectives through literature. I might write a book someday!"',                                                                              dataHobby: 'reading'  },
    { name: 'Gymming',              icon: '💪', funFact: '"Staying fit and pushing personal limits every day so I can answer my fellow gym bro when they ask me how much I bench press"',                                         dataHobby: 'gym'      },
    { name: 'Chess',                icon: '♟️', funFact: '"Played in a tournament unrated and thankfully managed to do well. Maybe I should become a grandmaster?"',                                                              dataHobby: 'chess'    },
    { name: 'Football',             icon: '⚽', funFact: '"Real Madrid Fan - Hala Madrid! Learnt football just by watching Ronaldo\'s skills videos on YouTube throughout the years to representing a team in my school."',       dataHobby: 'football' },
    { name: 'Learning New Language',icon: '🗣️', funFact: '"I am somehow maintaining my 500+ streak on Duolingo. Some say its an obsession. I say its discipline!"',                                                              dataHobby: 'language' },
    { name: 'Drawing',              icon: '🎨', funFact: '"From sketching at the edges of my notebooks to actually creating portraits. I love it!"',                                                                              dataHobby: 'drawing'  },
    { name: 'Keyboard',             icon: '🎹', funFact: '"Featured in Vasantham TV. My first celebrity appearance!"',                                                                                                            dataHobby: 'keyboard' },
    { name: 'Gaming',               icon: '🎮', funFact: '"I was in the FIFA 16 Ultimate Team top 3% in Singapore. Quite proud of it."',                                                                                          dataHobby: 'gaming'   },
];

const N = HOBBIES.length;

const useSlidesToShow = () => {
    const [n, setN] = useState(3);
    useEffect(() => {
        const update = () => {
            if (window.innerWidth <= 600) setN(1);
            else if (window.innerWidth <= 900) setN(2);
            else setN(3);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return n;
};

const Hobbies = () => {
    const reduce = useReducedMotion();
    const slidesToShow = useSlidesToShow();
    const [current, setCurrent] = useState(0);
    const maxSlides = Math.max(0, N - slidesToShow);

    // Measure container width for pixel-accurate layout
    const containerRef = useRef(null);
    const [containerPx, setContainerPx] = useState(0);

    useEffect(() => {
        const update = () => {
            if (containerRef.current) setContainerPx(containerRef.current.offsetWidth);
        };
        update();
        const obs = new ResizeObserver(update);
        if (containerRef.current) obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, []);

    const slideWidth = containerPx > 0 ? containerPx / slidesToShow : 0;
    const trackWidth = slideWidth * N;
    const xOffset   = -current * slideWidth;

    const next = useCallback(() => setCurrent(p => (p >= maxSlides ? 0 : p + 1)), [maxSlides]);
    const prev = useCallback(() => setCurrent(p => (p <= 0 ? maxSlides : p - 1)), [maxSlides]);

    useEffect(() => {
        if (reduce) return;
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [next, reduce]);

    const NavBtn = ({ dir, className = '' }) => (
        <motion.button
            className={`carousel-button carousel-button-${dir} ${className}`}
            onClick={dir === 'prev' ? prev : next}
            whileHover={reduce ? {} : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={dir === 'prev' ? 'Previous' : 'Next'}
        >
            <i className={`uil uil-angle-${dir === 'prev' ? 'left' : 'right'}`}></i>
        </motion.button>
    );

    const Dots = () => (
        <div className="carousel-indicators">
            {Array.from({ length: maxSlides + 1 }).map((_, i) => (
                <button
                    key={i}
                    className={`carousel-indicator ${current === i ? 'active' : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Slide ${i + 1}`}
                />
            ))}
        </div>
    );

    return (
        <MotionSection className="hobbies section" id="hobbies" gap={0.1}>
            <div className="hobbies-decoration" />
            <ParticleField count={20} color="radial-gradient(circle, #7dd4e0, #4ab8c8)" glow="rgba(74,184,200,0.55)" />
            <SectionBubbles />

            <motion.h2 className="section__title" variants={fadeUp}>
                Hobbies & Interests
            </motion.h2>

            <div className="hobbies-container">
                {/* Track */}
                <div className="carousel-container">
                    <NavBtn dir="prev" className="carousel-button--desktop" />

                    <div className="carousel-track-container" ref={containerRef}>
                        <motion.div
                            className="carousel-track"
                            style={{ width: trackWidth || '100%' }}
                            animate={{ x: xOffset }}
                            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
                        >
                            {HOBBIES.map((h, i) => (
                                <motion.div
                                    key={h.name}
                                    className="hobby-card carousel-slide"
                                    data-hobby={h.dataHobby}
                                    style={{ width: slideWidth || `${100 / slidesToShow}%`, flexShrink: 0 }}
                                    initial={{ opacity: 0, y: 40, scale: 0.92 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                                    whileHover={reduce ? {} : { scale: 1.03, y: -5 }}
                                >
                                    <motion.div
                                        className="hobby-icon"
                                        whileHover={reduce ? {} : { scale: 1.2, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {h.icon}
                                    </motion.div>
                                    <h3 className="hobby-name">{h.name}</h3>
                                    <div className="hobby-fun-fact">{h.funFact}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <NavBtn dir="next" className="carousel-button--desktop" />
                </div>

                {/* Mobile controls row */}
                <div className="carousel-nav-mobile">
                    <NavBtn dir="prev" />
                    <Dots />
                    <NavBtn dir="next" />
                </div>

                {/* Desktop dots */}
                <div className="carousel-indicators carousel-indicators--desktop">
                    {Array.from({ length: maxSlides + 1 }).map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-indicator ${current === i ? 'active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>

                <div className="carousel-progress">
                    <motion.div
                        className="carousel-progress-bar"
                        animate={{ width: `${((current + 1) / (maxSlides + 1)) * 100}%` }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
            </div>
        </MotionSection>
    );
};

export default Hobbies;
