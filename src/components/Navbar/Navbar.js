import React, {useState} from 'react';
import "./Navbar.css";

const Navbar = () => {
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");

    if(this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");

  });

  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <a href='#home' class="logo">kishor</a>
      <ul>
        <li><a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "nav__link active-link" : "nav__link"}>Home</a></li>
        <li><a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "nav__link active-link" : "nav__link"}>About</a></li>
        <li><a href='#work' onClick={() => setActiveNav('#work')} className={activeNav === '#work' ? "nav__link active-link" : "nav__link"}>Work</a></li>
        <li><a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? "nav__link active-link" : "nav__link"}>Projects</a></li>
        <li><a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "nav__link active-link" : "nav__link"}>Contact</a></li>
      </ul>
  </header>
 
  )
}

export default Navbar