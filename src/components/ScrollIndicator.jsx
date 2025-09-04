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
                    height: '4px',
                    background: 'linear-gradient(90deg, #5389c7, #7597de)',
                    transformOrigin: '0%',
                    zIndex: 9999
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrollProgress / 100 }}
                transition={{ duration: 0.1 }}
            />

            {/* Scroll to Top Button */}
            <motion.button
                className="scroll-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: scrollProgress > 20 ? 1 : 0,
                    y: scrollProgress > 20 ? 0 : 100
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #5389c7, #7597de)',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: '0 8px 25px rgba(83, 137, 199, 0.3)',
                    zIndex: 1000,
                    backdropFilter: 'blur(10px)'
                }}
            >
                ↑
            </motion.button>

            <style jsx>{`
                .scroll-to-top:hover {
                    box-shadow: 0 12px 35px rgba(83, 137, 199, 0.4);
                }
            `}</style>
        </>
    );
};

export default ScrollIndicator;
