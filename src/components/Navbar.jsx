import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 3, name: 'Skills', link: '#skills' },
    { id: 4, name: 'My Projects', link: '#projects' },
    { id: 5, name: 'Services', link: '#services' },
    { id: 6, name: 'Contact', link: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 z-50">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Portfolio Text */}
        <a className="flex font-medium title-font text-gray-900 mb-4 md:mb-0">
          <span className="ml-9 mr-11 font-bold text-white text-3xl">Portfolio</span>
        </a>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden absolute right-6 top-6 text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`md:flex md:space-x-8 md:mr-auto font-medium items-center text-base text-gray-300 justify-center absolute md:static top-16 left-0 w-full bg-blue-950 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {NavLinks.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className="block md:inline-block py-2 px-6 md:p-0 text-center hover:text-gray-500 transition duration-300 cursor-pointer"
            >
              {e.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
