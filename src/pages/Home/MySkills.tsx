"use client";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MySkills = () => {
    useEffect(() => {
        const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)") as HTMLElement[]; // type assertion
        const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)") as HTMLElement[];
        const allPhotos = gsap.utils.toArray(".desktopPhoto") as HTMLElement[]; // Ensure this is typed as HTMLElement[]

        gsap.set(photos, { yPercent: 101 });

        // create
        let mm = gsap.matchMedia();

        // add a media query. When it matches, the associated function will run
        mm.add("(min-width: 600px)", () => {

        // this setup code only runs when viewport is at least 600px wide
        console.log("desktop")
            
        ScrollTrigger.create({
            trigger:".gallery",
            start:"top top",
            end:"bottom bottom",
            pin:".right"
        })

        //create scrolltrigger for each details section
        //trigger photo animation when headline of each details section 
        //reaches 80% of window height
        details.forEach((detail, index)=> {

            let headline = detail.querySelector("h1")
            let animation = gsap.timeline()
            .to(photos[index], {yPercent:0})
            .set(allPhotos[index], {autoAlpha:0})
            ScrollTrigger.create({
                trigger:headline,
                start:"top 80%",
                end:"top 50%",
                animation:animation,
                scrub:true,
                markers:false
            })
        })
            
            
        
        return () => { // optional
            // custom cleanup code here (runs when it STOPS matching)
            console.log("mobile")
        };
        });

    }, []);
  return (
    <div>
        <div className="spacer"></div>
        <div className="gallery">
            <div className="left">
                <div className="desktopContent">
                    <div className="desktopContentSection">
                        <h1>Red</h1>
                        <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>
                    </div>
                    <div className="desktopContentSection">
                        <h1>Green</h1>
                        <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness. In color psychology, green is said to represent balance and stability, making it a popular choice for branding and marketing in the health and wellness industry. </p>
                    </div>
                    <div className="desktopContentSection">
                        <h1>Pink</h1>
                        <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing.</p>
                        <p>In the world of branding and marketing, pink is often used to target a female audience or to promote products that are associated with beauty, love, or romance.</p>
                        <p>Pink is also used in the food industry, as it is associated with sweetness and desserts. Pink is often used in breast cancer awareness campaigns, as it has become the signature color of the movement. </p><p>Pink is also commonly used in baby showers and weddings, as it symbolizes love, innocence, and new beginnings.</p>
                    </div>
                    <div className="desktopContentSection">
                        <h1>Blue</h1>
                        <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism. In color psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and marketing in the finance and technology industries.</p>
                    </div>

                </div>
            </div>

            <div className="right">

                <div className="mobileContent">
                    <div className="mobilePhoto red"></div>
                    <h1>Red</h1>
                    <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>

                    <div className="mobilePhoto green"></div>
                    <h1>Green</h1>
                    <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness. In color psychology, green is said to represent balance and stability, making it a popular choice for branding and marketing in the health and wellness industry. </p>

                    <div className="mobilePhoto pink"></div>
                    <h1>Pink</h1>
                    <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing. In the world of branding and marketing, pink is often used to target a female audience or to promote products that are associated with beauty, love, or romance.</p>

                    <div className="mobilePhoto blue"></div>
                    <h1>Blue</h1>
                    <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism. In color psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and marketing in the finance and technology industries.</p>
                </div>


                <div className="desktopPhotos">
                    <div className="desktopPhoto red"></div>
                    <div className="desktopPhoto green"></div>
                    <div className="desktopPhoto pink"></div>
                    <div className="desktopPhoto blue"></div>
                </div>

            </div>
        </div>

        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
    </div>
  )
}

export default MySkills