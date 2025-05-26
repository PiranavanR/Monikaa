// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div
        className="title shine"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        My Skills
      </div>

      <div className="skill-container">
        <div className="skill-slide">
          <img
            src="./img/Fusion.png"
            alt="Fusion 360"
            style={{ animationDelay: '0s' }}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          />
          <img
            src="./img/CATIA.png"
            alt="CATIA"
            style={{ animationDelay: '0.5s' }}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          />
          <img
            src="./img/AutoCAD.png"
            alt="AutoCAD"
            style={{ animationDelay: '2s' }}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          />
          <img
            src="./img/Ansys.png"
            alt="Ansys"
            style={{ animationDelay: '1s' }}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          />
          <img
            src="./img/Python.png"
            alt="Python"
            style={{ animationDelay: '1.5s' }}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
