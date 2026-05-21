import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { stagger, cardPop } from '../../motion';

const items = [
    { icon: 'bx bxs-award', title: 'Scholar', subtitle: 'LTA' },
    { icon: 'bx bxs-briefcase', title: 'Entreprenuer', subtitle: '2x Founder' },
    { icon: 'bx bxs-graduation', title: 'Graduate', subtitle: 'NUS' }
];

const Info = () => {
    const reduce = useReducedMotion();
    return (
        <motion.div className="about__info grid" variants={stagger(0.12, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
            {items.map((it) => (
                <motion.div key={it.title} className="about__box" variants={cardPop} whileHover={reduce ? {} : { y: -8, scale: 1.04 }}>
                    <i className={it.icon}></i>
                    <h3 className="about__title">{it.title}</h3>
                    <span className="about__subtitle">{it.subtitle}</span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Info;
