import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section id="contactme" className="contact-container">
      <h5>Contact Me</h5>

      <p>
        Tem um projeto em mente ou apenas quer dar um oi? Sinta-se à vontade
        para entrar em contato comigo através de qualquer um dos canais abaixo.
        Estou sempre animado para me conectar com outros desenvolvedores e
        colaboradores em potencial!
      </p>

      <div className="contact-content">
        <div className="contact-info-card">
          <ContactInfoCard
            iconUrl="./assets/images/imgicon/mail.svg"
            link="mailto:eduardosantiago_@hotmail.com"
            text="E-mail"
          />
          <ContactInfoCard
            iconUrl="./assets/images/imgicon/github.svg"
            link="https://github.com/EdSantiag0"
            text="Github"
          />
        </div>
        <div className="contact-info-card">
          <ContactInfoCard
            iconUrl="./assets/images/imgicon/linkedin.svg"
            link="https://www.linkedin.com/in/eduardo-santiago-e08/"
            text="Linkedin"
          />
          <ContactInfoCard
            iconUrl="./assets/images/imgicon/whatsapp.svg"
            link="whatsapp://send?phone=55981124758"
            text="Whatsapp"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
