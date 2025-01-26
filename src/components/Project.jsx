import React from 'react'
import {PROJECTS} from "../constants"
import { div } from 'framer-motion/client'
const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>  
      <div>
        {PROJECTS.map((project, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
          <img src={Project.images} alt={Project.title} /></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Project
