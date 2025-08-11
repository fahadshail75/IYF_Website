"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image"; // or your Image component

const containerVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BackgroundSection() {
  return (
    <section className="mb-14 xl:mb-20 2xl:mb-[160px]">
      {/* Floated image container on the right */}
      <motion.div
        className="hidden md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="float-right md:w-[450px] lg:w-[500px] xl:w-[600px] xl:h-[550px] 2xl:w-[800px] 2x:h-[600px] ml-6"
          style={{
            shapeOutside: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            overflow: "hidden",
            shapeMargin: "10px",
          }}
          variants={itemVariants}
        >
          <Image
            src={"/assets/about/about-1.png"}
            width={300}
            height={300}
            alt="About-1.png"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.h2
        className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 md:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        The Background of Establishment of IYF
      </motion.h2>

      <motion.div
        className="md:hidden mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <Image
          src={"/assets/about/about-1.png"}
          width={300}
          height={300}
          alt="About-1.png"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="md:border-l-[5px] border-[#22CA38] py-3 pl-0 md:pl-5 lg:py-10 lg:pl-10 text-[#202020]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 hidden md:block">
          The Background of Establishment of IYF
        </h2>
        <p className="text-sm md:text-lg lg:text-xl leading-relaxed">
          To recall the Muslim youth about this forgotten message and to
          reconnect them with their purpose of life, various student
          organizations had been working in different states. In order to create
          an interlinking between them a joint platform was founded the name of{" "}
          <span className="font-bold">
            Federation of Islamic Youth Organizations (FIYO)
          </span>{" "}
          on <span className="font-bold">11 January 2009</span>.
          <br />
          <br />
          Soon, different groups of active students and young people took over
          its membership. Since its inception, FIYO and its member organizations
          have been striving to nurture high character and capabilities in
          youngsters and students, to inculcate an Islamic attitude & mind in
          them and to instil a passion of sacrifice for the renaissance of
          Islam. To accomplish it, various activities were carried out at
          different levels. Moreover, to revitalize the Muslim community (Ummat
          e Muslima) seminars, conferences and campaigns on different topics
          were organized and many other activities were carried out to promote
          this cause nationwide.
          <br />
          <br />
          At the end of 2018, FIYO and its member groups, for the purpose of
          working in more efficient way, to spread the message far and wide and
          to achieve their goal swiftly, decided to merge themselves into a
          single national level student organization. Eventually, on{" "}
          <span className="font-bold">31 March 2019</span> all these groups and
          organizations merged and united as one organization.
        </p>
      </motion.div>
    </section>
  );
}
