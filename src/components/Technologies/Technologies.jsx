import React from "react";
import "./Technologies.css";

const Technologies = () => {
  return (
    <section id="technologies" className="technologies-container">
      <h6>Technologies</h6>
      <div className="tech-icons">
        <img
          src="./assets/images/imgtechnologies/javascript.svg"
          alt="JavaScript icone"
        />
        <img src="./assets/images/imgtechnologies/css3.svg" alt="CSS icone" />
        <img src="./assets/images/imgtechnologies/html5.svg" alt="HTML icone" />
        <img
          src="./assets/images/imgtechnologies/react.svg"
          alt="React.js icone "
        />
        <img
          src="./assets/images/imgtechnologies/nodejs.svg"
          alt="Node.js icone"
        />
        <img
          src="./assets/images/imgtechnologies/typescript.svg"
          alt="TypeScript icone"
        />
      </div>
    </section>
  );
};

export default Technologies;
