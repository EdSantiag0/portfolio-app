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
              <a className="menu-item">Home</a>
            </li>

            <li>
              <a className="menu-item">Skills</a>
            </li>

            <li>
              <a className="menu-item">Projects</a>
            </li>

            <li>
              <a className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
