import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ activeNav }) => {
    useEffect(() => {
        const scrollHandler = function () {
            const header = document.querySelector('.header');

            if (this.scrollY >= 80) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header');
        };

        window.addEventListener('scroll', scrollHandler);
        // Cleanup on unmount
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const [activeNav1, setActiveNav1] = useState('home');
    const [showNav, setShowNav] = useState(false);

    const handleClick = (e, anchorId) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const anchorElement = document.querySelector(anchorId);
    
        if (anchorElement) {
            const navbarHeight = document.querySelector('.header').offsetHeight;
            const scrollTarget = anchorElement.offsetTop - navbarHeight;
    
            window.scrollTo({
                top: scrollTarget,
                behavior: 'smooth' // Smooth scroll
            });
        }
    
        setActiveNav1(anchorId);
        setShowNav(false); // Close mobile menu if open
    };

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <header className="header">
            <a href="#home" className="logo">
                kishor
            </a>

            <div className="menu-icon" onClick={toggleNav}>
                {showNav ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={showNav ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href="#home" onClick={() => activeNav1('#home')} className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" alt="" onClick={() => activeNav1('#about')} className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#work" alt="" onClick={() => activeNav1('#work')} className={activeNav === '#work' ? 'nav__link active-link' : 'nav__link'}>
                        Qualifications
                    </a>
                </li>
                <li>
                    <a href="#skills" alt="" onClick={() => activeNav1('#skills')} className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" alt="" onClick={() => activeNav1('#projects')} className={activeNav === '#projects' ? 'nav__link active-link' : 'nav__link'}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" alt="" onClick={() => setActiveNav1('#contact')} className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                        Contact
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
