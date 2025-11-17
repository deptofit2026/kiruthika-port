
import React from 'react';
import { SKILLS_DATA } from '../constants';
import Section from './Section';
import { ChipIcon } from './icons';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Areas of Interest" icon={<ChipIcon className="w-8 h-8 text-sky-600" />} className="bg-white">
      <div className="flex flex-wrap justify-center gap-4">
        {SKILLS_DATA.map((skill, index) => (
          <div key={index} className="bg-sky-100 text-sky-800 text-lg font-semibold px-6 py-3 rounded-lg shadow-sm">
            {skill.name}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
