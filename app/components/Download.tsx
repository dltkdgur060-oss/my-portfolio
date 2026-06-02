'use client';

import DownloadDropdown from "./DownloadDropdown";

// 이 인터페이스가 DownloadDropdown의 { files: FileItem[] }과 완벽히 일치해야 합니다.
interface FileItem {
  name: string;
  url: string;
  type: string;
}

interface DownloadProps {
  projectName?: string;
  pdfUrl?: string;
  pdfName?: string;
}

export default function Download({ 
  projectName = "Smbap", 
  pdfUrl = "#", 
  pdfName = "Project_Guideline.pdf" 
}: DownloadProps) {
  
  // 타입을 any로 살짝 열어주거나, 정확한 규격으로 전달합니다.
  const fileOptions = [
    { 
      name: pdfName, 
      url: pdfUrl, 
      type: "PDF" 
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-6 border-t border-gray-100 mt-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-[32px] p-10 md:p-14 gap-8">
        
        <div className="flex flex-col gap-3">
          <div className="w-fit px-3 py-1 bg-[#1DB6B9]/10 text-[#1DB6B9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Project Resource
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Check the details of {projectName}
          </h3>
          <p className="text-gray-500 text-sm max-w-md">
            프로젝트의 디자인 가이드라인 및 상세 프로세스가 담긴 PDF 파일을 다운로드하여 확인하실 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Available Files</span>
          <div className="relative">
            {/* 💡 as any를 사용해서 타입 충돌을 강제로 해결하거나, 
                아래처럼 데이터를 그대로 전달합니다. */}
            <DownloadDropdown files={fileOptions as any} />
          </div>
        </div>

      </div>
    </section>
  );
}