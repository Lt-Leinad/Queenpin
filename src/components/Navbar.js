import React from "react";
import "../components/Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="header-desktop">
        <div className="logo-section">
          <img id="logo" src="/images/QueenpinLogo.webp" alt="Queenpin Logo" />
        </div>
        <hr />
        <nav className="navbar">
          <ul className="left-list">
            <NavLink to="/" exact="true">
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about">Services</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/post">Blog</NavLink>
            <NavLink to="/post">Contact</NavLink>
          </ul>
          <ul className="right-list">
            <li>queenpinpva@gmail.com</li>
            <li>
              <i className="fab fa-pinterest-p"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
            </li>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-mob">
        <a href="/" aria-label="Home Page">
          <img id="logo" src="/images/QueenpinLogo.webp" alt="Queenpin Logo" />
        </a>
        <button className="hamburger" aria-label="Menu Button">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
