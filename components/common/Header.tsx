"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Newspaper,
  Calendar,
  FileText,
  BookOpen,
  GraduationCap,
  Building,
  Heart,
  Book,
} from "lucide-react";

// Navigation Data
const navigationItems = [
  {
    label: "Media",
    icon: Newspaper,
    items: [
      { href: "/media/press-release", label: "Press Release", icon: Newspaper, external: false },
      { href: "/media/events-activities", label: "Events & Activities", icon: Calendar, external: false },
      { href: "/media/articles", label: "Articles", icon: FileText, external: false },
    ]
  },
  {
    label: "Magazines",
    icon: BookOpen,
    items: [
      { href: "https://themilestone.iyfindia.org/", label: "The Milestone (English)", icon: BookOpen, external: true },
      { href: "/magazines/urdu", label: "Nuqoosh e Raah (Urdu)", icon: BookOpen, external: false },
      { href: "https://bengali.iyfindia.org/tag/bengali-magazine/", label: "Satyabaak (Bangla)", icon: BookOpen, external: true },
    ]
  },
  {
    label: "Courses",
    icon: GraduationCap,
    items: [
      { href: "/courses/quran", label: "Quran Course", icon: BookOpen, external: false },
      { href: "/courses/seerat", label: "Seerat Course", icon: BookOpen, external: false },
    ]
  },
  {
    label: "Departments",
    icon: Building,
    items: [
      { href: "/departments/campus", label: "Campus", icon: Building, external: false },
      { href: "/departments/khidmat-e-khalq", label: "Khidmat e Khalq", icon: Heart, external: false },
    ]
  },
  {
    label: "AL_HUDA",
    icon: Book,
    items: [
      { href: "/learn-islam/books", label: "IYF Library", icon: BookOpen, external: false },
      { href: "/learn-islam/blogs", label: "Blogs", icon: FileText, external: false },
    ]
  }
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close menu on resize (desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-7xl bg-[#0a0a0a]/95 backdrop-blur-md text-white border border-white/10 shadow-2xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'rounded-3xl' : 'rounded-full'
        }`}
    >
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/assets/White-logo.png"
            alt="IYF Logo"
            width={140}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center bg-white/5 rounded-full px-4 py-1.5 border border-white/5 gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            About Us
          </Link>

          {navigationItems.map((item) => (
            <div key={item.label} className="relative group">
              <button
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all focus:outline-none"
              >
                {item.label}
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Desktop Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-64">
                <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-2 shadow-xl overflow-hidden backdrop-blur-xl">
                  {item.items.map((subItem) => {
                    const Icon = subItem.icon;
                    return subItem.external ? (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                      >
                        <div className="p-1.5 bg-white/5 rounded-lg text-[#22CA38]">
                          <Icon size={16} />
                        </div>
                        <span className="text-sm font-medium">{subItem.label}</span>
                      </a>
                    ) : (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                      >
                        <div className="p-1.5 bg-white/5 rounded-lg text-[#22CA38]">
                          <Icon size={16} />
                        </div>
                        <span className="text-sm font-medium">{subItem.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Buttons (Desktop) */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-medium bg-[#22CA38] text-black rounded-full hover:bg-[#1fb332] shadow-lg shadow-[#22CA38]/20 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Expanding inside) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-6 py-6 pb-8 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {navigationItems.map((item) => (
                <div key={item.label} className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`nav-item w-full flex items-center justify-between p-3 text-white/90 font-medium hover:bg-white/5 transition-all ${activeDropdown === item.label ? "bg-white/5 text-[#22CA38]" : ""
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon size={18} />
                      {item.label}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-[#22CA38]" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-white/5 border-l-2 border-[#22CA38]/30 ml-4 my-1 rounded-lg overflow-hidden"
                      >
                        {item.items.map((subItem) => (
                          <div key={subItem.label}>
                            {subItem.external ? (
                              <a
                                href={subItem.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </a>
                            ) : (
                              <Link
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 text-sm font-bold bg-[#22CA38] text-black rounded-xl hover:bg-[#1fb332] shadow-lg shadow-[#22CA38]/20 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
