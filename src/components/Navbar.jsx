import React from 'react';

export default function Navbar() {
  const NavLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 3, name: 'Skills', link: '#skills' },
    { id: 4, name: 'My Projects', link:'#projects' },
    { id: 5, name: 'Services', link: '#services' },
    { id: 6, name: 'Contact', link: '#contact' }
  ];

  return (
    <header className='fixed top-0 left-0 w-full bg-transparent z-50'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center'>
        <a className='flex font-medium title-font text-gray-900 mb-4 md:mb-0'>
          <span className='ml-9 mr-11 font-bold text-white text-3xl'>
            Portfolio
          </span>
        </a>
        <nav className='md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-gray-300 justify-center'>
          {NavLinks.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className='mr-7 hover:text-gray-500 transition duration-300 cursor-pointer'
            >
              {e.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
