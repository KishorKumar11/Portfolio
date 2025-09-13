import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hobbies.css';

const Hobbies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    const hobbies = [
        {
            name: 'Reading Books',
            icon: '📚',
            funFact: '"Love exploring different perspectives through literature. I might write a book someday!"',
            dataHobby: 'reading'
        },
        {
            name: 'Gymming',
            icon: '💪',
            funFact: '"Staying fit and pushing personal limits every day so I can answer my fellow gym bro when they ask me how much I bench press"',
            dataHobby: 'gym'
        },
        {
            name: 'Chess',
            icon: '♟️',
            funFact: '"Played in a tournament unrated and thankfully managed to do well. Maybe I should become a grandmaster?"',
            dataHobby: 'chess'
        },
        {
            name: 'Football',
            icon: '⚽',
            funFact: '"Real Madrid Fan - Hala Madrid! Learnt football just by watching Ronaldo\'s skills videos on YouTube throughout the years to representing a team in my school."',
            dataHobby: 'football'
        },
        {
            name: 'Learning New Language',
            icon: '🗣️',
            funFact: '"I am somehow maintaining my 500+ streak on Duolingo. Some say its an obsession. I say its discipline!"',
            dataHobby: 'language'
        },
        {
            name: 'Drawing',
            icon: '🎨',
            funFact: '"From sketching at the edges of my notebooks to actually creating portraits. I love it!"',
            dataHobby: 'drawing'
        },
        {
            name: 'Keyboard',
            icon: '🎹',
            funFact: '"Featured in Vasantham TV. My first celebrity appearance!"',
            dataHobby: 'keyboard'
        },
        {
            name: 'Gaming',
            icon: '🎮',
            funFact: '"I was in the FIFA 16 Ultimate Team top 3% in Singapore. Quite proud of it."',
            dataHobby: 'gaming'
        }
    ];

    // Responsive slides to show
    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth <= 480) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const maxSlides = Math.max(0, hobbies.length - slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(Math.min(index, maxSlides));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [maxSlides]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="hobbies section" id="hobbies">
            <div className="hobbies-decoration"></div>
            <motion.h2 className="section__title" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                Hobbies & Interests
            </motion.h2>

            <div className="hobbies-container">
                <div className="carousel-container">
                    {/* Previous Button */}
                    <motion.button
                        className="carousel-button carousel-button-prev"
                        onClick={prevSlide}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(83, 137, 199, 0.3)' }}
                        whileTap={{ scale: 0.9 }}
                        disabled={currentSlide === 0}
                    >
                        <i className="uil uil-angle-left"></i>
                    </motion.button>

                    {/* Carousel Track */}
                    <div className="carousel-track-container">
                        <motion.div
                            className="carousel-track"
                            animate={{
                                x: `${-currentSlide * (100 / slidesToShow)}%`
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            {hobbies.map((hobby, index) => (
                                <motion.div
                                    key={hobby.name}
                                    className="hobby-card carousel-slide"
                                    data-hobby={hobby.dataHobby}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotateY: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    style={{
                                        minWidth: `${100 / slidesToShow}%`
                                    }}
                                >
                                    <motion.div
                                        className="hobby-icon"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: [0, -10, 10, 0]
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {hobby.icon}
                                    </motion.div>

                                    <h3 className="hobby-name">{hobby.name}</h3>

                                    <div className="hobby-fun-fact">{hobby.funFact}</div>

                                    {/* Floating particles effect */}
                                    <div className="hobby-particles">
                                        {[...Array(5)].map((_, i) => {
                                            const randomX = Math.random() * 80 + 10; // 10-90%
                                            const randomY = Math.random() * 80 + 10; // 10-90%
                                            const randomMoveY = (Math.random() - 0.5) * 30;

                                            return (
                                                <motion.div
                                                    key={i}
                                                    className="hobby-particle"
                                                    animate={{
                                                        y: [0, randomMoveY, 0],
                                                        opacity: [0.5, 1, 0.5],
                                                        scale: [1, 1.3, 1]
                                                    }}
                                                    transition={{
                                                        duration: 2 + Math.random() * 2,
                                                        repeat: Infinity,
                                                        delay: Math.random() * 2,
                                                        ease: 'easeInOut'
                                                    }}
                                                    style={{
                                                        left: `${randomX}%`,
                                                        top: `${randomY}%`
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Next Button */}
                    <motion.button
                        className="carousel-button carousel-button-next"
                        onClick={nextSlide}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(83, 137, 199, 0.3)' }}
                        whileTap={{ scale: 0.9 }}
                        disabled={currentSlide === maxSlides}
                    >
                        <i className="uil uil-angle-right"></i>
                    </motion.button>
                </div>

                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                        <motion.button
                            key={index}
                            className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            animate={{
                                backgroundColor: currentSlide === index ? '#5389c7' : 'rgba(255, 255, 255, 0.3)'
                            }}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="carousel-progress">
                    <motion.div
                        className="carousel-progress-bar"
                        animate={{
                            width: `${((currentSlide + 1) / (maxSlides + 1)) * 100}%`
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="hobbies-bg-decoration">
                <motion.div
                    className="floating-hobby-shape hobby-shape-1"
                    animate={{
                        y: [0, -25, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
                <motion.div
                    className="floating-hobby-shape hobby-shape-2"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -180, -360]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
                <motion.div
                    className="floating-hobby-shape hobby-shape-3"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            </div>
        </section>
    );
};

export default Hobbies;
