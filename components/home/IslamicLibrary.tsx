"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Download, Headphones, ArrowRight } from "lucide-react";

/**
 * IslamicLibrary Component
 * 
 * A landing page section showcasing the IYF Islamic Library
 * Matches the design style of the Islamic books page - clean and professional
 */

const IslamicLibrary: React.FC = () => {
  // Sample featured books data
  const featuredBooks = [
    {
      title: "Iqamat-e-Din Islam ka Taqaza",
      image: "/assets/books/covers/Iqamat e Din Islam ka Taqaza.jpg",
      format: "PDF • Urdu",
      level: "Foundational Text",
    },
    {
      title: "Durre Yateem ﷺ",
      image: "/assets/books/covers/Durre Yateem ﷺ.jpg",
      format: "PDF • Urdu",
      level: "Character Development",
    },
    {
      title: "Quran ki Char Bunyadi Istilahain",
      image: "/assets/books/covers/Quran ki Char Bunyadi Istilahain.jpg",
      format: "PDF • Urdu",
      level: "Phase Two Core",
    },
  ];

  // Library features/stats
  const features = [
    {
      icon: BookOpen,
      title: "Curated Curriculum",
      description: "Syllabus-aligned reading paths designed with IYF mentors for progressive learning.",
    },
    {
      icon: Headphones,
      title: "Immersive Audio",
      description: "High-quality lectures and storytelling for on-the-go inspiration and revision.",
    },
    {
      icon: Download,
      title: "Free Resources",
      description: "All Islamic books, PDFs, and audio lectures are completely free to download.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1600px] w-full mx-auto px-5 md:px-10 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#22CA38]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#22CA38] mb-6">
            <BookOpen size={18} />
            IYF Islamic Library
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1B2B34] mb-6 leading-tight">
            Build Your <span className="text-[#22CA38]">Islamic Library</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore carefully curated Islamic books and audio lectures. From foundational texts to in-depth 
            Quranic studies, everything you need to deepen your understanding of Islam—absolutely free.
          </p>
        </div>

        {/* Features Grid - Matches books page style */}
        <div className="grid gap-6 md:grid-cols-3 mb-12 lg:mb-16">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-[0_20px_45px_-40px_rgba(34,202,56,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-35px_rgba(34,202,56,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22CA38]/10 text-[#22CA38]">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#1B2B34]">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Featured Books Grid - Matches books page card style */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredBooks.map((book) => (
            <article
              key={book.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_24px_60px_-45px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-40px_rgba(34,202,56,0.45)]"
            >
              {/* Book cover image container */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Book details container */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                {/* Level and format badges */}
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#22CA38]">
                  <span>{book.level}</span>
                  <span className="text-gray-400">{book.format}</span>
                </div>

                <h3 className="text-lg font-semibold text-[#1B2B34] leading-tight">{book.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/learn-islam/books"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#22CA38] text-white font-semibold rounded-xl shadow-lg shadow-[#22CA38]/25 hover:bg-[#1db832] transition-all duration-300 hover:shadow-xl hover:shadow-[#22CA38]/35 hover:-translate-y-0.5"
          >
            <BookOpen size={20} />
            Explore Complete Library
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IslamicLibrary;
