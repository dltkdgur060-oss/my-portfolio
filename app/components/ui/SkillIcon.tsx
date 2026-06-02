// app/components/ui/SkillIcon.tsx  ← 새로 만드세요
import Image from 'next/image';

type SkillIconProps = {
  src: string;
  alt: string;
  size?: 'sm' | 'md';   // sm = 모바일, md = 데스크톱
};

export default function SkillIcon({ src, alt, size = 'md' }: SkillIconProps) {
  const sizeClass = size === 'sm' ? 'w-20 h-20' : 'w-24 h-24';
  const iconSize = size === 'sm' ? '68px' : '80px';

  return (
    <div className={`${sizeClass} bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0`}>
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className={`w-[${iconSize}] h-[${iconSize}] object-contain`}
        unoptimized
      />
    </div>
  );
}