import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'light' | 'dark';
}

export default function Section({ 
  children, 
  className,
  background = 'default' 
}: SectionProps) {
  const backgrounds = {
    default: "",
    light: "bg-zinc-50 dark:bg-zinc-900/40",
    dark: "bg-zinc-900 dark:bg-zinc-950",
  };

  return (
    <section className={cn("py-16 md:py-24", backgrounds[background], className)}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
