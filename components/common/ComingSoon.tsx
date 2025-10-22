'use client';

import { FC } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Wrench } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description?: string;
  category?: string;
}

const ComingSoon: FC<ComingSoonProps> = ({ 
  title, 
  description = "We're working hard to bring you this page. Stay tuned for updates!",
  category 
}) => {
  const isTitleUrdu = /[\u0600-\u06FF]/.test(title || "");
  const isTitleBangla = /[\u0980-\u09FF]/.test(title || "");
  const isDescUrdu = /[\u0600-\u06FF]/.test(description || "");
  const isDescBangla = /[\u0980-\u09FF]/.test(description || "");
  return (
    <section
      className="relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      style={{
        marginTop: "calc(-1 * var(--header-height, 0px))",
        minHeight: "calc(100vh - var(--header-height, 0px))",
        paddingTop: "calc(var(--header-height, 0px) + 2rem)",
        paddingBottom: "4rem",
      }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-[#22CA38]/10 rounded-full flex items-center justify-center">
            <Wrench size={48} className="text-[#22CA38]" />
          </div>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22CA38]/10 text-[#22CA38] rounded-full text-sm font-medium mb-4">
            <Clock size={16} />
            <span>{category}</span>
          </div>
        )}

        {/* Title */}
        <h1
          className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isTitleUrdu ? 'jameel-font text-right' : isTitleBangla ? 'solaiman-lipi-font' : ''}`}
          {...(isTitleUrdu ? { dir: 'rtl' } : {})}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className={`text-lg text-gray-600 mb-8 leading-relaxed ${isDescUrdu ? 'jameel-font text-right' : isDescBangla ? 'solaiman-lipi-font' : ''}`}
          {...(isDescUrdu ? { dir: 'rtl' } : {})}
        >
          {description}
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-block px-6 py-3 bg-[#22CA38] text-white rounded-lg font-semibold text-lg mb-12">
          Coming Soon
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#22CA38] text-white rounded-lg hover:bg-[#1ea832] transition-colors duration-200 font-medium"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <a
            href="mailto:iyfofindia@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#22CA38] text-[#22CA38] rounded-lg hover:bg-[#22CA38] hover:text-white transition-colors duration-200 font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;