import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card-container">
      <div className="project-card-img">
        <img src={details.img} alt="Imagem do projeto" />
      </div>

      <div className="project-card-icons">
        <a href={details.linkgit} target="_blank" rel="noopener noreferrer">
          <img src={details.icongit} alt="imgem icone" />
        </a>
        <a href={details.linkproject} target="_blank" rel="noopener noreferrer">
          <img src={details.iconlink} alt="imagem link" />
        </a>
      </div>

      <h6>{details.title}</h6>
      <p className="project-card-description">{details.description}</p>
    </div>
  );
};

export default ProjectCard;
