"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PurposefulLifeSection: React.FC = () => {
  return (
    <section className="mb-10 xl:mb-20 2xl:mb-[160px]">
      <motion.h2
        className="font-bold text-2xl md:text-[32px] text-[#2F4858] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Let’s Live a Purposeful Life
      </motion.h2>

      <motion.p
        className="my-6 md:my-10 xl:my-20 text-center text-lg lg:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        This world reminds us of our Creator. Allah gave us the Quran for
        guidance and made youth a power for change. But many have <br />
        forgotten their purpose. To succeed, we must return to Allah, follow
        His path, and use our youth for good.
      </motion.p>

      <motion.div
        className="grid lg:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {[{
          title: "Think About the Creator of This Universe",
          text: `Dear youth and friends, Have you ever thought about the true role
          of young people in shaping the world? Throughout history, it was
          the youth who brought truth, stood against injustice, and led with
          courage. From the time of the Prophets to today, their energy and
          faith made a difference. But now, many young hearts are confused,
          lost in distractions and far from purpose. Have we paused to ask
          ourselves: Where are we heading? What does our Creator expect from
          us? Let’s think deeply and reconnect with our true path before
          it’s too late.`,
        }, {
          title: "Quran – The Book of Guidance and Justice",
          text: `Dear friends, Allah made us the best of His creations and provided
          everything we need to live. But above all, we need guidance to
          live a good and meaningful life. For this, Allah sent many
          prophets and revealed books, and the final and complete guidance
          is the Quran. When people lived by the Quran, there was peace,
          justice, and harmony. But today, many have turned away from it,
          and the world is filled with problems and pain. The Quran is not
          just a book—it is the light and guidance we need for true success.`,
        }, {
          title: "Youth – The True Power of Change",
          text: `Dear youngsters, youth have always been a powerful force for
          change. In the time of Prophet Muhammad (SAW), Prophet Musa (AS),
          and the People of the Cave, it was young people who stood firm for
          truth. Youth are full of strength and energy—but today, many are
          lost. They forget their purpose, stay away from Allah and the
          Prophet’s path, fall into bad habits, and focus only on this
          world. If we continue like this, we risk losing both this life and
          the hereafter. It's time to reflect and return to the right path.`,
        }, {
          title: "Why We Need to Return to Our Purpose",
          text: `Dear youth, we must return to the path of Prophet Muhammad (SAW)
          and follow the footsteps of his noble companions. They lived with
          purpose, thinking beyond this world and focusing on the hereafter.
          Today, we must reconnect with the Quran and its message, which
          gives us true direction. If we live by these teachings, we can
          find peace, strength, and success—not just in this short worldly
          life, but in the eternal life to come. Now is the time to reflect,
          correct ourselves, and walk the path that leads to real success.`,
        }].map(({ title, text }, i) => (
          <motion.div
            key={i}
            className="p-5 md:p-10 border-t-[5px] border-[#22CA38] bg-white shadow rounded-md space-y-4 md:space-y-10"
            variants={itemVariants}
          >
            <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>
            <p className="text-sm md:text-lg lg:text-xl leading-relaxed font-normal text-[#000000]">
              {text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PurposefulLifeSection;
