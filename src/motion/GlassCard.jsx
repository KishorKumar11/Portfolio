import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './GlassCard.css';

/**
 * Cyber/arcade glass card. Border-glow on hover. Wraps content; combine with Tilt3D for 3D effect.
 */
const GlassCard = ({ children, className = '', as: Tag = motion.div, ...rest }) => {
    const reduce = useReducedMotion();
    return (
        <Tag
            className={`glass-card ${className}`}
            whileHover={reduce ? {} : { y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            {...rest}
        >
            <div className="glass-card__sheen" />
            <div className="glass-card__content">{children}</div>
        </Tag>
    );
};

export default GlassCard;
