// app/layout.tsx
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "상혁 포트폴리오 | UI/UX Designer & Publisher",
  description: "UI/UX 디자인과 퍼블리싱을 동시에 하는 이상혁의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#DCF9F9]">
        {children}
        
        {/* Footer */}
        <footer className="bg-[#083233] text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 justify-start items-start">
              <div>
                <Image src="/component/logo-60.svg" alt="상혁 Logo" width={60} height={60} className="w-[60px] h-[60px]" />
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <span className="text-[#1DB6B9]">●</span>
                  포트폴리오
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <a href="#" className="flex items-center gap-2 hover:text-[#1DB6B9]">개요 <img src="/component/naming/icon/external-link-wh.svg" alt="External Link" className="w-4 h-4" /></a>
                  <a href="#" className="flex items-center gap-2 hover:text-[#1DB6B9]">사용한 스킬 <img src="/component/naming/icon/external-link-wh.svg" alt="External Link" className="w-4 h-4" /></a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <span className="text-[#1DB6B9]">●</span>
                  피그마 링크
                </div>
                <div className="flex items-center gap-6 mb-4">
                  <a href="/app/project/furzzle" className="flex items-center gap-2 hover:text-[#1DB6B9]">Furzzle <img src="/component/naming/icon/external-link-wh.svg" alt="External Link" className="w-4 h-4" /></a>
                  <a href="/app/project/smbap" className="flex items-center gap-2 hover:text-[#1DB6B9]">Smart Breathe Air PRO <img src="/component/naming/icon/external-link-wh.svg" alt="External Link" className="w-4 h-4" /></a>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="flex items-center gap-2 hover:text-[#1DB6B9]">side-Project <img src="/component/naming/icon/external-link-wh.svg" alt="External Link" className="w-4 h-4" /></a>
                  <a href="#" className="flex items-center gap-2 hover:text-[#1DB6B9]">우리동네부동산 <img src="/component/naming/icon/external-link-wh.svg" alt="External Link" className="w-4 h-4" /></a>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#1DB6B9]/30 my-12"></div>

            <div className="flex flex-col md:flex-row justify-between text-sm gap-6">
              <div className="space-y-1">
                <div>Tel: +82 01076677119</div>
                <div>Email: ls2012@hanmail.net</div>
                <div>Address: Gyeonggi-do, Korea</div>
              </div>
              <div className="text-[#B0F1F3]">Designed By Lee Sang Hyeok</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}