"use client";

import Link from "next/link";
import Separator from "../common/Seperator";
import {
  GraduationCap,
  BookOpen,
  ScrollText,
  BookMarked,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

interface LearningPathway {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  highlight: string;
}

const learningPathways: LearningPathway[] = [
  {
    title: "Guided Courses",
    description:
      "Structured learning tracks covering Quran, Seerah, Fiqh, and contemporary challenges with scholar-led guidance.",
    href: "/courses",
    icon: GraduationCap,
    highlight: "Start with foundations",
  },
  {
    title: "Al-Huda Library",
    description:
      "Curated books and study plans to build literacy across core Islamic sciences and personal development.",
    href: "/learn-islam/books",
    icon: BookOpen,
    highlight: "Download study guides",
  },
  {
    title: "Insightful Blogs",
    description:
      "Reflections connecting revelation to the realities youth navigate today—faith, justice, service, and culture.",
    href: "/learn-islam/blogs",
    icon: ScrollText,
    highlight: "Browse new posts",
  },
  {
    title: "Magazine Library",
    description:
      "Explore multilingual publications amplifying youth voices and movement stories from every corner of India.",
    href: "/magazines",
    icon: BookMarked,
    highlight: "Read the latest issue",
  },
];

export default function LearningPathwaysSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#F4F9F5] via-white to-[#E8F5EA] px-6 py-12 md:px-12 md:py-16">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />
      <div className="relative z-[1] flex flex-col gap-10">
        <div className="text-center md:text-left md:max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2F3D]">
            Learning pathways for every seeker
          </h2>
          <div className="flex justify-center md:justify-start mt-3">
            <Separator />
          </div>
          <p className="mt-4 text-sm md:text-base text-slate-600">
            Discover the resources that meet you where you are—whether you are mapping your first study plan or mentoring the next cohort of changemakers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {learningPathways.map((pathway) => {
            const Icon = pathway.icon;

            return (
              <Link
                key={pathway.title}
                href={pathway.href}
                className="group relative flex flex-col gap-5 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_30px_60px_-35px_rgba(47,72,88,0.3)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_40px_70px_-35px_rgba(34,202,56,0.45)]"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#22CA38]/15 via-white to-white text-[#1B5B29] shadow-inner">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1B5B29]/70">
                    {pathway.highlight}
                  </span>
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2F3D]">
                    {pathway.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {pathway.description}
                  </p>
                </div>

                <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#1B5B29]">
                  Explore pathway
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
