import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Landing Page Development",
      description: "I create modern, responsive landing pages using Tailwind CSS & JavaScript.",
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "I build interactive UIs with React, Bootstrap, and Tailwind CSS.",
      icon: <FaCode className="text-4xl text-green-400" />,
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "I build interactive web applications with Bootstrap, Python, Django.",
      icon: <FaCode className="text-4xl text-green-400" />,
    },
  ];

  return (
    <section id="services" className="py-16 px-4 flex flex-col items-center">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
        <p className="text-gray-900 md:text-lg">What I can do for you.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
