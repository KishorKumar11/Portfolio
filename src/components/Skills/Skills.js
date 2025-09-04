import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ setActiveNav }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const skills = [
        { name: 'React', icon: '⚛️', category: 'Frontend' },
        { name: 'JavaScript', icon: '🟨', category: 'Programming' },
        { name: 'TypeScript', icon: '🔷', category: 'Programming' },
        { name: 'Python', icon: '🐍', category: 'Programming' },
        { name: 'Java', icon: '☕', category: 'Programming' },
        { name: 'C++', icon: '💻', category: 'Programming' },
        { name: 'Node.js', icon: '🟢', category: 'Backend' },
        { name: 'SpringBoot', icon: '🍃', category: 'Backend' },
        { name: 'SQL', icon: '💾', category: 'Database' },
        { name: 'MongoDB', icon: '🍃', category: 'Database' },
        { name: 'AWS', icon: '☁️', category: 'Cloud' },
        { name: 'GCP', icon: '🌐', category: 'Cloud' },
        { name: 'Git', icon: '📚', category: 'Tools' },
        { name: 'CSS', icon: '🎨', category: 'Frontend' },
        { name: 'HTML', icon: '🌐', category: 'Frontend' },
        { name: 'Tailwind CSS', icon: '💨', category: 'Frontend' },
        { name: 'Unity', icon: '🎮', category: 'Game Dev' },
        { name: 'Unreal Engine', icon: '🎯', category: 'Game Dev' },
        { name: 'Figma', icon: '🎨', category: 'Design' }
    ];

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

    return (
        <section className="skills section" id="skills" ref={ref}>
            <motion.h2 className="section__title" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                Skills & Technologies
            </motion.h2>

            <motion.div className="skills-container container" variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="skill-item"
                        variants={itemVariants}
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
                                    {skill.icon}
                                </motion.div>
                            </div>

                            <h3 className="skill-name">{skill.name}</h3>
                            <span className="skill-category">{skill.category}</span>
                        </div>

                        {/* Floating particles effect */}
                        <div className="skill-particles">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="particle"
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.7, 0.3, 0.7],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 2 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: 'easeInOut'
                                    }}
                                />
                            ))}
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
