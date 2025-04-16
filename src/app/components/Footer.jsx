import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' fixed bottom-0 left-0 w-full mx-auto py-3 text-[#9396a5]'>
      
        <div className='flex container mx-auto flex-wrap items-center justify-between p-1'>
            <div>Copyright © 2025</div> 
            <div className='flex space-x-2'>            
              <Link href='https://github.com/JacintaQ'>
                    <Image src ="/images/GIT.jpg"
                            alt="github-logo"
                            width={30}
                            height={30}>
                        </Image> 
              </Link>
              <Link href='https://www.linkedin.com/in/jiawei-jacinta-qi-14711869/'>
                  <Image src ="/images/linkedin.png"
                          alt="linkedin-logo"
                          width={30}
                          height={30}>
                      </Image> 
              </Link></div>
            </div>
    </footer>
  )
}

export default Footer


