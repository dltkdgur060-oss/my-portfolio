'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoItem {
  title: string;
  url: string;
  thumb: string;
}

export default function HshgReviewPlayer({ videos }: { videos: VideoItem[] }) {
  // 현재 레이어 팝업으로 띄워서 재생할 유튜브 주소를 기억하는 상태 변수
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* 디자이너님의 오리지널 3열 세로형 카드 레이아웃 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col gap-3">
            {/* 상단 타이틀 넘버링 넘버 */}
            <span className="text-l font-semibold text-gray-500 px-2">
              {index + 1}. {video.title}
            </span>
            
            {/* 카드 본체: 클릭 시 브라우저 이동 없이 정중앙에 유튜브 플레이어가 오버레이로 뜸 */}
            <div 
              onClick={() => setActiveVideoUrl(video.url)}
              className="relative aspect-[9/16] w-full rounded-[32px] overflow-hidden bg-black shadow-sm cursor-pointer group"
            >
              <Image 
                src={video.thumb} 
                alt={video.title} 
                fill 
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* 글래스모피즘 스타일의 미니멀 재생 버튼 블러 UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white fill-current translate-x-0.3" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ──────────────────────────────────────────────────────────────
          ✨ [유튜브 전용 임베드 플레이어 모달 레이어]
          - 기존 오류의 원인이었던 <video> 태그를 전면 폐기했습니다.
          - 글로벌 표준인 <iframe> 태그로 전면 교체하여 유튜브 스트리밍 오작동을 원천 차단합니다.
         ────────────────────────────────────────────────────────────── */}
      {activeVideoUrl && (
        <div 
          onClick={() => setActiveVideoUrl(null)} // 바깥 검은 배경 누르면 플레이어 꺼짐
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          {/* 동영상 화면 스크린 비율 박스 (16:9 와이드 표준 비율) */}
          <div 
            onClick={(e) => e.stopPropagation()} // 비디오 화면 안쪽 눌렀을 땐 꺼지는 버그 방지
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={`${activeVideoUrl}?autoplay=1&modestbranding=1&rel=0`}
              title="YouTube Video Player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}