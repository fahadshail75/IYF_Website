'use client'; // 👈 Important: makes it a Client Component

import Image from 'next/image';
import { Download } from 'lucide-react';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { BookFields } from "@/types/books";

export default function BookCard({ books, index }: { books: BookFields; index: number }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (title:string, url:string) => {
    if (!url) {
      toast.error('File not available.');
      return;
    }

    try {
      setIsDownloading(true);
      const loadingToast = toast.loading('Downloading...');

      const response = await fetch(url);
      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${title}.pdf`;
      link.click();
      URL.revokeObjectURL(link.href);

      toast.dismiss(loadingToast);
      toast.success('Download complete!');
    } catch (error) {
      console.error(error);
      toast.error('Download failed!');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <article
      key={books.title}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_24px_60px_-45px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-40px_rgba(34,202,56,0.45)]"
    >
      {/* Book cover image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-50">
        <Image
          src={books?.image?.node?.link ?? ""}
          alt={books?.image?.node?.link ?? `book-image-${index}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Book details */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#22CA38]">
          <span>{books?.level}</span>
          <span className="text-gray-400">{books?.format}</span>
        </div>

        <h3 className="text-lg font-semibold text-[#1B2B34] leading-tight">
          {books?.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {books?.description}
        </p>

        <button
          onClick={() => handleDownload(books.title, books?.url ?? '')}
          disabled={isDownloading}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg w-full transition
            ${isDownloading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#22CA38] hover:bg-[#1db832] shadow-[#22CA38]/25 cursor-pointer'}`}
        >
          <Download size={18} />
          {isDownloading ? 'Downloading...' : 'Download PDF'}
        </button>
      </div>
    </article>
  );
}
