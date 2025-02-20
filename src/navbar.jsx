import React, { useState } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style={{backgroundColor:"green"}}>
      <div className="logo">
      <img src="charirt logo.png" alt="Logo" style={{ width: '50px', borderRadius:"20px",}} />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#header">Home</a>
        <a href="#home">mission</a>
        <a href="#AboutUs">About Us</a>
        <a href="#environmental">Environmental Service</a>
        <a href="#Social">Social Service</a>
        <a href="#Governmental">Governmnetal Service</a>
        <a href="#contact">Contact Us</a>
        <a href="#support">how you can support</a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon (3 horizontal lines) */}
      </button>
    </nav>
    
  );
};

export default Navbar;
