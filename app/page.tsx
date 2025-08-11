// import Footer from "@/components/common/Footer";
// import Header from "@/components/common/Header";
import Books from "@/components/home/Books";
import CampaignsSection from "@/components/home/Campaign";
import EventosSection from "@/components/home/Events";
import HeroSection from "@/components/home/HeroSection";
import MagzineSwiper from "@/components/home/MagzinesSlider";
// import RecentMagzines from "@/components/home/RecentMagzines";
import Image from "next/image";

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
      title: "Help desk at AMU",
      description: `IYF AMU Branch made arrangements for drinking water for XI/Diploma exam’s aspirants. A help desk was also set up to help the aspirants reach their exam centers.`,
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
      title: "The Isteqbal-e-Ramadan",
      description: `Welcoming Ramadan program was held on 23rd February in Hazaribagh, Jharkhand. It featured two speeches, and the children of Uqab presented a tarana.`,
      imageSrc: "/assets/home/activity-3.png",

      link: "#",
    },
  ];
  const books = [
    {
      title: "Iqamat e Din Islam ka Taqaza By Syed Hamid Ali",
      imageSrc: "/assets/home/Iqamate-Deen-Islam-ka-Fariza-1.jpg.webp",
      link: "https://iyfindia.org/wp-content/uploads/2021/06/%D8%A7%D9%82%D8%A7%D9%85%D8%AA-%D8%AF%DB%8C%D9%86-%D8%A7%D8%B3%D9%84%D8%A7%D9%85-%DA%A9%D8%A7-%D8%AA%D9%82%D8%A7%D8%B6%DB%81.pdf",
    },
    {
      title: "Durre Yateem Sallallahu Alehi Wasallm By Mahirul Qadri",
      imageSrc: "/assets/home/durre-yatim.webp",
      link: "https://iyfindia.org/wp-content/uploads/2019/10/Durre-Yateem-Sallallahu-Alehi-Wasallm-by-Mahirul-Qadri.pdf",
    },
    {
      title: "Al Nabi Al Khatam",

      imageSrc: "/assets/home/an-nabi.webp",
      link: "https://iyfindia.org/wp-content/uploads/2024/09/AN-NABI-AL-KHATAM-English.pdf",
    },
    {
      title: "Banao aur Bigaar By Syed Abul Aala Maududi",

      imageSrc: "/assets/home/banao-bigad.webp",
      link: "https://iyfindia.org/wp-content/uploads/2019/10/Banao-aur-Bigaar-iqbalkalmati.blogspot.com_.pdf",
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
      {/* <section className="max-w-[1600px] mx-auto items-center mt-20 mb-[200px] px-10 relative min-h-[716px] h-full">
        <div className="flex z-10 relative items-center py-[74px] w-full h-full">
          <div className="max-w-[720px] h-full">
            <h1 className="md:text-5xl xl:text-[56px] text-[#2F4858] italic font-bold mb-10">
              They were
              <br></br>
              <span className="text-[#22CA38] font-black md:text-[90px] xl:text-[104px]">
                YOUTHS
              </span>
              <br></br>
              who believed in their <br></br> lord , and we increased them in
              guidance.
            </h1>
            <p className="md:text-xl xl:text-2xl italic font-semibold text-[#2F4858]">
              Join the movement of dedicated youth working to uphold their deen.
            </p>
          </div>
        </div>

        <div className="absolute top-0  right-10 bottom-0 xl:max-w-[950px] 2xl:max-w-[1075px] h-full  ">
          <Image
            src={"/assets/home/banner-home-image.png"}
            width={1076}
            height={716}
            className="h-full  w-full"
            alt="banner-image"
          />
        </div>
      </section> */}

      {/* <section className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-10 lg:py-20">
  <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
    
    <div className="relative z-10 flex-1 text-center lg:text-left bg-gradient-to-r from-white via-white/80 to-transparent lg:bg-none p-6 lg:p-0">
      <h1 className="italic font-bold text-[#2F4858] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-6 leading-[80px] tracking-wider">
        They were
        <br />
        <span className="text-[#22CA38] font-black text-5xl sm:text-6xl md:text-[96px] lg:text-[104px]">
          YOUTHS
        </span>
        <br />
        who believed in their <br /> lord, and we increased them in guidance.
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl italic font-semibold text-[#2F4858]">
        Join the movement of dedicated youth working to uphold their deen.
      </p>
    </div>

    <div className="flex-1 lg:-ml-20 relative z-0">
      <img
        src="/assets/home/banner-home-image.png"
        alt="banner-image"
        className="w-full h-auto max-w-[950px] mx-auto lg:mx-0"
      />
    </div>
  </div>
</section> */}

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
        <MagzineSwiper  magazines={magazines} />
        <CampaignsSection campaigns={campaigns} />

        <EventosSection eventos={eventosData} />

        {/* <RecentMagzines /> */}
        <Books data={books} />
      </section>
    </>
  );
}
