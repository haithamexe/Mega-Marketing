import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      <img src="../public/images/mega-white.png" alt="logo" />
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/prices" className="nav-link">
          Prices
        </Link>
        <Link to="/works" className="nav-link">
          Works
        </Link>
        <Link to="/data-analysis" className="nav-link">
          Data Analysis
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
