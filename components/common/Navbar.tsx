"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LayoutGrid, Layers, Lightbulb, Folder, ShieldCheck, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Generator', icon: LayoutGrid, path: '/create' },
        { name: 'Features', icon: Layers, path: '#' },
        { name: 'Inspirations', icon: Lightbulb, path: '#' },
        { name: 'Your Collection', icon: Folder, path: '#' },
        { name: 'Privacy', icon: ShieldCheck, path: '#' },
    ];

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-[#2D1B12]/95 backdrop-blur-md text-white border border-white/10 shadow-2xl transition-all duration-300 ${isMenuOpen ? 'rounded-2xl' : 'rounded-full'}`}>
            <div className="px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
                    <div className="bg-white/10 p-2 rounded-full">
                        <Globe className="text-[#EA580C]" size={20} />
                    </div>
                    <span>Worldofdesign<span className="text-[#EA580C]">.Ai</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        >
                            <link.icon size={16} />
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <button className="px-5 py-2 text-sm font-medium text-white hover:text-[#EA580C] transition-colors">
                        Get Started
                    </button>
                    <Link href="/login" className="px-5 py-2.5 text-sm font-medium bg-[#EA580C] text-white rounded-full hover:bg-[#EA580C]/90 shadow-lg shadow-[#EA580C]/20 transition-all">
                        Sign in
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="xl:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="xl:hidden border-t border-white/10 px-6 py-6 pb-8 space-y-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <link.icon size={20} />
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-3">
                            <button className="w-full px-6 py-3 text-sm font-medium text-[#EA580C] border border-[#EA580C] rounded-xl hover:bg-[#EA580C]/10 transition-colors">
                                Get Started
                            </button>
                            <Link
                                href="/login"
                                className="w-full text-center px-6 py-3 text-sm font-medium bg-[#EA580C] text-white rounded-xl hover:bg-[#EA580C]/90 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign in
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
