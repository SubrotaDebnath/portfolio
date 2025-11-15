import React from 'react';
import type {ProjectsProps} from '../../domain/types';
import ProjectCard from "../shared/ProjectCard.tsx";

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="section-title">Featured Projects</h2>
        <div className="projects-grid" role="list" aria-label="Featured projects list">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
