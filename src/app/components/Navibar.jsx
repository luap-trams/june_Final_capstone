'use client'
import Link from 'next/link';
import MobileNav from './MobileNav';
import { useContext } from 'react';
import { SidebarContext } from '../providers';
import Image from 'next/Image';

export default function Navibar() {  
    const {val} = useContext(SidebarContext)
  return (
    
    <nav>
        {/* <ul className=' flex justify-around uppercase items-center h-40 bg-green-400 text-white text-sm tracking-wider'></ul> */}
        <ul className='flex justify-around uppercase items-center h-40 bg-blue-900 text-white text-sm tracking-wider'>
        <Image src={'/smartoptions2.webp'} alt={'white logo'} width={'100'} height={'100'} className='flex justify-items-end' />
            <Link href={'/'}> 
                <li className='bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>home</li>
            </Link>
            <Link href={'/about'}> 
                <li className='  bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>about us</li>
            </Link>
            <Link href={'/location'}> 
                <li className='bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>our locations</li>
            </Link>
            <Link href={'/prop'}> 
                <li className='bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>property directory</li>
            </Link>
            <Link href={'/contact'}> 
                <li className='bg-blue-400 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>contact us</li>
            </Link>
            <Link href={'/wishes'}> 
                <li className='bg-yellow-700 h-8 w-34 px-3 py-1 rounded-full hover:text-black'>{val}</li>
            </Link>

        </ul>
        <MobileNav />
        
     
    </nav>
    
  )
}
