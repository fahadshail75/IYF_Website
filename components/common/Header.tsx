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

// Modern navigation structure with icons - Updated Al-Huda Library
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
    label: "IYF Islamic Digital Library",
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
    if (headerRef.current) {
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current.offsetHeight}px`
      );
    }
  }, [mobileMenuOpen, activeDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      ref={headerRef}
      className="bg-white sticky top-0 z-[9999] flex justify-center shadow"
    >
      <div className="px-5 md:px-10 2xl:px-6 py-5 max-w-[1600px] w-full">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex-shrink-0 mr-4">
            <Image
              src="/assets/black-logo.png"
              alt="IYF Logo"
              width={220}
              height={64}
              className="h-10 w-auto lg:h-12 xl:h-14"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className={`flex items-center gap-1 px-2 py-1.5 text-[13px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                isActive('/')
                  ? 'text-[#22CA38] bg-green-50'
                  : 'text-gray-700 hover:text-[#22CA38] hover:bg-gray-100'
              }`}
            >
              <Home size={17} className="flex-shrink-0" />
              <span>Home</span>
            </Link>

            <Link
              href="/about-us"
              className={`flex items-center gap-1 px-2 py-1.5 text-[13px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                isActive('/about-us')
                  ? 'text-[#22CA38] bg-green-50'
                  : 'text-gray-700 hover:text-[#22CA38] hover:bg-gray-100'
              }`}
            >
              <Users size={17} className="flex-shrink-0" />
              <span>About Us</span>
            </Link>

            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label} className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center gap-1 px-2 py-1.5 text-[13px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      activeDropdown === item.label
                        ? 'text-[#22CA38] bg-green-50'
                        : 'text-gray-700 hover:text-[#22CA38] hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent size={17} className="flex-shrink-0" />
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`ml-0.5 transition-transform duration-300 flex-shrink-0 ${
                        activeDropdown === item.label ? 'rotate-180 text-[#22CA38]' : 'text-gray-500'
                      }`}
                    />
                  </button>

                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1.5 w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                      <div className="py-1.5 px-1">
                        {item.items.map((subItem) => {
                          const SubIconComponent = subItem.icon;
                          const linkContent = (
                            <>
                              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100 flex-shrink-0">
                                <SubIconComponent size={15} className="text-[#22CA38]" />
                              </div>
                              <span className="flex-1">{subItem.label}</span>
                            </>
                          );

                          if (subItem.external) {
                            return (
                              <a
                                key={subItem.href}
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeDropdown}
                                className="flex items-center gap-2.5 px-2.5 py-2 mx-1 text-[13px] text-gray-700 hover:text-[#22CA38] hover:bg-gray-100 rounded-lg transition-colors font-medium"
                              >
                                {linkContent}
                              </a>
                            );
                          }

                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={closeDropdown}
                              className="flex items-center gap-2.5 px-2.5 py-2 mx-1 text-[13px] text-gray-700 hover:text-[#22CA38] hover:bg-gray-100 rounded-lg transition-colors font-medium"
                            >
                              {linkContent}
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

          <button
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#22CA38] hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && [
          (
            <motion.div
              key="mobile-menu-overlay"
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          ),
          (
            <motion.div
              key="mobile-menu-panel"
              className="fixed top-0 right-0 h-full w-[88vw] max-w-sm bg-white z-50 lg:hidden shadow-xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 32 }}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                <Image
                  src="/assets/black-logo.png"
                  alt="IYF Logo"
                  width={140}
                  height={40}
                  className="h-8 w-auto"
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg text-gray-700 hover:text-[#22CA38] hover:bg-white transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 px-4 py-3 space-y-1.5 overflow-y-auto">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-3 px-3 py-3 text-[15px] font-semibold rounded-lg transition-colors ${
                    isActive('/')
                      ? 'text-[#22CA38] bg-green-50'
                      : 'text-gray-700 hover:text-[#22CA38] hover:bg-gray-100'
                  }`}
                >
                  <Home size={19} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/about-us"
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-3 px-3 py-3 text-[15px] font-semibold rounded-lg transition-colors ${
                    isActive('/about-us')
                      ? 'text-[#22CA38] bg-green-50'
                      : 'text-gray-700 hover:text-[#22CA38] hover:bg-gray-100'
                  }`}
                >
                  <Users size={19} />
                  <span>About Us</span>
                </Link>

                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isOpen = activeDropdown === item.label;
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center justify-between w-full px-3 py-3 text-[15px] font-semibold rounded-lg transition-colors ${
                          isOpen
                            ? 'text-[#22CA38] bg-green-50'
                            : 'text-gray-700 hover:text-[#22CA38] hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent size={19} />
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#22CA38]' : 'text-gray-500'
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={`${item.label}-submenu`}
                            className="ml-5 pl-3 border-l border-green-100 space-y-1 mt-1"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                          >
                            {item.items.map((subItem) => {
                              const SubIconComponent = subItem.icon;
                              const linkContent = (
                                <>
                                  <SubIconComponent size={15} className="text-[#22CA38]" />
                                  <span>{subItem.label}</span>
                                </>
                              );

                              if (subItem.external) {
                                return (
                                  <a
                                    key={subItem.href}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-2.5 px-2.5 py-2.5 text-[14px] text-gray-600 hover:text-[#22CA38] hover:bg-gray-100 rounded-lg transition-colors font-medium"
                                  >
                                    {linkContent}
                                  </a>
                                );
                              }

                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center gap-2.5 px-2.5 py-2.5 text-[14px] text-gray-600 hover:text-[#22CA38] hover:bg-gray-100 rounded-lg transition-colors font-medium"
                                >
                                  {linkContent}
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
          ),
        ]}
      </AnimatePresence>
    </header>
  );
};

export default Header;
