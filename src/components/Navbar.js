import React from "react";
import "../components/Menu.css";
import "../components/Navbar.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export default function Navbar() {
  const menu = useRef(null);
  const hamburger = useRef(null);
  const closeMenu = useRef(null);
  const header = useRef(null);

  let scrolling = [];

  const setScrolling = function () {
    scrolling.push(window.scrollY);
    if (scrolling.length > 2) {
      scrolling = scrolling.slice(scrolling.length - 2);
    }
  };

  window.addEventListener("scroll", function () {
    setScrolling();
    if (this.window.scrollY > 160) {
      if (scrolling[1] > scrolling[0]) {
        document.querySelector(".header-mob").style.marginTop = "-80px";
      } else {
        document.querySelector(".header-mob").style.marginTop = "0px";
      }
    }
  });
  const hamburgerFunc = function () {
    if (menu.current.classList.contains("display-none")) {
      menu.current.classList.remove("display-none");
      hamburger.current.classList.remove("spin9-12");
      closeMenu.current.classList.remove("spin12-3");
      hamburger.current.classList.add("spin12-3");
      closeMenu.current.classList.add("spin9-12");
      menu.current.classList.remove("fade-out");
    } else {
      hamburger.current.classList.remove("spin12-3");
      closeMenu.current.classList.remove("spin9-12");
      hamburger.current.classList.add("spin9-12");
      closeMenu.current.classList.add("spin12-3");
      menu.current.classList.add("fade-out");
      setTimeout(function () {
        menu.current.classList.add("display-none");
      }, 500);
    }
  };

  const navLinkFunc = function () {
    window.scrollY(0);
    hamburgerFunc();
  };
  return (
    <>
      <header>
        <div className="header-desktop">
          <div className="logo-section">
            <img
              id="logo"
              src="/images/QueenpinLogo.webp"
              alt="Queenpin Logo"
            />
          </div>
          <hr />
          <nav className="navbar">
            <ul className="left-list">
              <NavLink to="/" exact="true">
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/testimonials">Testimonials</NavLink>
              <NavLink to="/post">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
            <ul className="right-list">
              <li>
                <a
                  href="mailto:queenpinpva@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  queenpinpva@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.co.uk/QueenPinOnline/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/queenpin.online/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/devorah-gurevich/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/queenpin.va"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-mob" ref={header}>
          <a href="/" aria-label="Home Page">
            <img
              id="logo"
              src="/images/QueenpinLogo.webp"
              alt="Queenpin Logo"
            />
          </a>
          <button
            className="hamburger"
            aria-label="Menu Button"
            onClick={hamburgerFunc}
            ref={hamburger}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>
      <div className="menu display-none fade-in" ref={menu}>
        <div className="header-menu">
          <button
            className="close-menu"
            onClick={hamburgerFunc}
            ref={closeMenu}
          >
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>
        <nav>
          <ul className="menu-nav">
            <li>
              <NavLink to="/" exact="true" onClick={navLinkFunc}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={navLinkFunc}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={navLinkFunc}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" onClick={navLinkFunc}>
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/post" onClick={navLinkFunc}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={navLinkFunc}>
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href="../Privacy Policy _ Queen Pin.pdf"
                target="_blank"
                rel="noreferrer"
              >
                PRIVACY POLICY
              </a>
            </li>
            <li>
              <ul className="menu-socials">
                <li>
                  <a
                    href="https://www.pinterest.co.uk/QueenPinOnline/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/queenpin.online/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/devorah-gurevich/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/queenpin.va"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="mailto:queenpinpva@gmail.com" className="email-link">
                queenpinpva@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
