
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} N. Kiruthika. All Rights Reserved.</p>
        <p className="text-sm mt-2">Designed with passion for academia and technology.</p>
      </div>
    </footer>
  );
};

export default Footer;
