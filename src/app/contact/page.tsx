import { Mail, Linkedin, MapPin, Phone, Globe, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { profile } from "@/data/profile";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact | Dr. Soumya Prakash Patra",
  description: "Contact IIM Bodh Gaya. Email: som.iitkgp@gmail.com, Phone: +91 8895790331. Available for academic collaboration and consulting.",
};

export default function ContactPage() {
  return (
    <div className="container-custom py-24">
      <div className="mb-16 max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-brand-primary">Contact & Collaboration</h1>
        <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          For academic inquiries, speaking requests, research collaboration, or expert consulting, 
          please reach out through the dedicated channels below.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Direct Contact & Address */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="p-8 md:p-10">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-brand-primary">Direct Inquiries</h2>
            <div className="space-y-8">
              
              {/* Email */}
              <div className="group flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 rounded-xl bg-zinc-100 p-3.5 text-zinc-600 transition-colors group-hover:bg-brand-primary group-hover:text-brand-primary-fg dark:bg-zinc-800/50 dark:text-zinc-400">
                  <Mail size={22} className="stroke-[1.5]" />
                </div>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Email Address</div>
                  <a 
                    href={`mailto:${profile.email}`} 
                    className="text-lg md:text-xl font-medium text-brand-primary group-hover:text-brand-accent transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="group flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 rounded-xl bg-zinc-100 p-3.5 text-zinc-600 transition-colors group-hover:bg-brand-primary group-hover:text-brand-primary-fg dark:bg-zinc-800/50 dark:text-zinc-400">
                  <Phone size={22} className="stroke-[1.5]" />
                </div>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Phone Directory</div>
                  <a 
                    href={`tel:${profile.phone.replace(/\s/g, '')}`} 
                    className="text-lg md:text-xl font-medium text-brand-primary group-hover:text-brand-accent transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 grid sm:grid-cols-2 gap-6">
                {profile.linkedin && (
                  <a 
                    href={profile.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-3 rounded-xl border border-zinc-200 p-5 transition-all hover:border-brand-primary hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700"
                  >
                    <div className="flex items-center justify-between">
                      <Linkedin className="text-zinc-400 transition-colors group-hover:text-[#0A66C2]" size={24} />
                      <ArrowRight size={16} className="text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-primary">LinkedIn</h3>
                      <p className="text-sm text-zinc-500 mt-1">Professional Network</p>
                    </div>
                  </a>
                )}
                
                <a 
                  href={profile.contactPage.iimProfileUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 rounded-xl border border-zinc-200 p-5 transition-all hover:border-brand-primary hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700"
                >
                  <div className="flex items-center justify-between">
                    <Globe className="text-zinc-400 transition-colors group-hover:text-brand-accent" size={24} />
                    <ArrowRight size={16} className="text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary">IIM Bodh Gaya</h3>
                    <p className="text-sm text-zinc-500 mt-1">Official Faculty Profile</p>
                  </div>
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-10">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-brand-primary">Institutional Address</h2>
            <div className="flex items-start gap-5">
              <div className="mt-1 flex-shrink-0 rounded-xl bg-zinc-100 p-3.5 text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-400">
                <MapPin size={22} className="stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{profile.institution}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                  {profile.address}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Collaboration (Fixed Contrast Bug) */}
        <div className="lg:col-span-5 h-full">
          <div className="h-full flex flex-col justify-between rounded-3xl bg-brand-primary p-10 md:p-12 text-brand-primary-fg shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Collaboration</h2>
              <div className="space-y-6 opacity-90 text-lg leading-relaxed">
                <p>
                  {profile.collaboration.intro}
                </p>
                
                <div className="pt-4">
                  <h3 className="font-bold mb-4 uppercase tracking-wider text-sm opacity-80">Key Areas of Interest</h3>
                  <ul className="space-y-3">
                    {profile.collaboration.areas.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current opacity-60" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-current/20">
              <p className="text-xl md:text-2xl font-medium italic opacity-95 text-balance">
                {'"'}{profile.collaboration.quote.replace(/"/g, '')}{'"'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
