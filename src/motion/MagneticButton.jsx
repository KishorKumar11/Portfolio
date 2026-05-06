import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Cursor-magnetic button. Subtle pull on hover.
 */
const MagneticButton = ({ children, strength = 0.35, className = '', as: Tag = motion.button, ...rest }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();

    const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18, mass: 0.4 });
    const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18, mass: 0.4 });

    const handleMove = (e) => {
        if (reduce || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * strength);
        y.set((e.clientY - cy) * strength);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Tag ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ x, y, display: 'inline-flex' }} className={className} {...rest}>
            {children}
        </Tag>
    );
};

export default MagneticButton;
