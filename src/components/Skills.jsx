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
    { id: 1, name: 'React', img: htmlLogo },
    { id: 2, name: 'React', img: cssLogo },
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
    <p className="text-slate-900 md:text-lg mb-6">Technologies I have experience with.</p>
  </div>

  {/* Skills Row */}
  <div className="flex flex-wrap justify-center gap-9 md:gap-10 lg:gap-12 max-w-9xl">
    {skills.map((skill) => (
      <div key={skill.id} className="flex flex-col items-center">
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
