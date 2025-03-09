import React from 'react';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import reactLogo from '../assets/react.png';
import jsLogo from '../assets/javascript.png';
import tailwindLogo from '../assets/tailwind.png';
import gitLogo from '../assets/git.png';
import nodeLogo from '../assets/node.png';


export default function Skills() {
  const skills = [
    { id: 1, name: 'React', img: htmlLogo },
    { id: 2, name: 'React', img: cssLogo },
    { id: 3, name: 'React', img: reactLogo },
    { id: 4, name: 'JavaScript', img: jsLogo },
    { id: 5, name: 'Tailwind CSS', img: tailwindLogo },
    { id: 6, name: 'Git', img: gitLogo },
    { id: 7, name: 'Node.js', img: nodeLogo }
  ];

  return (
    <main id="skills" className="py-10 px-4 flex flex-col items-center">
  {/* Section Title */}
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
    <p className="text-gray-300 md:text-lg mb-6">Technologies I have experience with.</p>
  </div>

  {/* Skills Row */}
  <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-7xl">
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
