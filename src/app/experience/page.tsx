import { experiences, profile } from "@/data/profile";
import type { Metadata } from "next";
import Timeline from "@/components/features/Timeline";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Experience | Dr. Soumya Prakash Patra",
  description: "8+ years experience: IIM Bodh Gaya Assistant Professor, St. Xavier's Kolkata, and 13 years at Indian Patent Office. 25 granted patents.",
};

const academicExps = experiences.filter(e => e.type === 'academic');
const patentExps = experiences.filter(e => e.type === 'patent_office');

export default function ExperiencePage() {
  return (
    <div className="container-custom py-24">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Professional Journey</h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A track record of translating complex legal theory into high-stakes academic research and patent strategy.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="mb-8 text-2xl font-bold text-brand-primary">Academic Appointments</h2>
          <Timeline experiences={academicExps} />
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-brand-primary">Patent Office Experience</h2>
          <Timeline experiences={patentExps} />
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-brand-primary">Academic Services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {profile.academicServices.map((service, idx) => (
              <Card key={idx} hover>
                <h3 className="mb-2 font-bold">{service.title}</h3>
                <p className="text-sm text-zinc-500">{service.organization}</p>
                <p className="text-xs text-zinc-400">{service.period}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-brand-primary">Sponsored Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {profile.sponsoredProjects.map((project, idx) => (
              <Card key={idx} hover>
                <h3 className="mb-2 font-bold">{project.title}</h3>
                <p className="text-sm text-zinc-500">Role: {project.role}</p>
                <p className="text-xs text-zinc-400">Budget: {project.budget} | {project.period}</p>
                <p className="text-xs text-zinc-400">Sponsor: {project.sponsor}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-brand-primary">Management Development Programs</h2>
          {profile.mdps.map((mdp, idx) => (
            <Card key={idx} hover>
              <h3 className="mb-2 font-bold">{mdp.title}</h3>
              <p className="text-sm text-zinc-500">Role: {mdp.role}</p>
              <p className="text-xs text-zinc-400">Budget: {mdp.budget} | {mdp.period}</p>
              <p className="text-xs text-zinc-400">Location: {mdp.location}</p>
              <p className="mt-2 text-sm text-zinc-500">Sponsor: {mdp.sponsor}</p>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
