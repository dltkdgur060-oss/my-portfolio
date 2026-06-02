'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [addableOpen, setAddableOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  return (
    <nav className="bg-white border-b border-[#B0F1F3] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* 로고 + PC 메뉴 */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/component/logo-60.svg"
              alt="상혁 Logo"
              width={48}
              height={48}
              className="h-9 w-auto cursor-pointer"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[#330819] font-bold text-sm tracking-wide">
            <Link href="/project/smbap" className="hover:text-[#1DB6B9] transition-colors">ADDABLE</Link>
            <Link href="/project/furzzle" className="hover:text-[#1DB6B9] transition-colors">SIDE PERSONAL PROJECT</Link>
          </div>
        </div>

        {/* PC 버튼 */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/project" className="relative">
            <Image src="/component/naming/ghost_btn-s.svg" alt="Project" width={92} height={36} className="hover:scale-105 active:scale-95 transition-transform" priority />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-[#330819]">Project</span>
          </Link>
          <Link href="/about" className="relative">
            <Image src="/component/naming/ghost_btn-s.svg" alt="About Me" width={92} height={36} className="hover:scale-105 active:scale-95 transition-transform" priority />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-[#330819]">About Me</span>
          </Link>
        </div>

        {/* 모바일 햄버거 버튼 - icon/menu-2.svg 사용 */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-3 active:scale-90 transition-transform touch-manipulation"
          aria-label="메뉴 열기"
        >
          <Image 
            src="/component/naming/icon/menu-2.svg" 
            alt="메뉴 열기" 
            width={32} 
            height={32} 
          />
        </button>
      </div>

      {/* ==================== 모바일 풀스크린 메뉴 ==================== */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-white z-[99999] overflow-y-auto md:hidden">
          <div className="px-6 py-10 min-h-screen">

            {/* MENU 타이틀 + X 버튼 (circle-x.svg) */}
            <div className="flex justify-between items-center mb-12">
              <span className="text-3xl font-bold tracking-widest text-[#330819]">MENU</span>
              <button 
                onClick={() => setIsMobileOpen(false)}
                className="p-3 -mr-3 active:scale-90 transition-transform touch-manipulation"
              >
                <Image 
                  src="/component/naming/icon/circle-x.svg" 
                  alt="메뉴 닫기" 
                  width={32} 
                  height={32} 
                />
              </button>
            </div>

            {/* 메뉴 리스트 */}
            <div className="text-[#330819] font-medium text-lg space-y-2">

              <Link 
                href="/about" 
                className="block px-6 py-7 border-b border-gray-100 active:bg-[#F0F4F4] active:text-[#1DB6B9]"
                onClick={() => setIsMobileOpen(false)}
              >
                ABOUT ME
              </Link>

              <Link 
                href="/project" 
                className="block px-6 py-7 border-b border-gray-100 active:bg-[#F0F4F4] active:text-[#1DB6B9]"
                onClick={() => setIsMobileOpen(false)}
              >
                PROJECT
              </Link>

              {/* ADDABLE 아코디언 */}
              <button 
                onClick={() => {
                  setAddableOpen(!addableOpen);
                  setSideOpen(false);
                }}
                className={`w-full px-6 py-7 text-left flex justify-between items-center border-b border-gray-100 active:bg-[#F0F4F4] active:text-[#1DB6B9] transition-all ${addableOpen ? 'text-[#1DB6B9]' : ''}`}
              >
                ADDABLE
                <span className="text-3xl">{addableOpen ? '−' : '+'}</span>
              </button>

              {addableOpen && (
                <div className="pl-8 space-y-6 py-4 text-base">
                  <Link href="/project/smbap" className="block py-4 active:text-[#1DB6B9]" onClick={() => setIsMobileOpen(false)}>
                    Smart Breathe Air Pro
                  </Link>
                  <Link href="/project/hshg" className="block py-4 active:text-[#1DB6B9]" onClick={() => setIsMobileOpen(false)}>
                    HSHG - 1
                  </Link>
                  <Link href="/project/hshg" className="block py-4 active:text-[#1DB6B9]" onClick={() => setIsMobileOpen(false)}>
                    HSHG - 2
                  </Link>
                </div>
              )}

              {/* SIDE PERSONAL PROJECT 아코디언 */}
              <button 
                onClick={() => {
                  setSideOpen(!sideOpen);
                  setAddableOpen(false);
                }}
                className={`w-full px-6 py-7 text-left flex justify-between items-center border-b border-gray-100 active:bg-[#F0F4F4] active:text-[#1DB6B9] transition-all ${sideOpen ? 'text-[#1DB6B9]' : ''}`}
              >
                SIDE PERSONAL PROJECT
                <span className="text-3xl">{sideOpen ? '−' : '+'}</span>
              </button>

              {sideOpen && (
                <div className="pl-8 space-y-6 py-4 text-base">
                  <Link href="/project/winner-starlight" className="block py-4 active:text-[#1DB6B9]" onClick={() => setIsMobileOpen(false)}>
                    Winner - Straight
                  </Link>
                  <Link href="/project/graduate" className="block py-4 active:text-[#1DB6B9]" onClick={() => setIsMobileOpen(false)}>
                    Graduate - design
                  </Link>
                  <Link href="/project/furzzle" className="block py-4 active:text-[#1DB6B9]" onClick={() => setIsMobileOpen(false)}>
                    Furzzle
                  </Link>
                  <Link href="/project/grapic-design" className="block py-4 active:text-[#1DB6B9]" onClick={() => setIsMobileOpen(false)}>
                    Grapic Design
                  </Link>
                  <Link href="/project/properties" className="block py-4 active:text-[#1DB6B9]" onClick={() => setIsMobileOpen(false)}>
                    우리동네 부동산
                  </Link>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}