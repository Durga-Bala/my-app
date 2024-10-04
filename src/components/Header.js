import React from 'react';
import Navbar from './Navbar';
import './Header.css'; // Import header-specific styles

function Header() {
  return (
    <header className="header">
      <div className="header-title">My Portfolio</div>
      <Navbar />
    </header>
  );
}

export default Header;
