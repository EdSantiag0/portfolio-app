import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Eduardo Santiago</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <img src="./assets/images/imgperfil.jpg" alt="imagem de perfil" />
      </div>
    </section>
  );
};

export default Hero;
