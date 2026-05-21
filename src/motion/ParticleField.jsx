import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable animated particle field. Replaces inline Math.random particle blocks
 * scattered across About/Work/Skills/Projects/Hobbies/Contact.
 *
 * Density auto-scales down on small screens.
 */
const ParticleField = ({ count = 18, color = 'var(--accent-color)', glow = 'rgba(83,137,199,0.6)', className = 'particle-field' }) => {
    const reduce = useReducedMotion();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const n = reduce ? 0 : isMobile ? Math.floor(count / 2) : count;

    const particles = useMemo(
        () =>
            Array.from({ length: n }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                dx: (Math.random() - 0.5) * 50,
                dy: (Math.random() - 0.5) * 50,
                size: 3 + Math.random() * 4,
                duration: 4 + Math.random() * 3,
                delay: Math.random() * 4
            })),
        [n]
    );

    if (!n) return null;

    return (
        <div className={className} aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {particles.map((p) => (
                <motion.span
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 ${p.size * 2}px ${glow}`,
                        willChange: 'transform, opacity'
                    }}
                    animate={{
                        x: [0, p.dx, 0],
                        y: [0, p.dy, 0],
                        opacity: [0.3, 0.85, 0.3],
                        scale: [1, 1.4, 1]
                    }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
};

export default ParticleField;
