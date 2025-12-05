"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export interface Campaign {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  href: string;
}

interface CampaignsSectionProps {
  campaigns: Campaign[];
}

const CampaignsSection: FC<CampaignsSectionProps> = ({ campaigns }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#22CA38]"></span>
            <span className="text-[#22CA38] font-bold tracking-widest uppercase text-sm">Major Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">State Conferences</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={campaign.imageSrc || "/assets/home/event-image.png"}
                alt={campaign.title}
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                  <Calendar size={14} />
                  <span>{campaign.date}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#22CA38] transition-colors">
                {campaign.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3 flex-1">
                {campaign.description}
              </p>

              <Link
                href={campaign.href}
                target="_blank"
                className="inline-flex items-center gap-2 text-black font-bold group/link hover:text-[#22CA38] transition-colors"
              >
                <span>Watch Glimpse</span>
                <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampaignsSection;
