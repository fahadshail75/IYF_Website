"use client";

import { FC, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Configuration for banners
const BANNERS = [
    "/assets/banners/WhatsApp Image 2025-12-05 at 10.15.25.jpeg",
    "/assets/banners/WhatsApp Image 2025-12-05 at 10.15.26 (1).jpeg",
    "/assets/banners/WhatsApp Image 2025-12-05 at 10.15.26.jpeg",
];

const BannerPopup: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (BANNERS.length > 0) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isOpen, currentIndex]);

    const closePopup = () => setIsOpen(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
    }, []);

    if (BANNERS.length === 0) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            // Removed fixed width/height and white bg. Now it fits the content.
                            className="relative max-h-[90vh] max-w-[90vw] md:max-w-[600px] flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
                        >
                            {/* Close Button - Floating Glass */}
                            <button
                                onClick={closePopup}
                                className="absolute top-3 right-3 z-20 p-2 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full text-white transition-all duration-200 hover:scale-110 border border-white/20"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Container */}
                            <div className="relative w-full h-auto">
                                {/* 
                    Using a high aspect ratio container or just letting the image dictate size.
                    Since we don't know the exact aspect ratio, we can use a max-height approach.
                    The trick is to render the image and let the div collapse around it.
                    However, Next.js Image needs width/height or fill.
                    'fill' needs a parent with dimensions.
                    We'll use a fixed height container that scales width automatically? No, that's hard with 'fill'.
                    Best approach for unknown aspect ratio "poster" feel:
                    Use a standard <img> tag or Next.js Image with 'width' and 'height' set to 'auto' equivalent?
                    Actually, we can use 'width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}'
                 */}
                                <div className="relative">
                                    <Image
                                        src={BANNERS[currentIndex]}
                                        alt="Banner"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                                        priority
                                    />
                                </div>

                                {/* Navigation - Only show if multiple */}
                                {BANNERS.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevSlide}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 hover:opacity-100 group-hover:opacity-100"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 hover:opacity-100 group-hover:opacity-100"
                                        >
                                            <ChevronRight size={24} />
                                        </button>

                                        {/* Dots */}
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                            {BANNERS.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentIndex(idx)}
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Order Now Button */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                                <Link
                                    href={`https://wa.me/918800905047?text=${encodeURIComponent("Hare Krishna! I would like to order the calendar.")}`}
                                    target="_blank"
                                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    <MessageCircle size={20} />
                                    <span>Order Now</span>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BannerPopup;
