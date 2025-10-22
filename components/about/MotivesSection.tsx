"use client";
import React from "react";
import Image from "next/image"; // assuming Next.js Image component, adjust if not using Next.js
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      staggerChildren: 0,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    }
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
};

type Props = {
  sectionData: string[];
};

const MotivesSection = ({ sectionData }: Props) => {
  return (
    <section className="mb-10 xl:mb-16 2xl:mb-24 px-2 sm:px-4 md:px-8">
      <motion.h2
        className="text-lg sm:text-xl font-bold text-gray-900 mb-4 lg:hidden text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        Motives and Activities of IYF
      </motion.h2>

      <motion.div
        className="lg:hidden mb-4 rounded-xl overflow-hidden shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={"/assets/about/about-2.png"}
          width={400}
          height={260}
          alt="IYF Motives and Activities"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-start gap-6 md:gap-10 lg:gap-14 justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div
          className="hidden lg:block lg:w-1/2 lg:sticky lg:top-24"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="rounded-xl overflow-hidden shadow-lg ring-2 ring-[#22CA38]/10 group hover:ring-[#22CA38]/20 transition-all duration-500">
            <Image
              src={"/assets/about/about-2.png"}
              width={600}
              height={400}
              alt="IYF Motives and Activities"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        <div className="lg:w-1/2">
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 hidden lg:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Motives and Activities of IYF
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5"
          >
            {sectionData.map((item, index) => (
              <motion.li
                key={index}
                className="group flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg border-l-4 border-[#22CA38] bg-gradient-to-r from-green-50/50 to-transparent hover:from-green-50/80 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mt-0.5 sm:mt-1">
                  <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-[#22CA38] to-emerald-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-normal md:leading-relaxed text-gray-700 flex-1 pt-0.5 font-normal">
                  {item}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default MotivesSection;
