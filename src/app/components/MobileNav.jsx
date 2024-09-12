'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

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

            {/* Mobile Nav: Shown only on mobile screens */}

            <ul className='md:hidden flex items-center justify-between h-24 bg-black text-white p-4 '>
                <li className='text-xl'>
                    <a href="/">
                        <Image src="/home_icons_white.png" alt="logo" width={40} height={40} />
                    </a>
                </li>

                
                <li onClick={controlNav} className='cursor-pointer'>
                    <GiHamburgerMenu size={24} />
                </li>
            </ul>

            {/* Dropdown Menu: Shown only on mobile screens when open */}
            
            {open && (
                <ul className='md:hidden flex flex-col justify-around items-end bg-blue-400 text-white absolute top-16 right-0 w-auto p-4 '>
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
                        <li className='py-2 hover:text-blue-900'>Property Directory</li>
                    </Link>
                    <Link href={'/help'}>
                        <li className='py-2 hover:text-blue-900'>Help</li>
                    </Link>
                    <li className='py-2 hover:text-blue-900'>Value: {val}</li>
                    <li onClick={changeVal} className='cursor-pointer py-2 hover:text-blue-900'>Increase</li>
                </ul>
            )}
        </nav>
    );
}
