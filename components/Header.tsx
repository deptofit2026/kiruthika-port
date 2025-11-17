
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'projects', title: 'Projects' },
    { id: 'skills', title: 'Skills' },
    { id: 'contact', title: 'Contact' },
  ];

  const linkClasses = (id: string) => 
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      activeSection === id 
        ? 'bg-sky-600 text-white' 
        : 'text-gray-600 hover:bg-sky-100 hover:text-sky-700'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center max-w-5xl">
        <a href="#home" className="text-xl font-bold text-sky-700">N. Kiruthika</a>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} className={linkClasses(link.id)}>
              {link.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
