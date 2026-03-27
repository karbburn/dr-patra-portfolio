import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-[var(--card-bg)] border-[var(--card-border)] p-6 backdrop-blur-xl shadow-sm transition-all duration-300 ease-out",
        hover && "hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5 hover:border-brand-primary/20",
        className
      )}
    >
      {children}
    </div>
  );
}
