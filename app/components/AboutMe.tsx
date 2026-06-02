import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="bg-[#DCF9F9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#330819] tracking-tight">
            ABOUT ME
          </h2>
          <p className="text-[#1DB6B9] font-medium mt-2">UI/UX Designer & Publisher</p>
        </div>

        {/* aboutMe-1 ~ aboutMe-4 순서대로 애니메이션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* aboutMe-1 */}
          <div className="animate-fadeIn" style={{ animationDelay: '0ms' }}>
            <Image
              src="/component/naming/aboutMe-1.svg"
              alt="About Me 1"
              width={720}
              height={480}
              className="w-full h-auto rounded-3xl shadow-sm"
              unoptimized
            />
          </div>

          {/* aboutMe-2 */}
          <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <Image
              src="/component/naming/aboutMe-2.svg"
              alt="About Me 2"
              width={720}
              height={480}
              className="w-full h-auto rounded-3xl shadow-sm"
              unoptimized
            />
          </div>

          {/* aboutMe-3 */}
          <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
            <Image
              src="/component/naming/aboutMe-3.svg"
              alt="About Me 3"
              width={720}
              height={480}
              className="w-full h-auto rounded-3xl shadow-sm"
              unoptimized
            />
          </div>

          {/* aboutMe-4 */}
          <div className="animate-fadeIn" style={{ animationDelay: '600ms' }}>
            <Image
              src="/component/naming/aboutMe-4.svg"
              alt="About Me 4"
              width={720}
              height={480}
              className="w-full h-auto rounded-3xl shadow-sm"
              unoptimized
            />
          </div>
        </div>

        {/* 보조 아이콘들 */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 opacity-80">
          <Image src="/component/naming/aboutMe/goodUX.svg" alt="Good UX" width={120} height={120} unoptimized />
          <Image src="/component/naming/aboutMe/insight.svg" alt="Insight" width={120} height={120} unoptimized />
          <Image src="/component/naming/aboutMe/userInsight.svg" alt="User Insight" width={120} height={120} unoptimized />
          <Image src="/component/naming/aboutMe/serviceValue.svg" alt="Service Value" width={120} height={120} unoptimized />
          <Image src="/component/naming/aboutMe/activating-attending.svg" alt="Activating" width={120} height={120} unoptimized />
        </div>
      </div>
    </section>
  );
}