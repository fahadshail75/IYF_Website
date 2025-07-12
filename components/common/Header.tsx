'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <header className="bg-[#0F1110] shadow-md sticky top-0 z-50 flex justify-center">
      <div className=' px-5 md:px-10 2xl:px-0 py-5 max-w-[1600px] w-full'>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/assets/Logo.svg" alt="IYF Logo" width={255} height={74} />
       
        </div>
        <nav className='overflow-hidden'>
          <ul className="flex items-center gap-6 font-medium text-white">
            <li className='hover:text-[#22CA38]'><Link href="/">Home</Link></li>
            <li className='hover:text-[#22CA38]'><Link href="/about">About Us</Link></li>
            <li className='hover:text-[#22CA38]'><Link href="/media">Media</Link></li>
            <li className='hover:text-[#22CA38]'><Link href="/magazines">Magazines</Link></li>
            <li className='hover:text-[#22CA38]'><Link href="/courses">Courses</Link></li>
            <li className='hover:text-[#22CA38]'><Link href="/departments">Departments</Link></li>
            <li className="relative group hover:text-[#22CA38]">
              <Link href="/learn-islam">Learn Islam</Link>
              <div className="absolute hidden group-hover:flex flex-col mt-2 bg-white shadow-lg border rounded z-10 min-w-[150px]">
                <Link href="/learn-islam/books" className="px-4 py-2 hover:bg-gray-100">Islamic Books</Link>
                <Link href="/learn-islam/audio-books" className="px-4 py-2 hover:bg-gray-100">Audio Books</Link>
                <Link href="/learn-islam/blogs" className="px-4 py-2 hover:bg-gray-100">Blogs</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      </div>

    </header>
  );
};

export default Header;
