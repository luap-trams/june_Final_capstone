'use client'
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { SidebarContext } from '../providers';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';

export default function Navibar() {  
    const {val} = useContext(SidebarContext)
  return (
    
    <nav className='bg-blue-900 w-full'>
        {/* <ul className=' flex justify-around uppercase items-center h-40 bg-green-400 text-white text-sm tracking-wider'></ul> */}
        <ul className='hidden md:flex justify-around uppercase items-center h-32 w-full mx-auto bg-blue-900 text-white text-sm tracking-wider'>
        <Image src={'/logo.jpeg'} alt={'white logo'} width={'100'} height={'100'} className='flex justify-items-end' />
            <Link href={'/'}> 
                <li className='bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>home</li>
            </Link>
            <Link href={'/about'}> 
                <li className='  bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>about us</li>
            </Link>
            {/* <Link href={'/location'}> 
                <li className='bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>our locations</li>
            </Link> */}
            <Link href={'/prop'}> 
                <li className='bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>property directory</li>
            </Link>
            <Link href={'/contact'}> 
                <li className='bg-blue-900 h-8 w-34 px-3 py-1.5 rounded-full hover:bg-blue-500'>contact us</li>
            </Link>
            {/* <Link href={'/wishes'}> 
                <li className='bg-blue-500 h-14 w-42 px-2 py-3 rounded-full hover:text-red-500 text-center'><FaHeart /> 
                    {val}</li>
            </Link> */}
            <Link href={'/wishes'}>
            <div className='flex'>
            <HeartIcon strokeWidth={0.5} className="w-14 h-14 rounded-full text-red-300 text-3xl bg-transparent hover:text-red-400 hover:bg-opacity-90" />
                <li className=' text-white text-lg -mt-3 p-1 -ml-2.5 font-thin'>{val}</li>
            </div>
            </Link>

        </ul>
        
     
    </nav>
    
  )
}
