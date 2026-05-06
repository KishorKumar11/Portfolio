import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Mouse-tracked 3D tilt with framer-motion (no react-tilt dep).
 * Adds animated shine that follows pointer.
 */
const Tilt3D = ({ children, className = '', max = 12, scale = 1.03, glare = true, ...rest }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springCfg = { stiffness: 200, damping: 20, mass: 0.5 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), springCfg);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), springCfg);
    const shineX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
    const shineY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);
    const shineBg = useTransform([shineX, shineY], ([sx, sy]) => `radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.18), transparent 45%)`);

    const handleMove = (e) => {
        if (reduce || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            whileHover={reduce ? {} : { scale }}
            style={reduce ? { position: 'relative' } : { rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000, position: 'relative' }}
            className={className}
            {...rest}
        >
            {children}
            {glare && !reduce && (
                <motion.div
                    aria-hidden
                    style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        borderRadius: 'inherit',
                        background: shineBg,
                        mixBlendMode: 'plus-lighter'
                    }}
                />
            )}
        </motion.div>
    );
};

export default Tilt3D;
