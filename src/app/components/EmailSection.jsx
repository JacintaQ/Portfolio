import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

const EmailSection = () => {
  return (
        <motion.section
        id="projects"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
    <section id="contact" className='h-screen items-center scroll-mt-2 grid grid-cols-2  px-24  gap-2 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,_#6b21a8_0%,_transparent_70%)] rounded-full h-50 w-50 blur-lg absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div >
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunities. My inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
             </p>
            <div className='social flex flex-row pt-10 gap-2'>
                
                {/* <Link href='https://github.com/JacintaQ/'>
                    <Image src ="/images/github-logo.png"
                        alt="github-logo"
                        width={30}
                        height={30}
                    ></Image> */}
                {/* </Link> */}
                <Link href='https://github.com/JacintaQ'>
                    <Image src ="/images/GIT.jpg"
                            alt="github-logo"
                            width={30}
                            height={30}>
                        </Image> </Link>
                <Link href='https://www.linkedin.com/in/jiawei-jacinta-qi-14711869/'>
                    <Image src ="/images/linkedin.png"
                            alt="linkedin-logo"
                            width={30}
                            height={30}>
                        </Image> </Link></div>
        </div>
        <div > 
            <form className='flex flex-col gap-2'>
                <label htmlFor='subject' className='text-white block text-sm font-medium'>Subject</label>
                <input className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    type='text' 
                    id='subject' 
                    required 
                    placeholder='Just saying hi'>
                </input>



                <label htmlFor='email' type='email' className='text-white block text-sm font-medium'>Your Email</label>
                <input className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    type='email' 
                    id='email' 
                    required 
                    placeholder='Alice@google.com'>
                </input>
                
                <label htmlFor='message' className='text-white block text-sm font-medium'>Message</label>
                <input className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    type='text' 
                    name='message'
                    id='message' 
                    required 
                    placeholder="Let's talk about...">
                </input>
                <div>
                    <button
                    type="submit"
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                    >Send a Message</button>
                </div>
            </form>

        </div>
        
    </section>
    </motion.section>
  )
}

export default EmailSection
