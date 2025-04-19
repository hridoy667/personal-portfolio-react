import React from 'react';
import me from '../assets/me.png';
import Navbar from './navbar';

export default function Hero() {
  return (
    <div className="relative overflow-hidden flex flex-col bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <section
        id="home"
         className="pt-24 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-20 mx-auto mt-22 sm:md-3 md:mt-36"
      >
        {/* Left Side (Text) */}
        <div
          className="flex-1 text-center md:text-left mt-12 md:mt-0"
          data-aos="fade-right"
        >
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Hi, I'm
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ali Imam Hridoy
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
          "A a full-stack web developer with a strong foundation in front-end and back-end technologies. I specialize in crafting responsive websites with React, Tailwind CSS, and building dynamic applications with Django and APIs. Having recently graduated in Computer Science, I'm now expanding my expertise to the MERN stack, eager to bring powerful, full-stack solutions to life. Let's build something amazing together!"
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row sm:justify-center gap-4 pb-4 md:justify-start "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://your-cv-drive-link-here"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-blue-300 text-gray-950 font-semibold rounded-2xl text-sm px-6 py-2.5 transition duration-300 inline-block text-center"
            >
  Resume
</a>

            <a
            href="#contact"
            className="bg-white hover:bg-blue-300 text-gray-950 font-semibold rounded-full text-sm px-6 py-2.5 transition duration-300 inline-block text-center"
            >
  Contact
</a>

          </div>
        </div>

        {/* Right Side (Image) */}
        <div
          className="flex-1 flex justify-center md:justify-end mb-0 md:mb-12"
          data-aos="fade-left"
        >
          <img
            src={me}
            alt="Ali Imam Hridoy"
            className="h-72 w-48 sm:h-80 sm:w-56 md:h-[400px] md:w-[320px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
