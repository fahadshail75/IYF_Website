// import Footer from "@/components/common/Footer";
// import Header from "@/components/common/Header";
import Books from "@/components/home/Books";
import CampaignsSection from "@/components/home/Campaign";
import EventosSection from "@/components/home/Events";
import MagzineSwiper from "@/components/home/MagzinesSlider";
// import RecentMagzines from "@/components/home/RecentMagzines";
import Image from "next/image";

export default function Home() {
  const campaigns = [
    {
      title: "State Conference - Maharashtra",
      description:`The IYF Maharashtra State Conference, themed "Wa Rabbaka Fakabbir", is a grand gathering to inspire youth towards the greatness of their Creator. It aims to strengthen faith, revive spiritual consciousness, and motivate young minds to serve society with sincerity.`,
      href:"#",
      date:"11 August 2025 - 20 August 2025",
      imageSrc: "/assets/home/conference-1.png",
    },
    {
      title: "State Conference - West Bengal ",
      description:`The IYF West Bengal State Conference, themed "Wa Rabbaka Fakabbir", is a grand gathering to inspire youth towards the greatness of their Creator. It aims to strengthen faith, revive spiritual consciousness, and motivate young minds to serve society with sincerity.`,
      href:"#",
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
      description:`IYF AMU Branch made arrangements for drinking water for XI/Diploma exam’s aspirants. A help desk was also set up to help the aspirants reach their exam centers.`,
      imageSrc: "/assets/home/activity-1.png",
      link: "#",
    },
    {
      title: "Media Workshop",
      description:`A two-day Media Correspondents' Workshop was organized by the Islamic Youth Federation on 28–29 June in New Delhi, focusing on ground reporting and field correspondence.`,
      imageSrc: "/assets/home/activity-2.png",
      link: "#",
    },
    {
      title: "The Isteqbal-e-Ramadan",
      description:`Welcoming Ramadan program was held on 23rd February in Hazaribagh, Jharkhand. It featured two speeches, and the children of Uqab presented a tarana.`,
      imageSrc: "/assets/home/activity-3.png",

      link: "#",
    },
  ];
  const books = [
    {
      title: "Iqamat e Din Islam ka Taqaza By Syed Hamid Ali",
      imageSrc: "/assets/home/Iqamate-Deen-Islam-ka-Fariza-1.jpg.webp",
      link:"https://iyfindia.org/wp-content/uploads/2021/06/%D8%A7%D9%82%D8%A7%D9%85%D8%AA-%D8%AF%DB%8C%D9%86-%D8%A7%D8%B3%D9%84%D8%A7%D9%85-%DA%A9%D8%A7-%D8%AA%D9%82%D8%A7%D8%B6%DB%81.pdf"
    },
    {
      title: "Durre Yateem Sallallahu Alehi Wasallm By Mahirul Qadri",
      imageSrc: "/assets/home/durre-yatim.webp",
      link:"https://iyfindia.org/wp-content/uploads/2019/10/Durre-Yateem-Sallallahu-Alehi-Wasallm-by-Mahirul-Qadri.pdf"
    },
    {
      title: "Al Nabi Al Khatam",

      imageSrc: "/assets/home/an-nabi.webp",
      link:"https://iyfindia.org/wp-content/uploads/2024/09/AN-NABI-AL-KHATAM-English.pdf"
    },
    {
      title: "Banao aur Bigaar By Syed Abul Aala Maududi",

      imageSrc: "/assets/home/banao-bigad.webp",
      link:"https://iyfindia.org/wp-content/uploads/2019/10/Banao-aur-Bigaar-iqbalkalmati.blogspot.com_.pdf"
    },
  ];
  return (
    <>
      <section className="">
        

        <Image
          src={"/assets/home/home-banner-img.png"}
          width={1820}
          height={720}
          className="  w-full"
          alt="banner-image"
        />
      </section>

      {/* balck section */}

      <section className="bg-[#000] w-full    ">
        <div className="max-w-[1600px] w-full px-5 md:px-10 2xl:px-0 py-10 md:py-20 mx-auto  flex flex-col md:flex-row gap-10 lg:gap-20 2xl:gap-[104px] items-center">
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
            IYF is an <span className="text-[#22CA38]">national</span> level organization, working across India. It aims to guide students and <span className="text-[#22CA38]">youths</span> in the light of Quran and Sunnah.
            </h1>

            <button className="primary-button">
          Know more about us
        </button>
          </div>

        </div>
      </section>

      <section className="max-w-[1600px] bg-white w-full px-5 md:px-10 2xl:px-0 mx-auto space-y-10 md:space-y-20 2xl:space-y-[160px] my-10 md:my-20 2xl:my-[160px] ">
        <MagzineSwiper/>
        <CampaignsSection campaigns={campaigns} />

        <EventosSection eventos={eventosData} />

        {/* <RecentMagzines /> */}
        <Books data={books} />
      </section>

    </>
  );
}
