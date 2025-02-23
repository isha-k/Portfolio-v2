"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const initScrollTrigger = () => {
      const lastCard = document.querySelector(".card.scroll") as HTMLElement;
      const pinnedSections = gsap.utils.toArray<HTMLElement>(".pinned");

      if (!lastCard || pinnedSections.length === 0) {
        console.error("One or more required elements not found.");
        return;
      }

      pinnedSections.forEach((section, index, sections) => {
        const img = section.querySelector(".img");

        // Only animate sections that contain an image
        if (!img) {
          console.warn(`Skipping section ${index} - No .img found`);
          return;
        }

        const nextSection = sections[index + 1] || lastCard;
        const endPoint = nextSection.offsetTop - section.offsetTop;

        // Pin the section and animate the image
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${endPoint}`,
            pin: true,
            pinSpacing: false,
            scrub: 1,
          },
        });

        gsap.fromTo(
          img,
          { scale: 1 },
          {
            scale: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${endPoint}`,
              scrub: 1,
            },
          }
        );
      });
    };

    // Initialize ScrollTrigger after the DOM is fully loaded
    initScrollTrigger();

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container">
      <section className="hero pinned w-full h-auto">
        <h1 className="flex justify-center items-center text-4xl">My Projects</h1>
      </section>

      <section className="card pinned projects-section">
        <div className="img">
          <Image
            src="/images/homepage.webp"
            alt="Homepage Background 1"
            height={1920}
            width={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="card pinned projects-section">
        <div className="img">
          <Image
            src="/images/homepage.webp"
            alt="Homepage Background 2"
            height={1920}
            width={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="card scroll projects-section">
        <div className="img">
          <Image
            src="/images/homepage.webp"
            alt="Homepage Background 3"
            height={1920}
            width={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;