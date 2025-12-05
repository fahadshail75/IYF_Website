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
      { href: "/coming-soon?magazine=najmus-saqib", label: "Najmus Saqib (Urdu Wall Magazine)", icon: BookOpen, external: false },
      { href: "https://bengali.iyfindia.org/noor/", label: "Noor (Bengali Children Magazine)", icon: BookOpen, external: true },
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
      className="fixed lg:sticky top-2 lg:top-6 z-[9999] flex justify-center mx-auto w-[95%] max-w-[1400px] mt-2 lg:mt-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0"
    >
      <div className="w-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-4 md:px-8 py-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex-shrink-0 mr-4 group">
            <Image
              src="/assets/White-logo.png"
              alt="IYF Logo"
              width={260}
              height={86}
              className="h-8 w-auto lg:h-12 xl:h-14 transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-full transition-all duration-300 whitespace-nowrap relative group ${isActive('/')
                ? 'text-[#22CA38] bg-[#22CA38]/10'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
            >
              <Home size={18} className="flex-shrink-0" />
              <span>Home</span>
            </Link>

            <Link
              href="/about-us"
              className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-full transition-all duration-300 whitespace-nowrap relative group ${isActive('/about-us')
                ? 'text-[#22CA38] bg-[#22CA38]/10'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
            >
              <Users size={18} className="flex-shrink-0" />
              <span>About Us</span>
            </Link>

            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isDropdownActive = activeDropdown === item.label;
              return (
                <div key={item.label} className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-full transition-all duration-300 whitespace-nowrap ${isDropdownActive
                      ? 'text-[#22CA38] bg-[#22CA38]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <IconComponent size={18} className="flex-shrink-0" />
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`ml-0.5 transition-transform duration-300 flex-shrink-0 ${isDropdownActive ? 'rotate-180 text-[#22CA38]' : 'text-gray-400'
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50 ring-1 ring-white/5"
                      >
                        <div className="py-2 px-1.5">
                          {item.items.map((subItem) => {
                            const SubIconComponent = subItem.icon;
                            const linkContent = (
                              <>
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#22CA38]/10 flex-shrink-0 group-hover:bg-[#22CA38] transition-colors duration-300">
                                  <SubIconComponent size={16} className="text-[#22CA38] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="flex-1 text-[13px] font-medium">{subItem.label}</span>
                              </>
                            );

                            const className = "flex items-center gap-3 px-3 py-2.5 mx-1 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 group";

                            if (subItem.external) {
                              return (
                                <a
                                  key={subItem.href}
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeDropdown}
                                  className={className}
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
                                className={className}
                              >
                                {linkContent}
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

          <button
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="lg:hidden p-2.5 rounded-full text-gray-300 hover:text-[#22CA38] hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && [
          (
            <motion.div
              key="mobile-menu-overlay"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] lg:hidden"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          ),
          (
            <motion.div
              key="mobile-menu-panel"
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-[#0a0a0a]/95 backdrop-blur-xl z-[10001] lg:hidden shadow-2xl flex flex-col border-l border-white/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Image
                  src="/assets/White-logo.png"
                  alt="IYF Logo"
                  width={160}
                  height={48}
                  className="h-10 w-auto"
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full text-gray-400 hover:text-[#22CA38] hover:bg-white/10 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-3 px-4 py-3.5 text-[15px] font-medium rounded-2xl transition-all ${isActive('/')
                    ? 'text-[#22CA38] bg-[#22CA38]/10'
                    : 'text-gray-300 hover:text-[#22CA38] hover:bg-white/5'
                    }`}
                >
                  <Home size={20} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/about-us"
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-3 px-4 py-3.5 text-[15px] font-medium rounded-2xl transition-all ${isActive('/about-us')
                    ? 'text-[#22CA38] bg-[#22CA38]/10'
                    : 'text-gray-300 hover:text-[#22CA38] hover:bg-white/5'
                    }`}
                >
                  <Users size={20} />
                  <span>About Us</span>
                </Link>

                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isOpen = activeDropdown === item.label;
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center justify-between w-full px-4 py-3.5 text-[15px] font-medium rounded-2xl transition-all ${isOpen
                          ? 'text-[#22CA38] bg-[#22CA38]/5'
                          : 'text-gray-300 hover:text-[#22CA38] hover:bg-white/5'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent size={20} />
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#22CA38]' : 'text-gray-500'
                            }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={`${item.label}-submenu`}
                            className="ml-4 pl-4 border-l-2 border-[#22CA38]/20 space-y-1 mt-1"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.items.map((subItem) => {
                              const SubIconComponent = subItem.icon;
                              const linkContent = (
                                <>
                                  <SubIconComponent size={16} className="text-[#22CA38]" />
                                  <span>{subItem.label}</span>
                                </>
                              );

                              const className = "flex items-center gap-3 px-3 py-3 text-[14px] text-gray-500 hover:text-[#22CA38] hover:bg-gray-50 rounded-xl transition-colors font-medium";

                              if (subItem.external) {
                                return (
                                  <a
                                    key={subItem.href}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMobileMenu}
                                    className={className}
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
                                  className={className}
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
