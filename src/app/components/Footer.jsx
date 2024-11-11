import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaTiktok } from 'react-icons/fa';


export default function Footer() {
  return (
   <footer className='h-full md:h-28 bg-black text-white text-sm md:text-lg mx-auto'>
    <div className='flex justify-around w-full'>
        
        <div className='text-sm mt-7 md:mt-7'>
        <Image src={'/logo_name.jpeg'} alt={'white logo'} width={'120'} height={'120'} className='flex justify-end place-items-center '/>
            {/* <h1 className='text-sm text-center text-blue-400'>Property Solutions</h1> */}
          </div>

    
    <div className='flex justify-center place-items-center text-center hover:text-blue-400 mt-7'>
    <p> SmartOptions Property Solutions <br />&copy; {(new Date('01-01-2019').getFullYear())} - {(new Date().getFullYear())}</p>
    </div>
    
    <div className='connect-left'> <p className='flex justify-center items-center mt-12 md:mt-9 uppercase text-xs md:items-center md:text-sm mb-1'>connect with us</p>
      <div className='footer-icon flex flex-row gap-2 text-lg md:text-3xl justify-end items-center'>
      
      <a href='https://github.com/luap-trams/june_Final_capstone' target="_blank" rel="noopener noreferrer">
        <FaGithub color="white"/>
      </a>
      

      <a href='https://www.linkedin.com/in/paul-s-736b0444/' target="_blank" rel="noopener noreferrer" className='hove:text-blue-400'>
        <FaLinkedin color="#0e76a8" />
      </a>

      <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='hover:border-red-700'>
        <FaFacebook color="#3b5998" />
      </a>

      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram  color="#e4405f" />
      </a>

      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok color="white" />
      </a>
    </div>
    </div>


       
    </div>

   </footer>
  )
}
