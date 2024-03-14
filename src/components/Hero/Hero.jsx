import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Desenvolver Front-End</h2>
        <span>Eduardo Santiago</span>

        <p>
          I'm a front-end developer, passionate about technology, with a special
          focus on frameworks like React.js. I'm currently expanding my horizons
          to include back-end skills, with the aim of becoming a full-stack
          developer. Shall we work together?
        </p>
      </div>

      <div className="hero-img">
        <img src="./assets/images/imgperfil.jpg" alt="imagem de perfil" />
      </div>
    </section>
  );
};

export default Hero;
