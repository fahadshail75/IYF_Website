// 'use client';

// import { FC } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { AlignJustify } from 'lucide-react';

// const Header: FC = () => {
//   return (
//     <header className="bg-white  sticky top-0 z-50 flex justify-center">
//       <div className=' px-5 md:px-10 2xl:px-0 py-5 max-w-[1600px] w-full'>

//       <div className="flex items-center gap-10 justify-between">
//         <div className="flex items-center gap-4">
//           <div className='w-[150px] md:w-[255px]'>

//           <Image src="/assets/black-logo.svg" alt="IYF Logo" width={255} height={74} />
//           </div>

//         </div>
//         <nav className='overflow-hidden hidden md:block'>
//           <ul className="flex items-center gap-6 font-medium text-black">
//             <li className='hover:text-[#22CA38]'><Link href="/">Home</Link></li>
//             <li className='hover:text-[#22CA38]'><Link href="/about">About Us</Link></li>
//             <li className='hover:text-[#22CA38]'><Link href="/media">Media</Link></li>
//             <li className='hover:text-[#22CA38]'><Link href="/magazines">Magazines</Link></li>
//             <li className='hover:text-[#22CA38]'><Link href="/courses">Courses</Link></li>
//             <li className='hover:text-[#22CA38]'><Link href="/departments">Departments</Link></li>
//             <li className="relative group hover:text-[#22CA38]">
//               <Link href="/learn-islam">Learn Islam</Link>
//               <div className="absolute hidden group-hover:flex flex-col mt-2 bg-white shadow-lg border rounded z-10 min-w-[150px]">
//                 <Link href="/learn-islam/books" className="px-4 py-2 hover:bg-gray-100">Islamic Books</Link>
//                 <Link href="/learn-islam/audio-books" className="px-4 py-2 hover:bg-gray-100">Audio Books</Link>
//                 <Link href="/learn-islam/blogs" className="px-4 py-2 hover:bg-gray-100">Blogs</Link>
//               </div>
//             </li>
//           </ul>
//         </nav>

//         <div className='md:hidden'>
//         <AlignJustify />
//         </div>
//       </div>
//       </div>

//     </header>
//   );
// };

// export default Header;

"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, ChevronDown, ChevronUp, X } from "lucide-react";
import clsx from "clsx"; // optional for cleaner class toggling
import { usePathname } from "next/navigation";

const Header: FC = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isIslamOpen, setIsIslamOpen] = useState(false);
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="bg-white sticky top-0 z-50 flex justify-center shadow">
      <div className="px-5 md:px-10 2xl:px-6 py-5 max-w-[1600px] w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[150px] md:w-[255px]">
            <Image
              src="/assets/black-logo.svg"
              alt="IYF Logo"
              width={255}
              height={74}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex  items-center gap-6 font-medium text-black">
              <li
                className={clsx(
                  "hover:text-[#22CA38]",
                  isActive("/") && "text-[#22CA38]"
                )}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#22CA38]",
                  isActive("/about-us") && "text-[#22CA38]"
                )}
              >
                <Link href="/about-us">About Us</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#22CA38]",
                  isActive("/media") && "text-[#22CA38]"
                )}
              >
                <Link href="/media">Media</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#22CA38]",
                  isActive("/magzines") && "text-[#22CA38]"
                )}
              >
                <Link href="/magazines">Magazines</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#22CA38]",
                  isActive("/courses") && "text-[#22CA38]"
                )}
              >
                <Link href="/courses">Courses</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#22CA38]",
                  isActive("/departments") && "text-[#22CA38]"
                )}
              >
                <Link href="/departments">Departments</Link>
              </li>
              <li className="relative group hover:text-[#22CA38]">
                <p> Learn Islam</p>
                <div className="absolute hidden group-hover:flex flex-col mt-2 bg-white shadow-lg border rounded z-10 min-w-[150px]">
                  <Link
                    href="/learn-islam/books"
                    className={clsx(
                      "hover:text-[#22CA38]",
                      "px-4 py-2 hover:bg-gray-100",
                      isActive("/learn-islam/books") && "text-[#22CA38]"
                    )}
                  >
                    Islamic Books
                  </Link>
                  <Link
                    href="/learn-islam/audio-books"
                    className={clsx(
                      "hover:text-[#22CA38]",
                      "px-4 py-2 hover:bg-gray-100",
                      isActive("/learn-islam/audio-books") && "text-[#22CA38]"
                    )}
                  >
                    Audio Books
                  </Link>
                  <Link
                    href="/learn-islam/blogs"
                    className={clsx(
                      "hover:text-[#22CA38]",
                      "px-4 py-2 hover:bg-gray-100",
                      isActive("/learn-islam/blogs") && "text-[#22CA38]"
                    )}
                  >
                    Blogs
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            {menuOpen ? (
              <X
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <AlignJustify
                className="cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Animated Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-full bg-white z-50 shadow-md transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between p-5">
          <div className="w-[150px] md:w-[255px]">
            <Image
              src="/assets/black-logo.svg"
              alt="IYF Logo"
              width={255}
              height={74}
            />
          </div>
          <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>
        <div className="p-5 space-y-4 font-semibold text-black ">
          <div
            className={clsx(
              "hover:text-[#22CA38]",
              isActive("/") && "text-[#22CA38]"
            )}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </div>
          <div
            className={clsx(
              "hover:text-[#22CA38]",
              isActive("/about-us") && "text-[#22CA38]"
            )}
          >
            <Link href="/about-us" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </div>
          <div
            className={clsx(
              "hover:text-[#22CA38]",
              isActive("/media") && "text-[#22CA38]"
            )}
          >
            <Link href="/media" onClick={() => setMenuOpen(false)}>
              Media
            </Link>
          </div>
          <div
            className={clsx(
              "hover:text-[#22CA38]",
              isActive("/magzines") && "text-[#22CA38]"
            )}
          >
            <Link href="/magazines" onClick={() => setMenuOpen(false)}>
              Magazines
            </Link>
          </div>

          <div className="hover:text-[#22CA38]">
            <Link href="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </Link>
          </div>

          <div
            className={clsx(
              "hover:text-[#22CA38]",
              isActive("/departments") && "text-[#22CA38]"
            )}
          >
            <Link href="/departments" onClick={() => setMenuOpen(false)}>
              Departments
            </Link>
          </div>

          {/* Learn Islam section (simple mobile dropdown) */}
          {/* <div className="space-y-2">
            <p className="text-black font-semibold">Learn Islam</p>
            <div className="pl-4 space-y-1">
              <div className="hover:text-[#22CA38]">
                <Link
                  href="/learn-islam/books"
                  onClick={() => setMenuOpen(false)}
                >
                  Islamic Books
                </Link>
              </div>

              <div className="hover:text-[#22CA38]">
                <Link
                  href="/learn-islam/audio-books"
                  onClick={() => setMenuOpen(false)}
                >
                  Audio Books
                </Link>
              </div>

              <div className="hover:text-[#22CA38]">
                <Link
                  href="/learn-islam/blogs"
                  onClick={() => setMenuOpen(false)}
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div> */}

          <div className="space-y-2">
            <button
              className="flex items-center justify-between w-full text-left text-black font-semibold cursor-pointer"
              onClick={() => setIsIslamOpen(!isIslamOpen)}
            >
              <span>Learn Islam</span>
              {isIslamOpen ? (
                <ChevronUp size={20} className="text-[#22CA38]" />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            <div
              className={`pl-4 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                isIslamOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-2">
                <div className="hover:text-[#22CA38]">
                  <Link
                    href="/learn-islam/books"
                    onClick={() => setMenuOpen(false)}
                    className={clsx(
                      "hover:text-[#22CA38]",
                      "px-4 py-2 hover:bg-gray-100",
                      isActive("/learn-islam/books") && "text-[#22CA38]"
                    )}
                  >
                    Islamic Books
                  </Link>
                </div>
                <div className="hover:text-[#22CA38]">
                  <Link
                    href="/learn-islam/audio-books"
                    onClick={() => setMenuOpen(false)}
                    className={clsx(
                      "hover:text-[#22CA38]",
                      "px-4 py-2 hover:bg-gray-100",
                      isActive("/learn-islam/audio-books") && "text-[#22CA38]"
                    )}
                  >
                    Audio Books
                  </Link>
                </div>
                <div className="hover:text-[#22CA38]">
                  <Link
                    href="/learn-islam/blogs"
                    onClick={() => setMenuOpen(false)}
                    className={clsx(
                      "hover:text-[#22CA38]",
                      "px-4 py-2 hover:bg-gray-100",
                      isActive("/learn-islam/blogs") && "text-[#22CA38]"
                    )}
                  >
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
