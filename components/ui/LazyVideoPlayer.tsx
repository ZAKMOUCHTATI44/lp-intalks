"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import { Play } from "lucide-react";

interface LazyVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const LazyVideoPlayer = ({
  src,
  poster,
  className = "",
  autoPlay = false,
  muted = true,
  controls = true,
}: LazyVideoPlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted] = useState(muted);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isLoaded]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-gray-900 ${className}`}
    >
      {isLoaded && (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted={isMuted}
            controls={controls}
            autoPlay={autoPlay}
            className="h-full w-full object-cover"
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Custom play button overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/15">
              <Button
                onClick={togglePlay}
                className={`transform transition-opacity duration-300  bg-main text-black px-6 py-3 hover:bg-transparent border border-main flex items-center gap-3.5 ${
                  isPlaying ? "opacity-0" : "opacity-100"
                }`}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <Play />
                Learn how to use Hypeo Ai
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LazyVideoPlayer;
