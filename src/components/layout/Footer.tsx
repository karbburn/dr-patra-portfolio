import Link from "next/link";
import { navigation, siteConfig } from "@/data/config";
import { YEAR } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="container-custom grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
            {siteConfig.name}
          </h3>
          <p className="text-sm text-zinc-500">
            Assistant Professor of Law & IPR at IIM Bodh Gaya. Bridging academic rigor with industrial impact.
          </p>
        </div>
        
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-zinc-500">
            {navigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
            Professional
          </h3>
          <ul className="space-y-2 text-sm text-zinc-500">
            {siteConfig.social.linkedin && (
              <li>
                <a 
                  href={siteConfig.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            )}
            {siteConfig.social.scholar && (
              <li>
                <a 
                  href={siteConfig.social.scholar} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-colors"
                >
                  Google Scholar
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      
      <div className="container-custom mt-12 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-400 dark:border-zinc-800">
        © {YEAR} {siteConfig.name}. All rights reserved. Built by Sourabh.
      </div>
    </footer>
  );
}
