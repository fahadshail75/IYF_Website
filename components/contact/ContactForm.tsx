"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-xl"
        >
            <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#22CA38] focus:ring-1 focus:ring-[#22CA38] transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="123@example.com"
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#22CA38] focus:ring-1 focus:ring-[#22CA38] transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="How can we help you?"
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#22CA38] focus:ring-1 focus:ring-[#22CA38] transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Your message here..."
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#22CA38] focus:ring-1 focus:ring-[#22CA38] transition-all resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-[#22CA38] transition-colors flex items-center justify-center gap-2 group"
                >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </motion.div>
    );
}
