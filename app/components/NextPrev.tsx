'use client';

import Link from 'next/link';

interface NextPrevProps {
  prevHref?: string;
  prevTitle?: string;
  prevDisabled?: boolean;
  nextHref?: string;
  nextTitle?: string;
  nextDisabled?: boolean;
}

export default function NextPrev({ 
  prevHref, 
  prevTitle, 
  prevDisabled = false, 
  nextHref, 
  nextTitle, 
  nextDisabled = false 
}: NextPrevProps) {
  return (
    <nav className="max-w-7xl mx-auto w-full flex items-center justify-between pl-6 pr-6 pb-10 mt-24 pt-10 border-t border-gray-100">
      {/* --- LIST --- */}
      <div className="absolute mb-60 flex-1 flex justify-center">
        <Link href="/project" className="block">
          <button className="px-20 py-4 bg-gray-50 border border-[#a9a9a9] border-[1.5px] text-[#232323] text-[16px] font-normal rounded-full hover:text-[#1DB6B9] hover:font-semibold hover:bg-[#e8ffff] hover:border-[#1DB6B9] transition-all">목록보기</button>
        </Link>
      </div>

      {/* --- PREV SECTION --- */}
      <div className="flex-1 flex justify-start">
        {!prevDisabled && prevHref ? (
          <Link href={prevHref} className="group w-fit block">
            <div className="flex items-center gap-4 text-gray-400 hover:text-[#1DB6B9] transition-all">
              <div className="flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full group-hover:border-[#1DB6B9] group-hover:bg-[#F0FAFA]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" stroke="currentColor" fill="none" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Prev</span>
                <span className="text-sm font-bold text-gray-800 group-hover:text-[#1DB6B9]">{prevTitle}</span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-4 text-gray-900 cursor-not-allowed text-right opacity-40">
            <div className="flex items-center justify-center w-12 h-12 border border-gray-100 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" stroke="currentColor" fill="none" /></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest">Prev</span>
              <span className="text-sm font-bold">{prevTitle || "No Project"}</span>
            </div>
          </div>
        )}
      </div>

      {/* --- NEXT SECTION --- */}
      <div className="flex-1 flex justify-end">
        {!nextDisabled && nextHref ? (
          <Link href={nextHref} className="group w-fit block text-right">
            <div className="flex items-center gap-4 text-gray-400 hover:text-[#1DB6B9] transition-all">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Next</span>
                <span className="text-sm font-bold text-gray-800 group-hover:text-[#1DB6B9]">{nextTitle}</span>
              </div>
              <div className="flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full group-hover:border-[#1DB6B9] group-hover:bg-[#F0FAFA]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" stroke="currentColor" fill="none" /></svg>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-4 text-gray-900 cursor-not-allowed text-right opacity-40">
            <div className="flex flex-col items-end">
              <span className="text-[12px] font-bold uppercase tracking-widest">Next</span>
              <span className="text-sm font-bold">{nextTitle || "No Project"}</span>
            </div>
            <div className="flex items-center justify-center w-12 h-12 border border-gray-100 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" stroke="currentColor" fill="none" /></svg>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}