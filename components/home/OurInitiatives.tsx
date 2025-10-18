
'use client';
import Image from "next/image";
import Link from "next/link";

// Initiative logos with descriptions and links
const initiatives = [
  {
    logo: "/assets/home/Alhuda.svg",
    name: "Al-Huda",
    description: "Islamic Digital Library",
    href: "/learn-islam/books"
  },
  {
    logo: "/assets/home/milestone.svg",
    name: "The Milestone",
    description: "English Magazine",
    href: "https://themilestone.iyfindia.org/"
  },
  {
    logo: "/assets/home/naqusheRaah.svg",
    name: "نقوشِ راہ",
    description: "Urdu Magazine",
    href: "#"
  },
  {
    logo: "/assets/home/SatyaBak.svg",
    name: "সত্যবাক",
    description: "Bengali Magazine",
    href: "https://bengali.iyfindia.org/satyabaak/"
  }
];

export default function OurInitiatives() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f6fff8] via-white to-[#f0fdf4] py-12 md:py-20 2xl:py-28 border-t border-gray-100 mt-10 md:mt-20 overflow-hidden">
      {/* Decorative Background Elements */}
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

      <div className="max-w-6xl mx-auto px-4 md:px-8 2xl:px-6 text-center flex flex-col items-center relative z-10">
        {/* Top Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22CA38]/10 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#22CA38] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26H22L17.82 12.44L19.91 18.71L12 14.53L4.09 18.71L6.18 12.44L2 8.26H8.91L12 2Z"/>
          </svg>
          Our Initiatives
        </span>

        {/* Main Heading */}
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl text-[#1B2B34] mb-3 sm:mb-4 leading-tight">
          Empowering Through <span className="text-[#22CA38]">Multiple Platforms</span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
          IYF reaches youth across India through diverse initiatives including digital libraries, magazines in multiple languages, and educational programs designed to inspire and guide.
        </p>

        {/* Initiatives Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {initiatives.map((initiative, idx) => (
            <Link
              key={idx}
              href={initiative.href}
              target={initiative.href.startsWith('http') ? '_blank' : undefined}
              rel={initiative.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#22CA38]/30 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22CA38]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center h-full">
                {/* Logo Container */}
                <div className="w-full h-24 md:h-28 flex items-center justify-center mb-4 bg-gray-50 group-hover:bg-[#22CA38]/5 rounded-xl transition-colors duration-300">
                  <Image
                    src={initiative.logo}
                    alt={initiative.name}
                    width={140}
                    height={80}
                    className="object-contain h-auto w-auto max-h-20 md:max-h-24"
                  />
                </div>

                {/* Name */}
                <h3 className="font-bold text-lg md:text-xl text-[#1B2B34] mb-2 text-center">
                  {initiative.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs md:text-sm text-center leading-relaxed">
                  {initiative.description}
                </p>

                {/* Accent line */}
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#22CA38] to-[#10B981] rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
