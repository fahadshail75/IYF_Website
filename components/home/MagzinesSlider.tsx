"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Magazine {
  title: string;
  description: string;
  image: string;
}

interface RecentMagazinesProps {
  magazines: Magazine[];
}

export default function MagzinesSlider({ magazines }: RecentMagazinesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const whatsappNumber = "918800905047";

  const buildWhatsAppUrl = (title: string) => {
    const message = encodeURIComponent(
      `Salaam! I'd like to subscribe to ${title} magazine via IYF.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % magazines.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + magazines.length) % magazines.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && magazines.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % magazines.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, magazines.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + magazines.length) % magazines.length);
        setIsAutoPlaying(false);
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % magazines.length);
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [magazines.length]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="bg-white px-4 py-8 md:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">
          Recent Magazines
          <div className="flex justify-center mt-3 md:mt-4">
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
        </h2>

        <div 
          className="relative px-8 md:px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {magazines.map((magazine, index) => {
              const isUrdu = /[\u0600-\u06FF]/.test(magazine.title + magazine.description);
              const isBangla = /[\u0980-\u09FF]/.test(magazine.title + magazine.description);

              const urduDescription = `نقوشِ راہ" آئی۔وائی۔ایف (اسلامک یوتھ فیڈریشن) کی جانب سے شائع ہونے والی ایک معیاری اور با مقصد اردو میگزین ہے، اس میگزین کے ذریعے نا صرف نوجوانوں کی فکری، روحانی اور اخلاقی تربیت کرنا مقصود ہے، بلکہ یہ اسلامی تعلیمات کے ساتھ ساتھ عصرِ حاضر کے تقاضوں سے بھی مزیّن ہے۔ اس کے جزئیات میں معاشرتی اصلاح، کردار سازی، اور امت مسلمہ کی بیداری جیسے اہم موضوعات شامل ہیں۔ مجموعی طور پر یہ میگزین نوجوانوں کے لیے ایک فکری مشعلِ راہ، حوصلے کا پیغام، اور تحریکی زندگی میں رہنمائی کا اہم ذریعہ ہے.`;

              const banglaDescription = `সত্যবাক ইসলামিক ইয়ুথ ফেডারেশন (IYF) কর্তৃক প্রকাশিত দ্বিমাসিক গবেষণামূলক পত্রিকা, যা তরুণ সমাজে ইসলামী চেতনা, নৈতিক মূল্যবোধ ও মননশীলতা জাগ্রত করতে কাজ করে।

কুরআনের নির্দেশ—"হে ইমানদারগণ, আল্লাহকে ভয় করো এবং সত্য কথা বলো" এবং হাদীসের ঘোষণা—"জালেম শাসকের সামনে সত্য কথা বলা উত্তম জিহাদ"—একে পথনির্দেশ হিসেবে গ্রহণ করে সত্যবাক সত্য ও ন্যায়ের পক্ষে যুক্তিনির্ভর ও চিন্তাজাগানিয়া লেখা প্রকাশ করে.`;

            // Provide a specific English description for "The Milestone" magazine (short)
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
              // Exception: for "The Milestone" (isMilestone) show the full description
              const displayText = !isUrdu && !isBangla
                ? isMilestone
                  ? descriptionText
                  : descriptionText.length > 220
                    ? descriptionText.slice(0, 220) + "..."
                    : descriptionText
                : descriptionText;

              const titleClass = `font-semibold mb-3 md:mb-4 ${
                isUrdu
                  ? "text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                  : isBangla
                  ? "text-left text-xl sm:text-2xl md:text-3xl"
                  : "text-left text-xl sm:text-2xl md:text-3xl"
              }`;

              const descClass = `mb-4 md:mb-6 ${
                isUrdu
                  ? "text-base sm:text-lg md:text-xl text-gray-700 text-right leading-loose"
                  : isBangla
                  ? "text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                  : "text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
              }`;

              return (
                <div 
                  key={index} 
                  className="min-w-full pb-4"
                  aria-label={`${magazine.title} magazine slide`}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start w-full">
                    {/* Image Section */}
                    <div 
                      className={`flex-shrink-0 w-full sm:w-64 md:w-56 lg:w-64 ${
                        isUrdu ? 'md:order-2' : 'md:order-1'
                      }`}
                    >
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <Image
                            src={magazine.image}
                            alt={`${magazine.title} magazine cover`}
                            fill
                            sizes="(max-width: 640px) 100vw, 320px"
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div 
                      className={`flex-1 flex flex-col justify-center ${
                        isUrdu ? 'md:order-1' : 'md:order-2'
                      }`}
                      dir={isUrdu ? "rtl" : "ltr"}
                    >
                      <h3 className={titleClass}>{magazine.title}</h3>
                      {/* Read more toggle for long English descriptions on small screens */}
                      <p className={descClass}>
                        {displayText}
                      </p>
                      <div className={isUrdu ? "flex md:justify-end" : ""}>
                        <a 
                          href={buildWhatsAppUrl(magazine.title)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 md:px-6 md:py-3 text-sm md:text-base font-medium text-white transition-all hover:bg-green-700 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                          aria-label={`Subscribe to ${magazine.title} via WhatsApp`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Take Subscription
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

          {/* Custom Navigation Arrows */}
          {magazines.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Previous magazine"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Next magazine"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {magazines.length > 1 && (
          <div className="flex justify-center mt-4 md:mt-6 gap-2">
            {magazines.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-7 h-2.5 bg-green-600 rounded-full"
                    : "w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Styles */}
      <style jsx global>{`
        /* Hide arrows on very small screens */
        @media (max-width: 480px) {
          .absolute.left-0,
          .absolute.right-0 {
            display: none;
          }
        }

        /* Ensure smooth scrolling on touch devices */
        @media (hover: none) {
          .overflow-hidden {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
}