
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-sky-50 pt-20">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-sky-800 tracking-tight leading-tight">
          {PERSONAL_INFO.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 font-medium">
          {PERSONAL_INFO.title}
        </p>
        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-700">
          {PERSONAL_INFO.objective}
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-700 transition-transform transform hover:scale-105 duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 border border-sky-200"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
