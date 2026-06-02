'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0); // 0: 나의 여정, 1: 디자인 태도, 2: 실무방법의 정리

  return (
    <>
      <Navbar />

      {/* 상단 큰 회색 영역 - About Me Hero 이미지 */}
      <div className="bg-white min-h-[464px] relative overflow-hidden">
        <Image 
          src="/component/landing-page/AboutMe/desktop-1920.png"
          alt="About Me Hero"
          fill
          className="object-cover"
          priority
        />
        
        {/* Hero Text Overlay - 완벽 중앙 정렬 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-white text-6xl md:text-7xl font-bold tracking-[-2px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            ABOUT ME
          </h1>
        </div>
      </div>

      {/* 아래 전체 영역 - 하얀색 배경 */}
      <div className="bg-white">
   
      {/* 3개 탭 버튼 */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-8 py-3 font-medium rounded-full text-sm tracking-wide transition-all ${
              activeTab === 0
                ? 'bg-[#1DB6B9] text-white'
                : 'bg-white border border-[#1DB6B9] text-[#1DB6B9] hover:bg-[#F0FAFA]'
            }`}
          >
            나의 여정
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-8 py-3 font-medium rounded-full text-sm tracking-wide transition-all ${
              activeTab === 1
                ? 'bg-[#1DB6B9] text-white'
                : 'bg-white border border-[#1DB6B9] text-[#1DB6B9] hover:bg-[#F0FAFA]'
            }`}
          >
            디자인 태도
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-8 py-3 font-medium rounded-full text-sm tracking-wide transition-all ${
              activeTab === 2
                ? 'bg-[#1DB6B9] text-white'
                : 'bg-white border border-[#1DB6B9] text-[#1DB6B9] hover:bg-[#F0FAFA]'
            }`}
          >
            실무방법의 정리
          </button>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      {activeTab === 0 && (
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="relative max-w-[820px] mx-auto">
            {/* 세로 라인 */}
            <div className="absolute left-1/2 top-[14px] bottom-8 w-px bg-[#1DB6B9]"></div>

            {/* 2021-2022 */}
            <div className="flex mb-16 items-start">
              <div className="flex-1 text-right pr-8">
                <div className="text-[#1DB6B9] font-bold text-2xl tracking-[-0.025em] mt-[-8px]">2021 - 2022</div>
              </div>
              <div className="w-8 flex justify-center relative z-10">
                <div className="w-4 h-4 border-4 border-[#1DB6B9] bg-white rounded-full"></div>
              </div>
              <div className="flex-1 pl-[32px]">
                <div className="space-y-8 text-[15px] leading-[1.4] tracking-[-0.025em]">
                  <div>
                    <div className="font-bold mt-[-4px]">21.11 - 22.08</div>
                    <div className="text-[#330819] font-normal">주) 인바디 - UI/UX 디자이너 (계약직)</div>
                    <div className="mt-2 text-[#330819] text-[15px] leading-[1.4]">
                      화면 수정 및 제품 설명서 수정<br />기기 테스트 관련 다각군 커뮤니케이션
                    </div>
                  </div>
                  <div>
                    <div className="font-bold mt-[-4px]">22.08</div>
                    <div className="text-[#330819]">프로젝트 마무리 및 인수인계 완료</div>
                  </div>
                  <div>
                    <div className="font-bold mt-[-4px]">22.08 - 10</div>
                    <div className="text-[#330819]">한국도로공사 도로경관디자인 시설물<br />디자인 공모전 장려상 수상</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023-2024 */}
            <div className="flex mb-16 items-start">
              <div className="flex-1 text-right pr-8">
                <div className="text-[#1DB6B9] font-bold text-2xl tracking-[-0.025em] mt-[-8px]">2023 - 2024</div>
                
                <div className="mt-2 text-[15px] leading-[1.4] tracking-[-0.025em] font-light text-[#666666] pt-4">
                  <div className='font-bold'>23.06 - 24.12</div>공공시설물 디자인 경험을 통해<br />물리적 사용자 경험을 경험하며,<br />인바디에서 작업했던 UI/UX의<br />작업이 생각나게 되어 직업을 전환함.
                </div>
              </div>
              <div className="w-8 flex justify-center relative z-10">
                <div className="w-4 h-4 border-4 border-[#1DB6B9] bg-white rounded-full"></div>
              </div>
              <div className="flex-1 pl-[32px]">
                <div className="space-y-8 text-[15px] leading-[1.4] tracking-[-0.025em]">
                  <div className='mt-[-4px]'><span className="font-bold">23.02 - 05</span><br />주) 자인 - 인턴활동<br />공공시설물 디자인에이전시 회사</div>
                  <div className='mt-[-4px]'><span className="font-bold">23.06~</span><br />웹 기술 독학으로 UI/UX 기술 기반 강화<br />(HTML, CSS)</div>
                  <div className='mt-[-4px]'><span className="font-bold">24.02 - 06</span><br />팀 스파르타<br />UI/UX 부트캠프 참여</div>
                  <div className='mt-[-4px]'><span className="font-bold">24.07 - 12</span><br />티몬 앱 개인 사이드 프로젝트<br />(지인 5명 직접 인터뷰 진행)<br />및 지원용 포트폴리오 제작</div>
                </div>
              </div>
            </div>

            {/* 2025-2026 */}
            <div className="flex items-start">
              <div className="flex-1 text-right pr-8">
                <div className="text-[#1DB6B9] font-bold text-2xl tracking-[-0.025em] mt-[-8px]">2025 - 2026</div>
                
                <div className="mt-2 text-[15px] leading-[1.4] tracking-[-0.025em] font-light text-[#666666] pt-4">
                  <div className='font-bold'>25.09</div>개인 팀 사이드 프로젝트<br />팀을 이루어 서비스 앱 기획<br />우리동네 부동산 UI/UX 작업<br />현재 스타트업 지원 사업에 지원하고 있는 중<br />7월 서비스 런칭 예정
                </div>
              </div>
              <div className="w-8 flex justify-center relative z-10">
                <div className="w-4 h-4 border-4 border-[#1DB6B9] bg-white rounded-full"></div>
              </div>
              <div className="flex-1 pl-[32px]">
                <div className="space-y-8 text-[15px] leading-[1.4] tracking-[-0.025em]">
                  <div className='mt-[-4px]'><span className="font-bold">25.02 - 05</span><br />주) 애드에이블 인턴<br />앱 Smart Breath Air Pro 리디자인 주도</div>
                  <div className='mt-[-4px]'><span className="font-bold">25.05 - 26.03</span><br />정규직 전환 후 지속 근무<br />앱 리디자인 이후 주요 성과<br />Harley of London<br />투자 유치 프로세스 지원 (LC 계약 체결)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. 디자인 태도 */}
      {activeTab === 1 && (
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-20">
            {/* 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#1DB6B9] rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Image src="/component/naming/aboutMe/userInsight.svg" alt="사용자 인사이트" width={80} height={80} unoptimized />
              </div>
              <p className="text-sm font-medium text-[#330819]">사용자 인사이트</p>
            </div>
            {/* 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#083233] rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Image src="/component/naming/aboutMe/activating-attending.svg" alt="적극적 태도, 행동력" width={80} height={80} unoptimized />
              </div>
              <p className="text-sm font-medium text-[#330819]">적극적 태도, 행동력</p>
            </div>
            {/* 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#1DB6B9] rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Image src="/component/naming/aboutMe/serviceValue.svg" alt="무형적 서비스 가치" width={80} height={80} unoptimized />
              </div>
              <p className="text-sm font-medium text-[#330819]">무형적 서비스 가치</p>
            </div>
            {/* 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#083233] rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Image src="/component/naming/aboutMe/goodUX.svg" alt="심미적, 직관적 승화" width={80} height={80} unoptimized />
              </div>
              <p className="text-sm font-medium text-[#330819]">심미적, 직관적 승화</p>
            </div>
            {/* 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#1DB6B9] rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Image src="/component/naming/aboutMe/insight.svg" alt="인사이트 기반 방향" width={80} height={80} unoptimized />
              </div>
              <p className="text-sm font-medium text-[#330819]">인사이트 기반 방향</p>
            </div>
            {/* 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#083233] rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Image src="/component/naming/aboutMe/understandiing-user.svg" alt="현장 맥락 이해" width={80} height={80} unoptimized />
              </div>
              <p className="text-sm font-medium text-[#330819]">현장 맥락 이해</p>
            </div>
          </div>

          {/* 디자인 태도 문단 - 피그마 100% 일치 */}
          <p className="max-w-3xl mx-auto text-center text-[#330819] text-sm leading-[1.4] tracking-[-0.01em]">
            UIUX를 그저 심미적으로만 신경쓰기보단, 내가 얼마나 사용자가<br />
            인지를 잘 하고 사용성있게 접근하여 서비스를 성장시키는 일에<br />
            집중하는 방향을 가지고 디자인을 하는 사람입니다.
          </p>
        </div>
      )}

      {/* 3. 실무방법의 정리 */}
      {activeTab === 2 && (
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="max-w-5xl mx-auto space-y-24">

            {/* 1-point */}
            <div>
              <Image
                src="/component/1-point.png"
                alt="궁금한 점이 생기거나 PM에게 여쭤봐야 할 요소들"
                width={1200}
                height={800}
                className="mx-auto rounded-3xl shadow-sm w-full"
                unoptimized
              />
              <p className="text-center text-[#330819] text-base leading-relaxed mt-8 max-w-2xl mx-auto">
                궁금한 점이 생기거나<br />
                PM에게 여쭤봐야 할 요소들은
              </p>
            </div>

            {/* 2-point */}
            <div>
              <Image
                src="/component/2-point.png"
                alt="즉시즉시 소통하며 미팅"
                width={1200}
                height={800}
                className="mx-auto rounded-3xl shadow-sm w-full"
                unoptimized
              />
              <p className="text-center text-[#330819] text-base leading-relaxed mt-8 max-w-2xl mx-auto">
                즉시즉시 소통하며 필요시 회의실을 예약하여<br />
                필요한 분들과 같이 미팅을 합니다.
              </p>
            </div>

            {/* 3-point */}
            <div>
              <Image
                src="/component/3-point.png"
                alt="디자인 협업은 Figma"
                width={1200}
                height={800}
                className="mx-auto rounded-3xl shadow-sm w-full"
                unoptimized
              />
              <p className="text-center text-[#330819] text-base leading-relaxed mt-8 max-w-2xl mx-auto">
                디자인 협업은 주로 Figma로 진행을 하는 편이며
              </p>
            </div>

            {/* 4-point */}
            <div>
              <Image
                src="/component/4-point.png"
                alt="적극적인 AI 사용"
                width={1200}
                height={800}
                className="mx-auto rounded-3xl shadow-sm w-full"
                unoptimized
              />
              <p className="text-center text-[#330819] text-base leading-relaxed mt-8 max-w-2xl mx-auto">
                적극적인 AI 사용으로 그래픽 작업 /<br />
                UX 적인 조언 / 사용자 경험 탐구를 하고 있습니다.
              </p>
            </div>

          </div>

          {/* 맨 위로 가기 플로팅 버튼 (Glass 효과) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-12 right-12 z-50 w-[50px] h-[50px] rounded-full 
                       bg-white/20 border-8-transparent border-black/30 backdrop-blur-sm
                       flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200
                       shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.2)]"
          >
            {/* 상단 하이라이트 (Glass 효과) */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255, 255, 255, 0.14)_0%,transparent_70%)]"></div>
            
            {/* 위로 화살표 */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
      </div> {/* bg-white wrapper 닫기 */}
    </>
  );
}