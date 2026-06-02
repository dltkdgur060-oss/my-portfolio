'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function ProjectPage() {
  return (
    <>
      <Navbar />

      <div className="bg-[#F0FAFA] min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-6 pt-12">

          <h1 className="text-5xl font-bold text-[#330819] mb-12">Project</h1>

          {/* ADDABLE 섹션 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#330819] mb-8">ADDABLE</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* HSHG 카드 */}
              <Link href="/project/hshg">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <div className="aspect-[16/9] bg-[#E5E7EB] flex items-center justify-center">
                    <Image 
                      src="/component/landing-page/HSHG/800-500.png" 
                      alt="HSHG" 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      unoptimized 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#330819]">HSHG</h3>
                    <p className="text-sm text-gray-600 mt-1">기업 협업 프로젝트 · UIUX</p>
                  </div>
                </div>
              </Link>

              {/* SmBap 카드 */}
              <Link href="/project/smbap">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <div className="aspect-[16/9] bg-[#E5E7EB] flex items-center justify-center">
                    <Image 
                      src="/component/landing-page/project/main/smbap-800-500.png" 
                      alt="SmBap" 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      unoptimized 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#330819]">Smart Breathe Air PRO</h3>
                    <p className="text-sm text-gray-600 mt-1">앱 리디자인 프로젝트</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* SIDE PERSONAL PROJECT 섹션 */}
          <div>
            <h2 className="text-2xl font-bold text-[#330819] mb-8">SIDE PERSONAL PROJECT</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Winner Straight */}
              <Link href="/project/winner-starlight">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <div className="aspect-[16/9] bg-[#E5E7EB]">
                    <Image 
                      src="/component/landing-page/project/main/starlight-800-500.png" 
                      alt="작업하기" 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      unoptimized 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#330819]">Winner Starlight</h3>
                  </div>
                </div>
              </Link>

              {/* Furzzle */}
              <Link href="/project/furzzle">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <div className="aspect-[16/9] bg-[#E5E7EB]">
                    <Image 
                      src="/component/landing-page/project/main/furzzle-800-500.png" 
                      alt="Furzzle" 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      unoptimized 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#330819]">Furzzle</h3>
                  </div>
                </div>
              </Link>

              {/* Grapic Design */}
              <Link href="/project/watch">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <div className="aspect-[16/9] bg-[#E5E7EB]">
                    <Image 
                      src="/component/landing-page/project/main/watch-800-500.png" 
                      alt="Grapic Design" 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      unoptimized 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#330819]">Watch</h3>
                  </div>
                </div>
              </Link>

              {/* 우리동네 부동산 */}
              <Link href="/project/properties">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <div className="aspect-[16/9] bg-[#E5E7EB]">
                    <Image 
                      src="/component/landing-page/project/main/estate-800-500.png" 
                      alt="우리동네 부동산" 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      unoptimized 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#330819]">우리 동네 부동산</h3>
                  </div>
                </div>
              </Link>

              {/*Graduate */}
              <Link href="/project/graduate">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <div className="aspect-[16/9] bg-[#E5E7EB]">
                    <Image 
                      src="/component/landing-page/project/main/graduate-800-500.png" 
                      alt="작업하기" 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      unoptimized 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#330819]">Graduate</h3>
                  </div>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}