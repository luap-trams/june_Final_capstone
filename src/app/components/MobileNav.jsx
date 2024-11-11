'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { MdHome } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';

export default function MobileNav() {
    const [open, setOpen] = useState(false)
    const [val, setVal] = useState(10)

    function changeVal() {
        setVal((prev) => prev + 20);
    }

    function controlNav() {
        setOpen(!open);
    }

    return (
        <nav>

            {/* //Mobile Nav: md:hidden means it would only be shown on mobile screens// */}

            <ul className='absolute w-full flex items-center justify-between h-24 bg-black text-white p-4 mt-2 md:hidden '>
                <li className='text-xl'>
                    <a href="/">
                        <MdHome size={40} color="white" />
                    </a>
                </li>

                
                <li onClick={controlNav} className='cursor-pointer'>
                    <GiHamburgerMenu size={24} />
                </li>
            </ul>

            {/* Dropdown Menu: Same as above. Shown only on mobile screens when open */}
            
            {open && (
                <ul className='flex flex-col justify-around items-end bg-blue-400 text-white absolute top-16 right-0 z-10 w-auto p-4 md:hidden '>
                    <Link href={'/'}>
                        <li className='py-2 hover:text-blue-900'>Home</li>
                    </Link>
                    <Link href={'/about'}>
                        <li className='py-2 hover:text-blue-900'>About</li>
                    </Link>
                    <Link href={'/contact'}>
                        <li className='py-2 hover:text-blue-900'>Contact</li>
                    </Link>
                    <Link href={'/prop'}>
                        <li className='py-2 hover:text-blue-900'>Listing</li>
                    </Link>
                    <Link href={'/help'}>
                        <li className='py-2 hover:text-blue-900'>Help</li>
                    </Link>
                    <li className='py-2 hover:text-blue-900'><FaHeart /> {val}</li>
                    {/* <li onClick={changeVal} className='cursor-pointer py-2 hover:text-blue-900'></li> */}
                </ul>
            )}
        </nav>
    );
}
