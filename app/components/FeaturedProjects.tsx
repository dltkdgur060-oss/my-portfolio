// app/components/FeaturedProjects.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <section className="bg-[#DCF9F9] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-4xl font-bold text-[#330819]">And</h2>
          <div className="w-9 h-9">
            <Image 
              src="/component/thinking-out.svg" 
              alt="loop" 
              width={36} 
              height={36} 
              unoptimized 
            />
          </div>
          <h2 className="text-4xl font-bold text-[#1DB6B9]">Projects</h2>
        </div>

        <div className="flex gap-6 md:grid md:grid-cols-3 md:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing">
          
          {/* SmBap */}
          <Link href="/project/smbap" className="min-w-[280px] md:min-w-0 flex-shrink-0 snap-start">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
              <Image 
                src="/component/project-Page/Mobile-Project-Addable-Smbap.png" 
                alt="SmBap" 
                width={800} 
                height={600} 
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300" 
                unoptimized 
              />
              <div className="p-6 flex-1 flex flex-col justify-end">
                <h3 className="font-bold text-xl text-[#330819]">SmBap</h3>
                <p className="text-sm text-gray-500 mt-1">Smart Breathe Air PRO</p>
              </div>
            </div>
          </Link>

          {/* HSHG */}
          <Link href="/project/hshg" className="min-w-[280px] md:min-w-0 flex-shrink-0 snap-start">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
              <Image 
                src="/component/project-Page/Desktop-Project-Addable-HSHG.png" 
                alt="HSHG" 
                width={800} 
                height={600} 
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300" 
                unoptimized 
              />
              <div className="p-6 flex-1 flex flex-col justify-end">
                <h3 className="font-bold text-xl text-[#330819]">HSHG</h3>
                <p className="text-sm text-gray-500 mt-1">기업 협업 프로젝트</p>
              </div>
            </div>
          </Link>

          {/* Furzzle */}
          <Link href="/project/furzzle" className="min-w-[280px] md:min-w-0 flex-shrink-0 snap-start">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
              <Image 
                src="/component/project-Page/Desktop-Project-side-personal-project-furzzle.png" 
                alt="Furzzle" 
                width={800} 
                height={600} 
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300" 
                unoptimized 
              />
              <div className="p-6 flex-1 flex flex-col justify-end">
                <h3 className="font-bold text-xl text-[#330819]">Furzzle</h3>
                <p className="text-sm text-gray-500 mt-1">개인 사이드 프로젝트</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}