import Image from 'next/image';
import React from 'react'

type Props = {
    spotlight:{
        id:number;
        title:string;
        summary:string;
        image:string;
    }
}
const SpotlightCard = ({spotlight}:Props) => {
    const {title,summary,image}=spotlight
  return (
    <div className='rounded-md overflow-hidden bg-gray-800'>
        <div className='p-6'>
            <Image src={image} alt={title} width={50} height={50}></Image>
            <h1 className='text-base'>{title}</h1>
            <p className='text-white text-opacity-70'>{summary}</p>
        </div>
    </div>
  )
}

export default SpotlightCard