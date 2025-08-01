"use client";

import { useRef, useState } from "react";
import Video from "next-video";
import { Play } from "lucide-react";
import awesomeVideo from '/videos/Brand-to-VF.mp4';


export default function VideoPlayerBrand() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="h-full rounded-md flex justify-center relative group">
      <Video
        ref={videoRef}
        src={awesomeVideo}
        className="object-cover rounded-md"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Custom Play Button */}
      {!isPlaying && (
        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8/12 justify-center
                   bg-main text-black px-6 py-3 rounded-full flex items-center gap-1.5 font-semibold
                   hover:bg-main-dark transition-colors shadow-lg text-xs"
        >
          <Play className="w-4 h-4" />
          <span>Learn how to use Hypeo</span>
        </button>
      )}
    </div>
  );
}
