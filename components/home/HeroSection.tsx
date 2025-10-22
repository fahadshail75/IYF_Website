"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-0 bg-white">
      <motion.div
        className="relative w-full max-w-[1600px] mx-auto px-6 lg:px-10 pb-12 flex items-center justify-between flex-col lg:flex-row"
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* TEXT SECTION */}
        <motion.div
          className="z-20 flex-1 text-center lg:text-left sm:px-4"
          initial={{ opacity: 0, y: 25 }}
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="italic font-bold text-black text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl leading-tight tracking-[4px]">
            <span className="block text-black">They were</span>
            <span className="block text-[#22CA38] font-black text-4xl sm:text-5xl xl:text-[72px] 2xl:text-[88px]">
              YOUTHS
            </span>
            <span className="block text-black">
              who believed in their <br />
              Lord, and We increased them in guidance.
            </span>
          </h1>

          <motion.p
            className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#22CA38]"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          >
            Surah Al-Kahf (18:13)
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl xl:text-2xl italic font-semibold text-black mt-4"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.0, duration: 0.9, ease: "easeInOut" }}
          >
            Join the movement of dedicated youth working to uphold their deen.
          </motion.p>
        </motion.div>

        {/* IMAGE SECTION (static - animation removed) */}
        <div className="flex-1 relative z-10 mt-8 lg:mt-0">
          <div className="hidden lg:block">
            <Image
              width={1016}
              height={716}
              src="/assets/home/banner-home-image.png"
              alt="banner-image"
              className="w-full h-auto max-w-[950px] mx-auto lg:mx-0"
              priority
            />
          </div>

          <div className="lg:hidden">
            <Image
              width={1016}
              height={716}
              src="/assets/home/mb-home-banner-image.png"
              alt="banner-image"
              className="w-full h-auto max-w-[950px] mx-auto"
              priority
            />
          </div>
  </div>
      </motion.div>
    </section>
  );
}
