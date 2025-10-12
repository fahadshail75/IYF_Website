// import Footer from "@/components/common/Header";
// import Header from "@/components/common/Header";
import CampaignsSection from "@/components/home/Campaign";
import EventosSection from "@/components/home/Events";
import HeroSection from "@/components/home/HeroSection";
import MagzineSwiper from "@/components/home/MagzinesSlider";
// import RecentMagzines from "@/components/home/RecentMagzines";
import Image from "next/image";
import Link from "next/link";
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
    },
    {
      title: "State Conference - West Bengal ",
      description: `The IYF West Bengal State Conference, themed "Wa Rabbaka Fakabbir", is a grand gathering to inspire youth towards the greatness of their Creator. It aims to strengthen faith, revive spiritual consciousness, and motivate young minds to serve society with sincerity.`,
      href: "https://www.youtube.com/live/NchJLkdyxHY",
      date: "11 August 2025 - 20 August 2025",
      imageSrc: "/assets/home/conference-2.png",
    },
    // {
    //   title: "HAI YA ALAL FALAH",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    //   date: "11 August 2023 - 20 August 2023",
    //   imageSrc: "/assets/home/event-image.png",
    // },
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

  return (
    <>
      <HeroSection />

      {/* balck section */}

      <section className="bg-[#000] w-full    ">
        <div className="max-w-[1600px] w-full px-5 md:px-10 2xl:px-6 py-10 md:py-20 mx-auto  flex flex-col md:flex-row gap-10 lg:gap-20 2xl:gap-[104px] items-center justify-center">
          <div className="md:w-1/3">
            <Image
              src={"/assets/home/event-image-black.png"}
              width={544}
              height={544}
              className="object-contain w-full h-full"
              alt="event-image"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="font-bold text-3xl md:text-[40px]/[72px] text-white">
              IYF is an <span className="text-[#22CA38]">national</span> level
              organization, working across India. It aims to guide students and{" "}
              <span className="text-[#22CA38]">youths</span> in the light of
              Quran and Sunnah.
            </h1>

            <button className="primary-button">Know more about us</button>
          </div>
        </div>
      </section>


      <section className="max-w-[1600px] bg-white w-full px-5 md:px-10 2xl:px-6 mx-auto space-y-10 md:space-y-20 2xl:space-y-[160px] my-10 md:my-20 2xl:my-[160px] ">
        <MagzineSwiper magazines={magazines} />
        <CampaignsSection campaigns={campaigns} />
        <EventosSection eventos={eventosData} />
      </section>
      {/* IYF Islamic Book Library Section (moved after events) */}
      <section className="w-full bg-gradient-to-br from-[#f6fff8] to-white py-14 md:py-20 border-t border-gray-100 mt-10">
        <div className="max-w-2xl mx-auto px-5 md:px-0 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#22CA38]/10 px-4 py-2 text-base font-semibold uppercase tracking-wider text-[#22CA38] mb-5">
            {/* Mosque Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#22CA38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0c-2.5 1.5-7 5.5-7 10.5A1.5 1.5 0 0 0 6.5 18h11A1.5 1.5 0 0 0 19 16.5C19 11.5 14.5 7.5 12 6Zm0 0c2.5 1.5 7 5.5 7 10.5"/><path stroke="#22CA38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 21h6"/></svg>
            IYF Islamic Book Library
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B2B34] mb-4">
            Discover, Read, and Grow
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-7 max-w-lg">
            Dive into a curated collection of authentic Islamic books in Urdu, English, and more. Whether you’re a student, seeker, or lifelong learner, our library is open to all—completely free and accessible online.
          </p>
          <Link
            href="/learn-islam/books"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#22CA38] text-white font-semibold rounded-xl shadow-lg hover:bg-[#1db832] transition-all duration-300 text-lg"
          >
            Explore Books
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-4-4 4 4-4 4"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
