import React, { useState } from 'react';
import logo from '../assets/images/IMG_9775.png'; // or your preferred logo

const Navbar = ({ openModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Aditya Sairam</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" onClick={() => { openModal('about'); closeMenu(); }}>About Me</a></li>
          <li><a href="#" onClick={() => { openModal('projects'); closeMenu(); }}>Projects</a></li>
          <li><a href="#" onClick={() => { openModal('skills'); closeMenu(); }}>Skills</a></li>
          <li><a href="#" onClick={() => { openModal('experience'); closeMenu(); }}>Experience</a></li>
          <li><a href="#" onClick={() => { openModal('resume'); closeMenu(); }}>Resume</a></li>
          <li><a href="#" onClick={() => { openModal('contact'); closeMenu(); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
