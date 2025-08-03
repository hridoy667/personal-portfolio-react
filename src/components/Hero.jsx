import React from 'react';
import me from '../assets/me.png';
import { FaQuoteLeft,FaDownload } from "react-icons/fa";
export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-28 sm:pt-36 flex flex-col bg-gradient-to-r from-violet-800 to-black ">
      <section
        id="home"
        className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-20 mx-auto"
      >
        {/* Left Side (Text) */}
        <div
          className="flex-1 text-center md:text-left mt-12 md:mt-0"
          data-aos="fade-right"
        >
          <h1 className="text-xl text-emerald-400 sm:text-4xl md:text-5xl font-bold text-white mb-4 font-roboto">
          <sup><FaQuoteLeft className="inline text-emerald-400 text-[25px] mr-1" /></sup>
          Hi, I'm
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ali Imam Hridoy
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed font-josefin">
            I'm a full-stack web developer specializing in the MERN stack, with a solid background in React, Node.js, Express, and MongoDB. I build responsive UIs with Tailwind CSS and integrate dynamic backends using REST APIs. Let's build scalable, impactful web apps together.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 pb-4 md:justify-start"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1B6EgmtTUalZTIVG3GYEotLH3PPhZaUkF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-white hover:text-slate-950 shadow-lg bg-emerald-400 hover:shadow-none hover:bg-emerald-300 transition flex items-center"
            >
              <FaDownload className="mr-2" />
              Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-2 rounded-md shadow-lg text-white hover:text-slate-950 bg-emerald-400 hover:shadow-none hover:bg-emerald-300 transition  flex items-center sm:items-center"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div
          className="flex-1 flex justify-center md:justify-end mt-5 sm:mt-10"
          data-aos="fade-left"
        >
          <img
            src={me}
            alt="Ali Imam Hridoy"
            className="h-82 w-58 object-cover shadow-md rounded-lg sm:h-90 sm:w-56 md:h-[500px] md:w-[320px]"
          />
        </div>
      </section>
    </div>
  );
}
