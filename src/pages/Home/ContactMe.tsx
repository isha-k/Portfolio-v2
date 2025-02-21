import React from 'react'
import Image from 'next/image';

const ContactMe = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-transparent opacity-100"></div>
      <Image
          src="/images/background.png"
          alt="Homepage Background"
          sizes='100vw'
          height={1920}
          width={1080}
          className="w-full h-auto"
      />
    </div>
  )
}

export default ContactMe