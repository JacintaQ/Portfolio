"use client"
import React, {useTransition, useState} from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion } from "framer-motion";

const TAB_DATA =[

  {TITLE:'Skills',
    id:'skills',
    content:(
      <ul>
        <li>- Node.js</li>
        <li>- React</li>
        <li>- Python</li>
        <li>- JavaScript</li>
      </ul>
    )
  },

  {TITLE:'Education',
    id:'education',
    content:(
      <ul>
        <li>University of Adelaide</li>
        <li>- Master of Data Science</li>
        
      </ul>
    )
  },
  
  {TITLE:'Certifications',
    id:'certifications',
    content:(
      <ul>
      <li></li>
      <li></li>
    </ul>
    )
  }
]


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    <motion.section
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    
  >
    <section className='text-white flex h-screen pb-24 '>
      <div className='md:grid md:grid-cols-5 gap-8 items-center pt-24 px-24 '>
        <div className='relative w-full h-full col-span-2'>
        <Image fill src='/images/about-image3.png' alt ='about image'className="object-cover"/>
        </div>

        <div className='col-span-3 overflow-y-scroll px-6 mt-4 md:mt-0 text-left flex flex-col h-full '>
          <h2 className='text-4xl font-bold text-white mb-4 px-6'>About Me</h2>
          <div className='md:grid md:grid-cols-2 gap-12 px-6'>
            <div >
            <p className=' mb-4 text-base :text-lg'>I aim to become a successful IT analyst combining my knowledge in data science and accounting. I am proficient in analyzing data or perform tasks like process automation using tools like Excel (VBA), Power BI, SQL and Python. </p>
            <p className=' text-base :text-lg'>I also have experience with accounting platforms like Xero, FYI and SAP and participated in data transformation across platforms.</p>
            </div>
            <div className="grid grid-cols-2 gap-y-4 text-sm">
              <p className="font-semibold"> Name:</p>
              <p>Jiawei Jacinta Qi</p>
              <p className="font-semibold">University:</p>
              <p>The University of Adelaide</p>
              <p className="font-semibold"> Study:</p>
              <p>Master of Data Science</p>
              <p className="font-semibold">Mail:</p>
              <p>jiaweiqi.work@gmail.com</p>
              <p className="font-semibold">Phone:</p>
              <p>+61 045 221 3145</p>
              </div>  
              
          </div>
          
          <div className='flex flex-row mt-8'>

           
           {/*确认点击&渲染点击后格式 */}


            {/* <TabButton selectTab={()=>handleTabChange("skills")} active={tab === "skills"}>{""}Skills{""}</TabButton> */}

            {/* <span className='cursor-pointer mr-3 font-semibold hover:text-white  text-[#ADB7BE] border-b border-purple-500'>Skill</span>
            <span className='cursor-pointer mr-3 font-semibold hover:text-white  text-[#ADB7BE] border-b border-purple-500'>Education</span>
            <span className='cursor-pointer mr-3 font-semibold hover:text-white  text-[#ADB7BE] border-b border-purple-500'>Experience</span> */}

          </div>

          <div>
      

          <div className="py-16 px-6">
  {/* Top Grid: Programming + Language */}
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <h3 className="text-xl font-bold tracking-widest mb-6">PROGRAMMING</h3>
      <div className="space-y-4">
        {[
          { label: 'HTML & CSS', value: 70 },
          { label: 'Javascript', value: 85 },
          { label: 'Tailwind', value: 90 },
          { label: 'Python', value: 90 },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="w-full bg-gray-700 h-1 rounded">
              <div
                className="bg-purple-500 h-1 rounded"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold tracking-widest mb-6">LANGUAGE</h3>
      <div className="flex justify-around">
        {[
          { label: 'English', value: 90 },
          { label: 'Chinese', value: 100 },
          
        ].map((lang) => (
          <div key={lang.label} className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-700"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-purple-500"
                  strokeWidth="4"
                  strokeDasharray={`${lang.value}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                {lang.value}%
              </div>
            </div>
            <span className="mt-2 text-sm">{lang.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Education + Experience */}
  <div className="max-w-screen-xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <h3 className="text-xl font-bold tracking-widest mb-6">EDUCATION</h3>
      <ul className="space-y-6">
        {[
          {
            year: '2023 - 2025',
            school: 'The University of Adelaide',
            degree: 'Master of Data Science',
          },
          {
            year: '2015 - 2016',
            school: 'Kent State University',
            degree: 'Master of Accounting',
          },
          {
            year: '2011 - 2015',
            school: 'Shanghai International Studies University',
            degree: 'Bachelor of Jurisprudence',
          },
        ].map((edu, i) => (
          <li key={i} className="relative pl-10">
            <span className="absolute left-0 top-0 w-4 h-4 bg-gray-600 rounded-full"></span>
            <div className="text-sm bg-gray-800 inline-block px-3 py-1 rounded-full mb-1">
              {edu.year}
            </div>
            <div className="font-semibold">{edu.school}</div>
            <div className="text-sm text-gray-400">{edu.degree}</div>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold tracking-widest mb-6">EXPERIENCE</h3>
      <ul className="space-y-6">
        {[
          {
            year: '2024 - running',
            company: 'InfoXchange',
            role: 'Volunteer Data Analyst',
          },
          {
            year: '2024 - 2024',
            company: 'Brentnalls SA',
            role: 'Procedure Automation Intern',
          },
          {
            year: '2020 - 2022',
            company: 'BDO Certified Tax Agents Co (Lixin) ',
            role: 'Tax Analyst',
          },
        ].map((exp, i) => (
          <li key={i} className="relative pl-10">
            <span className="absolute left-0 top-0 w-4 h-4 bg-gray-600 rounded-full"></span>
            <div className="text-sm bg-gray-800 inline-block px-3 py-1 rounded-full mb-1">
              {exp.year}
            </div>
            <div className="font-semibold">{exp.company}</div>
            <div className="text-sm text-gray-400">{exp.role}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>







    </div>
        </div>
      </div></section>
      </motion.section>
  )
}

export default AboutSection