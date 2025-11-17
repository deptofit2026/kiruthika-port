
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { MailIcon, PhoneIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-sky-700 text-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-sky-100">
          I'm currently seeking new opportunities. Feel free to reach out if you have a role that aligns with my skills and experience.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-lg font-semibold bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors duration-300">
            <MailIcon className="w-6 h-6 mr-3" />
            {PERSONAL_INFO.email}
          </a>
          <div className="flex items-center text-lg font-semibold bg-white/20 px-6 py-3 rounded-lg">
            <PhoneIcon className="w-6 h-6 mr-3" />
            {PERSONAL_INFO.mobile}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
