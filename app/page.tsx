import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Books from "@/components/home/Books";
import CampaignsSection from "@/components/home/Campaign";
import EventosSection from "@/components/home/Events";
import RecentMagzines from "@/components/home/RecentMagzines";
import Image from "next/image";

export default function Home() {
  const campaigns = [
    {
      title: "HAI YA ALAL FALAH",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      date: "11 August 2023 - 20 August 2023",
      imageSrc: "/assets/home/event-image.png",
    },
    {
      title: "HAI YA ALAL FALAH",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      date: "11 August 2023 - 20 August 2023",
      imageSrc: "/assets/home/event-image.png",
    },
    {
      title: "HAI YA ALAL FALAH",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      date: "11 August 2023 - 20 August 2023",
      imageSrc: "/assets/home/event-image.png",
    },
  ];

  const eventosData = [
    {
      title: "All Maharashtra Quiz Competition",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
      imageSrc: "/assets/home/event-image.png",

      link: "/events/quiz1",
    },
    {
      title: "All Maharashtra Quiz Competition",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
      imageSrc: "/assets/home/event-image.png",

      link: "/events/quiz1",
    },
    {
      title: "All Maharashtra Quiz Competition",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
      imageSrc: "/assets/home/event-image.png",

      link: "/events/quiz1",
    },
  ];
  const books = [
    {
      title: "Mohsin e Insaniyat",
      imageSrc: "/assets/home/book-image.png",
    },
    {
      title: "Mohsin e Insaniyat",

      imageSrc: "/assets/home/book-image.png",
    },
    {
      title: "Mohsin e Insaniyat",

      imageSrc: "/assets/home/book-image.png",
    },
    {
      title: "Mohsin e Insaniyat",

      imageSrc: "/assets/home/book-image.png",
    },
  ];
  return (
    <>
      <Header />
      <section className="relative mb-10 md:mb-20 2xl:mb-[160px]">
        <div className="flex justify-center items-center w-full absolute top-20">
          <h1 className=" max-w-[920px] uppercase font-bold text-[144px] opacity-5 text-white text-center">
            Revolution With
          </h1>
        </div>

        <div className="flex justify-center items-center w-full absolute top-50">
          <Image
            src={"/assets/home/banner-title.png"}
            width={1000}
            height={189}
            className=" w-full"
            alt="banner-image"
          />
        </div>

        <Image
          src={"/assets/home/banner-image.png"}
          width={1820}
          height={720}
          className="object-cover h-screen w-full"
          alt="banner-image"
        />
      </section>

      <section className="max-w-[1600px] w-full px-5 md:px-10 2xl:px-0 mx-auto space-y-10 md:space-y-20 2xl:space-y-[160px] mb-10 md:mb-20 2xl:mb-[160px]">
        <CampaignsSection campaigns={campaigns} />

        <EventosSection eventos={eventosData} />

        <RecentMagzines />
        <Books data={books} />
      </section>

      <Footer/>
    </>
  );
}
