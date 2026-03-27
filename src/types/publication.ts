export type PublicationType = 'journal' | 'book' | 'conference' | 'working_paper';

export interface Publication {
  id: string;
  type: PublicationType;
  title: string;
  authors: string[];
  journalOrPublisher: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
  abstract?: string;
  category?: 'A' | 'B' | 'C' | 'SCOPUS';
}
