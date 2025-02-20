import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='pt-16 pb-16 bg-gray-800'>
        {/* SectionHeading  */}
        <SectionHeading>About Me</SectionHeading>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
            <div>

                {/* Text content  */}
                <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
                    {aboutInfo.title}
                </h1>
                <p className='text-gray-400 text-lg mt-4'>
                    {aboutInfo.description}
                </p>

                <div className='mt-8'>
                    {/* checked skills */}
                    <div className='flex items-center space-x-3 mb-6'>
                        <div>
                            <FaCheck className='text-white'/>
                        </div>
                        <p className='text-sm sm:text-base md:text-lg font-fold text-gray-300'>
                            Front End Developer
                        </p>
                    </div>
                </div>
            </div>

            <div>
                {/* REACT ANIMATION LOGO  */}
            </div>
        </div>
    </div>
  )
}

export default About