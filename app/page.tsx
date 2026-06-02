// app/page.tsx
'use client';

import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ProjectCarousel from './components/ProjectCarousel';
import ThinkingButton from './components/ThinkingButton';
import BackToTopButton from './components/BackToTopButton';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#DCF9F9] min-h-screen">
      <Navbar />

      {/* HeroCarousel */}
      <HeroCarousel />

      {/* Skill 섹션 - 개별 마진 20px (mb-5) */}
      <section className="pt-12 pb-16 bg-white mb-5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#330819] mb-8">Skill</h2>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 justify-items-center">
            {/* Skill 아이콘들 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
                <Image src="/component/naming/logo/big/illustrator.svg" alt="Illustrator" width={80} height={80} className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] object-contain" unoptimized />
              </div>
              <p className="text-sm mt-3 text-[#330819]">Illustrator</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
                <Image src="/component/naming/logo/big/afterEffect.svg" alt="After Effect" width={80} height={80} className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] object-contain" unoptimized />
              </div>
              <p className="whitespace-nowrap text-sm text-center mt-3 text-[#330819]">After-Effect</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
                <Image src="/component/naming/logo/big/figma.svg" alt="Figma" width={80} height={80} className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] object-contain" unoptimized />
              </div>
              <p className="text-sm mt-3 text-[#330819]">Figma</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
                <Image src="/component/naming/logo/big/keyshot.svg" alt="Keyshot" width={80} height={80} className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] object-contain" unoptimized />
              </div>
              <p className="text-sm mt-3 text-[#330819]">Keyshot</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
                <Image src="/component/naming/logo/big/grok.svg" alt="Grok" width={80} height={80} className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] object-contain" unoptimized />
              </div>
              <p className="text-sm mt-3 text-[#330819]">Grok</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
                <Image src="/component/naming/logo/big/midjourney.svg" alt="Midjourney" width={80} height={80} className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] object-contain" unoptimized />
              </div>
              <p className="text-sm mt-3 text-[#330819]">Midjourney</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
                <Image src="/component/naming/logo/big/photoshop.svg" alt="Photoshop" width={80} height={80} className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] object-contain" unoptimized />
              </div>
              <p className="text-sm mt-3 text-[#330819]">Photoshop</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
                <Image src="/component/naming/logo/big/premiere.svg" alt="Premiere" width={80} height={80} className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] object-contain" unoptimized />
              </div>
              <p className="text-sm mt-3 text-[#330819]">Premiere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects 섹션 - ProjectCarousel (스와이프 방식) */}
      <section className="py-16 bg-[#DCF9F9] mb-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center px-6 gap-3 mb-12">
            <h2 className="text-4xl font-bold text-[#330819]">And</h2>
            <img src="/component/thinking-out.svg" alt="And" className="w-8 h-8 object-contain" />
            <h2 className="text-4xl font-bold text-[#1DB6B9]">Projects</h2>
          </div>

          <ProjectCarousel />
        </div>
      </section>

      {/* Thinking Button + Back to Top - 20px 마진 적용 */}
      <section className="pt-20 pb-20 bg-white mb-5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <link href="/app/about" />
          <ThinkingButton />
          <div className="mt-8">
            <BackToTopButton />
          </div>
        </div>
      </section>
    </main>
  );
}