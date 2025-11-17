
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center mb-10">
          {icon}
          <h2 className="text-3xl font-bold text-gray-800 ml-4">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
