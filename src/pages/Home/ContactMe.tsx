import React from 'react'
import Image from 'next/image';

const ContactMe = () => {
  return (
    <div className='relative fade-overlay'>
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