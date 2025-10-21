"use client";
import Image from "next/image";
import Link from "next/link";
// no React hooks required for the CSS marquee
import { Sparkles } from "lucide-react";

const initiatives = [
  {
    logo: "/assets/home/Alhuda.svg",
    description: "Digital Islamic Library",
    href: "/learn-islam/books",
  },
  {
    logo: "/assets/home/milestone.svg",
    description: "Monthly English Magazine",
    href: "https://themilestone.iyfindia.org/",
  },
  {
    logo: "/assets/home/naqusheRaah.svg",
    description: "Monthly Urdu Magazine",
    href: "#",
  },
  {
    logo: "/assets/home/SatyaBak.svg",
    description: "Monthly Bengali Magazine",
    href: "https://bengali.iyfindia.org/satyabaak/",
  },
  {
    logo: "/assets/NoorLogo.png",
    description: "Quarterly Bengali Magazine for Children",
    href: "https://bengali.iyfindia.org/noor/",
  },
  {
    logo: "/assets/Karwan-e-Uqab%20Logo.png",
    description: "IYF Children Wing",
    href: "#",
  },
  {
    logo: "/assets/Najmus%20Saqib%20Logo.png",
    description: "Monthly Urdu Wall Magazine for Children.",
    href: "#",
  },
];

export default function OurInitiatives() {
  // Duplicate items to make an infinite loop effect
  const repeatedInitiatives = [...initiatives, ...initiatives];

  // CSS marquee duration: scale with item count for readable speed
  const duration = Math.max(18, initiatives.length * 6); // seconds
  const hideFromIndex = initiatives.length + 1; // used in mobile CSS to hide duplicates

  return (
    <section className="relative w-full bg-gradient-to-br from-[#f6fff8] via-white to-[#f0fdf4] py-12 md:py-20 2xl:py-28 border-t border-gray-100 mt-10 md:mt-20 overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22CA38]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22CA38]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image */}
      <Image
        src="/assets/home/Our Initiatives.jpg"
        alt="Our Initiatives Background"
        fill
        className="object-cover object-center opacity-10 z-0"
        priority
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center flex flex-col items-center relative z-10">
        {/* Heading styled like AL_HUDA label on homepage */}
        <h2 className="font-extrabold text-white bg-black py-1 px-3 text-2xl sm:text-3xl md:text-4xl mb-3 tracking-wide flex items-center justify-center gap-2 w-fit mx-auto">
          {/* New icon: Sparkles */}
          <Sparkles size={22} className="text-[#22CA38]" />
          Our Initiatives
        </h2>

        {/* Heading */}
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1B2B34] mb-3 leading-tight">
          Empowering Through <span className="text-[#22CA38]">Multiple Platforms</span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
          IYF reaches youth across India through diverse initiatives including magazines in multiple languages, library, and educational programs designed to inspire and guide.
        </p>

        {/* Sliding Logos (CSS marquee for smooth GPU-accelerated motion) */}
        <div className="w-full">
          <style>{`
            /* Keep horizontal clipping but allow vertical overflow so hover pop isn't cut */
            .marquee { overflow-x: hidden; overflow-y: visible; padding: 0.75rem 0; }
            .marquee__track { display: flex; gap: 1.5rem; align-items: center; will-change: transform; }
            .marquee__track { animation: marquee ${duration}s linear infinite; }
            .marquee:hover .marquee__track { animation-play-state: paused; }

            /* Mobile: disable animation, wrap items and show compact cards */
            @media (max-width: 767px) {
              .marquee__track { animation: none; flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
              .marquee__track > * { flex: 0 0 100%; max-width: 360px; }
              /* hide duplicated items (we duplicated for the desktop marquee) */
              .marquee__track > *:nth-child(n+${hideFromIndex}) { display: none; }
              /* reduce card padding and image height for mobile */
              .marquee__track > * .p-6 { padding: 1rem; }
              .marquee__track > * .h-24 { height: 4.5rem; }
            }

            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <div className="marquee">
            <div className="marquee__track">
              {repeatedInitiatives.map((initiative, idx) => (
                <Link
                  key={idx}
                  href={initiative.href}
                  target={initiative.href.startsWith("http") ? "_blank" : undefined}
                  rel={initiative.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex-shrink-0 w-full sm:w-64 md:w-72 bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:z-30 border border-gray-100 hover:border-[#22CA38]/30 cursor-pointer"
                >
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <div className="w-full h-24 md:h-28 flex items-center justify-center mb-4 bg-gray-50 group-hover:bg-[#22CA38]/5 rounded-xl transition-colors duration-350">
                      <Image
                        src={initiative.logo}
                        alt={initiative.description}
                        width={140}
                        height={80}
                        className="object-contain h-auto w-auto max-h-20 md:max-h-24"
                      />
                    </div>
                    
                    <p className="text-gray-500 text-xs md:text-sm text-center leading-relaxed">
                      {initiative.description}
                    </p>
                    <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#22CA38] to-[#10B981] rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
