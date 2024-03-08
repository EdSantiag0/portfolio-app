import React from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="project-container">
      <h5>Projects</h5>

      <div className="project-content">
        {PROJECTS.map((item) => (
          <ProjectCard key={item.title} description={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
