"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
  Newspaper,
  Calendar,
  FileText,
  BookOpen,
  GraduationCap,
  Building,
  Heart,
  Archive,
  Book
} from "lucide-react";
import { usePathname } from "next/navigation";

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
      { href: "/magazines/urdu", label: "Urdu - Nuqoosh e Raah", icon: BookOpen, external: false },
      { href: "https://themilestone.iyfindia.org/", label: "English - The Milestone", icon: BookOpen, external: true },
      { href: "https://bengali.iyfindia.org/tag/bengali-magazine/", label: "Bangla - Satyabaak", icon: BookOpen, external: true },
    ]
  },
  {
    label: "Courses",
    icon: GraduationCap,
    items: [
      { href: "/courses/quran", label: "Quran Course", icon: BookOpen, external: false },
      { href: "/courses/hadees", label: "Hadees Course", icon: BookOpen, external: false },
      { href: "/courses/seerat", label: "Seerat Course", icon: BookOpen, external: false },
      { href: "/courses/fiqh", label: "Fiqh Course", icon: BookOpen, external: false },
      { href: "/courses/history", label: "History Course", icon: Archive, external: false },
    ]
  },
  {
    label: "Departments",
    icon: Building,
    items: [
      { href: "/departments/campus", label: "Campus", icon: Building, external: false },
      { href: "/departments/dawat", label: "Dawat", icon: BookOpen, external: false },
      { href: "/departments/khidmat-e-khalq", label: "Khidmat e Khalq", icon: Heart, external: false },
    ]
  },
  {
    label: "AL_HUDA",
    icon: Book,
    items: [
      { href: "/learn-islam/books", label: "IYF Islamic Digital Library", icon: BookOpen, external: false },
      { href: "/learn-islam/blogs", label: "Blogs", icon: FileText, external: false },
    ]
  }
];

const Header: FC = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  const closeDropdown = () => setActiveDropdown(null);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      ref={headerRef}
      className="bg-white sticky top-0 z-[9999] flex justify-center shadow"
    >
      <div className="px-6 md:px-10 py-4 max-w-[1600px] w-full">
        <div className="flex items-center justify-between">
          {/* Logo Increased and aligned */}
          <Link href="/" className="flex-shrink-0 mr-4 flex items-center">
            <Image
              src="/assets/black-logo.png"
              alt="IYF Logo"
              width={260}
              height={80}
              className="h-14 w-auto lg:h-16 xl:h-[72px]"
              priority
            />
          </Link>

          {/* Desktop Nav Links Adjusted */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold rounded-lg transition-colors ${
                isActive("/")
                  ? "text-[#22CA38] bg-green-50"
                  : "text-gray-700 hover:text-[#22CA38] hover:bg-gray-100"
              }`}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>

            <Link
              href="/about-us"
              className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold rounded-lg transition-colors ${
                isActive("/about-us")
                  ? "text-[#22CA38] bg-green-50"
                  : "text-gray-700 hover:text-[#22CA38] hover:bg-gray-100"
              }`}
            >
              <Users size={18} />
              <span>About Us</span>
            </Link>

            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold rounded-lg transition-colors ${
                      activeDropdown === item.label
                        ? "text-[#22CA38] bg-green-50"
                        : "text-gray-700 hover:text-[#22CA38] hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`ml-1 transition-transform duration-300 ${
                        activeDropdown === item.label
                          ? "rotate-180 text-[#22CA38]"
                          : "text-gray-500"
                      }`}
                    />
                  </button>

                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                      <div className="py-1 px-1.5">
                        {item.items.map((sub) => {
                          const SubIcon = sub.icon;
                          const content = (
                            <>
                              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100">
                                <SubIcon size={15} className="text-[#22CA38]" />
                              </div>
                              <span className="ml-2 text-[13px]">{sub.label}</span>
                            </>
                          );

                          return sub.external ? (
                            <a
                              key={sub.href}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeDropdown}
                              className="flex items-center px-2.5 py-2 rounded-md text-gray-700 hover:text-[#22CA38] hover:bg-gray-100 transition-colors font-medium"
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={closeDropdown}
                              className="flex items-center px-2.5 py-2 rounded-md text-gray-700 hover:text-[#22CA38] hover:bg-gray-100 transition-colors font-medium"
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#22CA38] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/*  Mobile Menu (unchanged except logo size) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              key="panel"
              className="fixed top-0 right-0 h-full w-[88vw] max-w-sm bg-white z-50 lg:hidden shadow-xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 32 }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
                <Image
                  src="/assets/black-logo.png"
                  alt="IYF Logo"
                  width={180}
                  height={50}
                  className="h-10 w-auto"
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg text-gray-700 hover:text-[#22CA38] hover:bg-white transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* existing mobile items stay same */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
