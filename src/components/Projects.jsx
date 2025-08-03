import React from 'react';
import sympImage from '../assets/symp.PNG';
import easykaj from '../assets/easykaj.png'; // Fixing path issue

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Symptocare: Connecting Symptoms to Health Solutions.',
      description: 'A full-stack Personalized Health Solution Platform using Django and Bootstrap.',
      image: sympImage,
      link: 'https://symptocare.up.railway.app',
    },
    {
      id: 2,
      title: 'EasyKaj-Your Personal Toolbelt',
      description: 'A Full-Stack online tools website where user can find handy tools like pdf compressor, pdf to word converter etc built with React, Expressjs, MongoDB, Nodejs & Tailwind CSS.',
      image:easykaj,
      link: 'https://easykaj.netlify.app',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 flex flex-col items-center bg-gradient-to-r from-black via-violet-900 to-black"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2
          className="text-white text-3xl md:text-4xl font-semibold mb-3"
          data-aos="fade-right"
        >
          Featured Projects
        </h2>
        <p
          className="text-gray-300 max-w-xl text-base md:text-lg"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Some of the projects I've developed with passion and purpose.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full"
        data-aos="fade-up"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-violet-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-violet-700 transform transition hover:scale-[1.03]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-md text-slate-950 shadow-lg bg-emerald-400 rounded-md hover:shadow-none hover:bg-emerald-300 transition "
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <a
        href="https://github.com/hridoy667?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-4 py-2 rounded-md text-white shadow-lg bg-emerald-400 rounded-md hover:shadow-none hover:text-slate-950 transition "
        data-aos="fade-right"
      >
        View More Projects
      </a>
    </section>
  );
}
