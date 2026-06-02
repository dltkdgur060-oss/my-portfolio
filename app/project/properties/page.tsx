"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import NextPrev from "../../components/NextPrev";
import { ALL_PROJECTS } from "../../constants/projectData";
import DownloadDropdown from "../../components/DownloadDropdown";
import TopFloatingButton from "../../components/TopFloatingButton";

export default function PropertiesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // 🚨 projectData.ts에 properties 데이터가 있어야 합니다.
  const pageData = ALL_PROJECTS.properties;

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
    if (index === 1) setIsImageLoading(true);
    else setIsImageLoading(false);
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[464px] bg-white">
        <Image
          src="/component/landing-page/project/estate-1920.png"
          alt="Hero" fill priority className="object-cover brightness-80"
        />
       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6">
          <div className="w-[80px] h-[80px] bg-white rounded-2xl p-1 shadow-xl flex items-center justify-center">
            <img 
              className='w-full h-full object-contain' 
              src="/component/naming/logo/big/estate.svg" 
              alt="우리 동네 부동산 Logo" 
            />
          </div>
          <h1 className="text-center text-white text-5xl md:text-7xl font-bold tracking-[-2px] leading-[1.2] drop-shadow-lg">
            우리 동네 부동산
          </h1>
        </div>
      </section>

      {/* Local Navigation */}
      <nav className="py-6 bg-[#F1F1F1] border-b border-gray-200">
        <div className="flex flex-wrap gap-3 max-w-7xl mx-auto px-6">
          <Link href="/project/furzzle">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-all">Furzzle</button>
          </Link>
          <Link href="/project/properties">
          <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium active:scale-95 transition-transform">우리 동네 부동산</button>
          </Link>
        </div>
      </nav>

      <main className="overflow-hidden max-w-7xl mx-auto pt-4 pb-20 px-6">
        <div className="flex mb-10 border-b border-gray-200">
          {["개요", "작품 리뷰"].map((label, index) => (
            <button key={label} onClick={() => handleTabChange(index)} className={`flex-1 py-4 text-base font-medium border-b-2 transition-all duration-300 ${activeTab === index ? "border-[#1DB6B9] text-[#1DB6B9]" : "border-transparent text-gray-500 hover:text-gray-700"}`}>{label}</button>
          ))}
        </div>

        <div className="flex justify-between items-center w-full mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{activeTab === 0 ? "개요" : "작품 리뷰"}</h3>
          {/* files 데이터가 없을 경우를 대비한 안전 장치 추가 */}
          {pageData?.files && <DownloadDropdown files={pageData.files} />}
        </div>

        <div className="relative min-h-[300px]">
          {activeTab === 0 ? (
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed break-keep">
              {/* 🚨 디자이너님: 여기에 개요 텍스트를 작성해주세요 */}
              <p className="mb-6">우리 동네 부동산은 매도인들을 위한 Web 서비스 플랫폼입니다. 현재 스프린트 방식으로 UX디자인 아티클을 기반으로 UI를 디자인하였고 7월에 서비스 할 예정입니다.</p>
              <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl shadow-inner">
                <p className="m-0 text-gray-800">
                  <b>매수인</b>들을 위한 직방, 다방과 같은 서비스는 아주 잘 되어있는 반면, <b>매도인</b>들을 위한 서비스는 분명 존재하지만 비공개적인 네트워크상에서만 이루어지는 경우가 많거나 빠른 공실을 메울 수 있는 서비스는 될 수 없습니다. 그래서 우리 동네 부동산은 맵에 표시된 중개사들을 범위별로 표시하여 보이는 많은 중개사들에게 동시에 매물 DB를 발송 할 수 있는 서비스를 세상에 내놓을 예정입니다.
                </p>
              </div>
            </article>
          ) : (
            <div className="relative flex flex-col items-center pb-16">
              {isImageLoading && (
                <div className="absolute inset-0 z-10 max-w-7xl mx-auto py-2 animate-pulse">
                  <div className="w-full bg-gray-100 rounded-2xl" style={{ height: '800px' }} />
                </div>
              )}
              <div 
                className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-opacity duration-500 ${
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <Image
                  // 🚨 하드코딩된 경로 대신 pageData의 데이터를 동적으로 불러오도록 수정
                  src={pageData?.review?.pdfPreviews?.[0]?.images?.[0] || "/component/pdf/review/estate.png"} 
                  alt="Properties Work Review Detail"
                  width={3200} height={18992} quality={100} priority
                  onLoadingComplete={() => setIsImageLoading(false)}
                  // 🚨 이미지가 없거나 깨졌을 때 로딩 상태를 해제하여 opacity-0에 갇히는 것을 방지
                  onError={() => setIsImageLoading(false)} 
                />
              </div>
            </div>
          )}
        </div>
        <TopFloatingButton />
      </main>
      
      <NextPrev
        prevHref="/project/furzzle" prevTitle="Furzzle" prevDisabled={false}
        nextHref="/project/side-project" nextTitle="Side-Project" nextDisabled={false}
      />
    </div>
  );
}