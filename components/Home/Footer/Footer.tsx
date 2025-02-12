import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-blue-800'>
        <div>
            <Image
                src='/images/logo.png'
                alt='logo'
                width={180}
                height={180}
                className='mx-auto'
            />
        </div>
        <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold'>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Project</div>
            <div>Reviews</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Footer