"use client";
import Link  from 'next/link';
import React, {useState} from 'react';
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';



const Navbar = ({ onNavigate }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const navLinks =[
        {
            title:"Home",
            path:"#home",
        },
        {
            title:"About",
            path:"#about",
        },
        {
            title:"Projects",
            path:"#projects",
        },
    
        {
            title:"Contact",
            path:"#contact",
        },
    
    ];

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
{/* 
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-10 '>
            <div className='flex flex-wrap items-center justify-between mx-auto px-10 '> */}
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                JACINTA
                </Link>
                <div className='mobile-menu block md:hidden '>
                    {
                        ! navbarOpen ? (
                            <button 
                            onClick={() => setNavbarOpen(true)}
                            // className=' flex items-center px-3 py-2 text-slate-200 hover:text-white border hover: border-white'>
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <Bars3Icon className='h-5 w-5' />
                            </button>

                            
                        ) : (                            
                            <button 
                            onClick={() => setNavbarOpen(false)}
                            // className='flex items-center px-3 py-2 text-slate-200  hover:text-white border hover: border-white'>
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">

                                <XMarkIcon className='h-5 w-5' />
                            </button>

                        )
                    }

                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    {/*ul:无序列表 li: 有序列表*/}
                    <ul  className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link,index) => (
                                          <li key={index}>
            <button
              onClick={() => {
                onNavigate(link.path.replace("#", ""));
                setNavbarOpen(false);
              }}
              className="text-white text-lg"
            >
              {link.title}
            </button>
          </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar