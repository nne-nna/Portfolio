import React, { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'react', name: 'React' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tech.includes(filter));

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          My <span className="text-green-400">Projects</span>
        </h1>

        {/* Project Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category.id
                    ? 'bg-green-400 text-gray-900'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-green-400 mb-2">{projects.length}</h3>
            <p className="text-gray-400">Total Projects</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-green-400 mb-2">100%</h3>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-green-400 mb-2">500+</h3>
            <p className="text-gray-400">Hours Coded</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-green-400 mb-2">4</h3>
            <p className="text-gray-400">Technologies</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;