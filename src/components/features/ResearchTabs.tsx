"use client";

import { publications, bookChapters, patents } from "@/data/profile";
import { ExternalLink, Award, FileText } from "lucide-react";
import { useState } from "react";
import Card from "@/components/ui/Card";

type TabType = 'journal' | 'book' | 'patent';

export default function ResearchTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('journal');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const journalPubs = publications.filter(p => p.type === 'journal');
  const filteredJournalPubs = selectedYear 
    ? journalPubs.filter(p => p.year === selectedYear)
    : journalPubs;

  const bookPubs = bookChapters;

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: 'journal', label: 'Journal Articles', count: journalPubs.length },
    { id: 'book', label: 'Book Chapters', count: bookPubs.length },
    { id: 'patent', label: 'Patents', count: patents.length },
  ];

  const availableYears = [...new Set(journalPubs.map(p => p.year))].sort((a, b) => b - a);

  return (
    <>
      <div className="mb-8 flex gap-2 border-b border-zinc-200 dark:border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedYear(null);
            }}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-brand-primary text-brand-primary"
                : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            {tab.label}
            <span className="ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {activeTab === 'journal' && (
        <div className="grid gap-6 md:grid-cols-[1fr_250px]">
          <div className="space-y-6">
            {filteredJournalPubs.length > 0 ? (
              filteredJournalPubs.map((pub) => (
                <Card key={pub.id} hover>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                        {pub.journalOrPublisher}
                      </span>
                      {pub.category && (
                        <span className="rounded bg-brand-primary/10 px-2 py-0.5 text-xs font-medium text-brand-primary">
                          {pub.category}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-bold text-zinc-400">{pub.year}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight">{pub.title}</h3>
                  <p className="mb-4 text-sm text-zinc-500">{pub.authors.join(', ')}</p>
                  {pub.doi && (
                    <a 
                      href={pub.doi} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary underline underline-offset-4 hover:text-brand-accent"
                    >
                      View Publication <ExternalLink size={12} />
                    </a>
                  )}
                </Card>
              ))
            ) : (
              <div className="py-20 text-center text-zinc-500">
                No publications found for the selected year.
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Filter by Year</h3>
                {selectedYear && (
                  <button 
                    onClick={() => setSelectedYear(null)}
                    className="text-xs font-medium text-brand-primary hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <ul className="space-y-1 text-sm">
                <li 
                  onClick={() => setSelectedYear(null)}
                  className={`px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
                    selectedYear === null 
                      ? "bg-brand-primary text-brand-primary-fg font-medium" 
                      : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  All Years ({journalPubs.length})
                </li>
                {availableYears.map((year) => (
                  <li 
                    key={year} 
                    onClick={() => setSelectedYear(year)}
                    className={`px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
                      selectedYear === year 
                        ? "bg-brand-primary text-brand-primary-fg font-medium" 
                        : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                   >
                    {year} ({journalPubs.filter(p => p.year === year).length})
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      )}

      {activeTab === 'book' && (
        <div className="space-y-6">
          {bookPubs.map((pub) => (
            <Card key={pub.id} hover>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Book Chapter
                </span>
                <span className="text-sm font-bold text-zinc-400">{pub.year}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold leading-tight">{pub.title}</h3>
              <p className="mb-2 text-sm text-zinc-500">{pub.authors.join(', ')}</p>
              <p className="text-sm text-zinc-400">{pub.journalOrPublisher}</p>
              {pub.doi && (
                <a 
                  href={pub.doi} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-primary underline underline-offset-4 hover:text-brand-accent"
                >
                  View Chapter <ExternalLink size={12} />
                </a>
              )}
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'patent' && (
        <div className="space-y-4">
          <div className="mb-6 flex items-center gap-2 text-lg font-medium text-brand-primary">
            <Award size={24} />
            <span>25 Granted Patents</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="pb-3 text-left font-medium text-zinc-500">Patent Title</th>
                  <th className="pb-3 text-left font-medium text-zinc-500">Patent Number</th>
                  <th className="pb-3 text-left font-medium text-zinc-500">Grant Date</th>
                  <th className="pb-3 text-left font-medium text-zinc-500">Certificate</th>
                </tr>
              </thead>
              <tbody>
                {patents.map((patent) => (
                  <tr key={patent.id} className="border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="py-4 pr-4">{patent.title}</td>
                    <td className="py-4 pr-4 font-mono text-zinc-500">{patent.patentNumber}</td>
                    <td className="py-4 text-zinc-400">{patent.grantDate}</td>
                    <td className="py-4">
                      {patent.pdfUrl && (
                        <a 
                          href={patent.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View certificate for ${patent.patentNumber}`}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-primary hover:text-brand-accent transition-colors cursor-pointer"
                        >
                          <FileText size={14} />
                          View
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
