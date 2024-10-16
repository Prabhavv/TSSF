import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './SSF_Signature_Colour.png';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <header className="navbar">
    <div className="logo">
    <NavLink to="/">
          <img src={logo} alt="SSF Logo" style={{ height: '40px' }} /> {/* Logo redirects to Home */}
        </NavLink>
    </div> {/* Replace with your actual logo */}
    <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <a href="/channels-of-communication" className="nav-link">Channels of Communication</a>
      <a href="/application" className="nav-link">Fellowship Application</a>
      <a href="/milestones" className="nav-link">Milestones</a>
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Downloadable Resources ▼
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="/Guidelines_for_Candidates-Part_01_of_02_V9.0.pdf" download>
              Guideline for Candidates - Part 1
            </a>
            <a href="/Guidelines_for_Candidates-Part_02_of_02.pdf" download>
              Guideline for Candidates - Part 2
            </a>
          </div>
        )}
      </div>
    </nav>
    <button className="burger-icon" onClick={toggleMenu}>☰</button>
  </header>
  );
}

export default Navbar;