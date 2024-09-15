import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaTiktok } from 'react-icons/fa';


export default function Footer() {
  return (
   <footer className='h-32 bg-black text-white text-lg mx-auto'>
    <div className='flex justify-around w-full'>
        
        <div className='mt-7'>
        <Image src={'/logo_name.jpeg'} alt={'white logo'} width={'120'} height={'120'} className='flex justify-end place-items-end'/>
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
    
    <div className='flex justify-end gap-2 place-items-center mt-4'>

      {/* <Link href={'https://github.com/luap-trams/june_Final_capstone'} className='hover:text-blue-400'>
      <p>Github</p>
      </Link> */}

       <a href='https://github.com/luap-trams/june_Final_capstone' target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} color="white" />
      </a>
      
      {/* <Link href={'https://www.linkedin.com/in/paul-s-736b04444/'}className='hover:text-blue-400'>
      <p>LinkedIn</p></Link> */}

      <a href='https://www.linkedin.com/in/paul-s-736b04444/' target="_blank" rel="noopener noreferrer" className='hove:text-blue-400'>
        <FaLinkedin size={30} color="#0e76a8" />
      </a>

      {/* <Link href={'http://www.facebook.com'} className='hover:border-red-700'>
      <p>Facebook</p></Link> */}

      <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='hover:border-red-700'>
        <FaFacebook size={30} color="#3b5998" />
      </a>
      
      {/* <Link href={'http://www.instagram.com'}className='hover:text-blue-400'>
      <p>Instagram</p></Link> */}

      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#e4405f" />
      </a>

      {/* <Link href={'http://www.tiktok.com'}className='hover:text-blue-400'>
      <p>Tiktok</p>
      </Link> */}
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok size={30} color="white" />
      </a>
    </div>
    </div>

   </footer>
  )
}
