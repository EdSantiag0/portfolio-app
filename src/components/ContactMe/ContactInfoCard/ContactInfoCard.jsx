import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, link, text }) => {
  return (
    <div className="contact-details-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="icon">
          <img src={iconUrl} alt={text} />
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

export default ContactInfoCard;
