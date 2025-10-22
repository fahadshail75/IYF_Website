"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

/**
 * IslamicLibrary Component
 * 
 * A clean, compact landing page section for the IYF Islamic Library
 * Simple design with call-to-action
 */

const IslamicLibrary: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1600px] w-full mx-auto px-5 md:px-10 2xl:px-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left - Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#22CA38]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#22CA38] mb-4">
              <BookOpen size={18} />
              Al-Huda Library
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B2B34] mb-4 leading-tight">
              Discover <span className="text-[#22CA38]">Authentic Islamic</span> Knowledge
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Access our curated collection of Islamic books, audio lectures, and educational resources. 
              Everything you need to strengthen your faith—completely free.
            </p>

            <Link
              href="/learn-islam/books"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#22CA38] text-white font-semibold rounded-lg shadow-lg shadow-[#22CA38]/25 hover:bg-[#1db832] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Library
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right - Image */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/home/book-image.png"
                alt="Islamic Books Library"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs sm:text-sm font-semibold text-[#1B2B34] text-center">
                  <span className="text-[#22CA38]">50+</span> Books • <span className="text-[#22CA38]">30+</span> Audio Lectures • <span className="text-[#22CA38]">100%</span> Free
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IslamicLibrary;
