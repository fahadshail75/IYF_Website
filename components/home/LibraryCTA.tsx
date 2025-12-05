"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const LibraryCTA: FC = () => {
    return (
        <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-black font-semibold text-sm mb-6"
                >
                    <BookOpen size={16} className="text-[#22CA38]" />
                    <span>IYF ISLAMIC DIGITAL LIBRARY</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl lg:text-6xl font-black text-black mb-4 tracking-tight"
                >
                    AL_HUDA
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl lg:text-2xl text-gray-600 font-medium mb-8"
                >
                    Discover, Read, and Grow
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
                >
                    Dive into a curated collection of authentic Islamic books in Urdu, English, and more. Whether you’re a student, seeker, or lifelong learner, our library is open to all—completely free and accessible online.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        href="/learn-islam/books"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#22CA38] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#1db832] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <span>Explore Books</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default LibraryCTA;
