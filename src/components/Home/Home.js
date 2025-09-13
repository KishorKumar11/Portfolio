import React from 'react';
import loginVid from '../../images/mainVid.mp4';
import ScrollDown from '../ScrollDown';
import TypewriterEffect from '../TypewriterEffect';
import { motion } from 'framer-motion';
import './Home.css';

const Home = ({ setActiveNav }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <div>
            <section className="home" id="home">
                <video src={loginVid} autoPlay loop muted className="back-video" alt="" />

                <motion.div className="intro" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.div className="intro-content" variants={itemVariants}>
                        <motion.h1 className="main-title">
                            <span className="greeting">Welcome, I am</span>
                            <motion.span
                                className="name-highlight gradient-text"
                                animate={{
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            >
                                Kishor Kumar
                            </motion.span>
                        </motion.h1>

                        <motion.div className="title-description" variants={itemVariants}>
                            <h2>
                                Tech Enthusiast Bridging <TypewriterEffect words={['DESIGN', 'TECHNOLOGY', 'PEOPLE']} speed={100} deleteSpeed={80} pauseTime={1500} className="typewriter-text" />
                            </h2>
                            <div className="location">📍 Singapore</div>
                        </motion.div>

                        <motion.p className="main-description" variants={itemVariants}>
                            I turn coffee into code and bugs into features <br />
                            (just kidding, I actually fix them)
                        </motion.p>

                        {/* <motion.div className="quote-section" variants={itemVariants}>
                            <span className="quote">"Code is my canvas, innovation is my paint."</span>
                        </motion.div> */}

                        {/* <motion.div className="social-links" variants={itemVariants}>
                            <motion.a href="https://linkedin.com/in/kishorkumar11" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                                <img src={LinkedInIcon} alt="LinkedIn" />
                            </motion.a>
                            <motion.a href="https://github.com/KishorKumar11" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                                <img src={GithubIcon} alt="GitHub" />
                            </motion.a>
                        </motion.div> */}

                        {/* <motion.div className="scroll-icon" variants={itemVariants}>
                            <ScrollDown />
                        </motion.div> */}
                    </motion.div>

                    {/* <motion.div className="images" variants={imageVariants} whileHover={{ scale: 1.05 }}> */}
                    {/* Centralised content, annotation removed for aesthetics */}
                    {/* </motion.div> */}
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
