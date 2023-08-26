import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Navbar.css";
import InstructionPopup from "../shared/InstructionPopup";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="top-nav">
      <div className="info-popup">
        <InstructionPopup />
      </div>
      <div className="nav-header">
        <h2>SpellHive</h2>
      </div>
      <nav ref={navRef}>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <Link to="/" className="links" onClick={showNavbar}>
          Home
        </Link>
        <Link to="/year1" className="links" onClick={showNavbar}>
          Year 1
        </Link>
        <Link to="/year2" className="links" onClick={showNavbar}>
          Year 2
        </Link>
        <Link to="/year34" className="links" onClick={showNavbar}>
          Year 3/4
        </Link>
        <Link to="/year56" className="links" onClick={showNavbar}>
          Year 5/6
        </Link>
        <Link to="/contact" className="links" onClick={showNavbar}>
          Contact Us
        </Link>
      </nav>
      <div className="nav-header bars-btn">
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
