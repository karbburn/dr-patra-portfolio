export type ExperienceType = 'academic' | 'corporate' | 'consulting' | 'patent_office';

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
}
