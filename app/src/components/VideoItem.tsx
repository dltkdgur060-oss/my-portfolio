'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface VideoProps {
  video: {
    title: string;
    url: string;
    thumb: string;
  };
  idx: number;
}

export default function VideoItem({ video, idx }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="
      flex flex-col items-center
    ">
      <p className="
        mb-4 
        text-sm text-gray-500 font-medium 
      ">
        {idx + 1}. {video.title}
      </p>
      <div className="
        relative overflow-hidden group 
        w-full aspect-[9/16] 
        bg-black rounded-3xl shadow-2xl 
      ">
        <video 
          ref={videoRef}
          controls={isPlaying} 
          preload="metadata" 
          className="
            w-full h-full 
            object-cover
          "
        >
          <source src={video.url} type="video/mp4" />
        </video>

        {!isPlaying && (
          <div 
            onClick={handlePlay}
            className="
              absolute inset-0 z-10 
              cursor-pointer
            "
          >
            <Image 
              src={video.thumb} 
              alt={video.title} fill 
              className="
                object-cover 
                transition-transform duration-500 group-hover:scale-105 
              "
            />
            <div className="
              absolute inset-0 flex items-center justify-center 
              bg-black/10 
              transition-all group-hover:bg-black/30 
            ">
              <div className="
                flex items-center justify-center 
                w-16 h-16 
                bg-white/20 backdrop-blur-md 
                border border-white/30 rounded-full shadow-xl
              ">
                <div className="
                  ml-1 
                  w-0 h-0 
                  border-t-[10px] border-t-transparent 
                  border-l-[18px] border-l-white 
                  border-b-[10px] border-b-transparent 
                " />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}