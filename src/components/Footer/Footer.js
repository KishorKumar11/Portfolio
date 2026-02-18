import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kishorkumar11/',
            icon: '💼',
            color: '#0A66C2'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/KishorKumar11',
            icon: '💻',
            color: '#333'
        },
        {
            name: 'Gmail',
            url: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=harisham38@gmail.com',
            icon: '📧',
            color: '#EA4335'
        }
    ];

    return (
        <motion.footer className="footer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="footer-bg-decoration">
                <motion.div
                    className="floating-orb orb-1"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
                <motion.div
                    className="floating-orb orb-2"
                    animate={{
                        y: [0, 15, 0],
                        scale: [1, 0.9, 1],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1
                    }}
                />
            </div>

            <div className="footer-container">
                <motion.div className="footer-content" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                    <div className="footer-brand">
                        <motion.h3 className="footer-name" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                            Kishor Kumar
                        </motion.h3>
                        <p className="footer-title">Full Stack Developer & Tech Management</p>
                    </div>

                    <motion.div className="footer-message" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                        <p>"You've reached the end! Thank you for hanging around. Always remember to love yourself and take care of each other. Feel free to contact me!"</p>
                    </motion.div>

                    <div className="footer-social">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{
                                    scale: 1.2,
                                    y: -5,
                                    rotate: [0, -10, 10, 0]
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1 + 0.6
                                }}
                                viewport={{ once: true }}
                            >
                                <span className="social-icon">{link.icon}</span>
                                <span className="social-name">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div className="footer-bottom" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }}>
                    <div className="footer-divider" />
                    <p className="footer-copyright">
                        <span>© {currentYear} Designed & developed by Kishor Kumar.</span>
                        <motion.span
                            className="made-with-love"
                            animate={{
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 3
                            }}
                        >
                            Made with ❤️ and React
                        </motion.span>
                    </p>
                </motion.div>
            </div>

            {/* Animated background dots */}
            <div className="footer-dots">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="footer-dot"
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 2 + i * 0.1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: 'easeInOut'
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>
        </motion.footer>
    );
};

export default Footer;
