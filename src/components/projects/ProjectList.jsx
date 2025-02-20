import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
const ProjectList = () => {
  return (
    <section className="min-h-screen bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;