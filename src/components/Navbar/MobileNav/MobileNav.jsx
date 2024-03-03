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
          <img className="logo" src="./assets/images/logo.png" alt="" />

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
          </ul>
        </div>

        <button className="contact-btn" onClick={() => {}}>
          Hire Me
        </button>
      </div>
    </>
  );
};

export default MobileNav;
