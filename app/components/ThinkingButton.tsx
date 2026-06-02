'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import lottie from 'lottie-web';

export default function ThinkingButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/lottie/btn-v2.json',
    });

    animationRef.current.addEventListener('complete', () => {
      setTimeout(() => {
        router.push('/about');
      }, 300);
    });

    return () => {
      if (animationRef.current) animationRef.current.destroy();
    };
  }, [router]);

  const handleClick = () => {
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current.play();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mx-auto block px-20 py-4 bg-[#1DB6B9] text-white rounded-[20px] hover:bg-[#0f8a8d] active:scale-95 transition-all"
    >
      Thinking about me
    </button>
  );
}