"use client"
import Image from 'next/image';
import { Love_Light } from 'next/font/google';
import { useEffect, useState } from 'react';

const loveLight = Love_Light({
  weight: ['400'],
  subsets: ["latin"],
})

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // After a short delay, trigger the transition
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100); // Delay for smooth appearance

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='relative w-full'>
      <div className= {`transition-opacity duration-1000 ease-in-out ${isMounted ? "opacity-100" : "opacity-0"}`}>
        <Image
          src="/images/homepage.webp"
          alt="Homepage Background"
          sizes='100vw'
          height={1920}
          width={1080}
          className="w-full h-auto"
        />

        {/* This div will fade in */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-start px-20 text-white sparkle-text ${loveLight.className}`}
        >
          <span className='leading-none text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem]'>Welcome</span>
          <span className='leading-none px-5 -mt-2 text-4xl sm:text-5xl md:px-20 md:text-6xl lg:-mt-10 lg:text-[5rem] xl:text-[6rem]'>to my</span>
          <span className='leading-none px-5 text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] lg:-mt-5 xl:text-[8rem]'>Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Hero