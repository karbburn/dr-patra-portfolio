import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    primary: "bg-brand-primary/10 text-brand-primary border border-brand-primary/20",
    accent: "bg-brand-accent/10 text-brand-accent border border-brand-accent/20",
    outline: "border border-[var(--card-border)] text-zinc-600 dark:text-zinc-400 backdrop-blur-sm",
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold leading-none ring-1 ring-inset ring-transparent transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
