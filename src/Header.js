// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <header>
      <h1>CRUISE MANAGEMENT SYSTEM</h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/OnBoardServices">OnBoardServices</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
