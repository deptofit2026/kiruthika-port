
import React from 'react';
import { PROJECTS_DATA, ACTIVITIES_DATA } from '../constants';
import Section from './Section';
import { CodeIcon, CheckCircleIcon } from './icons';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects & Activities" icon={<CodeIcon className="w-8 h-8 text-sky-600" />}>
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">Main Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full self-start">{project.level}</span>
              <h4 className="text-lg font-bold mt-4 flex-grow">{project.title}</h4>
              <p className="mt-2 text-sm text-gray-600">Technology: <span className="font-semibold text-sky-700">{project.tech}</span></p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">Co-curricular Activities</h3>
        <ul className="space-y-4">
            {ACTIVITIES_DATA.map((activity, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{activity}</span>
                </li>
            ))}
        </ul>
      </div>
    </Section>
  );
};

export default Projects;
