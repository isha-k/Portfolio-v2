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
        const mm = gsap.matchMedia();

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

            const headline = detail.querySelector("h1")
            const animation = gsap.timeline()
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
<div className="relative bg-[url(/images/skillsBg.webp)] bg-cover bg-center">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] opacity-100"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#343a7e] to-transparent opacity-100"></div>
    
    <div className="gallery">
            <div className="left">
                <div className="desktopContent">
                    <div className="desktopContentSection">
                        <span className="work_num text-2xl md:text-3xl">01</span>
                        <h1 className="title text-4xl md:text-8xl">CMS</h1>
                        <div className="mt-4 space-y-4 space-x-2 text-right">
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Shopify
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                WordPress
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Webflow
                            </div>
                        </div>
                    </div>
                    <div className="desktopContentSection">
                        <span className="work_num text-2xl md:text-3xl">02</span>
                        <h1 className="title text-4xl md:text-8xl">Front end</h1>
                        <div className="mt-4 space-y-4 space-x-2 text-right">
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                React.js/Next.js
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Tailwind
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                HTML
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                CSS
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Javascript
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Typescript
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                GSAP
                            </div>
                        </div>                    
                    </div>
                    <div className="desktopContentSection">
                        <span className="work_num text-2xl md:text-3xl">03</span>
                        <h1 className="title text-4xl md:text-8xl">Back end</h1>
                        <div className="mt-4 space-y-4 space-x-2 text-right">
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                SQL
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                PHP
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Python
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Java
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                C#
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Firebase
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                RestAPIs
                            </div>
                        </div>                    
                    </div>
                    <div className="desktopContentSection">
                        <span className="work_num text-2xl md:text-3xl">04</span>
                        <h1 className="title text-4xl md:text-8xl">UI/UX</h1>
                        <div className="mt-4 space-y-4 space-x-2 text-right">
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Figma
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Adobe
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Lucidchart
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Canva
                            </div>
                        </div>                    
                    </div>
                    <div className="desktopContentSection">
                        <span className="work_num text-2xl md:text-3xl">05</span>
                        <h1 className="title text-4xl md:text-8xl">SEO</h1>
                        <div className="mt-4 space-y-4 space-x-2 text-right">
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Google Analytics
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                SEO/SEM
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Google Search Console
                            </div>
                        </div>                    
                    </div>
                    <div className="desktopContentSection">
                        <span className="work_num text-2xl md:text-3xl">06</span>
                        <h1 className="title text-4xl md:text-8xl">Devops</h1>
                        <div className="mt-4 space-y-4 space-x-2 text-right">
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Github
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                AWS
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Trello
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Rally
                            </div>
                            <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                                Jira
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="mobileContent">
                    <div>
                        <Image
                            src="/images/CMS.webp"
                            alt="CMS"
                            height={1920}
                            width={1080}
                            className="mobilePhoto object-cover"
                        />
                    </div>
                    <span className="work_num text-2xl">01</span>
                    <h1 className="title text-4xl md:text-8xl">CMS</h1>
                    <div className="mt-4 space-y-4 space-x-2 text-right">
                    <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Shopify
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            WordPress
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Webflow
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/frontend.webp"
                            alt="Frontend"
                            height={1920}
                            width={1080}
                            className="mobilePhoto object-cover"
                        />
                    </div>                    
                    <span className="work_num">02</span>
                    <h1 className="title text-4xl md:text-8xl">Frontend</h1>
                    <div className="mt-4 space-y-4 space-x-2 text-right">
                    <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            React.js/Next.js
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Tailwind
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            HTML
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            CSS
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Javascript
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Typescript
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            GSAP
                        </div>
                    </div>  
                    <div>
                        <Image
                            src="/images/backend.webp"
                            alt="Backend"
                            height={1920}
                            width={1080}
                            className="mobilePhoto object-cover"
                        />
                    </div>                    
                    <span className="work_num">03</span>
                    <h1 className="title text-4xl md:text-8xl">Backend</h1>
                    <div className="mt-4 space-y-4 space-x-2 text-right">
                    <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            SQL
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            PHP
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Python
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Java
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            C#
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Firebase
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            RestAPIs
                        </div>
                    </div> 
                    <div>
                        <Image
                            src="/images/UiUx.webp"
                            alt="UI-UX"
                            height={1920}
                            width={1080}
                            className="mobilePhoto object-cover"
                        />
                    </div>                    
                    <span className="work_num">04</span>
                    <h1 className="title text-4xl md:text-8xl">UI-UX</h1>
                    <div className="mt-4 space-y-4 space-x-2 text-right">
                    <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Figma
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Adobe
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Lucidchart
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Canva
                        </div>
                    </div>        
                    <div>
                        <Image
                            src="/images/seo.webp"
                            alt="SEO"
                            height={1920}
                            width={1080}
                            className="mobilePhoto object-cover"
                        />
                    </div>                    
                    <span className="work_num">05</span>
                    <h1 className="title text-4xl md:text-8xl">SEO</h1>
                    <div className="mt-4 space-y-4 space-x-2 text-right">
                    <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Google Analytics
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            SEO/SEM
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Google Search Console
                        </div>
                    </div>           
                    <div>
                        <Image
                            src="/images/devops.webp"
                            alt="DevOps"
                            height={1920}
                            width={1080}
                            className="mobilePhoto object-cover"
                        />
                    </div>                    
                    <span className="work_num">06</span>
                    <h1 className="title text-4xl md:text-8xl">DevOps</h1>
                    <div className="mt-4 space-y-4 space-x-2 text-right">
                    <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Github
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            AWS
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Trello
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Rally
                        </div>
                        <div className="rounded-full bg-gray-200 p-3 inline-block text-lg font-medium">
                            Jira
                        </div>
                    </div>   
                </div>


                <div className="desktopPhotos">
                    <div>
                        <Image
                            src="/images/CMS.webp"
                            alt="Shopify CMS"
                            height={1920}
                            width={1080}
                            className="desktopPhoto"
                        />
                    </div>
                    <div className="desktopPhoto green">
                        <Image
                            src="/images/backend.webp"
                            alt="Backend"
                            height={1920}
                            width={1080}
                            className="desktopPhoto"
                        />
                    </div>
                    <div className="desktopPhoto pink">
                        <Image
                            src="/images/frontend.webp"
                            alt="Frontend"
                            height={1920}
                            width={1080}
                            className="desktopPhoto"
                        />
                    </div>
                    <div className="desktopPhoto blue">
                        <Image
                            src="/images/UiUx.webp"
                            alt="UI-UX"
                            height={1920}
                            width={1080}
                            className="desktopPhoto"
                        />
                    </div>
                    <div className="desktopPhoto blue">
                        <Image
                            src="/images/seo.webp"
                            alt="SEO"
                            height={1920}
                            width={1080}
                            className="desktopPhoto"
                        />
                    </div>
                    <div className="desktopPhoto blue">
                        <Image
                            src="/images/devops.webp"
                            alt="DevOps"
                            height={1920}
                            width={1080}
                            className="desktopPhoto"
                        />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MySkills