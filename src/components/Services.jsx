import React from "react";
import { FaCode, FaLaptopCode, FaServer, FaSearch } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Landing Page Development",
      description: "Modern, responsive landing pages using Tailwind CSS & JavaScript.",
      icon: <FaLaptopCode className="text-5xl text-blue-400 mb-4" />,
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Interactive UIs built with React, Bootstrap, and Tailwind CSS.",
      icon: <FaCode className="text-5xl text-green-400 mb-4" />,
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Scalable RESTful APIs using Node.js & Express.js with MongoDB.",
      icon: <FaServer className="text-5xl text-yellow-400 mb-4" />,
    },
    {
      id: 4,
      title: "SEO Optimization",
      description: "Boost visibility with on-page SEO and performance enhancements.",
      icon: <FaSearch className="text-5xl text-pink-400 mb-4" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 flex flex-col items-center bg-gradient-to-b from-white to-gray-100"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-aos="fade-right">
          What I Can Do for You
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          My skillset spans both frontend and backend development with performance and aesthetics in mind.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-violet-900 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-blue-200/30 transition transform hover:-translate-y-2 duration-300 text-center"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mt-3">{service.title}</h3>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
