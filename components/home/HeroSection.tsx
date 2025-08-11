"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

export default function HeroSection() {
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const [isTypedDone, setIsTypedDone] = useState(false);

  // Detect large screens
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    if (isTypingStarted) {
      console.log("Typing started, image animation triggered!");
    }
  }, [isTypingStarted]);

  return (
    <section className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-20  xl:pb-[128px] overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-center lg:items-center">
        {/* Text */}
        <div className="relative z-10 flex-1 sm:text-center lg:text-left bg-gradient-to-r from-white via-white/80 to-transparent sm:p-6 lg:p-0">
          <h1 className="italic font-bold text-[#2F4858] text-3xl sm:text-4xl xl:text-5xl 2xl:text-[56px] mb-6 leading-tight tracking-[5px]">
            <div className="hidden sm:block">
              <ReactTyped
                strings={[
                  `They were<br/><span class="text-[#22CA38] font-black text-5xl sm:text-6xl xl:text-[90px] 2xl:text-[104px]">YOUTHS</span><br/>who believed in their<br/>lord, and we increased them in guidance.`,
                ]}
                typeSpeed={40}
                showCursor={false}
                loop={false}
                startDelay={300}
                onBegin={() => setIsTypingStarted(true)}
                onComplete={() => setIsTypedDone(true)}
              />
            </div>

            <div className=" sm:hidden">
              <ReactTyped
                strings={[
                  `They were <span class="text-[#22CA38] font-black text-5xl sm:text-6xl xl:text-[90px] 2xl:text-[104px]">YOUTHS</span> who believed in their<br/>lord, and we increased them in guidance.`,
                ]}
                typeSpeed={40}
                showCursor={false}
                loop={false}
                startDelay={300}
                onBegin={() => setIsTypingStarted(true)}
                onComplete={() => setIsTypedDone(true)}
              />
            </div>
          </h1>

          {isTypedDone && (
            <motion.p
              className="text-lg sm:text-xl xl:text-2xl italic font-semibold text-[#2F4858] mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join the movement of dedicated youth working to uphold their deen.
            </motion.p>
          )}
        </div>

        {/* Image */}
        <motion.div
          className="flex-1 lg:-ml-20 relative z-0"
          initial={
            isDesktop
              ? { x: 200, opacity: 0 } // Desktop → from left
              : { y: 200, opacity: 0 } // Mobile → from bottom
          }
          animate={
            isTypingStarted
              ? { x: 0, y: 0, opacity: 1 }
              : isDesktop
              ? { x: 200, opacity: 0 }
              : { y: 200, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hidden lg:block">
            <Image
              width={1016}
              height={716}
              src="/assets/home/banner-home-image.png"
              alt="banner-image"
              className="w-full h-auto max-w-[950px] mx-auto lg:mx-0"
            />
          </div>

          <div className="mt-10 lg:hidden">
            <Image
              width={1016}
              height={716}
              src="/assets/home/mb-home-banner-image.png"
              alt="banner-image"
              className="w-full h-auto max-w-[950px] mx-auto lg:mx-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
