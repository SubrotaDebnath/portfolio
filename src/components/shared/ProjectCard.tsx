import React from 'react';
import type {ProjectCardProps} from '../../domain/types';
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.ts";
import {TechTag} from "../ui/TechTag.tsx";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver(); // Assuming this hook exists and is imported

  return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? 'fade-in' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.technologies.map((tech, idx) => (
          <TechTag key={idx} tech={tech} />
        ))}
      </div>
      <div className="project-links">
        {project.links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
