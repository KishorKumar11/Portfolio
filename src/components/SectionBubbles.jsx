import React, { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';
import './SectionBubbles.css';

const BUBBLE_CONFIGS = [
    { left:  '4%', size: 10, dur: 9.0,  delay: 0.0,  bx:  18 },
    { left: '14%', size:  6, dur: 7.2,  delay: 1.4,  bx: -12 },
    { left: '24%', size: 14, dur: 11.5, delay: 0.6,  bx:  22 },
    { left: '35%', size:  8, dur: 8.3,  delay: 2.8,  bx: -20 },
    { left: '47%', size: 12, dur: 10.2, delay: 0.9,  bx:  15 },
    { left: '58%', size:  5, dur: 6.8,  delay: 1.9,  bx: -10 },
    { left: '68%', size: 16, dur: 13.0, delay: 0.3,  bx:  25 },
    { left: '78%', size:  7, dur: 8.7,  delay: 3.2,  bx: -18 },
    { left: '88%', size: 11, dur: 9.8,  delay: 4.1,  bx:  12 },
    { left: '93%', size:  9, dur: 7.6,  delay: 2.1,  bx: -14 },
    { left: '20%', size: 13, dur: 12.1, delay: 1.1,  bx:  20 },
    { left:  '2%', size:  6, dur: 8.2,  delay: 5.2,  bx:  10 },
];

const SectionBubbles = () => {
    const reduce = useReducedMotion();
    if (reduce) return null;

    return (
        <div className="section-bubbles" aria-hidden>
            {BUBBLE_CONFIGS.map((b, i) => (
                <span
                    key={i}
                    className="section-bubble"
                    style={{
                        left: b.left,
                        width: b.size,
                        height: b.size,
                        animationDuration: `${b.dur}s`,
                        animationDelay: `${b.delay}s`,
                        '--bx': `${b.bx}px`,
                    }}
                />
            ))}
        </div>
    );
};

export default SectionBubbles;
