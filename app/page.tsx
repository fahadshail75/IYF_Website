import CampaignsSection from "@/components/home/Campaign";
import EventosSection from "@/components/home/Events";
import HeroSection from "@/components/home/HeroSection";
import MagzineSwiper from "@/components/home/MagzinesSlider";
import OurInitiatives from "@/components/home/OurInitiatives";
import LibraryCTA from "@/components/home/LibraryCTA";
import BannerPopup from "@/components/common/BannerPopup";
import Image from "next/image";
import type { Metadata } from "next";

// SEO metadata for homepage
export const metadata: Metadata = {
  title: "Home | Islamic Youth Federation of India",
  description: "Islamic Youth Federation of India (IYF) is dedicated to empowering Muslim youth through Islamic education, conferences, workshops, and community activities. Join our mission to establish Deen and build character.",
  openGraph: {
    title: "Islamic Youth Federation of India | Empowering Muslim Youth",
    description: "Join IYF India in empowering Muslim youth through Islamic education, state conferences, workshops, and community service.",
    images: ['/assets/home/banner-home-image.png'],
  },
  alternates: {
    canonical: 'https://iyfindia.org',
  },
};

export default function Home() {
  const campaigns = [
    {
      title: "State Conference - Maharashtra",
      description: `The IYF Maharashtra State Conference, themed "Wa Rabbaka Fakabbir", is a grand gathering to inspire youth towards the greatness of their Creator. It aims to strengthen faith, revive spiritual consciousness, and motivate young minds to serve society with sincerity.`,
      href: "https://www.instagram.com/reel/DFGK3vdBlHw/",
      date: "11 August 2025 - 20 August 2025",
      imageSrc: "/assets/home/conference-1.png",
      imageAlt: "State Conference - Maharashtra",
    },
    {
      title: "State Conference - West Bengal ",
      description: `The IYF West Bengal State Conference, themed "Wa Rabbaka Fakabbir", is a grand gathering to inspire youth towards the greatness of their Creator. It aims to strengthen faith, revive spiritual consciousness, and motivate young minds to serve society with sincerity.`,
      href: "https://www.youtube.com/live/NchJLkdyxHY",
      date: "11 August 2025 - 20 August 2025",
      imageSrc: "/assets/home/conference-2.png",
      imageAlt: "State Conference - West Bengal",
    },
  ];

  const eventosData = [
    {
      title: "Addressing Contemporary Issues",
      description: `A program titled "Legal Lens" was held today at Mohona Lodge, Basudebpur, featuring a discussion on contemporary issues and the role of lawyers in addressing them effectively.`,
      imageSrc: "/assets/home/activity-1.png",
      link: "#",
    },
    {
      title: "Media Workshop",
      description: `A two-day Media Correspondents' Workshop was organized by the Islamic Youth Federation on 28–29 June in New Delhi, focusing on ground reporting and field correspondence.`,
      imageSrc: "/assets/home/activity-2.png",
      link: "#",
    },
    {
      title: "Book Presented at SPP University",
      description: `IYF Mumbai visited Savitribai Phule Pune University, meeting Dr. Parag Kalkar to discuss the “Rehmatullil Aalameen” campaign and present the book Mohammad (PBUH) – Benefactor to Humanity.`,
      imageSrc: "/assets/home/activity-3.png",
      link: "#",
    },
  ];

  const magazines = [
    {
      title: "The Milestone",
      description: `The Milestone is an Islamic magazine focusing on the current problems of the Muslim Ummah and the youth. It works in inculcating the Islamic spirit in the youth and helps them in getting acquainted with the current happenings in India and around the world.`,
      image: "/assets/home/milestone.png",
    },
    {
      title: "نقوشِ راہ",
      description: `نقوشِ راہ" آئی۔وائی۔ایف (اسلامک یوتھ فیڈریشن) کی جانب سے شائع ہونے والی ایک معیاری اور با مقصد اردو میگزین ہے، اس میگزین کے ذریعے نا صرف نوجوانوں کی فکری، روحانی اور اخلاقی تربیت کرنا مقصود ہے، بلکہ یہ اسلامی تعلیمات کے ساتھ ساتھ عصرِ حاضر کے تقاضوں سے بھی مزیّن ہے۔ اس کے جزئیات میں معاشرتی اصلاح، کردار سازی، اور امت مسلمہ کی بیداری جیسے اہم موضوعات شامل ہیں۔ مجموعی طور پر یہ میگزین نوجوانوں کے لیے ایک فکری مشعلِ راہ، حوصلے کا پیغام، اور تحریکی زندگی میں رہنمائی کا اہم ذریعہ ہے`,
      image: "/assets/home/nukush.png",
    },
    {
      title: "সত্যবাক",
      description: `সত্যবাক ইসলামিক ইয়ুথ ফেডারেশন (IYF) কর্তৃক প্রকাশিত দ্বিমাসিক গবেষণামূলক পত্রিকা, যা তরুণ সমাজে ইসলামী চেতনা, নৈতিক মূল্যবোধ ও মননশীলতা জাগ্রত করতে কাজ করে।

কুরআনের নির্দেশ—“হে ইমানদারগণ, আল্লাহকে ভয় করো এবং সত্য কথা বলো” এবং হাদীসের ঘোষণা—“জালেম শাসকের সামনে সত্য কথা বলা উত্তম জিহাদ”—একে পথনির্দেশ হিসেবে গ্রহণ করে সত্যবাক সত্য ও ন্যায়ের পক্ষে যুক্তিনির্ভর ও চিন্তাজাগানিয়া লেখা প্রকাশ করে।`,
      image: "/assets/home/bengal.png",
    },
  ];

  return (
    <main className="flex flex-col w-full bg-white">
      <BannerPopup />

      <HeroSection />

      {/* balck section */}

      <section className="bg-[#000] w-full">
        <div className="max-w-[1600px] w-full px-5 md:px-10 2xl:px-6 py-12 md:py-20 mx-auto flex flex-col md:flex-row gap-8 lg:gap-20 2xl:gap-[104px] items-center justify-center">
          <div className="md:w-1/3">
            <Image
              src={"/assets/home/event-image-black.png"}
              width={544}
              height={544}
              className="object-contain w-full h-full"
              alt="event-image"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-2xl md:text-[40px]/[72px] text-white mb-6 md:mb-0">
              IYF is a <span className="text-[#22CA38]">national</span> level
              organization, working across India. It aims to guide students and{" "}
              <span className="text-[#22CA38]">youth</span> in the light of
              Qur&apos;an and Sunnah.
            </h1>

            <button className="primary-button">Know more about us</button>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1600px] mx-auto px-5 md:px-10 2xl:px-6 py-12 lg:py-20 space-y-16 lg:space-y-20">
        <MagzineSwiper magazines={magazines} />
        <CampaignsSection campaigns={campaigns} />
        <EventosSection eventos={eventosData} />
      </section>

      <OurInitiatives />

      <LibraryCTA />
    </main>
  );
}
