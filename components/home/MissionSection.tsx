"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MissionSection: FC = () => {
    return (
        <section className="relative w-full bg-black py-20 lg:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#22CA38] rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#22CA38] rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/assets/home/event-image-black.png"
                                alt="IYF Mission"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-[#22CA38] text-black p-6 rounded-2xl shadow-xl hidden lg:block">
                            <p className="font-bold text-3xl">10+</p>
                            <p className="text-sm font-medium uppercase tracking-wider">Years of Impact</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="w-full lg:w-1/2 space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-[#22CA38] font-bold tracking-[0.2em] uppercase text-sm">Who We Are</h2>

                        <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                            Empowering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22CA38] to-emerald-400">
                                Youth of India
                            </span>
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            IYF is a national-level organization dedicated to guiding students and youth in the light of the Quran and Sunnah. We believe in building character, fostering leadership, and creating a positive impact on society through education and service.
                        </p>

                        <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#22CA38] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(34,202,56,0.6)]">
                            <span>Know more about us</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MissionSection;
