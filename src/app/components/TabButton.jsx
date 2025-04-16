import React from 'react'

const TabButton = ({active,selectTab, children}) => {
const  buttonClasses=active ? ' text-b text-white' : 'text-gray-500' //选中为白色，未选中为黑色//
  
    return (
    <button onClick={selectTab}>
        <p className={`cursor-pointer mr-3 font-semibold  hover:text-zinc-400  border-b border-purple-500 ${buttonClasses}`}>
        {children}
        </p>
    </button>
  )
}

export default TabButton