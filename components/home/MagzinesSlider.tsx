"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const magazines = [
  {
    title: "The Milestone",
    description: `The Milestone" is a high-quality English magazine published by IYF (Islamic Youth Federation), aiming to provide intellectual, spiritual, and moral guidance to the youth. The magazine seeks to present Islamic teachings in a modern and practical context, helping young people understand their true purpose in life. It features thought-provoking articles on social reform, character building, and awakening of the Muslim Ummah.

Verses from the Qur'an, Hadith, and inspiring historical stories are beautifully woven with contemporary issues to motivate readers towards positive action. The contributions of young writers and scholars are especially encouraged, giving them a platform to express their ideas and talents.

The language and style of "The Milestone" are simple yet impactful, leaving a lasting impression on the hearts and minds of its audience. It also includes sections on literature, poetry, and introductions to influential personalities, further enriching its intellectual and literary value. Overall, this magazine serves as a guiding light for the youth, inspiring them with hope, confidence, and a sense of responsibility towards society and the Ummah.`,
    image: "/assets/home/milestone.png",
  },
  {
    title: "نقوشِ راہ",
    description: `"نقوشِ راہ" آئی۔وائی۔ایف کی جانب سے شائع ہونے والی ایک معیاری اردو میگزین ہے، جس کا بنیادی مقصد نوجوانوں کی فکری، روحانی اور اخلاقی تربیت کرنا ہے۔ یہ میگزین اسلامی تعلیمات کو عصرِ حاضر کے تقاضوں کے مطابق پیش کرتی ہے اور نوجوانوں کو اپنے مقصدِ حیات سے روشناس کراتی ہے۔ اس میں معاشرتی اصلاح، کردار سازی، اور امت مسلمہ کی بیداری جیسے اہم موضوعات پر مضامین شامل کیے جاتے ہیں۔ "نقوشِ راہ" میں قرآنی آیات، احادیثِ مبارکہ، تاریخی واقعات، اور ادبی تحریروں کو موجودہ حالات سے جوڑ کر اس انداز میں پیش کیا جاتا ہے کہ پڑھنے والا نہ صرف متاثر ہوتا ہے بلکہ عمل پر بھی آمادہ ہوتا ہے۔ نوجوان لکھاریوں اور اسکالرز کی تخلیقات کو خصوصی طور پر شامل کر کے انہیں اظہارِ خیال کا موقع فراہم کیا جاتا ہے۔ اس میگزین کا انداز سادہ، رواں اور مؤثر ہے، جو دل میں اتر جاتا ہے اور سوچنے پر مجبور کرتا ہے۔ اردو ادب، شاعری، اور تحریکی شخصیات کے تعارف سے اس کے علمی و ادبی پہلو مزید مضبوط ہو جاتے ہیں۔ مجموعی طور پر یہ میگزین نوجوانوں کے لیے ایک فکری مشعلِ راہ، حوصلے کا پیغام، اور عملی زندگی میں رہنمائی کا اہم ذریعہ ہے۔`,
    image: "/assets/home/nukush.png",
  },

  {
    title: "সত্যবাক",
    description: `"সত্যবাক" হলো ইসলামিক ইয়ুথ ফেডারেশন (IYF) কর্তৃক প্রকাশিত একটি চিন্তাশীল ও অনুপ্রেরণাদায়ক বাংলা ম্যাগাজিন, যা তরুণ সমাজকে সত্য, নৈতিকতা এবং সামাজিক দায়িত্বের পথে পরিচালিত করতে নিবেদিত। এই ম্যাগাজিনের মূল উদ্দেশ্য হলো ইসলামের শিক্ষা ও চিরন্তন মূল্যবোধকে আধুনিক সময়ের প্রেক্ষাপটে বাংলাভাষী তরুণদের কাছে সহজ ও প্রাসঙ্গিকভাবে উপস্থাপন করা। এতে চরিত্র গঠন, সামাজিক সচেতনতা এবং আত্মিক উন্নতির উপর গুরুত্ব দিয়ে লেখা বিভিন্ন প্রবন্ধ অন্তর্ভুক্ত থাকে, যা তরুণ পাঠকদের নিজেদের ও সমাজের প্রতি দায়িত্ববোধ জাগিয়ে তোলে। "সত্যবাক" কোরআনের আয়াত, হাদিস এবং ইতিহাসের শিক্ষা সমকালীন চ্যালেঞ্জের সাথে সুন্দরভাবে মিলিয়ে উপস্থাপন করে, যা পাঠকদের সঠিক ও অর্থপূর্ণ জীবনের পথে অনুপ্রাণিত করে। এই ম্যাগাজিনে তরুণ লেখক ও চিন্তাবিদদের জন্য একটি বিশেষ প্ল্যাটফর্ম রয়েছে, যেখানে তারা তাদের সৃজনশীল ভাবনা ও অনুভূতি প্রকাশের সুযোগ পায়। এর ভাষা সহজ হলেও গভীরভাবে হৃদয় স্পর্শ করে এবং ইতিবাচক পরিবর্তনের জন্য মানসিকভাবে উদ্বুদ্ধ করে। প্রবন্ধ ছাড়াও, "সত্যবাক"-এ কবিতা, সাহিত্যিক লেখা এবং প্রভাবশালী ব্যক্তিত্বদের পরিচয়ও থাকে, যা এর বৌদ্ধিক ও সাংস্কৃতিক গুরুত্বকে আরও সমৃদ্ধ করে। সামগ্রিকভাবে, এই ম্যাগাজিনটি তরুণদের জন্য সত্যের আলো, প্রেরণার উৎস এবং আত্মবিশ্বাস ও মানবিক মূল্যবোধে ভরপুর জীবনের দিশারী হিসেবে কাজ করে।`,
    image: "/assets/home/bengal.png",
  },
];

export default function MagazineSwiper() {
    return (
      <section className=" bg-white relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Recent Magazines
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
            <SwiperSlide key={index} className="transition-all ease-in-out delay-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
                {/* Text Section */}
                <div className="space-y-4">
                  <h3 className={`text-2xl font-semibold ${index ===1 ? "text-right" :"text-left" }`}>{magazine.title}</h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {magazine.description}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    Take Subscription
                  </button>
                </div>
  
                {/* Image + Arrows */}
                <div className="flex flex-col items-center gap-4 relative h-full">
                  <Image
                    src={magazine.image}
                    alt={magazine.title}
                    width={300}
                    height={400}
                    className=""
                  />
  
                  {/* Optional: Arrows below image */}
                  {/* <div className="flex justify-end gap-4 w-full pr-4 mt-4">
                    <div className="swiper-button-prev w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                      <ChevronLeft size={20} />
                    </div>
                    <div className="swiper-button-next w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                      <ChevronRight size={20} />
                    </div>
                  </div> */}
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
