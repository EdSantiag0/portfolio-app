import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2>Desenvolver Front-End</h2>
        <span>Eduardo Santiago</span>

        <p>
          I'm a front-end developer, passionate about technology, with a special
          focus on frameworks like React.js. I'm currently expanding my horizons
          to include back-end skills, with the aim of becoming a full-stack
          developer. Shall we work together?
        </p>

        <div className="icon">
          <a
            href="https://github.com/EdSantiag0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/images/imgicon/github.svg" alt="icon" />
          </a>
          <a
            href="mailto:eduardosantiago_@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/images/imgicon/mail.svg" alt="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-santiago-e08/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/images/imgicon/linkedin.svg" alt="icon" />
          </a>
          <a
            href="https://www.instagram.com/edsanttiago/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/images/imgicon/instagram.svg" alt="icon" />
          </a>
        </div>
      </div>

      <div className="hero-img">
        <img src="./assets/images/imgperfil.jpg" alt="imagem de perfil" />
      </div>
    </section>
  );
};

export default Hero;
