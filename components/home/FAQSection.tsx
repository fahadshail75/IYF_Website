"use client";

import { useState } from "react";
import Separator from "../common/Seperator";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who can join the Islamic Youth Federation?",
    answer:
      "Any youth driven by faith, service, and the Qur'anic vision for society is welcome. Our chapters guide new members through orientation circles and mentorship squads, ensuring you find a home and a role quickly.",
  },
  {
    question: "How do I start learning with IYF?",
    answer:
      "Begin with the Learning Pathways above—start a guided course, download a book plan, or follow the weekly blog prompts. Each resource suggests next steps and connects you with facilitators when you're ready for deeper study.",
  },
  {
    question: "Are there local chapters near me?",
    answer:
      "Yes. IYF operates across major cities and campuses in India. Submit your details via the WhatsApp connect button or write to info@iyf.org.in and we'll plug you into the nearest circle within 48 hours.",
  },
  {
    question: "How can I contribute or volunteer?",
    answer:
      "Beyond attending programs, you can volunteer in media, research, teaching, or community outreach. Share your skills, and we'll match you with a team preparing their next campaign or service project.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-[#F6FDF8] to-white px-6 py-12 shadow-[0_30px_80px_-45px_rgba(34,202,56,0.5)]">
      <div className="text-center md:text-left md:max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1F2F3D]">
          Quick FAQ for first-time visitors
        </h2>
        <div className="flex justify-center md:justify-start mt-3">
          <Separator />
        </div>
        <p className="mt-4 text-sm md:text-base text-slate-600">
          A few answers to help you dive in confidently. Reach out if you need something more specific.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-emerald-50 bg-white/90 p-5 transition-all duration-300 hover:border-emerald-200"
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="flex w-full items-center justify-between gap-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base md:text-lg font-semibold text-[#1F2F3D]">
                  {faq.question}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22CA38]/10 text-[#1B5B29]">
                  {isOpen ? <Minus size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
                </span>
              </button>
              {isOpen && (
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
