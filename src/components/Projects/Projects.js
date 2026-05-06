import React from 'react';
import './Projects.css';
import AlexPic from '../../images/AlexPic.png';
import mBotPic from '../../images/mBotPic.png';
import KuramaPic from '../../images/KuramaPic.png';
import KingsGambitPic from '../../images/KingGambitPic.png';
import GetJackDPic from '../../images/GetJackDPic.png';
import PhysioTechPic from '../../images/PhysioTechPic.jpg';
import VRPic from '../../images/VRPic.png';
import ARLaserTagPic from '../../images/ARLaserTagPic.png';
import F1PixelSimulatorPic from '../../images/F1PixelSimulatorPic.png';
import { motion, useReducedMotion } from 'framer-motion';
import { ParticleField, MotionSection, Tilt3D, fadeUp, stagger, cardPop } from '../../motion';

const PROJECTS = [
    { title: 'F1 Pixel Simulator', description: 'A Web Application that simulates real races with 3D pixelated F1 cars using FastF1 API', image: F1PixelSimulatorPic, link: 'https://f1-pixel-simulator.vercel.app/', tags: ['Web App', 'Three.js', 'FastF1 API', 'React', 'Racing'] },
    { title: "Murphy's Misadventures", description: 'An educational VR game that focuses on home safety awareness', image: VRPic, link: 'https://github.com/KishorKumar11/Murphy-s-Misadventure', tags: ['VR', 'Unity', 'Education', 'Game Development'] },
    { title: 'AR Laser Tag', description: 'A Capstone project that turns real life actions into AR gameplay', image: ARLaserTagPic, link: 'https://docs.google.com/document/d/1qpUl3MwWoYBzuiRY5YaiYElIDhKeKfOO/edit?rtpof=true&sd=true', tags: ['AR', 'Mobile Development', 'Gaming', 'Capstone'] },
    { title: "King's Gambit", description: 'A 3D chess trainer made using Unreal Engine 4', image: KingsGambitPic, link: 'https://www.youtube.com/watch?v=172zasHyvFQ', tags: ['Unreal Engine', '3D', 'Gaming', 'AI'] },
    { title: 'mBot', description: 'A maze detection robot relying on color detection, IR sensors and ultrasound', image: mBotPic, link: 'https://docs.google.com/document/d/1R1OqPS06sV9wHk_WkpTq40PquCBtBhXgDHLtROBaKuY/view', tags: ['Robotics', 'Arduino', 'Sensors'] },
    { title: 'Alex', description: 'A search and rescue robot that was built using LiDAR, arduino, raspberry pi 3, color sensor, buzzer, and wheel encoders', image: AlexPic, link: 'https://github.com/woodenclock/CG1112-B03-4A', tags: ['Robotics', 'Raspberry Pi', 'LiDAR', 'Rescue'] },
    { title: 'RTOS', description: 'A remote controlled robot car', image: KuramaPic, link: 'https://github.com/KishorKumar11/RTOS', tags: ['RTOS', 'Embedded Systems', 'Remote Control'] },
    { title: 'PhysioTech', description: 'Medical Assistive Technology using Machine Learning for facilitating medical practitioner to treat patients undergoing Physiotherapy', image: PhysioTechPic, link: 'https://github.com/KishorKumar11/PhysioTech-Assistive-Technology-for-Physiotheraphy/blob/main/README.md', tags: ['Machine Learning', 'Healthcare', 'Medical Tech', 'AI'] },
    { title: "Get Jack'D", description: 'A CLI application that offers workout routine and a todo list for users to modify and follow', image: GetJackDPic, link: 'https://github.com/KishorKumar11/tp/tree/master/docs', tags: ['CLI', 'Java', 'Fitness', 'Productivity'] }
];

const ProjectCard = ({ project }) => {
    const reduce = useReducedMotion();
    return (
        <motion.div className="project-card" variants={cardPop}>
            <Tilt3D className="project-card-inner" max={10} scale={1.02}>
                <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                    <div className="project-overlay">
                        <motion.a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer" whileHover={reduce ? {} : { scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                            View Project →
                        </motion.a>
                    </div>
                </div>
                <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                        {project.tags.map((tag) => (
                            <motion.span key={tag} className="project-tag" whileHover={reduce ? {} : { scale: 1.08, y: -2 }}>
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </Tilt3D>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <MotionSection className="projects" id="projects" gap={0.08}>
            <div className="projects-decoration"></div>
            <ParticleField count={18} />

            <motion.h2 className="section__title" variants={fadeUp}>
                Projects
            </motion.h2>

            <motion.div className="portfolio-content container" variants={stagger(0.08, 0.1)}>
                {PROJECTS.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </motion.div>
        </MotionSection>
    );
};

export default Projects;
