'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import NextPrev from "../../components/NextPrev";
import DownloadDropdown from "../../components/DownloadDropdown";
import TopFloatingButton from '../../components/TopFloatingButton';

export default function SmbapPage() {
  const smbapFiles = [
    {
      name: "Smbap Brand Guideline",
      url: "/component/landing-page/smbap/SBA-explain.pdf",
      type: "PDF"
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
    if (index === 1) setIsImageLoading(true);
    else setIsImageLoading(false);
  };

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden min-h-[464px] bg-white">
        <Image 
          src="/component/landing-page/project/smbap-1920.png"
          alt="Smart Breathe Air Pro Hero" fill priority className="object-cover brightness-60"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-center text-white text-5xl md:text-7xl font-semibold font-['Nanum_Square_Round'] leading-[1.1] tracking-[0.001em] drop-shadow-lg">
            SMART BREATHE<br />AIR PRO
          </h1>
        </div>
      </section>

      <nav className="py-6 bg-[#F1F1F1] border-b border-gray-200">
        <div className="flex flex-wrap gap-3 max-w-7xl mx-auto px-6">
          <Link href="/project/smbap">
            <button className="px-6 py-3 bg-black rounded-full text-white text-sm font-medium transition-transform active:scale-95">
              SMART BREATHE AIR PRO
            </button>
          </Link>
          <Link href="/project/hshg">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-full text-sm font-medium transition-transform hover:bg-gray-50 active:scale-95">
              Harley of London
            </button>
          </Link>
        </div>
      </nav>

      <main className="relative pt-4 pb-1 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex mb-10 border-b border-gray-200">
            {['개요', '작품 리뷰'].map((label, index) => (
              <button
                key={label} onClick={() => handleTabChange(index)}
                className={`flex-1 py-4 text-base font-medium border-b-2 transition-all duration-300 ${activeTab === index ? 'border-[#1DB6B9] text-[#1DB6B9]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center w-full max-w-7xl mx-auto mb-6">
            <h3 className="pt-1 text-2xl font-bold text-gray-900">{activeTab === 0 ? '개요' : '작품 리뷰'}</h3>
            <DownloadDropdown files={smbapFiles}/>
          </div>
          <hr className="w-full max-w-7xl mx-auto mb-1 border-[#ffffff]" />

          <div className="relative min-h-[300px]">
            {activeTab === 0 ? (
              <article className="max-w-7xl mx-auto py-2">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed tracking-tight break-keep">
                  <p className="mb-4">
                    스마트 브리드 에어 프로는 호흡 재활을 위한 의료기기 2등급 스마트 호흡 훈련 기기 전용 <span className="ml-1 text-gray-900 font-bold">태블릿 애플리케이션</span>입니다.
                  </p>
                  <p className="mb-8">기존 앱은 복잡한 정보 구조와 오래된 UI로 인해 사용자가 훈련 데이터를 직관적으로 파악하기 어려웠습니다.</p>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                    <p className="mb-0 text-gray-800">
                      <span className="text-[#1DB6B9] font-bold">ADDABLE 디자인 시스템</span>을 기반으로 전면 리디자인을 진행하여, 
                      <strong className="ml-1 text-gray-900 underline decoration-[#1DB6B9]/30 underline-offset-4"><br />의료진과 환자 모두</strong>가 쉽게 사용할 수 있는 인터페이스로 개선하였습니다.
                    </p>
                  </div>
                </div>
              </article>
            ) : (
              <div className="relative flex flex-col items-center pb-16">
                {isImageLoading && (
                  <div className="absolute inset-0 z-10 max-w-7xl mx-auto py-2 animate-pulse">
                    <div className="w-full bg-gray-100 rounded-2xl" style={{ height: '800px' }} />
                  </div>
                )}
                <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src="/component/landing-page/smbap/SBA-explain.png" alt="Work Review Detail"
                    width={3200} height={18992} quality={100} priority
                    onLoadingComplete={() => setIsImageLoading(false)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <TopFloatingButton />
        
        {/* ✨ 끊어져 있던 닫기 태그 완벽 복구 */}
        <NextPrev
          prevHref="#" prevTitle="이전 글이 없습니다." prevDisabled={true}
          nextHref="/project/hshg" nextTitle="Harley of London" nextDisabled={false}
        />
      </main>
    </>
  );
}