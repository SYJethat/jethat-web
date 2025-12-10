"use client";

import { useEffect, useRef, useState } from "react";

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set slow motion playback (0.5 = half speed, 0.25 = quarter speed)
      video.playbackRate = 0.5;
      
      // Handle video loaded
      const handleLoadedData = () => {
        setIsLoaded(true);
        video.play().catch((error) => {
          console.log("Video autoplay failed:", error);
        });
      };

      // Ensure seamless loop
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("ended", handleEnded);

      // Preload and play
      video.load();

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Video element with blur effect */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover filter  transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "scale(1.1)", // Slight scale to hide blur edges
          willChange: "transform", // Optimize for smooth playback
        }}
      >
        <source src="/jet_video_6.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Gradient overlay for smooth blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-black/50 to-red-900/30 z-10" />
    </div>
  );
}
