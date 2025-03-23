import React from 'react';
import sympImage from '../assets/symp.PNG';


export default function Projects() {
    
    
    const projects = [
      {
        id: 1,
        title: 'Symptocare: Connecting Symptoms to Health Solutions.',
        description: 'A full-stack Personalized Health Solution Platform.',
        image: sympImage,
        link: 'https://symptocare.up.railway.app'
      },
      {
        id: 2,
        title: 'Portfolio Website',
        description: 'A personal portfolio built with React & Tailwind CSS.',
        image: '../assets/portfolio.png',
        link: 'https://yourportfolio.com'
      }
    ]

  return (
    <main id="projects" className="py-16 px-4 flex flex-col items-center">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
        <p className="text-gray-900 md:text-lg">Some of the Projects I've done.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-blue-900 rounded-lg shadow-lg p-5 transform transition hover:scale-105"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
