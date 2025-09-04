import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ activeNav }) => {
    const [showNav, setShowNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollHandler = function () {
            const header = document.querySelector('.header');
            const isScrolled = window.scrollY >= 80;

            if (isScrolled) {
                header?.classList.add('scroll-header');
                setScrolled(true);
            } else {
                header?.classList.remove('scroll-header');
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#work', label: 'Qualifications' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    const handleClick = (e, anchorId) => {
        e.preventDefault();
        const anchorElement = document.querySelector(anchorId);

        if (anchorElement) {
            const navbarHeight = document.querySelector('.header').offsetHeight;
            const scrollTarget = anchorElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
            });
        }

        setShowNav(false);
    };

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <motion.header className={`header ${scrolled ? 'scrolled' : ''}`} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <motion.a
                href="#home"
                className="logo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    color: scrolled ? '#5389c7' : '#fff'
                }}
            >
                <span className="logo-bracket">&lt;</span>
                kishor
                <span className="logo-bracket">/&gt;</span>
            </motion.a>

            <motion.div className="menu-icon" onClick={toggleNav} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <AnimatePresence mode="wait">
                    <motion.div key={showNav} initial={{ rotate: 0 }} animate={{ rotate: showNav ? 180 : 0 }} exit={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                        {showNav ? <FaTimes /> : <FaBars />}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                <motion.ul className={showNav ? 'nav-menu active' : 'nav-menu'} variants={containerVariants} initial="hidden" animate="visible">
                    {navItems.map((item, index) => (
                        <motion.li key={item.href} variants={itemVariants} whileHover={{ y: -2 }}>
                            <motion.a
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={activeNav === item.href ? 'nav__link active-link' : 'nav__link'}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                                <motion.span
                                    className="nav-indicator"
                                    layoutId="nav-indicator"
                                    animate={{
                                        opacity: activeNav === item.href ? 1 : 0,
                                        scale: activeNav === item.href ? 1 : 0
                                    }}
                                />
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
