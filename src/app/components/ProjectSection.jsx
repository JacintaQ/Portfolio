"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from '../ProjectTag'
import Image from "next/image";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: 'Process Automate',
    description: 'Automatically Generate Xero Report and Upload Files in FYI',
    image: '/images/projects/1.png',
    tag: ["All"],
    gitUrl: "https://github.com/JacintaQ/Xero-Report-and-FYI-Upload",
    previewUrl: 'https://www.youtube.com/watch?v=F2kHzqqDH5E'
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: 'A responsive and customizable portfolio website using NextJs and Tailwind.',
    image: '/images/projects/2.png',
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: '/'
  },  

]

const ProjectSection = () => {
  const [tag, setTag] = useState('All');

  const handleTagChange = (newTag) => {
    setTag(newTag)
  };

  const filterProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <motion.section
    id="projects"
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}>
    <section id="projects" className='text-white flex h-screen pb-24'>
          <div className=' w-full md:grid md:grid-cols-5 gap-8 items-center pt-24 px-24 '>
            <div className='col-span-5 overflow-y-scroll mt-4 md:mt-0 text-left flex flex-col h-full '>
              <h2 className='text-center text-4xl font-bold mt-24 mb-4'>My Projects</h2>

              <div className='flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
              </div>

              {/* grid layout here */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filterProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tag={project.tag}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                  />
                ))}
              </div>
            </div>
         </div>
    </section>
    </motion.section>
  )
}

export default ProjectSection
