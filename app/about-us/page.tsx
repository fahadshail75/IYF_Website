import BackgroundSection from "@/components/about/BackgroundSection";
import IfSection from "@/components/about/IfSection";
import MotivesSection from "@/components/about/MotivesSection";
import PurposefulLifeSection from "@/components/about/PurposeFulLifeSection";
import React from "react";
import { Users } from "lucide-react";
import type { Metadata } from "next";

// SEO metadata for About Us page
export const metadata: Metadata = {
  title: "About Us | Our Mission & Vision",
  description: "Learn about Islamic Youth Federation of India&apos;s mission to prepare virtuous, competent, and devoted Muslim youth. Discover our goals, objectives, and commitment to establishing Deen in personal and social life.",
  keywords: [
    'IYF mission',
    'IYF vision',
    'Islamic youth organization goals',
    'Muslim student organization',
    'Islamic character building',
    'Youth leadership',
    'Islamic education mission'
  ],
  openGraph: {
    title: "About IYF India | Our Mission & Vision",
    description: "Discover how IYF India prepares virtuous, competent Muslim youth and promotes Islamic education and character development.",
    images: ['/assets/about/about-1.png'],
  },
  alternates: {
    canonical: 'https://iyfindia.org/about-us',
  },
};

const page = () => {
  const sectionData = [
    "To prepare a cadre of virtuous, moral, competent, courageous, devoted and vigilant students and youth.",
    "To call students and youth towards the goal of IYF and to persistently struggle for it.",
    "To encourage students and youth to acquire knowledge of Quran and Sunnat and to make arrangements for the same.",
    "To organize students and youth and to shape their lives according to Islam.",
    "To train students and youth intellectually, educationally and physically.",
    "To try to eliminate moral degradation, sexual anarchy and mental slavery.",
    "To create awareness about national and community issues among students and youth.",
    "To create leadership among students and youth.",
    "To purify the indecent environment of college, campus and society.",
    "To create awareness against the prevailing irrational educational system and to try safeguard students from its adverse effects.",
    "To struggle for legitimate rights of students and to guide them in their educational institutions.",
    "To establish library and study circle for students and youth. Moreover, to organize seminars, symposiums, conferences etc.",
    "To organize various types of competitive activities among students and youth.",
    "To create an effective system of welfare service and to help the needy students up to our fullest capacity.",
    "To present the message of Islam to Non-Muslim students and youth and to call them towards it.",
    "To try to solve the national and community issues within our capacity.",
  ];

  return (
    <main className="max-w-[1600px] bg-white w-full px-4 sm:px-5 md:px-10 2xl:px-20 mx-auto">
      {/* Top label and main heading styled like the Our Initiatives label */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center mt-8">
        <h2 className="font-extrabold text-white bg-black py-1 px-3 text-2xl sm:text-3xl md:text-4xl mb-3 tracking-wide inline-flex items-center gap-2 w-fit mx-auto">
          <Users size={22} className="text-[#22CA38]" />
          About Us
        </h2>

        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1B2B34] mb-4 leading-tight">
          Our Mission & Vision
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Learn about IYF India&apos;s mission to prepare virtuous, competent, and devoted Muslim youth — our goals, objectives, and commitment to establishing Deen in personal and social life.
        </p>
      </div>
      <BackgroundSection />
      <MotivesSection sectionData={sectionData} />
      <IfSection />
      <PurposefulLifeSection />

      {/* CTA Section - Reimagined */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#22CA38] via-[#1db832] to-[#18a028] text-white rounded-2xl shadow-2xl shadow-[#22CA38]/30 px-6 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8 mb-10 xl:mb-20 2xl:mb-[160px]">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed font-medium">
            Walk on the path of truth and make the Quran your guide. Use your youth to serve Allah and aim for Jannah (Heaven).
          </p>
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed font-medium mt-3">
            Be a part of <span className="font-bold text-white">IYF</span> – <span className="font-bold text-white drop-shadow-lg">A movement for change, justice, and the pleasure of Allah.</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
