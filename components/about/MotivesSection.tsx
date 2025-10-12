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
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
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
      duration: 0.6,
      ease: "easeOut",
    }
  },
};

type Props = {
  sectionData: string[];
};

const MotivesSection = ({ sectionData }: Props) => {
  return (
    <section className="mb-14 xl:mb-20 2xl:mb-28">
      <motion.div
        className="hidden lg:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="float-left md:w-[500px] lg:w-[500px] xl:w-[600px] xl:h-[550px] 2xl:w-[800px] 2x:h-[600px] mr-8 2xl:mr-12 mb-6 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#22CA38]/10 group hover:ring-[#22CA38]/20 transition-all duration-500"
          style={{
            shapeOutside: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            overflow: "hidden",
            shapeMargin: "15px",
          }}
          variants={imageVariants}
        >
          <Image
            src={"/assets/about/about-2.png"}
            width={800}
            height={600}
            alt="IYF Motives and Activities"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </motion.div>

      <motion.h2
        className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Motives and Activities of IYF
      </motion.h2>

      <motion.div
        className="lg:hidden mb-6 rounded-2xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={"/assets/about/about-2.png"}
          width={600}
          height={400}
          alt="IYF Motives and Activities"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div>
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Motives and Activities of IYF
        </motion.h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-4 md:space-y-5"
        >
          {sectionData.map((item, index) => (
            <motion.li
              key={index}
              className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50/50 hover:to-transparent transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 mt-1">
                <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-[#22CA38] to-emerald-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 md:w-4 md:h-4"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 flex-1 pt-0.5 text-justify">
                {item}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default MotivesSection;
