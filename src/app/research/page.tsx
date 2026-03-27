import type { Metadata } from "next";
import ResearchTabs from "@/components/features/ResearchTabs";

export const metadata: Metadata = {
  title: "Research | Dr. Soumya Prakash Patra",
  description: "Publications in ABDC journals, book chapters, and 25+ granted patents on Standard Essential Patents and automotive innovations.",
};

export default function ResearchPage() {
  return (
    <div className="container-custom py-24">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Research & Publications</h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Exploring the evolution of corporate law, intellectual property rights, and the impact of digital disruption on governance frameworks.
        </p>
      </div>

      <ResearchTabs />
    </div>
  );
}
