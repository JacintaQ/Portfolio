"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import EmailSection from './EmailSection';
import { motion } from "framer-motion";


const HeroSection = ({ onNavigate }) => {
  return (
        <motion.section
        
        initial={{ opacity: 0, y: 0}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>

        
    <section id="home" className='min-h-screen flex items-center px-24 '>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl whitespace-nowrap lg:leading-normal font-extrabold'> 
                    <span className=' text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500 '>
                        Hello, I'm 
                    </span>
                    <br></br>
                    <TypeAnimation
                        classname='break-after-column whitespace-nowrap'
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Jacinta',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            1000,
                            'Data Analyst',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#ADB7BE] w-full sm:w-fit text-base sm:text-lg mb-6 lg:text-xl'>
                I'm a Web Developer. Driven by innovation and a passion for learning, I strive to apply my knowledge to actual use and consistently create solutions that benefit the company and the community.
                </p>


                
                <div className=''>
                    
                    <button 
                        onClick={() => onNavigate("contact")}
                        className='cursor-pointer px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        Hire Me
                    </button>
                    
                    <a href='/Resume.pdf' download>
                    <button className='cursor-pointer px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border border-white'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-2 py-2 text-white '>
                        Download CV</span>
                    </button>
                    </a>
                </div>
                
            <div className="h-30" />
                



            </div>
            <div className='col-span-5 flex justify-center items-center' >
                <div className="rounded-full bg-[#11120f] h-[500px] w-[500px] relative flex items-center justify-center ">
                    <Image src="/images/Image0411.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>


            </div>



        </div>
    </section>
    </motion.section>
  )
}

export default HeroSection