import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ✅ Import CSS

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="charity-logo.png" alt="Logo" style={{width:"50px"}} />
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Unicode hamburger menu icon */}
      </button>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/environmental" onClick={toggleMenu}>Environmental</Link></li>
        <li><Link to="/social" onClick={toggleMenu}>Social</Link></li>
        <li><Link to="/governmental" onClick={toggleMenu}>Governmental</Link></li>
        <li><Link to="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
        <li><Link to="/support" onClick={toggleMenu}>Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
