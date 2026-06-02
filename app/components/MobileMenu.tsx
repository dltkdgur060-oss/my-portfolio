// app/components/MobileMenu.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-6 text-4xl leading-none active:scale-90 transition-transform"
      >
        ☰
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-[99999] overflow-y-auto">
          <div className="px-6 py-10 min-h-screen">
            <div className="flex justify-between items-center mb-12">
              <span className="text-3xl font-bold">MENU</span>
              <button onClick={() => setIsOpen(false)} className="p-6 text-4xl">✕</button>
            </div>

            <div className="text-xl font-medium space-y-6">
              <Link href="/about" className="block py-6" onClick={() => setIsOpen(false)}>ABOUT ME</Link>
              <Link href="/project" className="block py-6" onClick={() => setIsOpen(false)}>PROJECT</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}