import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    { id: 1, name: 'Home', link: '/home' },
    { id: 2, name: 'Blog', link: '/blog' },
    { id: 3, name: 'Skills', link: '/skills' },
    { id: 4, name: 'My Projects', link: '/projects' },
    { id: 5, name: 'Services', link: '/services' },
    { id: 6, name: 'Contact', link: '/contact' }
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link) => {
    if (link === '/blog') {
      // Navigate to blog page
      navigate(link);
      setIsOpen(false);
    } else if (link === '/') {
      // Navigate home and close menu
      navigate(link);
      setIsOpen(false);
    } else {
      // For sections like /skills, /projects etc:
      if (location.pathname !== '/') {
        // Navigate home first, then scroll after a delay
        navigate('/');

        setTimeout(() => {
          // Scroll to section by id (without the leading '/')
          const sectionId = link.substring(1);
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on home page: scroll directly
        const sectionId = link.substring(1);
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30">
      <div className="container mx-auto flex items-center justify-center px-6 py-4">
        <Link
          to="/"
          className="font-bold text-white text-2xl pr-5"
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </Link>

        <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {NavLinks.map(({ id, link, name }) => (
            <button
              key={id}
              onClick={() => handleNavClick(link)}
              className="hover:text-gray-400 transition duration-300 bg-transparent border-0 cursor-pointer"
            >
              {name}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      <nav
        className={`md:hidden w-full px-6 transition-all duration-300 ease-in-out bg-black/50 backdrop-blur-md ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-2 py-4">
          {NavLinks.map(({ id, link, name }) => (
            <button
              key={id}
              onClick={() => handleNavClick(link)}
              className="text-gray-300 hover:text-gray-400 transition duration-300 bg-transparent border-0 text-left"
            >
              {name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
