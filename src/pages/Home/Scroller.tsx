import React from 'react'
import Image from 'next/image'

const Scroller = () => {
    return (
      <div className='bg-[#353090] bg-opacity-80 z-30 py-4'>
        <div className="scroller">
          <ul>
            {[
              "./images/html.svg",
              "./images/css.svg",
              "./images/java.svg",
              "./images/python.svg",
              "./images/js.svg",
              "./images/nextjs.svg",
              "./images/react.svg",
              "./images/typescript.svg",
              "./images/shopify.svg",
            ].map((src, index) => (
              <li key={index}>
                <Image
                  src={src}
                  alt={src.replace("./images/", "").replace(".svg", "")}
                  width={100}
                  height={100}
                  className="h-10 w-auto"
                />
              </li>
            ))}
          </ul>
          <ul aria-hidden="true">
            {[
              "./images/html.svg",
              "./images/css.svg",
              "./images/java.svg",
              "./images/python.svg",
              "./images/js.svg",
              "./images/nextjs.svg",
              "./images/react.svg",
              "./images/typescript.svg",
              "./images/shopify.svg",
            ].map((src, index) => (
              <li key={index}>
                <Image
                  src={src}
                  alt={src.replace("./images/", "").replace(".svg", "")}
                  width={100}
                  height={100}
                  className="h-10 w-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Scroller;