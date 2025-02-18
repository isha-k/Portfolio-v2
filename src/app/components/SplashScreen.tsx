"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import anime, { AnimeTimelineInstance } from "animejs";

interface SplashScreenProps {
  finishLoading: () => void;
}

const images = ["/images/fox_2.png", "/images/fox_3.png", "/images/fox_1.png"];

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef<AnimeTimelineInstance | null>(null);

  useEffect(() => {
    const animate = () => {
      if (animationRef.current) animationRef.current.pause(); // Stop previous animations

      animationRef.current = anime.timeline({
        easing: "easeInOutQuad",
        duration: 400,
        complete: () => {
          if (currentIndex < images.length - 1) {
            setTimeout(() => setCurrentIndex((prevIndex) => prevIndex + 1), 200);
          } else {
            setTimeout(() => finishLoading(), 200); // End splash screen
          }
        }, 
      }) as AnimeTimelineInstance; // ✅ Explicitly typing this as an AnimeTimelineInstance

      animationRef.current
        .add({
          targets: "#splash-logo",
          opacity: [0, 1], // Fade in
          duration: 400,
        })
        .add({
          targets: "#splash-logo",
          opacity: [1, 0], // Fade out
          duration: 400,
          delay: 200, // Pause before fade-out
        });
    };

    animate();
  }, [currentIndex, finishLoading]);

  return (
    <div className="flex h-screen items-center justify-center splash-bg">
      {/* Preload all images for smoother transitions */}
      {images.map((src, index) => (
        <Image key={index} src={src} alt="" width={200} height={200} priority className="hidden" />
      ))}

      {/* Visible image */}
      <Image
        id="splash-logo"
        src={images[currentIndex]}
        alt="Splash Logo"
        width={200}
        height={200}
        className="opacity-0"
      />
    </div>
  );
};

export default SplashScreen;
