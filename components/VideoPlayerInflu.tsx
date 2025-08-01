// "use client";

// import { useRef, useState, useEffect } from "react";
// import Video from "next-video";
// import { Play } from "lucide-react";
// import awesomeVideo from '/videos/Infl-TO-VF.mp4';

// export default function VideoPlayerInflu() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [poster, setPoster] = useState<string | null>(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedData = () => {
//       // Capture first frame for poster
//       const canvas = document.createElement('canvas');
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       const ctx = canvas.getContext('2d');
      
//       if (ctx) {
//         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//         setPoster(canvas.toDataURL());
//       }
//     };

//     video.addEventListener('loadeddata', handleLoadedData);
//     return () => video.removeEventListener('loadeddata', handleLoadedData);
//   }, []);

//   const togglePlayPause = () => {
//     if (!videoRef.current) return;

//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <div className="h-full rounded-md flex justify-center relative group">
//       <Video
//         ref={videoRef}
//         src={awesomeVideo}
//         className="object-cover rounded-md"
//         poster={poster || undefined}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//         onEnded={() => setIsPlaying(false)}
//       />

//       {/* Custom Play Button */}
//       {!isPlaying && (
//         <button
//           onClick={togglePlayPause}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8/12 justify-center
//                    bg-main text-black px-6 py-3 rounded-full flex items-center gap-1.5 font-semibold
//                    hover:bg-main-dark transition-colors shadow-lg text-xs"
//         >
//           <Play className="w-4 h-4" />
//           <span>Learn how to use Hypeo</span>
//         </button>
//       )}
//     </div>
//   );
// }

import React from 'react'

const VideoPlayerInflu = () => {
  return (
    <div>VideoPlayerInflu</div>
  )
}

export default VideoPlayerInflu