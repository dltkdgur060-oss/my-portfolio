// app/components/Pagination.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PaginationProps {
  totalSlides: number;     // 총 슬라이드 수 (보통 5)
  currentSlide: number;    // 현재 보고 있는 슬라이드 번호 (0부터 시작)
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Pagination({ 
  totalSlides, 
  currentSlide, 
  onPrev, 
  onNext 
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      
      {/* 이전 버튼 - 데스크탑에서만 보임 */}
      <button 
        onClick={onPrev}
        className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Image 
          src="/component/naming/icon/chevrons-up-right.svg" 
          alt="이전" 
          width={24} 
          height={24} 
          className="rotate-180" 
          unoptimized 
        />
      </button>

      {/* 도트 (Pagenation.svg 사용) */}
      <div className="flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Image
            key={index}
            src="/component/naming/Pagenation.svg"
            alt={`페이지 ${index + 1}`}
            width={10}
            height={10}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'brightness-110 scale-110' 
                : 'opacity-40'
            }`}
            unoptimized
          />
        ))}
      </div>

      {/* 다음 버튼 - 데스크탑에서만 보임 */}
      <button 
        onClick={onNext}
        className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Image 
          src="/component/naming/icon/chevrons-up-right.svg" 
          alt="다음" 
          width={24} 
          height={24} 
          unoptimized 
        />
      </button>
    </div>
  );
}