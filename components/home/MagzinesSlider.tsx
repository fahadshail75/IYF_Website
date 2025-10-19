"use client";

import Image from "next/image";
import Separator from "../common/Seperator";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y, Keyboard } from "swiper/modules";
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

export default function MagzinesSlider({ magazines }: RecentMagazinesProps) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const whatsappNumber = "918800905047"; // international format without '+'

  const buildWhatsAppUrl = (title: string) => {
    const message = encodeURIComponent(
      `Salaam! I'd like to subscribe to ${title} magazine via IYF.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="bg-white px-4">

      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Recent Magazines
          <div className="flex justify-center mt-4">
            <Separator />
          </div>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          a11y={{ enabled: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          loop
        >
        {magazines.map((magazine, index) => {
          // Language detection for Urdu (Arabic script) and Bangla
          const isUrdu = /[\u0600-\u06FF]/.test(magazine.title + magazine.description);
          const isBangla = /[\u0980-\u09FF]/.test(magazine.title + magazine.description);

          // Provided translations (use these when appropriate)
          const urduDescription = `نقوشِ راہ" آئی۔وائی۔ایف (اسلامک یوتھ فیڈریشن) کی جانب سے شائع ہونے والی ایک معیاری اور با مقصد اردو میگزین ہے، اس میگزین کے ذریعے نا صرف نوجوانوں کی فکری، روحانی اور اخلاقی تربیت کرنا مقصود ہے، بلکہ یہ اسلامی تعلیمات کے ساتھ ساتھ عصرِ حاضر کے تقاضوں سے بھی مزیّن ہے۔ اس کے جزئیات میں معاشرتی اصلاح، کردار سازی، اور امت مسلمہ کی بیداری جیسے اہم موضوعات شامل ہیں۔ مجموعی طور پر یہ میگزین نوجوانوں کے لیے ایک فکری مشعلِ راہ، حوصلے کا پیغام، اور تحریکی زندگی میں رہنمائی کا اہم ذریعہ ہے.`;

          const banglaDescription = `সত্যবাক ইসলামিক ইয়ুথ ফেডারেশন (IYF) কর্তৃক প্রকাশিত দ্বিমাসিক গবেষণামূলক পত্রিকা, যা তরুণ সমাজে ইসলামী চেতনা, নৈতিক মূল্যবোধ ও মননশীলতা জাগ্রত করতে কাজ করে।

কুরআনের নির্দেশ—“হে ইমানদারগণ, আল্লাহকে ভয় করো এবং সত্য কথা বলো” এবং হাদীসের ঘোষণা—“জালেম শাসকের সামনে সত্য কথা বলা উত্তম জিহাদ”—একে পথনির্দেশ হিসেবে গ্রহণ করে সত্যবাক সত্য ও ন্যায়ের পক্ষে যুক্তিনির্ভর ও চিন্তাজাগানিয়া লেখা প্রকাশ করে.`;

          const titleClass = `font-semibold break-words ${
            isUrdu
              ? "text-right noori-nastaliq-font text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]"
              : isBangla
              ? "text-left solaiman-lipi-font text-xl sm:text-2xl md:text-3xl"
              : "text-left text-xl sm:text-2xl"
          }`;

          const descClass = isUrdu
            ? "noori-nastaliq-font text-base sm:text-lg md:text-lg text-gray-600 whitespace-pre-line text-right leading-loose"
            : isBangla
            ? "solaiman-lipi-font text-sm sm:text-base md:text-base text-gray-600 whitespace-pre-line leading-relaxed"
            : "text-sm sm:text-base text-gray-600 whitespace-pre-line";

          // Provide a specific English description for "The Milestone" magazine
          const milestoneDescription = `The Milestone is an Islamic magazine focusing on the current problems of the Muslim Ummah and the youth. It works in inculcating the Islamic spirit in the youth and helps them in getting acquainted with the current happenings in India and around the world.`;

          const isMilestone = !isUrdu && !isBangla && /milestone/i.test(magazine.title);

          const descriptionText = isUrdu
            ? urduDescription
            : isBangla
            ? banglaDescription
            : isMilestone
            ? milestoneDescription
            : magazine.description;

          // For English content, show a concise summary (~220 chars)
          const displayText =
            !isUrdu && !isBangla
              ? descriptionText.length > 220
                ? descriptionText.slice(0, 220) + "..."
                : descriptionText
              : descriptionText;

          const buttonClass = `inline-flex items-center justify-center gap-2 rounded bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700 ${
            isUrdu ? "md:ml-auto" : ""
          }`;

          return (
            <SwiperSlide key={index} className="transition-all ease-in-out delay-300" aria-label={`${magazine.title} magazine slide`} role="group">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start w-full">
                {/* Text Section */}
                <div className="space-y-4 flex-1 w-full md:w-auto" dir={isUrdu ? "rtl" : "ltr"}>
                  <h3 className={titleClass}>{magazine.title}</h3>
                  <p className={descClass}>{displayText}</p>
                  <a href={buildWhatsAppUrl(magazine.title)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                    Take Subscription
                  </a>
                </div>

                {/* Image */}
                <div className="flex flex-col items-center gap-4 relative w-full md:w-auto">
                  <Image src={magazine.image} alt={magazine.title} width={300} height={400} className="object-cover w-full sm:w-64 md:w-72 h-auto" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-6 space-x-2" />
      </div>
    </section>
  );
}
