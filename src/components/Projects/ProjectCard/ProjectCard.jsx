import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card-container">
      <img src={details.img} alt="Imagem do projeto" />
      <div className="project-card-icons">
        <a href={details.link1} target="_blank" rel="noopener noreferrer">
          <img src={details.icon1} alt={details.text1} />
        </a>
        <a href={details.link2} target="_blank" rel="noopener noreferrer">
          <img src={details.icon2} alt={details.text2} />
        </a>
      </div>

      <h6>{details.title}</h6>
      <p className="project-card-description">{details.description}</p>
    </div>
  );
};

export default ProjectCard;
