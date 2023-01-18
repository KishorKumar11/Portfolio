import React, {useState} from 'react';
import "./Navbar.css";

const Navbar = ({activeNav}) => {
 
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");

    if(this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");

  });

  const [activeNav1, setActiveNav1] = useState('home');

  return (
    <header className="header">
      <a href='#home' className="logo">kishor</a>
      <ul>
        <li><a href='#home' onClick={() => setActiveNav1('#home')} className={activeNav === '#home' ? "nav__link active-link" : "nav__link"}>Home</a></li>
        <li><a href='#about' onClick={() => setActiveNav1('#about')} className={activeNav === '#about' ? "nav__link active-link" : "nav__link"}>About</a></li>
        <li><a href='#work' onClick={() => setActiveNav1('#work')} className={activeNav === '#work' ? "nav__link active-link" : "nav__link"}>Qualifications</a></li>
        <li><a href='#skills' onClick={() => setActiveNav1('#skills')} className={activeNav === '#skills' ? "nav__link active-link" : "nav__link"}>Skills</a></li>
        <li><a href='#projects' onClick={() => setActiveNav1('#projects')} className={activeNav === '#projects' ? "nav__link active-link" : "nav__link"}>Projects</a></li>
        <li><a href='#contact' onClick={() => setActiveNav1('#contact')} className={activeNav === '#contact' ? "nav__link active-link" : "nav__link"}>Contact</a></li>
      </ul>
  </header>
 
  )
}

export default Navbar