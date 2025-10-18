
'use client';
import Image from "next/image";

// Example logo paths (replace with your actual logo filenames)
const logos: string[] = [
  "/assets/home/Alhuda.svg",
  "/assets/home/milestone.svg",
  "/assets/home/naqusheRaah.svg",
  "/assets/home/SatyaBak.svg"
];

export default function OurInitiatives() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f6fff8] to-white py-4 md:py-6 border-t border-gray-100 mt-10 overflow-hidden">
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
        <h2 className="font-extrabold text-white bg-black py-1 px-3 text-xl sm:text-2xl md:text-3xl mb-3 tracking-wide flex items-center justify-center gap-2 w-fit mx-auto">
          {/* Icon (optional, can use a star or similar) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#22CA38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2"/></svg>
          Our Initiatives
        </h2>
        {/* Logos Marquee */}
        <div className="relative z-20 w-full flex items-center justify-center overflow-x-hidden mt-4 max-w-full sm:max-w-4xl md:max-w-5xl mx-auto marquee-container">
          <div className="flex gap-4 sm:gap-6 animate-marquee-ltr whitespace-nowrap py-2 will-change-transform" style={{ minWidth: '200%' }}>
            {logos.map((logo, idx) => (
              <div key={idx} className="inline-flex items-center justify-center w-[200px] sm:w-[280px] min-h-[80px] sm:min-h-[100px] aspect-[4/1] p-0 bg-transparent">
                <Image
                  src={logo}
                  alt={`Initiative Logo ${idx + 1}`}
                  width={180}
                  height={60}
                  className="object-contain h-auto w-auto"
                  style={{ maxHeight: '60px', maxWidth: '180px' }}
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo, idx) => (
              <div key={"dup-" + idx} className="inline-flex items-center justify-center w-[200px] sm:w-[280px] min-h-[80px] sm:min-h-[100px] aspect-[4/1] p-0 bg-transparent">
                <Image
                  src={logo}
                  alt={`Initiative Logo ${idx + 1}`}
                  width={180}
                  height={60}
                  className="object-contain h-auto w-auto"
                  style={{ maxHeight: '60px', maxWidth: '180px' }}
                />
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes marquee-ltr {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee-ltr {
              animation: marquee-ltr 20s linear infinite;
              display: flex;
              align-items: center;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
