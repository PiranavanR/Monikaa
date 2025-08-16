import { useEffect } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { ArrowRight } from 'lucide-react';
import React from 'react';
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-in-out'
    });
  }, []);

  const handleViewAllProjects = (e) => {
    e.preventDefault();
    // This can be expanded to navigate to a projects page or open a modal with all projects
    console.log("View all projects clicked");
  };

  const projects = [
    {
      "id": 1,
      "title": "CFD Analysis of Coaxial Swirl Nozzle",
      "description": "Performed a comprehensive Computational Fluid Dynamics (CFD) analysis on a coaxial swirl nozzle to optimize fuel atomization and mixing efficiency. The project focused on simulating complex two-phase flow and turbulence models to predict droplet size distribution and spray cone angle.",
      "images": [
        "img/Swirl Nozzle.jpeg"
      ],
      "imageOrientation": "landscape",
      "technologies": [
        "Ansys Fluent",
        "CFD",
        "Fluid Dynamics",
        "Coaxial Swirl Nozzle"
      ],
      "link": "#"
    },
    {
      "id": 2,
      "title": "Aerospike Engine Performance Simulation",
      "description": "Conducted a CFD simulation and performance analysis of a linear aerospike engine. The project investigated the unique self-optimizing altitude compensation characteristic of the aerospike nozzle, focusing on thrust and efficiency across various atmospheric pressures.",
      "images": [
        "img/Aerospike.jpeg"
      ],
      "imageOrientation": "landscape",
      "technologies": [
        "Ansys Fluent",
        "CFD",
        "Aerospike Engine",
        "Propulsion Systems"
      ],
      "link": "#"
    },
    {
      "id": 3,
      "title": "B-2 Spirit Stealth Bomber Aerodynamic Analysis",
      "description": "Utilized CFD to analyze the aerodynamic characteristics of the B-2 Spirit's flying wing design. The study focused on simulating low-speed flight and evaluating the control surfaces' effectiveness and stability, critical for this unconventional aircraft's flight envelope.",
      "images": [
        "img/B2 Spirit.jpeg"
      ],
      "imageOrientation": "landscape",
      "technologies": [
        "Ansys Fluent",
        "CFD",
        "Aerodynamics",
        "Flying Wing Design"
      ],
      "link": "#"
    },
    {
      "id": 4,
      "title": "CFD Optimization of Aircraft Intake Fan Blades",
      "description": "Performed a detailed CFD analysis on turbofan engine intake fan blades to improve aerodynamic efficiency and reduce noise generation. The project focused on optimizing blade geometry to manage complex airflow patterns and minimize pressure losses.",
      "images": [
        "img/Intake Fan.jpeg"
      ],
      "imageOrientation": "landscape",
      "technologies": [
        "Ansys Fluent",
        "CFD",
        "Turbomachinery",
        "Aerodynamic Optimization"
      ],
      "link": "#"
    },
    {
      "id": 5,
      "title": "Voice-Controlled VTOL UAV",
      "description": "Developed a hybrid VTOL UAV capable of executing flight commands via voice using Whisper and a custom command classification model. Enabled real-time interaction with UAV systems for mission control.",
      "images": [
        "img/VTOL1.jpeg",
        "img/VTOL2.png"
      ],
      "imageOrientation": "landscape",
      "technologies": ["Python", "Whisper", "Voice Recognition", "VTOL UAV"],
      "link": "#",
      // "buttonText": "View Project"
    },
    { 
      "id": 6,
      "title": "CubeSat Development",
      "description": "Designed and 3D-printed a 1U CubeSat structure using PLA material. Integrated environmental sensors, laying the foundation for space-ready small satellite platforms.",
      "images": [
        "img/Cubesat.jpg"
      ],
      "imageOrientation": "landscape",
      "technologies": ["Arduino", "3D Printing", "Satellite Systems", "Environmental Sensors"],
      "link": "#",
      // "buttonText": "View Project"
    },    
    {
      "id": 7,
      "title": "CanSat",
      "description": "Built a CanSat prototype with DHT11 and Hall effect sensors, enabling real-time atmospheric data collection during descent. Conducted successful ground tests simulating space probe recovery missions.",
      "images": [
        "img/Cansat.png",
      ],
      "imageOrientation": "landscape",
      "technologies": ["Arduino", "Sensors", "CanSat", "Environmental Monitoring"],
      "link": "#",
      // "buttonText": "View Project"
    },
    {
    "id": 8,
    "title": "Space Surface Exploration Vehicle",
    "description": "Developed a small-scale Mars rover prototype using Arduino, ultrasonic sensors, and motor drivers to navigate uneven terrain and avoid obstacles autonomously.",
    "images": [
      "img/Rover.png"
    ],
    "imageOrientation": "landscape",
    "technologies": ["Arduino", "Obstacle Avoidance", "Sensors", "Robotics"],
    "link": "#"
    },
    {
      "id": 9,
      "title": "UAV Crowd Monitoring Using AI",
      "description": "Designed an AI-enabled UAV system for real-time crowd counting and density estimation using aerial images, enhancing public event management and surveillance efficiency.",
      "images": [
        "img/UAV.png"
      ],
      "imageOrientation": "landscape",
      "technologies": ["Computer Vision", "AI/ML", "UAV", "Crowd Analysis"],
      "link": "#"
    }
    

  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-8 lg:px-16">
      <div className=" projects container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="800">
          <h2 className="title shine">Projects</h2>
          <div className="w-20 h-1 bg-[#7f22d1] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              delay={100 * (index + 1)}
            />
          ))}
        </div>

        
        {/* View All Projects Link */}
        {/* <div className="text-center mt-12">
          <a 
            href="#" 
            onClick={handleViewAllProjects}
            className="inline-flex items-center gap-2 text-[#7f22d1] font-semibold hover:text-[#8025e1] transition-colors duration-200"
          >
            View All Research Projects
            <ArrowRight className="h-5 w-5" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
