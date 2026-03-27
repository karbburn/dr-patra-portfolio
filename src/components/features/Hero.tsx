import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="container-custom pt-24 pb-32">
      <div className="flex flex-col items-center gap-16 md:flex-row">
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-flex items-center rounded-full border border-brand-accent/30 bg-brand-accent/5 px-4 py-1.5 text-sm font-medium text-brand-primary backdrop-blur-md">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            {profile.title}, {profile.institution}
          </div>
          
          <h1 className="text-5xl leading-[1.1] md:text-7xl lg:text-[5rem] tracking-tight">
            {profile.name}
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            {profile.bio}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/research" 
              className="flex items-center gap-2 rounded-lg bg-brand-primary px-8 py-4 text-sm font-semibold text-brand-primary-fg transition-all hover:opacity-90 active:scale-95"
            >
              View Research <ArrowRight size={16} />
            </Link>
            <Link 
              href="/about" 
              className="rounded-lg border border-zinc-200 px-8 py-4 text-sm font-semibold text-zinc-600 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
            >
              Biography
            </Link>
          </div>
        </div>
        
        <div className="relative h-96 w-full max-w-md overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <div className="flex h-full items-center justify-center text-zinc-400">
            <span className="font-serif italic text-4xl">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
