"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="relative w-full overflow-hidden pt-[120px] md:pt-[140px] pb-12 bg-white">
            <motion.div
                className="max-w-[1600px] mx-auto px-6 lg:px-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-[#22CA38] font-bold tracking-widest uppercase text-sm mb-4 block">
                    Get in Touch
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight mb-6">
                    We&apos;d Love to <span className="text-[#22CA38]">Hear from You</span>
                </h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Whether you have a question about our programs, want to volunteer, or just want to say salam, we&apos;re here to answer all your questions.
                </p>
            </motion.div>
        </section>
    );
}
