"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image"; // or your Image component

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
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

export default function BackgroundSection() {
  return (
    <section className="mb-14 xl:mb-20 2xl:mb-28">
      {/* Floated image container on the right */}
      <motion.div
        className="hidden md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="float-right md:w-[450px] lg:w-[500px] xl:w-[600px] xl:h-[550px] 2xl:w-[800px] 2x:h-[600px] ml-8 mb-6 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#22CA38]/10 group hover:ring-[#22CA38]/20 transition-all duration-500"
          style={{
            shapeOutside: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            overflow: "hidden",
            shapeMargin: "15px",
          }}
          variants={imageVariants}
        >
          <Image
            src={"/assets/about/about-1.png"}
            width={800}
            height={600}
            alt="About IYF Background"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </motion.div>

      <motion.h2
        className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        The Background of Establishment of IYF
      </motion.h2>

      <motion.div
        className="md:hidden mb-6 rounded-2xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={"/assets/about/about-1.png"}
          width={600}
          height={400}
          alt="About IYF Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="relative md:border-l-[6px] border-[#22CA38] py-4 pl-0 md:pl-8 lg:py-12 lg:pl-12 text-gray-800 bg-gradient-to-r md:from-green-50/30 md:to-transparent rounded-r-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 hidden md:block">
          The Background of Establishment of IYF
        </h2>
        <div className="space-y-5 text-sm md:text-base lg:text-lg leading-relaxed text-justify">
          <p className="text-gray-700">
            To recall the Muslim youth about this forgotten message and to
            reconnect them with their purpose of life, various student
            organizations had been working in different states. In order to create
            an interlinking between them a joint platform was founded the name of{" "}
            <span className="font-bold text-[#22CA38]">
              Federation of Islamic Youth Organizations (FIYO)
            </span>{" "}
            on <span className="font-bold text-gray-900">11 January 2009</span>.
          </p>
          <p className="text-gray-700">
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
          </p>
          <p className="text-gray-700">
            At the end of 2018, FIYO and its member groups, for the purpose of
            working in more efficient way, to spread the message far and wide and
            to achieve their goal swiftly, decided to merge themselves into a
            single national level student organization. Eventually, on{" "}
            <span className="font-bold text-gray-900">31 March 2019</span> all these groups and
            organizations merged and united as one organization.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
