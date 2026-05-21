import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { fadeUp, stagger } from '../../motion';
import './Footer.css';

const SOCIAL = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kishorkumar11/', icon: <FaLinkedinIn /> },
    { name: 'GitHub',   url: 'https://github.com/KishorKumar11', icon: <FaGithub /> },
    { name: 'Email',    url: 'mailto:harisham38@gmail.com', icon: <FaEnvelope /> },
];

const NAV_LINKS = [
    { label: 'About',          href: '#about' },
    { label: 'Qualifications', href: '#work' },
    { label: 'Skills',         href: '#skills' },
    { label: 'Projects',       href: '#projects' },
    { label: 'Hobbies',        href: '#hobbies' },
    { label: 'Work With Me',   href: '#freelance' },
];



const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
        const offset = document.querySelector('.header')?.offsetHeight || 0;
        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
};

const Footer = () => {
    const reduce = useReducedMotion();
    const year = new Date().getFullYear();

    return (
        <motion.footer
            className="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger(0.1, 0.05)}
        >
            <div className="footer-container">
                {/* Top grid */}
                <div className="footer-grid">
                    {/* Brand column */}
                    <motion.div className="footer-brand-col" variants={fadeUp}>
                        <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>
                            <span className="footer-logo-bracket">&lt;</span>
                            kishor
                            <span className="footer-logo-bracket">/&gt;</span>
                        </a>
                        <p className="footer-tagline">Full Stack Developer &amp; Tech Management</p>
                        <p className="footer-bio">
                            Building clean, fast web experiences. Open to freelance projects — let's make something great.
                        </p>
                        <div className="footer-social">
                            {SOCIAL.map((s) => (
                                <motion.a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-btn"
                                    aria-label={s.name}
                                    whileHover={reduce ? {} : { scale: 1.12, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    title={s.name}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Nav column */}
                    <motion.div className="footer-nav-col" variants={fadeUp}>
                        <h4 className="footer-col-heading">Quick Links</h4>
                        <ul className="footer-nav-list">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="footer-nav-link"
                                        onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact column */}
                    <motion.div className="footer-contact-col" variants={fadeUp}>
                        <h4 className="footer-col-heading">Get In Touch</h4>
                        <p className="footer-contact-text">
                            Have a project in mind or just want to say hi? My inbox is always open.
                        </p>
                        <motion.a
                            href="mailto:harisham38@gmail.com"
                            className="footer-cta-btn"
                            whileHover={reduce ? {} : { scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Send a Message →
                        </motion.a>
                        <p className="footer-location">📍 Singapore</p>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="footer-divider" />

                {/* Bottom bar */}
                <motion.div className="footer-bottom" variants={fadeUp}>
                    <p className="footer-copyright">
                        © {year} Kishor Kumar · Designed &amp; built with React
                    </p>
                    <motion.button
                        className="footer-scroll-top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={reduce ? {} : { scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp />
                    </motion.button>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
