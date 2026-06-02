// app/components/ProjectCarousel.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    href: '/project/hshg',
    image: '/component/landing-page/HSHG/200-125.svg',
    title: 'HSHG',
    desc: 'ADDABLE • UI/UX + 퍼블리싱',
  },
  {
    href: '/project/smbap',
    image: '/component/landing-page/smbap/200-125.svg',
    title: 'Smart Breathe Air PRO',
    desc: 'ADDABLE • 앱 리디자인',
  },
  {
    href: '/project/furzzle',
    image: '/component/landing-page/furzzle/200-125.svg',
    title: 'Furzzle',
    desc: 'SIDE PERSONAL PROJECT',
  },
];

export default function ProjectCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);

  return (
    <div className="relative">
      {/* 
        두번째 사진처럼 정확히 만들기 위한 구조
        - pl-6 / pr-6으로 첫/마지막 카드에 공간 확보
        - snap-x snap-mandatory로 한 카드씩 착착 붙음
        - 데스크탑/태블릿/모바일 모두 동일하게 자연스럽게 동작
      */}
      <ul
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 gap-6"
        style={{ scrollPaddingLeft: '32px' }}
      >
        {/* 첫 카드 왼쪽 공간 강제 확보용 spacer */}
        <li className="flex-shrink-1 w-[32px]"></li>

        {projects.map((project, index) => (
          <li 
            key={index} 
            className="flex-shrink-0 w-[280px] snap-start"
          >
            <Link href={project.href} className="block group">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={280}
                  height={175}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="p-6 flex-1 flex flex-col justify-end">
                  <h3 className="font-bold text-xl text-[#330819]">{project.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{project.desc}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}

        {/* 마지막 카드 오른쪽 공간 강제 확보용 spacer */}
        <li className="flex-shrink-0 w-[0px]"></li>
      </ul>
    </div>
  );
}