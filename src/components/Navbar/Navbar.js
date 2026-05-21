import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import './Navbar.css';

const NAV = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Qualifications' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#hobbies', label: 'Hobbies' },
    { href: '#freelance', label: 'Work With Me' }
];

const Navbar = ({ activeNav }) => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY >= 60);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    const onClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            const offset = document.querySelector('.header')?.offsetHeight || 0;
            window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
        }
        setOpen(false);
    };

    const mobileMenu = (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="nav-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setOpen(false)}
                    />
                    <motion.ul
                        className="nav-menu-portal"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {NAV.map((item) => {
                            const isActive = activeNav === item.href;
                            return (
                                <li key={item.href}>
                                    <a href={item.href} onClick={(e) => onClick(e, item.href)} className={`nav__link ${isActive ? 'active-link' : ''}`}>
                                        {isActive && (
                                            <motion.span
                                                className="nav__active-pill"
                                                layoutId="nav-active-pill-mobile"
                                                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                                            />
                                        )}
                                        <span className="nav__link-label">{item.label}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </motion.ul>
                </>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <motion.header
                className={`header ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div className="header__progress" style={{ scaleX: progress }} />

                <a href="#home" className="logo" onClick={(e) => onClick(e, '#home')}>
                    <span className="logo-bracket">&lt;</span>
                    kishor
                    <span className="logo-bracket">/&gt;</span>
                </a>

                <button className="menu-icon" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={String(open)}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            style={{ display: 'inline-flex' }}
                        >
                            {open ? <FaTimes /> : <FaBars />}
                        </motion.span>
                    </AnimatePresence>
                </button>

                <ul className="nav-menu">
                    {NAV.map((item) => {
                        const isActive = activeNav === item.href;
                        return (
                            <li key={item.href}>
                                <a href={item.href} onClick={(e) => onClick(e, item.href)} className={`nav__link ${isActive ? 'active-link' : ''}`}>
                                    {isActive && (
                                        <motion.span
                                            className="nav__active-pill"
                                            layoutId="nav-active-pill"
                                            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                                        />
                                    )}
                                    <span className="nav__link-label">{item.label}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </motion.header>

            {createPortal(mobileMenu, document.body)}
        </>
    );
};

export default Navbar;
