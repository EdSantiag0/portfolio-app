import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card-container">
      <img src={details.img} alt="Imagem do projeto" />
      <h6>{details.title}</h6>
      <p className="project-card-description">{details.description}</p>
    </div>
  );
};

export default ProjectCard;
