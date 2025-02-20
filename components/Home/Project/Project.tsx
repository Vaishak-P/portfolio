import SectionHeading from '@/components/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='projects' className="pt-16 pb-16 bg-gray-800">
      <SectionHeading>Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-blue-900 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank">
                {/* <Image
                  src={project.image}
                  alt="project"
                  className="w-full"
                  height={300}
                  width={300}
                /> */}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project