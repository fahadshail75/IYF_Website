'use client';

import { FC } from 'react';
import Image from 'next/image';

export interface Campaign {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
}

interface CampaignsSectionProps {
  campaigns: Campaign[];
}

const CampaignsSection: FC<CampaignsSectionProps> = ({ campaigns }) => {
  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">
        Campaigns
        <span className="block w-16 h-1 bg-green-500 mx-auto mt-2" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {campaigns.map((campaign, index) => (
          <div key={index} className=" rounded overflow-hidden">
            <Image
              src={campaign.imageSrc || "/assets/home/event-image.png"}
              alt={campaign.title}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{campaign.description}</p>
              <p className="text-sm text-gray-500 italic">{campaign.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampaignsSection;
