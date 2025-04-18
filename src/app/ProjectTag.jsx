import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
  const buttonStyles=isSelected
  ? "text-white bg-purple-500" : "text-[#ADB7BE] border-slate-600"

  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-xl cursor-pointer hover:scale-105 transition-all duration-300`}
    onClick={() => onClick(name)}>
        {name}
    </button>

  )
}

export default ProjectTag


 