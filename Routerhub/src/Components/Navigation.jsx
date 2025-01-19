import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      {/* Left section: Logo and title */}
      <div className="navbar-left">
        {/* Add the logo here */}
        <img src="pictures\logo.png.png" alt="RouterHub Logo" className="navbar-logo" />
        <span className="navbar-title">RouterHub</span>
      </div>

      {/* Center section: Search bar */}
      <div className="navbar-center">
        <input type="text" placeholder="Search" className="navbar-search" />
        <button className="navbar-search-btn">Search</button>
      </div>

      {/* Right section: Navigation links */}
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/pack" className="nav-link">Packages</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;

