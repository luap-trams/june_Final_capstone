import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
   <footer className='h-80 bg-black text-white text-lg'>
    <div className='flex justify-around capitalize items-center'>
        <div>
            <h1 className='text-3xl text-center text-blue-400'>SMARTOPTIONS <br /> <span className='text-xl -m-px'>Property Solutions</span></h1>
          </div>

    <div className='font-thin'>
      <h1 className='text-2xl py-5 hover:text-blue-900 uppercase font-bold'>home office</h1>
      <p>256, Mercure Crescent,  <br />Off Shitta Adetola Road, <br />Ojota - Lagos Nigeria</p>
      <p className='lowercase'>luap.trams@gmail.com</p>
      <p>+234 907 000 0007</p>
    </div>
    
    <div className='font-thin my-5'>
      <h1 className='mt-0 text-2xl py-5 hover:text-blue-900 uppercase font-bold'>Pages</h1>
      <Link href={'/'}> 
      <p className=' hover:text-blue-400'>Home</p>
      </Link>
      <Link href={'/location'}> 
      <p className='hover:text-blue-400'>Locations</p>
      </Link>
      <Link href={'/prop'}> 
      <p className=' hover:text-blue-400'>Listings</p>
      </Link>
      <Link href={'/about'}> 
      <p className=' hover:text-blue-400'>About</p>
      </Link>
      <Link href={'/contact'}> 
      <p className=' hover:text-blue-400'>Contact</p>
      </Link>
    </div>
    
    <div className='font-thin'>
      <h1 className='mt-0 text-2xl py-5 flex place-items-stretch hover:text-blue-900 uppercase font-bold'>Social</h1>
      
      <Link href={'https://github.com/luap-trams'} className='hover:text-blue-400'>
      <p>Github</p>
      </Link>
      
      <Link href={'https://www.linkedin.com/in/paul-s-736b0444/'}className='hover:text-blue-400'>
      <p>LinkedIn</p>
      </Link>

      <Link href={'http://www.facebook.com'} className='hover:text-blue-400'>
      <p>Facebook</p>
      </Link>
      
      <Link href={'http://www.instagram.com'}className='hover:text-blue-400'>
      <p>Instagram</p>
      </Link>


      <Link href={'http://www.tiktok.com'}className='hover:text-blue-400'>
      <p>Tiktok</p>
      </Link>
    </div>
    </div>

   <div className='flex justify-center hover:text-blue-900'>
    <p>&copy; SmartOptions Property Solutions {(new Date('01-01-2019').getFullYear())} - {(new Date().getFullYear())}</p>
    </div>

   </footer>
  )
}
