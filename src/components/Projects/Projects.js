import React, { useState, useEffect } from 'react';
import './Projects.css';
import AlexPic from '../../images/AlexPic.png';
import mBotPic from '../../images/mBotPic.png';
import KuramaPic from '../../images/KuramaPic.png';
import KingsGambitPic from '../../images/KingGambitPic.png';
import GetJackDPic from '../../images/GetJackDPic.png';
import DesignPic from '../../images/DesignPic.png';
import PhysioTechPic from '../../images/PhysioTechPic.jpg';
import VRPic from '../../images/VRPic.png';
import ARLaserTagPic from '../../images/ARLaserTagPic.png';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';

const Projects = ({ setActiveNav }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [hasAnimated, setHasAnimated] = useState(false);

    // Once inView becomes true, keep hasAnimated true
    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    const projectData = [
        {
            title: "Murphy's Misadventures",
            description: 'An educational VR game that focuses on home safety awareness',
            image: VRPic,
            link: 'https://github.com/KishorKumar11/Murphy-s-Misadventure',
            tags: ['VR', 'Unity', 'Education', 'Game Development']
        },
        {
            title: 'AR Laser Tag',
            description: 'A Capstone project that turns real life actions into AR gameplay',
            image: ARLaserTagPic,
            link: 'https://docs.google.com/document/d/1qpUl3MwWoYBzuiRY5YaiYElIDhKeKfOO/edit?rtpof=true&sd=true',
            tags: ['AR', 'Mobile Development', 'Gaming', 'Capstone']
        },
        {
            title: "King's Gambit",
            description: 'A 3D chess trainer made using Unreal Engine 4',
            image: KingsGambitPic,
            link: 'https://www.youtube.com/watch?v=172zasHyvFQ',
            tags: ['Unreal Engine', '3D', 'Gaming', 'AI']
        },
        {
            title: 'mBot',
            description: 'A maze detection robot relying on color detection, IR sensors and ultrasound',
            image: mBotPic,
            link: 'https://docs.google.com/document/d/1R1OqPS06sV9wHk_WkpTq40PquCBtBhXgDHLtROBaKuY/view',
            tags: ['Robotics', 'Arduino', 'Sensors']
        },
        {
            title: 'Alex',
            description: 'A search and rescue robot that was built using LiDAR, arduino, raspberry pi 3, color sensor, buzzer, and wheel encoders',
            image: AlexPic,
            link: 'https://github.com/woodenclock/CG1112-B03-4A',
            tags: ['Robotics', 'Raspberry Pi', 'LiDAR', 'Rescue']
        },
        {
            title: 'RTOS',
            description: 'A remote controlled robot car',
            image: KuramaPic,
            link: 'https://github.com/KishorKumar11/RTOS',
            tags: ['RTOS', 'Embedded Systems', 'Remote Control']
        },
        {
            title: 'PhysioTech',
            description: 'Medical Assistive Technology using Machine Learning for facilitating medical practitioner to treat patients undergoing Physiotherapy',
            image: PhysioTechPic,
            link: 'https://github.com/KishorKumar11/PhysioTech-Assistive-Technology-for-Physiotheraphy/blob/main/README.md',
            tags: ['Machine Learning', 'Healthcare', 'Medical Tech', 'AI']
        },
        {
            title: "Get Jack'D",
            description: 'A CLI application that offers workout routine and a todo list for users to modify and follow',
            image: GetJackDPic,
            link: 'https://github.com/KishorKumar11/tp/tree/master/docs',
            tags: ['CLI', 'Java', 'Fitness', 'Productivity']
        },
        {
            title: 'Tracken',
            description: 'A Social Media Tracker App design done on Figma',
            image: DesignPic,
            link: 'https://docs.google.com/presentation/d/15jbXckEWw3xQA_B75ksqmbDKp5004nnsGsfRyTYxd2c/edit?usp=share_link',
            tags: ['UI/UX', 'Figma', 'Mobile Design', 'Social Media']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <section className="projects" id="projects" ref={ref}>
            <div className="projects-decoration"></div>

            {/* Floating particles effect */}
            <div className="projects-particles">
                {[...Array(18)].map((_, i) => {
                    const randomX = Math.random() * 100;
                    const randomY = Math.random() * 100;
                    const randomMoveX = (Math.random() - 0.5) * 60;
                    const randomMoveY = (Math.random() - 0.5) * 60;

                    return (
                        <motion.div
                            key={i}
                            className="projects-particle"
                            animate={{
                                y: [0, randomMoveY, 0],
                                x: [0, randomMoveX, 0],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.4, 1]
                            }}
                            transition={{
                                duration: 5 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 4,
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

            <h2 className="section__title">Projects</h2>

            <motion.div className="portfolio-content container" variants={containerVariants} initial="hidden" animate={hasAnimated ? 'visible' : 'hidden'}>
                {projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        variants={itemVariants}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Tilt options={{ max: 15, scale: 1.05, speed: 300 }}>
                            <div className="project-card-inner">
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <motion.a href={project.link} className="project-link" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </motion.a>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span key={tagIndex} className="project-tag" whileHover={{ scale: 1.1 }}>
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
