"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { navigation } from "@/data/config";

export default function MobileNav() {
  const { isOpen, toggle, close } = useMobileNav();

  return (
    <div className="md:hidden">
      <button
        onClick={toggle}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="p-2 text-zinc-600 hover:text-brand-primary transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm"
            onClick={close}
          />
          <div className="absolute left-0 right-0 top-16 z-50 border-b border-zinc-200 bg-white py-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 animate-slide-down">
            <nav className="container-custom flex flex-col gap-4">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-brand-primary dark:text-zinc-400 dark:hover:text-zinc-100"
                  onClick={close}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
