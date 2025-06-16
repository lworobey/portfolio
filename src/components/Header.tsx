"use client";  // This is needed because we'll use client-side interactivity

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-10">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="font-bold text-xl">
          My Portfolio
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Navigation Links - Hidden on mobile unless menu is open */}
        <div className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0">
            <button onClick={() => scrollToSection('home')} className="nav-link text-left md:text-center">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-left md:text-center">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link text-left md:text-center">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-left md:text-center">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-left md:text-center">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
} 