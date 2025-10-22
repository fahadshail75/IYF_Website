"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
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

const IfSection = () => {
  const listItems = [
    "You wish to make yourself and your family purposeful,",
    "You wish to convert your society into the best and exemplary society,",
    "You wish that people take Quran as their sole guide,",
    "You wish to eliminate oppression and anarchy and establish justice and peace,",
    "You wish to liberate the humans from human dominance and bring the humanity under the rule of Allah,",
    "You wish your school, college, campus, hostel, streets and cities to live belief (iman) and Islam in vision, mission and action, And above all, you wish to put your precious youth in service (obedience) to Allah...",
  ];

  return (
    <section className="mb-10 xl:mb-16 2xl:mb-24 px-2 sm:px-4 md:px-8">
      <motion.div
        className="flex flex-col lg:flex-row items-start gap-6 md:gap-10 lg:gap-14 justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="lg:w-1/2">
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-[#22CA38]">IF</span> ...
          </motion.h2>

          <div className="mb-4 lg:hidden">
            <motion.div
              className="rounded-xl overflow-hidden shadow-md ring-2 ring-[#22CA38]/10"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={"/assets/about/about-3.png"}
                width={400}
                height={260}
                alt="IYF Vision"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.ul
            className="space-y-2 md:space-y-3 lg:space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-gradient-to-r from-green-50/30 to-transparent hover:from-green-50 hover:to-transparent transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-br from-[#22CA38] to-emerald-500 shadow-md group-hover:scale-125 transition-transform duration-300" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-normal md:leading-relaxed text-gray-700 flex-1 text-justify">
                  {item}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hidden lg:block lg:w-1/2 lg:sticky lg:top-24"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-xl overflow-hidden shadow-lg ring-2 ring-[#22CA38]/10 group hover:ring-[#22CA38]/20 transition-all duration-500">
            <Image
              src={"/assets/about/about-3.png"}
              width={600}
              height={400}
              alt="IYF Vision"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IfSection;
