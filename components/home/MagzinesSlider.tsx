"use client";

import Image from "next/image";
import Separator from "../common/Seperator";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Magazine {
  title: string;
  description: string;
  image: string;
}

interface RecentMagazinesProps {
  magazines: Magazine[];
}

export default function RecentMagazines({ magazines }: RecentMagazinesProps) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const whatsappNumber = "918800905047"; // international format without '+'

  const buildWhatsAppUrl = (title: string) => {
    const message = encodeURIComponent(
      `Salaam! I'd like to subscribe to ${title} magazine via IYF.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="relative bg-white px-4">
      {/* Refined Professional Corner Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 flex flex-col gap-1 pl-4 pt-4">
          <span className="block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#22CA38] via-[#22CA38]/70 to-transparent"></span>
          <span className="block h-[3px] w-12 rounded-full bg-gradient-to-r from-[#22CA38]/80 via-[#22CA38]/40 to-transparent"></span>
        </div>

        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 flex flex-col gap-1 pr-4 pb-4 items-end">
          <span className="block h-[3px] w-16 rounded-full bg-gradient-to-l from-[#1B2B34] via-[#1B2B34]/60 to-transparent"></span>
          <span className="block h-[3px] w-12 rounded-full bg-gradient-to-l from-[#1B2B34]/80 via-[#1B2B34]/40 to-transparent"></span>
        </div>

        {/* Subtle corner radius outline */}
        <div className="absolute inset-0 border border-[#22CA38]/10 rounded-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Recent Magazines
          <div className="flex justify-center mt-4">
            <Separator />
          </div>
        </h2>

        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
      >
        {magazines.map((magazine, index) => (
          <SwiperSlide
            key={index}
            className="transition-all ease-in-out delay-300"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start w-full">
              {/* Text Section */}
              <div className="space-y-4 flex-1">
                <h3
                  className={`font-semibold ${
                    index === 1 
                      ? "text-right jameel-font text-4xl md:text-5xl" 
                      : "text-left text-2xl"
                  }`}
                >
                  {magazine.title}
                </h3>
                <p
                  className={
                    index === 1
                      ? "jameel-font text-lg md:text-xl text-gray-600 whitespace-pre-line text-right leading-loose"
                      : "text-sm text-gray-600 whitespace-pre-line"
                  }
                >
                  {isMobile
                    ? magazine.description.length > 300
                      ? magazine.description.slice(0, 300) + "..."
                      : magazine.description
                    : magazine.description}
                </p>
                <a
                  href={buildWhatsAppUrl(magazine.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700 ${
                    index === 1 ? "md:ml-auto" : ""
                  }`}
                >
                  Take Subscription
                </a>
              </div>

              {/* Image */}
              <div className="flex flex-col items-center gap-4 relative">
                <Image
                  src={magazine.image}
                  alt={magazine.title}
                  width={300}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-6 space-x-2" />
      </div>
    </section>
  );
}
