export interface Education {
  degree: string;
  institution: string;
  year: string;
  field?: string;
}

export interface Course {
  name: string;
  level: 'UG' | 'PG';
  institution: string;
}

export interface Skill {
  name: string;
  category: 'teaching' | 'technical' | 'industry';
}

export interface Language {
  name: string;
  proficiency: 'native' | 'fluent' | 'professional';
}

export interface Certification {
  name: string;
  id?: string;
}

export interface AcademicService {
  title: string;
  organization: string;
  period: string;
}

export interface SponsoredProject {
  title: string;
  role: string;
  budget: string;
  period: string;
  sponsor: string;
}

export interface MDP {
  title: string;
  role: string;
  budget: string;
  period: string;
  location: string;
  sponsor: string;
}

export interface Collaboration {
  intro: string;
  areas: string[];
  quote: string;
}

export interface Stats {
  publications: number;
  patents: number;
  yearsExperience: number;
  citations: number;
  hIndex: number;
  i10Index: number;
}

export interface HomePage {
  researchIntro: string;
  ctaTitle: string;
  ctaText: string;
}

export interface ContactPage {
  iimProfileUrl: string;
  iimProfileLabel: string;
}

export interface Profile {
  name: string;
  title: string;
  institution: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
  linkedin?: string;
  scholar?: string;
  orcid?: string;
  researchInterests: string[];
  education: Education[];
  courses: Course[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
  academicServices: AcademicService[];
  sponsoredProjects: SponsoredProject[];
  mdps: MDP[];
  stats: Stats;
  homePage: HomePage;
  contactPage: ContactPage;
  collaboration: Collaboration;
}
