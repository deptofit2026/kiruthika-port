
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import Section from './Section';
import { BriefcaseIcon } from './icons';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" icon={<BriefcaseIcon className="w-8 h-8 text-sky-600" />}>
      <div className="relative border-l-2 border-sky-200 pl-8 space-y-12">
        {EXPERIENCE_DATA.map((job, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[42px] top-1.5 w-4 h-4 bg-sky-600 rounded-full border-4 border-white"></div>
            <p className="text-sm font-medium text-sky-600">{job.period}</p>
            <h3 className="text-xl font-bold mt-1">{job.position}</h3>
            {job.details && <p className="text-md text-gray-500">{job.details}</p>}
            <p className="text-lg font-semibold text-gray-700 mt-1">{job.organization}</p>
            <p className="text-sm text-gray-500 mt-1">{job.duration}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
