import React from "react";
import { PROJECTS } from "../constants";
// import { div } from 'framer-motion/client'
const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={Project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-full lg:w-3/4">
            <a
                  href={project.link} // Makes the title a clickable link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 no-underline hover:no-underline"
                >
                  {project.title}
                </a>              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
