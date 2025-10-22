"use client";

import { FC } from "react";
import Link from "next/link";
import { Rocket, Sparkles } from "lucide-react";

const ComingSoon: FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] text-center px-4 -mt-2">
      {/* Lucide Icon Logo */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-[#22CA38] p-4 rounded-full shadow-lg">
          <Rocket size={48} className="text-white" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
        Coming Soon <Sparkles size={32} className="text-[#22CA38]" />
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-8">
        We&apos;re working hard on something amazing. Stay with us!
      </p>

      <div className="flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#22CA38] text-white font-semibold hover:bg-[#1aa32d] transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ComingSoon;
