import React, { useState } from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ setActiveNav }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [activeFilter, setActiveFilter] = useState('All');

    const skills = [
        // Languages
        { name: 'JavaScript', category: 'Languages', icon: 'javascript' },
        { name: 'TypeScript', category: 'Languages', icon: 'typescript' },
        { name: 'Python', category: 'Languages', icon: 'python' },
        { name: 'Java', category: 'Languages', icon: 'java' },
        { name: 'C++', category: 'Languages', icon: 'cplusplus' },

        // Frontend
        { name: 'React', category: 'Frontend', icon: 'react' },
        { name: 'HTML5', category: 'Frontend', icon: 'html5' },
        { name: 'CSS3', category: 'Frontend', icon: 'css3' },
        { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwindcss' },

        // Backend
        { name: 'Node.js', category: 'Backend', icon: 'nodejs' },
        { name: 'Spring Boot', category: 'Backend', icon: 'spring' },
        { name: 'MongoDB', category: 'Backend', icon: 'mongodb' },

        // Cloud & DevOps
        { name: 'AWS', category: 'Cloud', icon: 'amazonwebservices' },
        { name: 'Google Cloud', category: 'Cloud', icon: 'googlecloud' },

        // Tools
        { name: 'Git', category: 'Tools', icon: 'git' },
        { name: 'GitHub', category: 'Tools', icon: 'github' },
        { name: 'VS Code', category: 'Tools', icon: 'vscode' },

        // Testing
        { name: 'Jest', category: 'Testing', icon: 'jest' },

        // Game Development
        { name: 'Unity', category: 'Game Dev', icon: 'unity' },
        { name: 'Unreal Engine', category: 'Game Dev', icon: 'unrealengine' },

        // Mobile Development
        { name: 'React Native', category: 'Mobile Dev', icon: 'react' },
        { name: 'Flutter', category: 'Mobile Dev', icon: 'flutter' },

        // Design
        { name: 'Figma', category: 'Design', icon: 'figma' }
    ];

    const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Cloud', 'Tools', 'Testing', 'Game Dev', 'Mobile Dev', 'Design'];

    const filteredSkills = activeFilter === 'All' ? skills : skills.filter((skill) => skill.category === activeFilter);

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

    const itemVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.8 },
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

    const filterVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="skills section" id="skills" ref={ref}>
            <motion.h2 className="section__title" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                Skills & Technologies
            </motion.h2>

            {/* Filter Buttons */}
            <motion.div className="skills-filter" variants={filterVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                        onClick={() => setActiveFilter(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            <motion.div className="skills-container container" variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                {filteredSkills.map((skill, index) => (
                    <motion.div
                        key={`${skill.name}-${skill.category}`}
                        className="skill-item"
                        variants={itemVariants}
                        layout
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="skill-card">
                            <div className="skill-icon-container">
                                <motion.div
                                    className="skill-icon"
                                    whileHover={{
                                        rotate: [0, -10, 10, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                                        alt={skill.name}
                                        onError={(e) => {
                                            e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-plain.svg`;
                                        }}
                                    />
                                </motion.div>
                            </div>

                            <h3 className="skill-name">{skill.name}</h3>
                            <span className="skill-category">{skill.category}</span>
                        </div>

                        {/* Floating particles effect */}
                        <div className="skill-particles">
                            {[...Array(8)].map((_, i) => {
                                const randomX = Math.random() * 100; // 0-100% for full coverage
                                const randomY = Math.random() * 100; // 0-100% for full coverage
                                const randomMoveX = (Math.random() - 0.5) * 50;
                                const randomMoveY = (Math.random() - 0.5) * 50;

                                return (
                                    <motion.div
                                        key={i}
                                        className="particle"
                                        animate={{
                                            y: [0, randomMoveY, 0],
                                            x: [0, randomMoveX, 0],
                                            opacity: [0.6, 0.2, 0.6],
                                            scale: [1, 1.3, 1]
                                        }}
                                        transition={{
                                            duration: 3 + Math.random() * 2,
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

            {/* Background decorative elements */}
            <div className="skills-bg-decoration">
                <motion.div
                    className="floating-shape shape-1"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
                <motion.div
                    className="floating-shape shape-2"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -180, -360]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            </div>
        </section>
    );
};

export default Skills;
