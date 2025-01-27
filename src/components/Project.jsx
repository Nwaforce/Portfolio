import React from 'react'
import {PROJECTS} from "../constants"
// import { div } from 'framer-motion/client'
const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>  
      <div>
        {PROJECTS.map((project, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
          <img src={project.image}
          width={150}
          height={150}
          alt={Project.title}
          className='mb-6' /></div>
          <div className='w-full max-w-full lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>{project.title}</h6>
          <p className='mb-4 text-neutral-400'>{project.description}</p>
          {project.technologies.map}
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
