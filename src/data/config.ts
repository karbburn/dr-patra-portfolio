export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  institution: string;
  social: {
    linkedin?: string;
    scholar?: string;
    orcid?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Dr. Soumya Prakash Bhargava',
  title: 'Dr. Soumya Prakash Bhargava | Professor of Law & IPR',
  description: 'Assistant Professor of Law & IPR at IIM Bodh Gaya. Expert in Patents, Corporate Laws, and Business Regulations.',
  url: 'https://soumyaprakashpatra.com',
  institution: 'IIM Bodh Gaya',
  social: {
    linkedin: 'https://www.linkedin.com/in/infinitesom/',
    scholar: 'https://scholar.google.com/citations?user=Qd1YXr8AAAAJ&hl=en',
  },
};

export const navigation = [
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];
