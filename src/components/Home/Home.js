import React from 'react';
import me from '../../images/me2.png';
import loginVid from '../../images/mainVid.mp4';
import LinkedInIcon from '../../images/linkedin.png';
import GithubIcon from '../../images/github.png';
import ScrollDown from '../ScrollDown';
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

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    };
    return (
        <div>
            <section className="home" id="home">
                <video src={loginVid} autoPlay loop muted className="back-video" alt="" />

                {/* Animated Background Elements */}
                <div className="animated-bg">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="floating-dot"
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.sin(i) * 20, 0],
                                opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                                duration: 3 + i * 0.2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: 'easeInOut'
                            }}
                            style={{
                                left: `${(i * 5) % 100}%`,
                                top: `${20 + ((i * 7) % 60)}%`
                            }}
                        />
                    ))}
                </div>

                <motion.div className="intro" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h1 variants={itemVariants}>
                        Hey I'm{' '}
                        <motion.span
                            animate={{
                                color: ['#5389c7', '#7597de', '#5389c7'],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        >
                            <b>Kishor Kumar</b>
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={itemVariants}>
                        Your friendly neighborhood fullstack developer from Singapore <br />
                        passionate about making the world a better place through <br />
                        code and management.
                    </motion.p>

                    <motion.div className="images" variants={imageVariants} whileHover={{ scale: 1.05 }}>
                        <motion.img
                            src={me}
                            className="me"
                            alt="Kishor Kumar"
                            animate={{
                                y: [180, 180, 180]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />

                        {/* Hand-drawn style annotation */}
                        <motion.div className="annotation-arrow" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2, duration: 0.5 }}>
                            <svg width="100" height="50" viewBox="0 0 100 50">
                                <motion.path
                                    d="M10,40 Q30,20 50,30 T80,10"
                                    stroke="#5389c7"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 2.5, duration: 1.5 }}
                                />
                                <motion.polygon points="75,8 82,12 78,18" fill="#5389c7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }} />
                            </svg>
                        </motion.div>

                        <motion.div className="annotation-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 0.5 }}>
                            That's me!
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="scroll-icon bounce"
                        variants={itemVariants}
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    >
                        <ScrollDown />
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
