import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaTiktok } from 'react-icons/fa';


export default function Footer() {
  return (
   <footer className='h-32 bg-black text-white text-sm md:text-lg mx-auto'>
    <div className='flex justify-around w-full'>
        
        <div className='mt-7'>
        <Image src={'/logo_name.jpeg'} alt={'white logo'} width={'120'} height={'120'} className='flex justify-end place-items-center '/>
            {/* <h1 className='text-sm text-center text-blue-400'>Property Solutions</h1> */}
          </div>

    {/* <div className='font-thin'>
      <h1 className='text-2xl py-5 hover:text-blue-900 uppercase font-bold'>home office</h1>
      <p>256, Mercure Crescent,  <br />Off Shitta Adetola Road, <br />Ojota - Lagos Nigeria</p>
      <p> <a href="mailto:luap.trams@gmail.com" className="text-white hover:underline lowercase">
      luap.trams@gmail.com</a>
    </p>
      <p>
        <a href="tel:+2349070000007" className="text-white hover:underline">
      +234 907 000 0007</a>
      </p>
    </div> */}
    
    <div className='flex justify-center place-items-end text-center hover:text-blue-400'>
    <p> SmartOptions Property Solutions <br />&copy; {(new Date('01-01-2019').getFullYear())} - {(new Date().getFullYear())}</p>
    </div>
    
    <div className='flex justify-end gap-1.5 place-items-center mt-4 text-lg md:text-3xl'>


       <a href='https://github.com/luap-trams/june_Final_capstone' target="_blank" rel="noopener noreferrer">
        <FaGithub color="white" className=''/>
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

   </footer>
  )
}
