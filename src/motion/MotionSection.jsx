import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, reducedFade, stagger, viewport } from './variants';

/**
 * Section wrapper with viewport-driven reveal + child stagger.
 * Honors prefers-reduced-motion automatically.
 */
const MotionSection = ({ id, className = '', children, variants, gap = 0.1, delay = 0.1, as: Tag = motion.section, ...rest }) => {
    const reduce = useReducedMotion();
    const containerVariants = reduce ? reducedFade : variants || stagger(gap, delay);

    return (
        <Tag id={id} className={className} initial="hidden" whileInView="visible" viewport={viewport} variants={containerVariants} {...rest}>
            {children}
        </Tag>
    );
};

export const MotionItem = ({ children, variants, className = '', ...rest }) => {
    const reduce = useReducedMotion();
    return (
        <motion.div className={className} variants={reduce ? reducedFade : variants || fadeUp} {...rest}>
            {children}
        </motion.div>
    );
};

export default MotionSection;
