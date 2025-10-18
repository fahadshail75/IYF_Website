
'use client';
import Image from "next/image";

// Example logo paths (replace with your actual logo filenames)
const logos: string[] = [];

export default function OurInitiatives() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f6fff8] to-white py-10 md:py-20 border-t border-gray-100 mt-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/home/Our Initiatives.jpg"
        alt="Our Initiatives Background"
        fill
        className="object-cover object-center opacity-20 z-0"
        priority
      />
      <div className="max-w-2xl mx-auto px-4 md:px-0 text-center flex flex-col items-center relative z-10">
        {/* Top heading for Our Initiatives */}
        <h2 className="font-extrabold text-white bg-black py-1 px-3 text-2xl sm:text-3xl md:text-4xl mb-3 tracking-wide flex items-center justify-center gap-2 w-fit mx-auto">
          {/* Icon (optional, can use a star or similar) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#22CA38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2"/></svg>
          Our Initiatives
        </h2>
        {/* Logos Grid */}
        {/* Logos grid removed as requested */}
      </div>
    </section>
  );
}
