'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectData } from '../../constants/projectData';
import VideoItem from './VideoItem';
import DownloadDropdown from '../../components/DownloadDropdown';
import TopFloatingButton from '../../components/TopFloatingButton';
import NextPrev from '../../components/NextPrev';

interface Props {
  data: ProjectData;
}

export default function ProjectTemplate({ data }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [reviewSubTab, setReviewSubTab] = useState('video');
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white font-['Nanum_Square_Round']">
      {/* 1. Hero Section */}
      <section className="
        relative overflow-hidden 
        min-h-[464px] bg-white
      ">
        <Image 
          src={data.heroImage}
          alt={data.title} fill priority
          className="object-cover brightness-80"
        />
        <div className="
          absolute inset-0 z-10 
          flex items-center justify-center
        ">
          <h1 className="
            text-center text-white 
            text-5xl md:text-7xl font-semibold 
            leading-[1.2] drop-shadow-lg whitespace-pre-line
          ">
            {data.title}
          </h1>
        </div>
      </section>

      {/* 2. Project Navigation */}
      <nav className="
        py-6 bg-[#F1F1F1] border-b border-gray-200
      ">
        <div className="
          flex flex-wrap gap-3 
          max-w-7xl mx-auto px-6
        ">
          <Link href="/project/smbap">
            <button className={`
              px-6 py-3 rounded-full text-sm font-medium transition-all
              ${data.id === 'smbap' ? 'bg-black text-white' : 'bg-white border border-gray-300 hover:bg-gray-50 active:scale-95'}
            `}>
              SMART BREATHE AIR PRO
            </button>
          </Link>
          <Link href="/project/hshg">
            <button className={`
              px-6 py-3 rounded-full text-sm font-medium transition-all
              ${data.id === 'hshg' ? 'bg-black text-white' : 'bg-white border border-gray-300 hover:bg-gray-50 active:scale-95'}
            `}>
              Harley of London
            </button>
          </Link>
        </div>
      </nav>

      {/* 3. Main Content Area */}
      <main className="
        overflow-hidden max-w-7xl mx-auto 
        pt-4 pb-20 px-6
      ">
        {/* Tab Headers */}
        <div className="flex border-b border-gray-200 mb-10">
          {['개요', '작품 리뷰'].map((label, index) => (
            <button
              key={label}
              onClick={() => setActiveTab(index)}
              className={`
                flex-1 py-4 text-base font-medium border-b-2 transition-all duration-300 
                ${activeTab === index ? 'border-[#1DB6B9] text-[#1DB6B9]' : 'border-transparent text-gray-500 hover:text-gray-700'}
              `}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Title & Download */}
        <div className="flex justify-between items-center w-full mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {activeTab === 0 ? '개요' : '작품 리뷰'}
          </h3>
          <DownloadDropdown files={data.files} />
        </div>

        {/* Content Area */}
        <div className="relative min-h-[400px]">
          {activeTab === 0 ? (
            /* --- [탭 0] 개요 구역 --- */
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed break-keep">
              <p className="mb-6">{data.overview.description}</p>
              <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl shadow-inner">
                <p className="text-gray-800 m-0">{data.overview.highlight}</p>
              </div>
            </article>
          ) : (
            /* --- [탭 1] 작품 리뷰 구역 --- */
            <div className="flex flex-col">
              {/* 서브 탭 (영상/PDF 데이터가 둘 다 있을 때만 노출) */}
              {(data.review.videos.length > 0 && data.review.pdfPreviews.length > 0) && (
                <div className="flex gap-6 mb-10">
                  <button onClick={() => setReviewSubTab('video')} className={`text-lg font-bold transition-colors ${reviewSubTab === 'video' ? 'text-[#1DB6B9]' : 'text-[#d9d9d9] hover:text-[#CCCCCC]'}`}>영상</button>
                  <div className="self-center w-[1px] h-5 bg-gray-200" />
                  <button onClick={() => setReviewSubTab('pdf')} className={`text-lg font-bold transition-colors ${reviewSubTab === 'pdf' ? 'text-[#1DB6B9]' : 'text-[#d9d9d9] hover:text-[#CCCCCC]'}`}>PDF</button>
                </div>
              )}

              {/* 영상 리뷰 그리드 (데이터가 있을 때만) */}
              {reviewSubTab === 'video' && data.review.videos.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
                  {data.review.videos.map((video, idx) => (
                    <VideoItem key={idx} video={video} idx={idx} />
                  ))}
                </div>
              )}

              {/* PDF 리뷰 갤러리 (데이터가 있을 때만) */}
              {(reviewSubTab === 'pdf' || data.review.videos.length === 0) && data.review.pdfPreviews.length > 0 && (
                <div className="flex flex-col gap-12 pb-16">
                  {data.review.pdfPreviews.map((pdf, idx) => (
                    <div key={idx} className="w-full">
                      <p className="px-2 mb-4 text-md font-bold text-gray-700">{idx + 1}. {pdf.title}</p>
                      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-2 pb-6">
                        {pdf.images.map((imgSrc, imgIdx) => (
                          <div key={imgIdx} className="relative flex-none w-[320px] md:w-[480px] aspect-video bg-gray-50 border border-transparent rounded-2xl shadow-sm transition-all duration-300 hover:border-[#1DB6B9] hover:shadow-md overflow-hidden group cursor-pointer">
                            <Image src={imgSrc} alt="Preview" fill className="object-cover" />
                            <div className="absolute inset-0 z-10 pointer-events-none bg-transparent transition-colors duration-300 group-hover:bg-[#1DB6B9]/10" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* SMBAP 전용 (긴 설명 이미지 대응) */}
              {data.id === 'smbap' && (
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image 
                    src="/component/landing-page/smbap/SBA-explain.png" 
                    alt="Detail" width={3200} height={18992} quality={100} priority
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <NextPrev {...data.nextPrev} />
      </main>
      <TopFloatingButton />
    </div>
  );
}