"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const initiatives = [
  {
    logo: "/assets/home/Alhuda.svg",
    title: "Digital Library",
    description: "Access thousands of Islamic books and resources online.",
    href: "/learn-islam/books",
    color: "bg-emerald-50",
    hover: "hover:border-emerald-200"
  },
  {
    logo: "/assets/home/milestone.svg",
    title: "The Milestone",
    description: "Monthly English magazine for the contemporary youth.",
    href: "https://themilestone.iyfindia.org/",
    color: "bg-blue-50",
    hover: "hover:border-blue-200"
  },
  {
    logo: "/assets/home/naqusheRaah.svg",
    title: "Nuqoosh-e-Raah",
    description: "Monthly Urdu magazine focusing on spiritual growth.",
    href: "#",
    color: "bg-amber-50",
    hover: "hover:border-amber-200"
  },
  {
    logo: "/assets/home/SatyaBak.svg",
    title: "Satyabaak",
    description: "Bengali monthly magazine for intellectual awakening.",
    href: "https://bengali.iyfindia.org/satyabaak/",
    color: "bg-rose-50",
    hover: "hover:border-rose-200"
  },
  {
    logo: "/assets/NoorLogo.png",
    title: "Noor",
    description: "Quarterly Bengali magazine nurturing young minds.",
    href: "https://bengali.iyfindia.org/noor/",
    color: "bg-purple-50",
    hover: "hover:border-purple-200"
  },
  {
    logo: "/assets/Najmus%20Saqib%20Logo.png",
    title: "Najmus Saqib",
    description: "Monthly Urdu wall magazine for children.",
    href: "#",
    color: "bg-cyan-50",
    hover: "hover:border-cyan-200"
  },
];

export default function OurInitiatives() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#22CA38]"></span>
              <span className="text-[#22CA38] font-bold tracking-widest uppercase text-sm">Our Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black">Initiatives & Platforms</h2>
          </div>

          <p className="text-gray-500 max-w-md text-lg">
            Diverse platforms designed to educate, inspire, and empower the youth across different languages and mediums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className={`group relative p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.color} ${item.hover}`}
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </div>

              <div className="h-20 mb-6 flex items-center justify-start">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={120}
                  height={60}
                  className="object-contain h-full w-auto"
                />
              </div>

              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#22CA38] transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
