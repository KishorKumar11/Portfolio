import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollIndicator.css';

const TOP_THRESHOLD_PX = 1;

function pageCanScroll() {
    return document.documentElement.scrollHeight > window.innerHeight + TOP_THRESHOLD_PX;
}

function isAtPageTop() {
    return window.scrollY <= TOP_THRESHOLD_PX;
}

const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [atTop, setAtTop] = useState(true);
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        const syncScrollState = () => {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScrollY = window.scrollY;
            const progress = totalScrollHeight > 0 ? (currentScrollY / totalScrollHeight) * 100 : 0;

            setScrollProgress(progress);
            setAtTop(isAtPageTop());
            setCanScroll(pageCanScroll());
            document.documentElement.classList.toggle('scroll-at-top', isAtPageTop());
        };

        syncScrollState();
        window.addEventListener('scroll', syncScrollState, { passive: true });
        window.addEventListener('resize', syncScrollState, { passive: true });

        return () => {
            window.removeEventListener('scroll', syncScrollState);
            window.removeEventListener('resize', syncScrollState);
            document.documentElement.classList.remove('scroll-at-top');
        };
    }, []);

    const showScrollHint = atTop && canScroll;

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #4ab8c8, #7dd4e0)',
                    transformOrigin: '0%',
                    zIndex: 9999,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrollProgress / 100 }}
                transition={{ duration: 0.1 }}
            />

            <AnimatePresence>
                {showScrollHint && (
                    <motion.div
                        key="scroll-hint"
                        className="scroll-hint"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35 }}
                        aria-hidden="true"
                    >
                        <span className="scroll-hint__arrow" aria-hidden="true">
                            <svg
                                className="scroll-hint__arrow-svg"
                                viewBox="0 0 32 40"
                                width="28"
                                height="36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="scroll-arrow-gradient" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                                        <stop offset="45%" stopColor="var(--neon-cyan, #5dd4ff)" />
                                        <stop offset="100%" stopColor="var(--accent-color-alt, #7dd4e0)" stopOpacity="0.7" />
                                    </linearGradient>
                                </defs>
                                <path
                                    className="scroll-hint__chevron scroll-hint__chevron--top"
                                    d="M6 12 L16 22 L26 12"
                                    stroke="url(#scroll-arrow-gradient)"
                                    strokeWidth="2.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="scroll-hint__chevron scroll-hint__chevron--bottom"
                                    d="M6 22 L16 32 L26 22"
                                    stroke="url(#scroll-arrow-gradient)"
                                    strokeWidth="2.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span className="scroll-hint__label neon-text">scroll below</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollIndicator;
