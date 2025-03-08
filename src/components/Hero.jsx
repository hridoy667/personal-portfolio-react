import React from 'react';
import me from '../assets/me.png'
import Navbar from './navbar';

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center'>
      <div className='md:h-[720px] h-[990px] md:w-[1800px] w-[900px] bg-gradient-to-r absolute bg-blue-950 rounded-full transform rotate-5 -top-40'></div>
      <Navbar/>
      <section
        id='home'
        className='relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 mt-24 md:mt-0'
      >
        <div className='flex-1 md:text-left mt-10 md:mt-0  sm:mt-2'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
            Ali Imam Hridoy
          </h1>
          <p className='text-base sm:text-lg md:text-lg text-gray-300 mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptates est voluptas ab accusantium eveniet inventore,
            necessitatibus ex enim id tenetur similique corporis quis nostrum,
            dicta quisquam in consequatur maxime.
          </p>
          <button
            type='button'
            className='text-gray-950 mt-4 sm:mt-0 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center'
          >
            Resume
          </button>
          <button
            type='button'
            className='text-gray-950 mt-4 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center ml-2'
          >
            Contact
          </button>
        </div>
        <div className='flex-1 flex justify-center md:justify-end mt-0 md:mt-0'>
        <img src={me} alt="" className="sm:h-[400px] md:h-[458px] w-[250px] sm:w-[360px] max-w-full h-auto object-cover rounded-lg" />

        </div>
      </section>
    </div>
  );
}
