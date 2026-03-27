import Hero from "@/components/features/Hero";
import { profile } from "@/data/profile";
import { BookOpen, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pt-16 pb-24">
      <Hero />

      <section className="bg-zinc-50 py-24 dark:bg-zinc-900/40">
        <div className="container-custom">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold">Research Interests</h2>
            <p className="text-zinc-500">
              {profile.homePage.researchIntro}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {profile.researchInterests.map((interest, idx) => (
              <Card key={idx} hover>
                <h3 className="mb-2 text-xl font-bold">{interest}</h3>
                <p className="text-sm text-zinc-500">
                  Research focus on legal frameworks and regulatory compliance.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom">
        <div className="grid gap-8 md:grid-cols-3">
          <Card hover className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <BookOpen className="mb-4 text-brand-accent" size={32} />
            <h3 className="mb-2 text-xl font-bold">Publications</h3>
            <p className="text-zinc-500">{profile.stats.publications}+ journal articles in ABDC ranked journals</p>
          </Card>
          <Card hover className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            <GraduationCap className="mb-4 text-brand-accent" size={32} />
            <h3 className="mb-2 text-xl font-bold">Patents</h3>
            <p className="text-zinc-500">{profile.stats.patents} granted patents as inventor</p>
          </Card>
          <Card hover className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Briefcase className="mb-4 text-brand-accent" size={32} />
            <h3 className="mb-2 text-xl font-bold">Experience</h3>
            <p className="text-zinc-500">{profile.stats.yearsExperience}+ years in academia & patent law</p>
          </Card>
        </div>
      </section>

      <section className="container-custom">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50 md:p-12 lg:p-16 shadow-lg shadow-zinc-200/50 dark:shadow-none">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50 md:text-4xl">{profile.homePage.ctaTitle}</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            {profile.homePage.ctaText}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-8 py-4 text-sm font-bold text-brand-primary-fg transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg hover:shadow-brand-primary/20">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
