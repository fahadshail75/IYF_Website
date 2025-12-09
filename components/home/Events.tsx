"use client";

import { FC } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface Evento {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

interface EventosSectionProps {
  eventos: Evento[];
}

const EventosSection: FC<EventosSectionProps> = ({ eventos }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4 md:gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#22CA38]"></span>
            <span className="text-[#22CA38] font-bold tracking-widest uppercase text-sm">Latest Updates</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mt-2">Events & Activities</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventos.map((evento, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-4 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
              <Image
                src={evento.imageSrc}
                alt={evento.title}
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

              <a
                href={evento.link}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
              >
                <ArrowUpRight className="w-5 h-5 text-black" />
              </a>
            </div>

            <div className="px-2 pb-2">
              <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-[#22CA38] transition-colors">
                {evento.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {evento.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventosSection;
