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
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      {/* Left - Portfolio Text */}
      <a className="font-bold text-white text-2xl">Portfolio</a>
  
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
        {NavLinks.map((e) => (
          <a
            key={e.id}
            href={e.link}
            className="hover:text-gray-400 transition duration-300"
          >
            {e.name}
          </a>
        ))}
      </nav>
  
      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </div>
  
    {/* Mobile Nav (Dropdown) */}
    <nav
      className={`md:hidden w-full px-6 transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex flex-col space-y-2 py-4">
        {NavLinks.map((e) => (
          <a
            key={e.id}
            href={e.link}
            className="text-gray-300 hover:text-gray-400 transition duration-300"
          >
            {e.name}
          </a>
        ))}
      </div>
    </nav>
  </header>
  
  );
}
