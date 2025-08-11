import BackgroundSection from "@/components/about/BackgroundSection";
import IfSection from "@/components/about/IfSection";
import MotivesSection from "@/components/about/MotivesSection";
import PurposefulLifeSection from "@/components/about/PurposeFulLifeSection";
import { ChevronRight } from "lucide-react";
import React from "react";

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
    <main className="max-w-[1600px] bg-white w-full px-5 md:px-10 2xl:px-20 mx-auto">
      <section className="gradient-bg py-9  px-5 md:px-10 lg:px-20 2xl:px-[100px] mb-10 xl:mb-20 2xl:mb-[160px] rounded-md mt-10">
        <h1 className="text-white font-bold text-3xl md:text-4xl xl:text-[40px] mb-5 md:mb-10">
          About Us
        </h1>

        <div className="text-white font-medium text-base md:text-2xl flex items-center gap-2">
          Home <ChevronRight /> About Us
        </div>
      </section>

      <BackgroundSection />

      <MotivesSection sectionData={sectionData} />

      <IfSection />

      <PurposefulLifeSection />

      <div className="bg-gray-300 rounded-tl-2xl rounded-br-2xl shadow px-10 py-6 mb-10 xl:mb-20 2xl:mb-[160px]">
        <p className="text-sm md:text-lg lg:text-xl leading-relaxed">
          Walk on the path of truth and make the Quran your guide. Use your
          youth to serve Allah and aim for Jannah (Heaven). Be a part of{" "}
          <br></br> IYF –{" "}
          <b>A movement for change, justice, and the pleasure of Allah.</b>
        </p>
      </div>
    </main>
  );
};

export default page;
