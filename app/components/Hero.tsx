import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#DCF9F9] pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Image
          src="/component/naming/Project-landing.svg"
          alt="프로젝트 랜딩"
          width={1440}
          height={640}
          className="w-full h-auto mx-auto"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}