import React from 'react';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import reactLogo from '../assets/react.png';
import jsLogo from '../assets/javascript.png';
import tailwindLogo from '../assets/tailwind.png';
import gitLogo from '../assets/git.png';
import nodeLogo from '../assets/node.png';
import pythonLogo from '../assets/python.png';
import djangoLogo from '../assets/django.png';
import bootstrapLogo from '../assets/bootstrap.png';


export default function Skills() {
  const skills = [
    { id: 1, name: 'html', img: htmlLogo },
    { id: 2, name: 'css', img: cssLogo },
    { id: 3, name: 'React', img: reactLogo },
    { id: 4, name: 'JavaScript', img: jsLogo },
    { id: 5, name: 'Tailwind CSS', img: tailwindLogo },
    { id: 6, name: 'Git', img: gitLogo },
    { id: 7, name: 'Node.js', img: nodeLogo },
    { id: 8, name: 'python', img: pythonLogo },
    { id: 9, name: 'django', img: djangoLogo },
    { id: 10, name: 'bootstrap', img: bootstrapLogo }
  ];

  return (
    <main id="skills" className="py-10 px-3 flex flex-col items-center">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
        <p className="text-gray-800 md:text-lg mb-6">Technologies I have experience with.</p>
      </div>

      {/* Skills Row */}
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="relative group flex flex-col items-center">
            {/* Tooltip */}
            <span className="absolute -top-10 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300">
              {skill.name}
            </span>

            {/* Skill Icon */}
            <img
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 md:w-16 md:h-16 transition-transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </main>


  );
}
