import React from 'react'
// import smart from './contact.module.css'

export default function ContactPage() {
  return (
    <div className='h-screen w-full bg-blue-400 text-center flex flex-col justify-evenly px-16 py-16'>
    {/* <div className={smart.luap}>
        <h1 className={`${smart.smart} bg-gradient-to-br from via-red-700 to-green-600`}>Get in touch with us</h1>
    </div> */}

      <h1 className='text-6xl text-white text-center uppercase font-medium'>get in touch with us</h1>
      
    
    <div className='h-70 w-auto flex flex-row flex-none place-content-center gap-20'>
        
        <div className='bg-blue-300 text-center py-12 px-12  rounded-3xl'>
          <h2 className='text-2xl my-2'>Talk to a member of our sales team</h2>
          <p>We'll love to connect with you to learn more about what you have to say</p>
          <input type="button" value="contact sales" className='bg-black text-white hover:bg-blue-900 py-2 px-2 rounded-xl my-5 w-48 capitalize' />
        </div>

        <div className='bg-blue-300 text-center py-12 px-12 rounded-3xl'>
          <h2 className='text-2xl my-2'>Talk to a member of our support team</h2>
          <p>We'll love to connect with you to learn more about what you have to say</p>
          <input type="button" value="contact support" className='bg-black text-white hover:bg-blue-900 py-2 px-2 rounded-xl my-5 w-48 capitalize'/>
        </div>

    </div>
    
    
    
    </div>



  )
}
