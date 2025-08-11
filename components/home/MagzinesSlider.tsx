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

  return (
    <section className="bg-white relative">
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
                  className={`text-2xl font-semibold ${
                    index === 1 ? "text-right jameel-font" : "text-left"
                  }`}
                >
                  {magazine.title}
                </h3>
                <p className={index===1 ? "jameel-font text-sm text-gray-600 whitespace-pre-line": "text-sm text-gray-600 whitespace-pre-line"}>
                  {isMobile
                    ? magazine.description.length > 300
                      ? magazine.description.slice(0, 300) + "..."
                      : magazine.description
                    : magazine.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium">
                  Take Subscription
                </button>
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
    </section>
  );
}
