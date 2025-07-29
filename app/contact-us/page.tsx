import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  const sectionData = [
    "Builds good character and skills in students and youth",
    "Guides youth to learn and follow Quran and Sunnah",
    "Encourages students to fight against wrong systems and ideas",
    "Helps youth become leaders and solve problems in society",
    "Offers study groups, seminars, competitions, and social services",
    "Supports students with their needs and guides them in schools and colleges",
    "Shares the message of Islam with non-Muslims too",
  ];

  return (
    <main className="max-w-[1600px] bg-white w-full px-5 md:px-10 2xl:px-0 mx-auto">
      <section className="gradient-bg py-20 px-[100px] mb-[160px] rounded-md">
        <h1 className="text-white font-bold text-[40px] mb-16">About Us</h1>

        <div className="text-white font-medium text-2xl flex items-center gap-2">
          Home <ChevronRight /> About Us
        </div>
      </section>

      <section className="flex items-center gap-20 justify-between mb-[160px]">
        <div className="w-1/2 border-l-[5px] border-[#22CA38] p-10">
          <h2 className="text-2xl font-semibold text-black mb-6">
            What is IYF and Why Should You Join It?{" "}
          </h2>
          <p className="text-xl text-[#202020]">
            To remind Muslim youth about their purpose in life, many student
            groups were working in different parts of India.
            <br></br>
            <br></br>
            They all came together on 31 March 2019 and formed one
            national-level group called the{" "}
            <b>Islamic Youth Federation (IYF)</b>.
          </p>
        </div>

        <div className="w-1/2">
          <Image
            src={"/assets/about/about-1.png"}
            width={500}
            height={500}
            alt="About-1.png"
            className="w-full h-full"
          />
        </div>
      </section>

      <section className="flex items-center gap-20 justify-between mb-[160px]">
        <div className="w-1/2">
          <Image
            src={"/assets/about/about-2.png"}
            width={500}
            height={500}
            alt="About-2.png"
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2 ">
          <h2 className="text-2xl font-semibold text-black mb-10">
            What IYF does ?{" "}
          </h2>

          <ul>
            {sectionData.map((_, index) => {
              return (
                <li key={index} className="flex items-center gap-2 mb-5">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H20.25C20.4489 21 20.6397 20.921 20.7803 20.7803C20.921 20.6397 21 20.4489 21 20.25V3.75C21 3.55109 20.921 3.36032 20.7803 3.21967C20.6397 3.07902 20.4489 3 20.25 3H3.75ZM11.031 15.531L17.781 8.781L16.7205 7.719L10.5 13.9395L7.281 10.719L6.219 11.781L9.969 15.531C10.0387 15.6008 10.1214 15.6563 10.2125 15.6941C10.3037 15.7319 10.4013 15.7513 10.5 15.7513C10.5987 15.7513 10.6963 15.7319 10.7875 15.6941C10.8786 15.6563 10.9613 15.6008 11.031 15.531Z"
                        fill="#22CA38"
                      />
                    </svg>
                  </div>
                  <p>{_}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className=" mb-[160px]">
        <div className="flex items-center gap-20 justify-between">
          <div className="w-1/2  ">
            <h2 className="text-2xl font-semibold text-black mb-6">
              IF YOU WANT TO...{" "}
            </h2>
            <ul className="list-disc pl-5 space-y-5">
              <li className="text-xl">Make your life and family meaningful</li>
              <li className="text-xl">Bring goodness in your society</li>
              <li className="text-xl">Help people live by Quran and justice</li>
              <li className="text-xl">
                Free people from human control and serve only Allah
              </li>
              <li className="text-xl">
                See your campus and city full of faith and Islamic action
              </li>
              <li className="text-xl">
                Use your youth for a good and noble purpose
              </li>
            </ul>
          </div>

          <div className="w-1/2">
            <Image
              src={"/assets/about/about-3.png"}
              width={500}
              height={500}
              alt="About-3.png"
              className="w-full h-full"
            />
          </div>
        </div>

        <p className="text-2xl mt-10 text-center">
          Walk on the path of truth and make the Quran your guide. Use your
          youth to serve Allah and aim for Jannah (Heaven). Be a part of{" "}
          <br></br> IYF –{" "}
          <b>A movement for change, justice, and the pleasure of Allah.</b>
        </p>
      </section>

      <section className=" mb-[160px]">
        <h2 className="font-bold text-[32px] text-[#2F4858] text-center">
          Let’s Live a Purposeful Life
        </h2>
        <p className="my-20 text-center text-2xl">
          This world reminds us of our Creator. Allah gave us the Quran for
          guidance and made youth a power for change. But many have <br></br>{" "}
          forgotten their purpose. To succeed, we must return to Allah, follow
          His path, and use our youth for good.
        </p>

        <div className="space-y-10">
          <div className="p-10 border-t-[5px] border-[#22CA38] bg-white shadow rounded-md space-y-10">
            <h3 className="text-2xl font-semibold">
              Think About the Creator of This Universe
            </h3>

            <p className="text-xl font-normal text-[#000000]">
              Dear youth and friends, Have you ever thought about the amazing
              system of the universe?
              <br></br>
              <br></br>
              The sun and moon rise and set on time, day and night come
              regularly, rivers and oceans flow in their fixed paths, and
              everything in the sky moves without crashing. We, human beings,
              are also a special part of this creation.
              <br></br>
              <br></br>
              All these things clearly show that there is One Powerful Creator
              and Master behind everything. Have we ever stopped to think about
              Him? What does He expect from us? What is the real purpose of our
              life? Let’s reflect on this
            </p>
          </div>

          <div className="p-10 border-t-[5px] border-[#22CA38] bg-white shadow rounded-md space-y-10">
            <h3 className="text-2xl font-semibold">
              Quran – The Book of Guidance and Justice
            </h3>

            <p className="text-xl font-normal text-[#000000]">
              Dear friends, Allah created humans as the best of all creations
              and gave us everything we need to live in this world. But our
              greatest need is guidance — to live a meaningful and righteous
              life.
              <br></br>
              <br></br>
              Allah sent many prophets and books for this purpose, and the final
              and complete book is the Quran. When people followed the Quran,
              the world had peace, justice, and happiness.
              <br></br>
              <br></br>
              But now, people have turned away from it, and we see war,
              injustice, and suffering everywhere. The Quran is not just a book
              — it is our guide for life.
            </p>
          </div>

          <div className="p-10 border-t-[5px] border-[#22CA38] bg-white shadow rounded-md space-y-10">
            <h3 className="text-2xl font-semibold">
              Youth – The True Power of Change
            </h3>

            <p className="text-xl font-normal text-[#000000]">
              Dear youngsters, Throughout history, young people have been the
              real power behind big changes. They have helped remove injustice
              and bring goodness to the world.
              <br></br>
              <br></br>
              Youth have energy, strength, and the power to lead. If youth are
              strong and guided, the future of a nation is bright. In the time
              of Prophet Muhammad (SAW), Prophet Musa (AS), and the People of
              the Cave, it was the youth who played great roles.
            </p>
            <p className="text-xl font-normal text-[#000000]">
              But today, many of our young people are lost:
            </p>
            <ul className="list-disc pl-10 space-y-4 text-xl font-normal text-[#000000]">
              <li>They don’t know their life’s purpose</li>
              <li>They are far from Allah and the Prophet’s way</li>
              <li>They follow bad habits and indecent lifestyles</li>
              <li>They focus only on this world and forget the next life</li>
            </ul>
            <p className="text-xl font-normal text-[#000000]">
              If we don’t change now, we may lose both this life and the
              hereafter.
            </p>
          </div>

          <div className="p-10 border-t-[5px] border-[#22CA38] bg-white shadow rounded-md space-y-10">
            <h3 className="text-2xl font-semibold">
              Why We Need to Return to Our Purpose
            </h3>

            <p className="text-xl font-normal text-[#000000]">
              We must return to the path of the Prophet Muhammad (SAW) and
              follow the example of the noble companions. We should make our
              life purposeful, think about the hereafter, and reconnect with the
              message of the Quran. Only then can we be successful in this life
              and in the eternal life to come.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
