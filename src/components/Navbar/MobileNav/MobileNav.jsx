import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "mobile-menu-active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1>Eduardo Santiago</h1>

          <ul>
            <li>
              <a href="#home" className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="menu-item">
                Projects
              </a>
            </li>

            <li>
              <a href="#contactme" className="menu-item">
                Contact Me
              </a>
            </li>
            <button
              className="contact-btn"
              onClick={() => {
                window.open("whatsapp://send?phone=55981124758");
              }}
            >
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
