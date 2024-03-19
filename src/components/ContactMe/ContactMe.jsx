import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section id="contactme" className="contact-container">
      <h5>Contact Me</h5>

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
            iconUrl="./assets/images/imgicon/instagram.svg"
            link="https://www.instagram.com/edsanttiago/"
            text="Instagram"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
