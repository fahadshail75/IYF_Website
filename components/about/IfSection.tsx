"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      // staggerChildren can be added here if you want auto stagger
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
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
    <section className="mb-14 xl:mb-20 2xl:mb-[160px]">
      <motion.div
        className="flex flex-col lg:flex-row md:items-center gap-5 md:gap-20 justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="lg:w-1/2">
          <motion.h2
            className="text-lg md:text-2xl font-semibold text-black mb-3 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            IF ...
          </motion.h2>

          <div className="mb-5 lg:hidden">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src={"/assets/about/about-3.png"}
                width={500}
                height={500}
                alt="About-3.png"
                className="w-full h-full"
              />
            </motion.div>
          </div>

          <motion.ul
            className="list-disc pl-5 space-y-3 md:space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                className="text-sm md:text-lg lg:text-xl leading-relaxed"
                variants={itemVariants}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hidden lg:block lg:w-1/2"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={"/assets/about/about-3.png"}
            width={500}
            height={500}
            alt="About-3.png"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IfSection;
