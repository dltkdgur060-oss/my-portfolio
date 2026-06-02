'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { 
    name: 'HSHG', 
    desktop: '/component/landing-page/HSHG/desktop-1540.png', 
    tablet: '/component/landing-page/HSHG/tablet-1260.png', 
    mobile: '/component/landing-page/HSHG/mobile-412.png',
    link: '/project/hshg' 
  },
  { 
    name: 'furzzle',
    desktop: '/component/landing-page/furzzle/desktop-1540.png',
    tablet: '/component/landing-page/furzzle/tablet-1260.png',
    mobile: '/component/landing-page/furzzle/mob-412.png',
    link: '/project/furzzle' 
  },
  { 
    name: 'smbap',  
    desktop: '/component/landing-page/smbap/desktop-1540.png',  
    tablet: '/component/landing-page/smbap/tablet-1260.png',  
    mobile: '/component/landing-page/smbap/mobile-412.png',
    link: '/project/smbap'
  },
  { 
    name: 'estate', 
    desktop: '/component/landing-page/estate/desktop-1540.png',  
    tablet: '/component/landing-page/estate/tablet-412.png',  
    mobile: '/component/landing-page/estate/mobile-412.png',
    link: '/project/properties' 
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    const deltaX = e.changedTouches[0].clientX - touchStart;
    if (deltaX > 50) prevSlide();
    if (deltaX < -50) nextSlide();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div 
      className="relative w-full overflow-hidden bg-transparent
                 aspect-[412/680]          
                 md:aspect-[1260/650]       
                 nest:aspect-[1280/800]     
                 xl:aspect-[1540/650]      
                 min-h-[260px] md:min-h-[400px] xl:min-h-[650px]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ──────────────────────────────────────────────────────────────
          ✨ [수정 핵심] LINK LAYER 구조 보완
          - isActive 일 때만 z-index를 10으로 올려서 맨 위로 올립니다.
          - 비활성화된 슬라이드는 pointer-events-none과 invisible로 
            클릭 인터랙션을 완벽히 차단하여 절대 방해하지 못하게 합니다.
         ────────────────────────────────────────────────────────────── */}
      {projects.map((project, index) => {
        const isActive = index === currentIndex;
        
        return (
          <Link 
            key={`link-${index}`} 
            href={project.link}
            className={`absolute inset-0 block cursor-pointer transition-all duration-700 ${
              isActive 
                ? 'opacity-100 z-10 visible pointer-events-auto' 
                : 'opacity-0 z-0 invisible pointer-events-none'
            }`}
          >
            {/* Desktop Image */}
            <Image 
              src={project.desktop} 
              alt={`${project.name} 데스크톱`} 
              fill 
              className="object-cover object-center hidden xl:block"
              priority={index === 0}
              unoptimized 
            />

            {/* Tablet Image */}
            <Image 
              src={project.tablet}  
              alt={`${project.name} 태블릿`} 
              fill 
              className="object-cover object-center hidden md:block xl:hidden"
              priority={index === 0}
              unoptimized 
            />

            {/* Mobile Image */}
            <Image 
              src={project.mobile}  
              alt={`${project.name} 모바일`} 
              fill 
              className="object-cover object-center md:hidden"
              priority={index === 0}
              unoptimized 
            />
          </Link>
        );
      })}

      {/* ──────────────────────────────────────────────────────────────
          ◀️ LEFT ARROW BUTTON (링크 레이어(z-10)보다 위에 있도록 z-30 설정)
         ────────────────────────────────────────────────────────────── */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // ✨ 부모 Link로 클릭 이벤트가 퍼지는 것 차단
          e.preventDefault(); 
          prevSlide();
        }}
        className="group absolute left-8 top-1/2 -translate-y-1/2 z-30 hidden md:block w-16 h-16"
      >
        <div className="absolute inset-0 rounded-[21px] bg-white/10 backdrop-blur-[4px] border border-black/10 blur-[0.5px] shadow-[0_1px_10px_rgba(0,0,0,0.12),inset_1px_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_0px_rgba(0,0,0,0.1)]" />
        <div className="relative z-10 flex items-center justify-center w-16 h-16">
          <Image src="/component/naming/icon/left-wh.svg" alt="이전" width={36} height={36} className="opacity-90 group-hover:opacity-100 drop-shadow-[0_1px_3px_rgba(4,11,118,7)]" unoptimized />
        </div>
      </button>

      {/* ──────────────────────────────────────────────────────────────
          ▶️ RIGHT ARROW BUTTON (z-30 설정)
         ────────────────────────────────────────────────────────────── */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // ✨ 부모 Link로 클릭 이벤트가 퍼지는 것 차단
          e.preventDefault();
          nextSlide();
        }}
        className="group absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden md:block w-16 h-16"
      >
        <div className="absolute inset-0 rounded-[21px] bg-white/10 backdrop-blur-[4px] border border-black/10 blur-[0.5px] shadow-[0_1px_10px_rgba(0,0,0,0.12),inset_1px_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_0px_rgba(0,0,0,0.1)]" />
        <div className="relative z-10 flex items-center justify-center w-16 h-16">
          <Image src="/component/naming/icon/right-wh.svg" alt="다음" width={36} height={36} className="opacity-90 group-hover:opacity-100 drop-shadow-[0_1px_3px_rgba(4,11,118,7)]" unoptimized />
        </div>
      </button>

      {/* ──────────────────────────────────────────────────────────────
          ⏺️ DOT PAGINATION (z-30 설정)
         ────────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/40">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation(); // ✨ 부모 Link로 클릭 이벤트가 퍼지는 것 차단
              e.preventDefault();
              goToSlide(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#000000] scale-125 shadow-[0_0_8px_rgba(133,133,255,0.9)]' 
                : 'bg-[#d9d9d9]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}