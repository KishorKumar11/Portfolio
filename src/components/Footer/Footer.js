import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ParticleField, fadeUp, stagger } from '../../motion';
import './Footer.css';

const SOCIAL = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kishorkumar11/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/KishorKumar11', icon: '💻' },
    { name: 'Gmail', url: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=harisham38@gmail.com', icon: '📧' }
];

const Footer = () => {
    const reduce = useReducedMotion();
    const year = new Date().getFullYear();

    return (
        <motion.footer
            className="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.12, 0.1)}
        >
            <ParticleField count={14} color="linear-gradient(135deg, #5dd4ff, #5389c7)" />

            <div className="footer-bg-decoration">
                <motion.div
                    className="floating-orb orb-1"
                    animate={reduce ? {} : { y: [0, -25, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="floating-orb orb-2"
                    animate={reduce ? {} : { y: [0, 18, 0], scale: [1, 0.9, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </div>

            <div className="footer-container">
                <motion.div className="footer-content" variants={fadeUp}>
                    <div className="footer-brand">
                        <motion.h3 className="footer-name neon-text" whileHover={reduce ? {} : { scale: 1.04 }} transition={{ duration: 0.3 }}>
                            Kishor Kumar
                        </motion.h3>
                        <p className="footer-title">Full Stack Developer & Tech Management</p>
                    </div>

                    <motion.div className="footer-message" variants={fadeUp}>
                        <p>
                            "You've reached the end! Thank you for hanging around. Always remember to love yourself and take care of each other. Feel free to contact me!"
                        </p>
                    </motion.div>

                    <motion.div className="footer-social" variants={fadeUp}>
                        {SOCIAL.map((s) => (
                            <motion.a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={reduce ? {} : { scale: 1.15, y: -4, rotate: [0, -8, 8, 0] }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="social-icon">{s.icon}</span>
                                <span className="social-name">{s.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div className="footer-bottom" variants={fadeUp}>
                    <div className="footer-divider" />
                    <p className="footer-copyright">
                        <span>© {year} Designed & developed by Kishor Kumar.</span>
                        <motion.span
                            className="made-with-love"
                            animate={reduce ? {} : { scale: [1, 1.15, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                        >
                            Made with ❤️ and React
                        </motion.span>
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
