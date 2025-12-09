"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
    const contactDetails = [
        {
            icon: MapPin,
            title: "Our Headquarters",
            details: ["123 Islamic Center Road,", "New Delhi, India 110025"],
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["info@iyfindia.org", "support@iyfindia.org"],
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+91 98765 43210", "+91 11 2345 6789"],
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactDetails.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#22CA38]/30 transition-colors"
                    >
                        <div className="p-3 bg-white rounded-xl shadow-sm text-[#22CA38]">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                            {item.details.map((line, i) => (
                                <p key={i} className="text-gray-600 text-sm">
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-8 bg-[#2D1B12] rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22CA38] rounded-full blur-[60px] opacity-20 transform translate-x-10 -translate-y-10" />

                <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
                <p className="text-white/70 mb-6 text-sm">
                    Follow our social media channels to stay updated with the latest events, workshops, and activities.
                </p>

                <div className="flex flex-wrap gap-4">
                    {[
                        { icon: Facebook, href: "#" },
                        { icon: Twitter, href: "#" },
                        { icon: Instagram, href: "#" },
                        { icon: Youtube, href: "#" },
                    ].map((social, i) => (
                        <Link
                            key={i}
                            href={social.href}
                            className="p-3 bg-white/10 rounded-full hover:bg-[#22CA38] hover:text-white transition-all"
                        >
                            <social.icon size={20} />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
