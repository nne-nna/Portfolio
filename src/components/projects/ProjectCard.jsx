import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { siGithub } from 'simple-icons/icons';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold mb-6 text-green-400">
        {project.title}
      </h2>
      
      <div className={`flex flex-col lg:flex-row gap-8 ${!isEven && 'lg:flex-row-reverse'}`}>
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>
          
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              View Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-colors"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;