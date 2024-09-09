import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    
<div className='bg-blue-500 h-screen flex flex-col items-center justify-center text-2xl '>
  <Image src={'/sad.jpeg'} alt={'sad transparent emoji'} width={'200'} height={'200'}/>
        <h1 className='font-bold text-9xl text-black py-4'>404</h1>
        <p className=' text-gray-900 text-md'>Sorry, the page you visited does not exist.</p>
        <p className=' text-gray-900 text-md'>It may be that the access link is wrong or the file does not exist.</p>
        <div>
          
          <Link href={'/'}> 
          <input type="button" value="HOME" className='hover:text-gray-400 text-white text-sm w-20 h-8 bg-black my-12 rounded-lg tracking-widest' />
            </Link>
        </div>
</div>

  )
}
