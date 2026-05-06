import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './GridBackground.css';

/**
 * Arcade/cyber grid bg. Animated parallax sweep + scanlines.
 * Sits absolute behind hero/sections.
 */
const GridBackground = ({ scanlines = true, intensity = 0.6, className = '' }) => {
    const reduce = useReducedMotion();
    return (
        <div className={`grid-bg ${className}`} aria-hidden style={{ opacity: intensity }}>
            <motion.div
                className="grid-bg__lines"
                animate={reduce ? {} : { backgroundPosition: ['0px 0px', '0px 60px'] }}
                transition={reduce ? {} : { duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <div className="grid-bg__radial" />
            {scanlines && <div className="grid-bg__scanlines" />}
        </div>
    );
};

export default GridBackground;
