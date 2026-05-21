import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScrollY = window.scrollY;
            const progress = (currentScrollY / totalScrollHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #4ab8c8, #7dd4e0)',
                    transformOrigin: '0%',
                    zIndex: 9999
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrollProgress / 100 }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
};

export default ScrollIndicator;
