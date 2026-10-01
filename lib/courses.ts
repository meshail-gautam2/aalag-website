import coursesData from '@/data/courses.json';

export type CourseModule = {
  title: string;
  /** Sessions in this part of the curriculum. */
  lessons: number;
  summary?: string;
};

export type Instructor = {
  name: string;
  title?: string;
  bio: string;
  image: string;
};

export type Course = {
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  description: string;
  goal?: string;
  duration: string;
  sessions?: number;
  parts?: number;
  level: string;
  category: string;
  mode?: string;
  prerequisites?: string;
  /** Gradient start/end for the placeholder thumbnail. */
  accent?: string;
  accentTo?: string;
  outcomes?: string[];
  audience?: string[];
  modules: CourseModule[];
  delivery?: string[];
  assessment?: string[];
  instructor: Instructor;
  thumbnail: string;
  /** Path to the course brochure PDF in /public, or null if not yet available. */
  brochureUrl: string | null;
};

export const courses: Course[] = coursesData as Course[];

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function totalSessions(course: Course): number {
  return course.sessions ?? course.modules.reduce((sum, module) => sum + module.lessons, 0);
}

/**
 * The full programme catalogue from the client's brief. These are the training areas
 * AALAG offers; the entries in courses.json are the ones with a published brochure and
 * a detail page of their own.
 */
export type CatalogueGroup = {
  id: string;
  title: string;
  topics: string[];
};

export const CATALOGUE: CatalogueGroup[] = [
  {
    id: 'hr-management',
    title: 'HR & Management',
    topics: [
      'HR Generalist',
      'Core HR',
      'Recruitment & Talent Acquisition',
      'Employee Relations',
      'Compensation & Benefits',
      'Performance Management',
      'HR Analytics',
      'HR Business Partnering',
      'Strategic HR',
    ],
  },
  {
    id: 'compensation-benefits',
    title: 'Compensation & Benefits',
    topics: [
      'Annual Salary Review',
      'Variable Payout',
      'Budgeting',
      'Job Evaluation Mapping',
      'Pay Analysis by Compa Ratio & Quartiles',
      'C&B Data Governance',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data, Analytics & Automation',
    topics: [
      'Advanced Excel',
      'Power BI',
      'SQL',
      'Python',
      'VBA',
      'Power Automate (Cloud Automation)',
      'Power Apps',
    ],
  },
  {
    id: 'productivity-digital',
    title: 'Productivity & Digital Skills',
    topics: [
      'MS Office',
      'PowerPoint',
      'Canva',
      'AI Tools',
      'Data Visualization',
      'Productivity & Workflow Tools',
    ],
  },
  {
    id: 'foundational-career',
    title: 'Foundational & Career Skills',
    topics: [
      'Basics of Computers',
      'English Speaking',
      'Professional Communication',
      'Workplace Skills',
      'Interview Preparation',
    ],
  },
];
