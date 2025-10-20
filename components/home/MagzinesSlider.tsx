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
    <section className="bg-white relative py-6 md:py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Recent Magazines
          <div className="flex justify-center mt-2">
            <Separator />
          </div>
        </h2>

        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={isMobile ? 12 : 30}
        slidesPerView={1}
        effect={isMobile ? undefined : "fade"}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1, spaceBetween: 30 },
        }}
  >
        {magazines.map((magazine, index) => (
          (() => {
            const isUrdu = /[\u0600-\u06FF]/.test(magazine.title + magazine.description);
            const isBangla = /[\u0980-\u09FF]/.test(magazine.title + magazine.description);

            return (
              <SwiperSlide
                key={index}
                className="transition-all ease-in-out delay-300 py-2"
              >
                <div className={`flex flex-col-reverse md:flex-row gap-3 md:gap-4 ${isUrdu ? 'items-center md:items-start' : 'items-start'} w-full`}>
                  {/* Text Section */}
                  <div
                    className={`space-y-3 flex-1 px-2 md:px-0 ${isUrdu ? 'jameel-font text-right md:text-right' : isBangla ? 'solaiman-lipi-font text-left' : 'text-left'}`}
                    dir={isUrdu ? 'rtl' : 'ltr'}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {magazine.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 whitespace-pre-line">
                      {magazine.description}
                    </p>
                    {/* WhatsApp subscription CTA with prefilled message */}
                    <a
                      href={`https://api.whatsapp.com/send?phone=918800905047&text=${encodeURIComponent(
                        `Salaam! I'd like to subscribe to ${magazine.title} magazine via IYF.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
                      aria-label={`Subscribe to ${magazine.title} via WhatsApp`}
                      title={`Subscribe to ${magazine.title} via WhatsApp`}
                    >
                      Take Subscription
                    </a>
                  </div>

                  {/* Image */}
                  <div className={`flex flex-col ${isUrdu ? 'items-center md:items-start' : 'items-start'} gap-3 relative w-full md:w-auto`}>
                    <Image
                      src={magazine.image}
                      alt={magazine.title}
                      width={isMobile ? 180 : 240}
                      height={isMobile ? 240 : 320}
                      className="object-cover rounded-md max-w-[240px] md:max-w-none"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })()
        ))}
      </Swiper>

      </div>

      {/* Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-3 space-x-1" />

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
          opacity: 0.6;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 10px !important;
          height: 10px !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
