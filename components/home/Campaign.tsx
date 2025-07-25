'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface Campaign {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  href:string
}

interface CampaignsSectionProps {
  campaigns: Campaign[];
}

const CampaignsSection: FC<CampaignsSectionProps> = ({ campaigns }) => {
  return (
    <section className="  bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">
        Conference
        <span className="block w-16 h-1 bg-green-500 mx-auto mt-2" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-[120px]">
        {campaigns.map((campaign, index) => (
          <div key={index} className=" rounded overflow-hidden">
            <Image
              src={campaign.imageSrc || "/assets/home/event-image.png"}
              alt={campaign.title}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="pt-5">
              <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{campaign.description}</p>
              <p className="text-sm text-gray-500 italic">{campaign.date}</p>

              <Link
              href={campaign.href}
              >
              <div
                className="text-sm text-green-600 font-semibold hover:underline mt-3  flex gap-1 items-center"
              
              >
                Glimpse  <ArrowRight size={16} />
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampaignsSection;
