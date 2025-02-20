import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import SkillCard from './Skillcard'

const Skills = () => {
  return (
    <div id='skills' className='pt-16 pb-16 bg-gray-800'>
        <SectionHeading>My Skills</SectionHeading>
        <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
            {skillsData.map((skill)=>{
                return (
                    <div key={skill.id}>
                        <SkillCard skill={skill}></SkillCard>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Skills