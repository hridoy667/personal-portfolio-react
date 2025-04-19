import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/navbar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,   
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <main> 
      <Navbar/>
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
