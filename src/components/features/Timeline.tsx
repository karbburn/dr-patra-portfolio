import { Experience } from "@/types";
import { cn } from "@/lib/utils";

interface TimelineProps {
  experiences: Experience[];
  title?: string;
}

export default function Timeline({ experiences, title }: TimelineProps) {
  return (
    <div className="space-y-12">
      {title && (
        <h2 className="mb-8 text-2xl font-bold text-brand-primary">{title}</h2>
      )}
      {experiences.map((exp) => (
        <div 
          key={exp.id} 
          className="relative border-l-2 border-zinc-200 pl-8 dark:border-zinc-800"
        >
          <div 
            className={cn(
              "absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 bg-white dark:bg-zinc-950",
              exp.type === 'academic' ? "border-brand-primary" : "border-zinc-500"
            )}
          />
          <div className="mb-2 flex flex-col justify-between md:flex-row md:items-center">
            <h3 className="text-xl font-bold underline underline-offset-4">
              {exp.title}
            </h3>
            <span className="text-sm font-bold text-zinc-400">{exp.period}</span>
          </div>
          <div className="mb-4 text-sm font-medium text-brand-accent">
            {exp.organization} • {exp.location}
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {exp.description.map((item, id) => (
              <li 
                key={id} 
                className="flex items-start gap-2 before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
