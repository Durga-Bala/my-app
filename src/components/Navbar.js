import React, { useState } from 'react';
import './Navbar.css'; // Import navbar-specific styles

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage navbar toggle

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor click behavior
    const section = document.getElementById(sectionId); // Get the target section
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    }
    setIsOpen(false); // Close the navbar after clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
