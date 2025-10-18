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
  Book,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    label: "Media",
    icon: Newspaper,
    items: [
      { href: "/media/press-release", label: "Press Release", icon: Newspaper },
      { href: "/media/events-activities", label: "Events & Activities", icon: Calendar },
      { href: "/media/articles", label: "Articles", icon: FileText },
    ],
  },
  {
    label: "Magazines",
    icon: BookOpen,
    items: [
      { href: "/magazines/urdu", label: "Urdu - Nuqoosh e Raah", icon: BookOpen },
      { href: "https://themilestone.iyfindia.org/", label: "English - The Milestone", icon: BookOpen, external: true },
      { href: "https://bengali.iyfindia.org/tag/bengali-magazine/", label: "Bangla - Satyabaak", icon: BookOpen, external: true },
    ],
  },
  {
    label: "Courses",
    icon: GraduationCap,
    items: [
      { href: "/courses/quran", label: "Quran Course", icon: BookOpen },
      { href: "/courses/hadees", label: "Hadees Course", icon: BookOpen },
      { href: "/courses/seerat", label: "Seerat Course", icon: BookOpen },
      { href: "/courses/fiqh", label: "Fiqh Course", icon: BookOpen },
      { href: "/courses/history", label: "History Course", icon: Archive },
    ],
  },
  {
    label: "Departments",
    icon: Building,
    items: [
      { href: "/departments/campus", label: "Campus", icon: Building },
      { href: "/departments/dawat", label: "Dawat", icon: BookOpen },
      { href: "/departments/khidmat-e-khalq", label: "Khidmat e Khalq", icon: Heart },
    ],
  },
  {
    label: "AL_HUDA",
    icon: Book,
    items: [
      { href: "/learn-islam/books", label: "IYF Islamic Digital Library", icon: BookOpen },
      { href: "/learn-islam/blogs", label: "Blogs", icon: FileText },
    ],
  },
];

const Header: FC = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty("--header-height", `${headerRef.current.offsetHeight}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  const toggleDropdown = (label: string) => setActiveDropdown((curr) => (curr === label ? null : label));
  const toggleMobileDropdown = (label: string) => setActiveMobileDropdown((curr) => (curr === label ? null : label));
  const closeDropdown = () => setActiveDropdown(null);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header ref={headerRef} className="bg-white sticky top-0 z-[9999] shadow">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/black-logo.png"
            alt="IYF Logo"
            width={230}
            height={70}
            className="h-14 w-auto md:h-16"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1.5">
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[14px] font-semibold rounded-md transition-all ${
              isActive("/") ? "text-[#22CA38] bg-green-50" : "text-gray-700 hover:text-[#22CA38] hover:bg-gray-100"
            }`}
          >
            <Home size={17} />
            <span>Home</span>
          </Link>

          <Link
            href="/about-us"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[14px] font-semibold rounded-md transition-all ${
              isActive("/about-us") ? "text-[#22CA38] bg-green-50" : "text-gray-700 hover:text-[#22CA38] hover:bg-gray-100"
            }`}
          >
            <Users size={17} />
            <span>About Us</span>
          </Link>

          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) closeDropdown();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[14px] font-semibold rounded-md transition-all ${
                    activeDropdown === item.label
                      ? "text-[#22CA38] bg-green-50"
                      : "text-gray-700 hover:text-[#22CA38] hover:bg-gray-100"
                  }`}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-300 ${
                      activeDropdown === item.label ? "rotate-180 text-[#22CA38]" : "text-gray-500"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50"
                    >
                      <div className="py-1">
                        {item.items.map((sub) => {
                          const SubIcon = sub.icon;
                          const linkProps = {
                            className:
                              "flex items-center px-3 py-2 text-[13px] text-gray-700 font-medium hover:bg-gray-100 hover:text-[#22CA38] transition-colors",
                            onClick: closeDropdown,
                          };
                          const content = (
                            <>
                              <SubIcon size={15} className="mr-2 text-[#22CA38]" />
                              {sub.label}
                            </>
                          );
                          return sub.external ? (
                            <a key={sub.href} href={sub.href} target="_blank" rel="noopener noreferrer" {...linkProps}>
                              {content}
                            </a>
                          ) : (
                            <Link key={sub.href} href={sub.href} {...linkProps}>
                              {content}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#22CA38] hover:bg-gray-100 transition-all"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/40 z-40"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-50 shadow-xl flex flex-col overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
                <Image src="/assets/black-logo.png" alt="IYF Logo" width={160} height={40} className="h-10 w-auto" />
                <button onClick={closeMobileMenu} className="p-2 rounded-md text-gray-700 hover:text-[#22CA38]">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col px-4 py-4 space-y-2">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-[15px] font-semibold ${
                    isActive("/") ? "text-[#22CA38] bg-green-50" : "text-gray-700 hover:bg-gray-100 hover:text-[#22CA38]"
                  }`}
                >
                  <Home size={18} />
                  Home
                </Link>

                <Link
                  href="/about-us"
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-[15px] font-semibold ${
                    isActive("/about-us")
                      ? "text-[#22CA38] bg-green-50"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#22CA38]"
                  }`}
                >
                  <Users size={18} />
                  About Us
                </Link>

                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-[15px] font-semibold ${
                          activeMobileDropdown === item.label
                            ? "text-[#22CA38] bg-green-50"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#22CA38]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={18} />
                          {item.label}
                        </div>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            activeMobileDropdown === item.label ? "rotate-180 text-[#22CA38]" : "text-gray-500"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeMobileDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="ml-7 mt-1 border-l border-gray-200"
                          >
                            {item.items.map((sub) => {
                              const SubIcon = sub.icon;
                              return sub.external ? (
                                <a
                                  key={sub.href}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMobileMenu}
                                  className="flex items-center gap-2 px-3 py-2 text-[14px] text-gray-700 hover:text-[#22CA38] transition-all"
                                >
                                  <SubIcon size={15} className="text-[#22CA38]" />
                                  {sub.label}
                                </a>
                              ) : (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center gap-2 px-3 py-2 text-[14px] text-gray-700 hover:text-[#22CA38] transition-all"
                                >
                                  <SubIcon size={15} className="text-[#22CA38]" />
                                  {sub.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
