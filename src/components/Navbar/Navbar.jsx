import React from "react";
import { Menu } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
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

          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>

        <button className="menu-btn" onClick={() => {}}>
          <span
            className={"material-symbols-outlined"}
            style={{ fontSize: "1.8rem" }}
          >
            <Menu />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
