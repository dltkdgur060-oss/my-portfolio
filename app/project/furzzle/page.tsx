"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import NextPrev from "../../components/NextPrev";
import { ALL_PROJECTS } from "../../constants/projectData";
import DownloadDropdown from "../../components/DownloadDropdown";
import TopFloatingButton from "../../components/TopFloatingButton";

export default function FurzzlePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const furzzleData = ALL_PROJECTS.furzzle;

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
    if (index === 1) setIsImageLoading(true);
  };

  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[464px] bg-white">
        <Image
          src="/component/landing-page/project/furzzle-1920.png"
          alt="Hero"
          fill
          priority
          className="object-cover brightness-80"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6">
          <div className="w-[80px] h-[80px] bg-white rounded-2xl p-1 shadow-xl flex items-center justify-center">
            <Image 
              src="/component/naming/logo/big/furzzle.svg" 
              alt="Furzzle Logo"
              width={72}
              height={72}
              className="object-contain" 
            />
          </div>
          <h1 className="text-center text-white text-5xl md:text-7xl font-semibold leading-[1.2] drop-shadow-lg">
            FURZZLE
          </h1>
        </div>
      </section>

      {/* Local Navigation */}
      <nav className="py-6 bg-[#F1F1F1] border-b border-gray-200">
        <div className="flex flex-wrap gap-3 max-w-7xl mx-auto px-6">
          <Link href="/project/furzzle">
            <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium active:scale-95 transition-transform">
              FURZZLE
            </button>
          </Link>
          <Link href="/project/properties">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-full text-sm font-medium transition-all hover:bg-gray-50 active:scale-95">
              우리 동네 부동산
            </button>
          </Link>
        </div>
      </nav>

      <main className="overflow-hidden max-w-7xl mx-auto pt-4 pb-20 px-6">
        {/* Main Tabs */}
        <div className="flex mb-10 border-b border-gray-200">
          {["개요", "작품 리뷰"].map((label, index) => (
            <button
              key={label}
              onClick={() => handleTabChange(index)}
              className={`flex-1 py-4 text-base font-medium border-b-2 transition-all duration-300 ${
                activeTab === index 
                  ? "border-[#1DB6B9] text-[#1DB6B9]" 
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Title & Download Dropdown */}
        <div className="flex justify-between items-center w-full mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {activeTab === 0 ? "개요" : "작품 리뷰"}
          </h3>
          <DownloadDropdown files={furzzleData.files} />
        </div>

        <div className="relative min-h-[300px]">
          {activeTab === 0 ? (
            /* --- Overview Tab --- */
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed break-keep">
              <p className="mb-6">
                FURZZLE은 헬스케어분야의 습관 개선목적으로 기획된 부트캠프 작품입니다. 헬스장을 등록한 후 약 70%가 이틀만 나온 이후 나오지 않는다는 데스크리서치에 힘입어 기획하게 되었습니다.
              </p>
              <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl shadow-inner">
                <p className="m-0 text-gray-800">
                  인터뷰이를 평균연령이 30대인 24명으로 잡아 진행한 결과, 건강관리에 초점을 맞추고 <b>습관을 개선하고 싶지만, 시간이 없고 건강관리에 대한 정보가 신뢰성이 떨어지며 꾸준히 습관을 유지하는것이 힘들다</b>는 인사이트를 얻었습니다.
                </p>
              </div>
            </article>
          ) : (
            /* --- Work Review Tab --- */
            <div className="relative flex flex-col items-center pb-16">
              {isImageLoading && (
                <div className="absolute inset-0 z-10 max-w-7xl mx-auto py-2 animate-pulse">
                  <div className="w-full bg-gray-100 rounded-2xl" style={{ height: '800px' }} />
                </div>
              )}
              <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                  src="/component/landing-page/furzzle/furzzle-all.png"
                  alt="Furzzle Work Review Detail"
                  width={3200}
                  height={18992}
                  quality={100}
                  priority
                  onLoadingComplete={() => setIsImageLoading(false)}
                />
              </div>
            </div>
          )}
        </div>
        <TopFloatingButton />
      </main>
      
      <NextPrev
        prevHref="#"
        prevTitle="이전 글이 없습니다."
        prevDisabled={true}
        nextHref="/project/properties"
        nextTitle="우리 동네 부동산"
        nextDisabled={false}
      />
    </div>
  );
}
