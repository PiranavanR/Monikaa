// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section className="experience" id="experience" style={{ height: 'auto' }}>
      <center>
        <h2 className="title shine">Experience</h2>
      </center>

      <div
        className="exp-container"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="0"
      >
        <div
          className="exp-box"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="450"
        >
          <h4>Jan 2025 - Present</h4>
          <h3>Project Intern | Prime Toolings</h3>
          <p>
            I am gaining hands-on experience in designing and analyzing
            aerospace components such as rocket engines and nozzles. My work
            involves CAD modeling, simulation, and performance evaluation to
            enhance design efficiency and reliability.
          </p>
        </div>

        <div
          className="exp-box"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="450"
        >
          <h4>June 2023 - July 2023</h4>
          <h3>Research Intern | Aeroin SpaceTech Pvt. Ltd.</h3>
          <p>
            Worked on CubeSats and CanSats, gaining expertise in satellite
            structures, Arduino programming, and 3D printing; developed a CanSat
            equipped with sensors, and designed and 3D-printed a 1U CubeSat
            using PLA.
          </p>
        </div>

        <div
          className="exp-box"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <h4>February 2024</h4>
          <h3>Facilitator | Vimaana Aero</h3>
          <p>
            Led hands-on training on UAV fundamentals, flight dynamics, and
            drone assembly, while teaching applications in agriculture and
            disaster management through live demos.
          </p>
        </div>

        <div
          className="exp-box"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <h4>June 2023 - July 2023</h4>
          <h3>Intern | Vaayusastra Aerospace</h3>
          <p>
            Studied thrust vector control (TVC) for rockets, utilized
            OpenRocket for design, and built a rocket model using PVC pipes and
            fins to demonstrate control mechanisms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
