
import { Education, Experience, Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'N. KIRUTHIKA',
  title: 'Aspiring Assistant Professor',
  mobile: '9659354878',
  email: 'kiruthimca86@gmail.com',
  objective: "To secure a challenging position where I can share skill and knowledge, thereby expand upon my education and knowledge, and to be part of a team that helps to achieve the organization's success.",
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'M.Phil',
    institution: 'Cauvery College for Women',
    university: 'Bharathidhasan University, Trichy',
    year: 2012,
    percentage: '78%',
  },
  {
    degree: 'MCA',
    institution: 'Dhanalakshmi Srinivasan Engineering College',
    university: 'Anna University, Perambalur',
    year: 2010,
    percentage: '77%',
  },
  {
    degree: 'B.COM(CA)',
    institution: 'Selvam Arts & Science College',
    university: 'Periyar University, Namakkal',
    year: 2006,
    percentage: '60%',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    period: 'June 2016 - Jan 2022',
    position: 'Consultant Manager',
    organization: 'Go Abroad Pvt Ltd, Namakkal',
    duration: '5 Years, 7 Months',
  },
  {
    period: 'June 2012 - Nov 2013',
    position: 'Assistant Professor',
    details: '(Master of computer application)',
    organization: 'Selvam College of Technology, Namakkal',
    duration: '1 Year, 6 Months',
  },
  {
    period: 'June 2010 - Apr 2011',
    position: 'Teacher',
    organization: 'Sri Vinayaga Higher Secondary School, Namakkal',
    duration: '1 Year',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    level: 'M.Phil Project',
    title: 'Flexible Rollback Recovery in Dynamic Heterogeneous Grid Computing',
    tech: 'Java',
  },
  {
    level: 'PG Project',
    title: 'Bluetooth Control Panel',
    tech: 'Java',
  },
  {
    level: 'UG Project',
    title: 'Hostel Management System',
    tech: 'Visual Basic',
  },
];

export const SKILLS_DATA: Skill[] = [
    { name: 'Data Base Management System' },
    { name: 'C & C++' },
    { name: 'Software Testing' },
    { name: 'Data Structures and Algorithms' },
];

export const ACTIVITIES_DATA: string[] = [
    'National Seminar on “Research perspectives in computerscience” at Selvam College of Technology.',
    '“Two days FDP in core competency” at Selvam College of Technology.',
    'One day “Teaching and Learning Process for Modern Engineeringand Management” at Selvam College of Technology.',
    'Presented in National level workshop on “Advanced Software Testing Techniques and Quality issues” at Cauvery College for Women.'
];
