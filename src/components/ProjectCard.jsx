import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

const ProjectCard = ({ project, delay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isPortrait = project.imageOrientation === 'portrait';
  
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div 
    className="project-card" 
    data-aos="fade-up" 
    data-aos-duration="800" 
    data-aos-delay={delay}
    >
    <div className="image-wrapper">
        <div className={`project-image-container ${isPortrait ? 'portrait' : 'landscape'}`}>
        <img 
            src={project.images[currentImageIndex]} 
            alt={`${project.title} Project`} 
            className={`project-image ${isPortrait ? 'contain' : 'cover'}`}
        />
        
        {project.images.length > 1 && (
            <>
            <button 
                onClick={prevImage}
                className="image-nav prev"
                aria-label="Previous image"
            >
                {"<"}
            </button>
            <button 
                onClick={nextImage}
                className="image-nav next"
                aria-label="Next image"
            >
                {">"}
            </button>
            <div className="image-dots">
                {project.images.map((_, idx) => (
                <span 
                    key={idx} 
                    className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                />
                ))}
            </div>
            </>
        )}
        </div>
    </div>

    <div className="card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="tech-tags">
        {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
        ))}
        </div>

        {/* <Button 
        onClick={() => window.open(project.link, '_blank')}
        className="project-button"
        >
        {project.buttonText || "View Project"}
        </Button> */}
    </div>
    </div>
  );
};

export default ProjectCard;
