import React, { useRef } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";
import Slider from "react-slick";

const Projects = () => {
  const sliderRef = useRef("");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slideToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="project-container">
      <h5>Projects</h5>

      <div className="project-content">
        <div className="arrow-right">
          <span className="material-symbols-outlined">&gt;</span>
        </div>
        <div className="arrow-left">
          <span className="material-symbols-outlined">&lt;</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => (
            <ProjectCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
