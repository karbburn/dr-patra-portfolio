import Link from "next/link";
import MobileNav from "./MobileNav";
import { navigation, siteConfig } from "@/data/config";

export default function Header() {
  return (
    <header className="sticky top-6 z-50 mx-4 md:mx-auto w-[calc(100%-2rem)] md:max-w-6xl rounded-2xl border border-[var(--card-border)] bg-white/80 px-6 backdrop-blur-xl dark:bg-zinc-950/80 shadow-lg shadow-zinc-900/5 transition-all">
      <nav className="flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-2xl font-black tracking-tight text-zinc-950 transition-colors hover:text-brand-accent dark:text-white"
        >
          {siteConfig.name}
        </Link>
        
        <div className="hidden items-center space-x-10 md:flex">
          {navigation.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="group relative text-sm font-bold tracking-wide text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
