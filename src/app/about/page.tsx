import { ArrowLeft, BookOpen, GraduationCap, Globe } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/data/profile";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About | Dr. Soumya Prakash Bhargava",
  description: "Assistant Professor of Law & IPR at IIM Bodh Gaya. Expert in Patents, Corporate Laws, Business Regulations, and Standard Essential Patents.",
};

export default function AboutPage() {
  return (
    <div className="container-custom py-24">
      <Link href="/" className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-brand-accent">
        <ArrowLeft size={16} /> Back to Overview
      </Link>
      
      <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
        <div className="max-w-3xl space-y-16">
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="mb-8 text-5xl md:text-6xl">Biography</h1>
            <div className="prose prose-zinc lg:prose-xl dark:prose-invert">
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                {profile.bio}
              </p>
            </div>
          </section>

          <section>
            <div className="mb-8 flex items-center gap-3">
              <BookOpen className="text-brand-accent" size={24} />
              <h2 className="text-3xl">Research Interests</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.researchInterests.map((interest, idx) => (
                <Badge key={idx} variant="primary" className="px-4 py-1.5 text-sm uppercase tracking-wider">
                  {interest}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-8 flex items-center gap-3">
              <Globe className="text-brand-accent" size={24} />
              <h2 className="text-3xl">Skills & Expertise</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {profile.skills.map((skill, idx) => (
                <Card key={idx} hover className="flex items-center gap-4 py-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10 border border-brand-accent/20">
                    <div className="h-2.5 w-2.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(var(--brand-accent),0.5)]"></div>
                  </div>
                  <span className="text-lg font-semibold tracking-tight">{skill.name}</span>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-10">
          <Card className="relative overflow-hidden border-t-4 border-t-brand-accent">
            <div className="mb-6 flex items-center gap-2 text-brand-accent">
              <GraduationCap size={20} />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="group relative pl-4">
                  <div className="absolute left-0 top-1 h-full w-[1px] bg-zinc-200 transition-all group-hover:bg-brand-accent dark:bg-zinc-800"></div>
                  <div className="font-bold leading-tight text-zinc-900 dark:text-zinc-100">{edu.degree}</div>
                  <div className="mt-1 text-sm font-medium text-zinc-500">{edu.institution}</div>
                  <div className="mt-0.5 text-xs text-zinc-400">{edu.year}</div>
                  {edu.field && <div className="mt-2 text-xs font-semibold text-brand-accent">{edu.field}</div>}
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-6 text-xl font-bold">Courses Taught</h3>
            <ul className="space-y-3">
              {profile.courses.map((course, idx) => (
                <li key={idx} className="flex flex-col text-sm border-b border-zinc-100 dark:border-zinc-900 pb-2 last:border-0">
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">{course.name}</span>
                  <span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">{course.level}</span>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
}
