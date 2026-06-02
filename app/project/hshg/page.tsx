"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import NextPrev from "../../components/NextPrev";
import { ALL_PROJECTS } from "../../constants/projectData";
import DownloadDropdown from "../../components/DownloadDropdown";
import TopFloatingButton from "../../components/TopFloatingButton";
import HshgReviewPlayer from "../../components/HshgReviewPlayer"; // ✨ 유튜브 알맹이 부품

export default function HshgProjectPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [reviewSubTab, setReviewSubTab] = useState("video"); // ✨ 원래 쓰시던 서브탭 상태 보존!

  // 데이터 통합 박스에서 hshg 정보를 가져옵니다.
  const hshgData = ALL_PROJECTS.hshg;

  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[464px] bg-white">
        <Image
          src="/component/landing-page/project/HSHG-1920.png"
          alt="Hero" fill priority className="object-cover brightness-80"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-center text-white text-5xl md:text-7xl font-semibold leading-[1.2] drop-shadow-lg">
            Harley of London
          </h1>
        </div>
      </section>

      {/* Local Navigation */}
      <nav className="py-6 bg-[#F1F1F1] border-b border-gray-200">
        <div className="flex flex-wrap gap-3 max-w-7xl mx-auto px-6">
          <Link href="/project/smbap">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-full text-sm font-medium transition-all hover:bg-gray-50 active:scale-95">
              SMART BREATHE AIR PRO
            </button>
          </Link>
          <button className="px-6 py-3 bg-black rounded-full text-white text-sm font-medium transition-all active:scale-95">
            Harley of London
          </button>
        </div>
      </nav>

      <main className="overflow-hidden max-w-7xl mx-auto pt-4 pb-20 px-6">
        {/* Main Tabs */}
        <div className="flex mb-10 border-b border-gray-200">
          {["개요", "작품 리뷰"].map((label, index) => (
            <button
              key={label} onClick={() => setActiveTab(index)}
              className={`flex-1 py-4 text-base font-medium border-b-2 transition-all duration-300 ${activeTab === index ? "border-[#1DB6B9]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
              style={{ color: activeTab === index ? "#1DB6B9" : "" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Title & Download Dropdown */}
        <div className="flex justify-between items-center w-full mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{activeTab === 0 ? "개요" : "작품 리뷰"}</h3>
          <DownloadDropdown files={hshgData.files} />
        </div>

        <div className="relative min-h-[300px]">
          {activeTab === 0 ? (
            /* --- Overview Tab --- */
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed break-keep">
              <p className="mb-6">
                글로벌 의료 그룹 'Harley of London'과 (주)애드에이블이 협력한 HSHG(라이프케어/헬스케어) 프로젝트에 참여하여, 핵심 기기인 'Smart Breathe Air Pro'의 UI/UX 리디자인을 주도했습니다. 사용자 중심의 직관적인 인터페이스 개선을 통해 제품의 가치를 높였고, 이는 Harley of London으로부터 성공적인 투자 유치(LC 체결)를 이끌어내는 데 크게 기여했습니다.
              </p>
              <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl shadow-inner">
                <p className="m-0 text-gray-800">
                  또한, 프로젝트가 본격화된 이후에는 브랜드의 철학적 이념을 담은 홍보 영상 및 제품 가이드를 총괄 제작하며 파트너사(HSHG Korea)와의 원활한 커뮤니케이션과 브랜딩 확립에 적극적으로 임했습니다.
                </p>
              </div>
            </article>
          ) : (
            /* --- Work Review Tab --- */
            <div className="flex flex-col">
              {/* 디자이너님의 오리지널 서브 탭 디자인 100% 유지 */}
              <div className="flex gap-6 mb-12">
                <button onClick={() => setReviewSubTab("video")} className={`text-lg font-bold transition-colors duration-200 ${reviewSubTab === "video" ? "text-[#1DB6B9]" : "text-[#d9d9d9] hover:text-[#CCCCCC]"}`}>영상</button>
                <div className="self-center w-[1px] h-5 bg-gray-200" />
                <button onClick={() => setReviewSubTab("pdf")} className={`text-lg font-bold transition-colors duration-200 ${reviewSubTab === "pdf" ? "text-[#1DB6B9]" : "text-[#d9d9d9] hover:text-[#CCCCCC]"}`}>PDF</button>
              </div>

              {reviewSubTab === "video" ? (
                /* ──────────────────────────────────────────────────────────
                    ✨ [정밀 교체 완료] 디자이너님이 짚어주신 비디오 본문 구역
                    - 겉모습 탭은 그대로 두고 알맹이만 유튜브 전용 모달 플레이어 폼으로 매칭!
                   ────────────────────────────────────────────────────────── */
                <HshgReviewPlayer videos={hshgData.review.videos} />
              ) : (
                /* 디자이너님의 오리지널 PDF 뷰어 리스트 & 슬라이더 디자인 100% 유지 */
                <div className="flex flex-col gap-12 pb-16">
                  {hshgData.review.pdfPreviews.map((pdf, idx) => (
                    <div key={idx} className="w-full">
                      <p className="px-2 mb-4 text-md font-bold text-gray-700">{idx + 1}. {pdf.title}</p>
                      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-2 pb-6">
                        {pdf.images.map((imgSrc, imgIdx) => (
                          <div key={imgIdx} className="relative flex-none overflow-hidden group cursor-pointer snap-start w-[320px] md:w-[480px] aspect-video bg-gray-50 border border-transparent rounded-2xl shadow-sm transition-all duration-300 hover:border-[#1DB6B9] hover:shadow-md">
                            <Image src={imgSrc} alt={`${pdf.title} page ${imgIdx + 1}`} fill className="object-cover" />
                            <div className="absolute inset-0 z-10 pointer-events-none bg-transparent transition-colors duration-300 group-hover:bg-[#1DB6B9]/10" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <TopFloatingButton />
      </main>
      
      <NextPrev
        prevHref="/project/smbap" prevTitle="Smart Breathe Air Pro" prevDisabled={false}
        nextHref="#" nextTitle="다음 글이 없습니다." nextDisabled={true}
      />
    </div>
  );
}