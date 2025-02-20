import SectionHeading from '@/components/Helper/SectionHeading'
import { servicesData } from '@/Data/data';
import React from 'react'
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div id='services' className="pt-16 pb-16 bg-green-950">
      <SectionHeading>Services</SectionHeading>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cold-3 
      xl:grid-cold-4 gap-10 w-[80%] mx-auto items-center mt-20'>
        {servicesData.map((service)=>{
            return (
            <div key={service.id}>
                 <ServiceCard service={service}/>
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default Services