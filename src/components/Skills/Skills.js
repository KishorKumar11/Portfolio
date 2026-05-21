import React, { useState } from 'react';
import './Skills.css';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ParticleField, MotionSection, fadeUp, stagger, cardPop } from '../../motion';
import SectionBubbles from '../SectionBubbles';

const SKILLS = [
    { name: 'JavaScript', category: 'Languages', icon: 'javascript' },
    { name: 'TypeScript', category: 'Languages', icon: 'typescript' },
    { name: 'Python', category: 'Languages', icon: 'python' },
    { name: 'Java', category: 'Languages', icon: 'java' },
    { name: 'C++', category: 'Languages', icon: 'cplusplus' },
    { name: 'C', category: 'Languages', icon: 'c' },
    { name: 'SQL', category: 'Languages', icon: 'mysql' },
    { name: 'Dart', category: 'Languages', icon: 'dart' },
    { name: 'Swift', category: 'Languages', icon: 'swift' },
    { name: 'React', category: 'Frontend', icon: 'react' },
    { name: 'Vue.js', category: 'Frontend', icon: 'vuejs' },
    { name: 'HTML5', category: 'Frontend', icon: 'html5' },
    { name: 'CSS3', category: 'Frontend', icon: 'css3' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwindcss' },
    { name: 'Node.js', category: 'Backend', icon: 'nodejs' },
    { name: 'Spring Boot', category: 'Backend', icon: 'spring' },
    { name: 'Kafka', category: 'Backend', icon: 'apachekafka' },
    { name: 'MySQL', category: 'Database', icon: 'mysql' },
    { name: 'MongoDB', category: 'Database', icon: 'mongodb' },
    { name: 'AWS', category: 'Cloud', icon: 'amazonwebservices' },
    { name: 'Google Cloud', category: 'Cloud', icon: 'googlecloud' },
    { name: 'Git', category: 'Tools', icon: 'git' },
    { name: 'GitHub', category: 'Tools', icon: 'github' },
    { name: 'GitLab', category: 'Tools', icon: 'gitlab' },
    { name: 'VS Code', category: 'Tools', icon: 'vscode' },
    { name: 'IntelliJ IDEA', category: 'Tools', icon: 'intellij' },
    { name: 'JUnit', category: 'Testing', icon: 'junit' },
    { name: 'Vitest', category: 'Testing', icon: 'vitest' },
    { name: 'Unity', category: 'Game Dev', icon: 'unity' },
    { name: 'Unreal Engine', category: 'Game Dev', icon: 'unrealengine' },
    { name: 'React Native', category: 'Mobile Dev', icon: 'react' },
    { name: 'Flutter', category: 'Mobile Dev', icon: 'flutter' },
    { name: 'Figma', category: 'Design', icon: 'figma' }
];

const CATEGORIES = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Cloud', 'Tools', 'Testing', 'Game Dev', 'Mobile Dev', 'Design'];

const iconUrl = (skill) => {
    if (skill.name === 'AWS') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg';
    if (skill.name === 'MySQL') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg';
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`;
};

const Skills = () => {
    const reduce = useReducedMotion();
    const [activeFilter, setActiveFilter] = useState('All');
    const filtered = activeFilter === 'All' ? SKILLS : SKILLS.filter((s) => s.category === activeFilter);

    return (
        <MotionSection className="skills section" id="skills" gap={0.04}>
            <ParticleField count={22} color="radial-gradient(circle, #7dd4e0, #4ab8c8)" glow="rgba(74,184,200,0.55)" />
            <SectionBubbles />

            <motion.h2 className="section__title" variants={fadeUp}>
                Skills & Technologies
            </motion.h2>

            <motion.div className="skills-filter" variants={fadeUp}>
                {CATEGORIES.map((c) => (
                    <button key={c} className={`filter-btn ${activeFilter === c ? 'active' : ''}`} onClick={() => setActiveFilter(c)} type="button">
                        {activeFilter === c && <motion.span className="filter-btn__pill" layoutId="skill-filter-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                        <span className="filter-btn__label">{c}</span>
                    </button>
                ))}
            </motion.div>

            <motion.div className="skills-container container" variants={stagger(0.04, 0.1)}>
                <AnimatePresence mode="popLayout" initial={false}>
                    {filtered.map((skill) => (
                        <motion.div
                            key={`${skill.name}-${skill.category}`}
                            className="skill-item"
                            variants={cardPop}
                            layout
                            initial="hidden"
                            exit={{ opacity: 0, scale: 0.7 }}
                        >
                            <motion.div
                                className="skill-card"
                                whileHover={reduce ? {} : { y: -8, scale: 1.06 }}
                                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                            >
                                <div className="skill-icon-container">
                                    <motion.div className="skill-icon" whileHover={reduce ? {} : { rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                                        <img
                                            src={iconUrl(skill)}
                                            alt={skill.name}
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-plain.svg`;
                                            }}
                                        />
                                    </motion.div>
                                </div>
                                <h3 className="skill-name">{skill.name}</h3>
                                <span className="skill-category">{skill.category}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="skills-bg-decoration">
                <motion.div className="floating-shape shape-1" animate={reduce ? {} : { y: [0, -20, 0], rotate: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} />
                <motion.div className="floating-shape shape-2" animate={reduce ? {} : { y: [0, 20, 0], rotate: [0, -360] }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} />
            </div>
        </MotionSection>
    );
};

export default Skills;
