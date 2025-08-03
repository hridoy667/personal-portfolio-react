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
import mongologo from '../assets/mongo.png'
import expresslogo from '../assets/express.png'
import sql from '../assets/mysql.png'
import postman from '../assets/postman.png'

export default function Skills() {
  const skills = [
    { id: 1, name: 'HTML', img: htmlLogo },
    { id: 2, name: 'CSS', img: cssLogo },
    { id: 3, name: 'Bootstrap', img: bootstrapLogo },
    { id: 4, name: 'Tailwind CSS', img: tailwindLogo },
    { id: 5, name: 'JavaScript', img: jsLogo },
    { id: 6, name: 'React', img: reactLogo },
    { id: 7, name: 'JavaScript', img: jsLogo },
    { id: 8, name: 'Node.js', img: nodeLogo },
    { id: 9, name: 'Expressjs', img: expresslogo },
    { id: 10, name: 'MongoDB', img: mongologo },
    { id: 11, name: 'MySQL', img: sql },
    { id: 12, name: 'Postman', img: postman },
    { id: 13, name: 'Git', img: gitLogo },
    { id: 14, name: 'Python', img: pythonLogo },
    { id: 15, name: 'Django', img: djangoLogo },
    
  ];

  return (
    <section id="skills" className="bg-gradient-to-r from-stone-300 via-gray-200 to-slate-800 py-16 px-5 md:px-10 " data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
        <p className="text-gray-600 md:text-lg mb-10">
          Tools & technologies I’ve worked with
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="relative group flex flex-col items-center justify-center bg-white shadow-md hover:shadow-xl rounded-xl p-4 transition duration-300"
            >
              {/* Tooltip */}
              <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                {skill.name}
              </span>

              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
