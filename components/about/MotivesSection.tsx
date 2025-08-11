"use client";
import React from "react";
import Image from "next/image"; // assuming Next.js Image component, adjust if not using Next.js
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
    // staggerChildren: 0.15,  // Correct placement here
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type Props = {
  sectionData: string[];
};

const MotivesSection = ({ sectionData }: Props) => {
  return (
    <section className="mb-14 xl:mb-20 2xl:mb-[160px]">
      <motion.div
        className="hidden lg:block"
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="float-left md:w-[500px] lg:w-[500px] xl:w-[600px] xl:h-[550px] 2xl:w-[800px] 2x:h-[600px] mr-6 2xl:mr-10 mb-3"
          style={{
            shapeOutside: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            overflow: "hidden",
            shapeMargin: "10px",
          }}
          variants={itemVariants}
        >
          <Image
            src={"/assets/about/about-2.png"}
            width={500}
            height={500}
            alt="About-2.png"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

      <motion.h2
        className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Motives and Activities of IYF
      </motion.h2>

      <motion.div
        className="lg:hidden mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <Image
          src={"/assets/about/about-2.png"}
          width={500}
          height={500}
          alt="About-2.png"
          className="w-full h-full"
        />
      </motion.div>

      <div>
        <motion.h2
          className="text-lg md:text-2xl font-semibold text-black mb-5 md:mb-10 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          //   viewport={{ once: true }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Motives and Activities of IYF
        </motion.h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          //   viewport={{ once: true, amount: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className=""
        >
          {sectionData.map((item, index) => (
            <motion.li
              key={index}
              className="flex gap-2 mb-3 md:mb-3.5"
              variants={itemVariants}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 mt-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H20.25C20.4489 21 20.6397 20.921 20.7803 20.7803C20.921 20.6397 21 20.4489 21 20.25V3.75C21 3.55109 20.921 3.36032 20.7803 3.21967C20.6397 3.07902 20.4489 3 20.25 3H3.75ZM11.031 15.531L17.781 8.781L16.7205 7.719L10.5 13.9395L7.281 10.719L6.219 11.781L9.969 15.531C10.0387 15.6008 10.1214 15.6563 10.2125 15.6941C10.3037 15.7319 10.4013 15.7513 10.5 15.7513C10.5987 15.7513 10.6963 15.7319 10.7875 15.6941C10.8786 15.6563 10.9613 15.6008 11.031 15.531Z"
                    fill="#22CA38"
                  />
                </svg>
              </div>
              <p className="text-sm md:text-base xl:text-lg leading-relaxed text-[#202020] font-medium">
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
