'use client';

import { useState, useEffect, useRef } from 'react';

interface FileItem {
  name: string;
  url: string;
  type: string;
}

export default function DownloadButton({ files }: { files: FileItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 파일이 딱 하나인지 확인 (피그마의 Boolean 조건처럼 사용)
  const isSingleFile = files.length === 1;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 공통 버튼 스타일 (여기를 고치면 모든 다운로드 버튼 디자인이 한 번에 바뀝니다!)
  const buttonStyle = `
    group flex items-center px-6 py-3 border rounded-xl shadow-sm transition-all duration-300
    ${isOpen 
      ? 'bg-white border-[#1DB6B9] text-[#1DB6B9]' 
      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-[#1DB6B9] hover:text-white'}
  `;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* 1. 파일이 하나면 바로 링크, 여러 개면 버튼 클릭으로 드롭다운 제어 */}
      {isSingleFile ? (
        <a href={files[0].url} download className={buttonStyle}>
          <div className="flex items-center gap-1.5 mr-2 text-xs font-medium uppercase">
            {/* ✨ 디자이너님 기획 복구: 모바일에선 숨기고 md(태블릿) 이상에서만 'Download' 노출 */}
            <span className="hidden md:inline">Download</span>
            <span>{files[0].type}</span>
          </div>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)} className={buttonStyle}>
          <div className="flex items-center gap-1.5 mr-2 text-xs font-medium uppercase">
            {/* ✨ 디자이너님 기획 복구: 모바일에선 숨기고 md(태블릿) 이상에서만 'Download' 노출 */}
            <span className="hidden md:inline">Download</span>
            <span>List</span>
          </div>
          <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {/* 2. 드롭다운 리스트 (파일이 여러 개일 때만 작동) */}
      {!isSingleFile && isOpen && (
        <div className="absolute right-0 z-50 overflow-hidden mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-b">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Select File</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-red-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="py-1">
            {files.map((file) => (
              <li key={file.url}>
                <a href={file.url} download className="flex items-center justify-between px-4 py-3.5 text-sm text-gray-700 hover:bg-[#F0FDFD] hover:text-[#1DB6B9] transition-colors">
                  <span className="font-medium truncate">{file.name}</span>
                  <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px] text-gray-400 font-bold uppercase">{file.type}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}