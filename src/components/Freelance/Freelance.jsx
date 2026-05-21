import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCode, FaBriefcase, FaLayerGroup } from 'react-icons/fa';
import { MotionSection, Tilt3D, fadeUp, scaleIn, popIn, stagger } from '../../motion';
import SectionBubbles from '../SectionBubbles';
import './Freelance.css';

const SERVICES = [
    {
        icon: <FaCode />,
        title: 'Landing Page',
        description: 'Fast, modern landing pages built to impress and convert. Clean design, smooth animations, and mobile-first.',
        tags: ['React', 'CSS', 'Responsive'],
    },
    {
        icon: <FaBriefcase />,
        title: 'Portfolio Site',
        description: 'Showcase your work with style. Custom-built portfolios that make your projects shine and leave a lasting impression.',
        tags: ['Next.js', 'Framer Motion', 'Custom Design'],
    },
    {
        icon: <FaLayerGroup />,
        title: 'Web Application',
        description: 'Full-stack web apps tailored to your needs. From idea to deployment — built clean, tested, and production-ready.',
        tags: ['React', 'Node.js', 'APIs'],
    },
];

const ServiceCard = ({ service }) => {
    return (
        <motion.div className="freelance-card" variants={scaleIn}>
            <Tilt3D className="freelance-card-inner" max={8} scale={1.02}>
                <div className="freelance-card-icon">{service.icon}</div>
                <h3 className="freelance-card-title">{service.title}</h3>
                <p className="freelance-card-desc">{service.description}</p>
            </Tilt3D>
        </motion.div>
    );
};

const Freelance = () => {
    const reduce = useReducedMotion();

    return (
        <MotionSection className="freelance section" id="freelance" gap={0.1}>
            <SectionBubbles />
            <motion.h2 className="section__title" variants={fadeUp}>
                Work With Me
            </motion.h2>

            <motion.p className="freelance-subtitle" variants={fadeUp}>
                I build websites and web apps — tell me what you need
            </motion.p>

            <motion.div className="freelance-cards container" variants={stagger(0.12, 0.1)}>
                {SERVICES.map((s) => (
                    <ServiceCard key={s.title} service={s} />
                ))}
            </motion.div>

            <motion.div className="freelance-cta-wrap" variants={popIn}>
                <p className="freelance-pricing">
                    Prices are flexible — reach out and we'll figure it out together.
                </p>
                <motion.a
                    href="mailto:harisham38@gmail.com"
                    className="freelance-cta"
                    whileHover={reduce ? {} : { scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Get in Touch →
                </motion.a>
            </motion.div>
        </MotionSection>
    );
};

export default Freelance;
