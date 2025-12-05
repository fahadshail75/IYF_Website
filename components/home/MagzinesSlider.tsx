"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, BookOpen } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Magazine {
  title: string;
  description: string;
  image: string;
}

interface RecentMagazinesProps {
  magazines: Magazine[];
}

export default function RecentMagazines({ magazines }: RecentMagazinesProps) {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#22CA38]"></span>
            <span className="text-[#22CA38] font-bold tracking-widest uppercase text-xs">Our Publications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Recent Magazines</h2>
        </div>

        <div className="flex gap-3">
          <button className="swiper-button-prev-custom w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
            <ArrowRight className="rotate-180 w-4 h-4" />
          </button>
          <button className="swiper-button-next-custom w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop
        className="w-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100"
      >
        {magazines.map((magazine, index) => {
          const isUrdu = /[\u0600-\u06FF]/.test(magazine.title + magazine.description);
          const isBangla = /[\u0980-\u09FF]/.test(magazine.title + magazine.description);

          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full min-h-[350px] lg:min-h-[400px]">
                {/* Image Section */}
                <div className="w-full lg:w-2/5 relative h-[250px] lg:h-auto bg-gray-50">
                  <Image
                    src={magazine.image}
                    alt={magazine.title}
                    fill
                    className="object-contain p-6 lg:p-10 hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 p-6 lg:p-10 flex flex-col justify-center bg-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-gray-100 rounded-full w-fit mb-4">
                    <BookOpen size={12} className="text-gray-600" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">Featured Issue</span>
                  </div>

                  <h3 className={`text-2xl lg:text-3xl font-bold text-black mb-4 ${isUrdu ? 'font-serif text-right' : ''}`}>
                    {magazine.title}
                  </h3>

                  <p className={`text-gray-500 text-base leading-relaxed mb-6 ${isUrdu ? 'text-right font-serif text-lg leading-loose' :
                      isBangla ? 'text-left' : ''
                    }`}>
                    {magazine.description}
                  </p>

                  <div className={`flex ${isUrdu ? 'justify-end' : 'justify-start'}`}>
                    <a
                      href={`https://api.whatsapp.com/send?phone=918800905047&text=${encodeURIComponent(
                        `Salaam! I'd like to subscribe to ${magazine.title} magazine via IYF.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#22CA38] text-white font-bold rounded-full hover:bg-[#1db832] transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-300 text-sm"
                    >
                      <span>Subscribe Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
