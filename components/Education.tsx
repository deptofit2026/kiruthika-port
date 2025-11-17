
import React from 'react';
import { EDUCATION_DATA } from '../constants';
import Section from './Section';
import { AcademicCapIcon } from './icons';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Academic Education" icon={<AcademicCapIcon className="w-8 h-8 text-sky-600" />} className="bg-white">
      <div className="space-y-8">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h3 className="text-xl font-bold text-sky-800">{edu.degree}</h3>
                    <p className="text-md font-semibold text-gray-700 mt-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.university}</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:text-right">
                    <p className="px-3 py-1 bg-sky-100 text-sky-700 font-semibold rounded-full text-sm">{edu.year}</p>
                    <p className="mt-2 text-lg font-bold text-gray-700">{edu.percentage}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
