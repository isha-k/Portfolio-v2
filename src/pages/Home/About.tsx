"use client";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useRef, useEffect } from 'react';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Wrap each word in a span
      const text = textRef.current.innerText;
      const words = text.split(' ').map(word => `<span class="word">${word}</span>`).join('<span class="space"> </span>');
      textRef.current.innerHTML = words;

      // Split the text into words and characters
      const splitText = new SplitType(textRef.current, { types: 'words,chars' });

      // Animate each character
      gsap.from(splitText.chars, {
        yPercent: 130,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div className='gradient-background'>
      <div className="flex min-h-screen items-start justify-center p-20">
        <div className="w-max flex flex-col items-center text-center">
          {/* Typing effect */}
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl md:text-3xl text-white font-bold">
              Hi there
            </h1>
          </div>

          {/* Description text */}
          <p className="mt-10 text-white text-sm md:text-lg max-w-md">
            I am a <span className='font-bold text-gray-100'>website developer</span> and <span className='font-bold text-gray-100'>digital marketer</span> who brings artistic visions to life.  
          </p>
  
          <section className='section-text'>
            <div className="container-text">
              <h1 ref={textRef} className='split flex justify-center items-center'>If you dream it, I can create it</h1>
            </div>
          </section>
        </div>
      </div>
    </div>  
  );
};

export default About;