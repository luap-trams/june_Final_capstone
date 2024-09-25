import React from 'react'
// import smart from './contact.module.css'

export default function ContactPage() {
  return (


    <div className='h-auto w-full text-center bg-blue-400  flex flex-col justify-evenly px-4 py-8 md:px-16 md:py-16'>
      <h1 className='text-3xl md:text-5xl lg:text-6xl font-medium uppercase text-white'>
        Get in touch with us
      </h1>

      <div className='flex flex-col md:flex-row gap-10 mt-10 place-content-center '>

        {/* Sales */}
        <div className='bg-blue-300 text-center py-8 px-8 rounded-3xl w-full md:w-1/3'>
          <h2 className='text-xl md:text-2xl my-2'>Talk to a member of our sales team</h2>
          <p className='text-sm md:text-base'>We'd love to connect with you to learn more about what you have to say.</p>
          <input type="button" value="Contact Sales" className='bg-black text-white hover:bg-blue-900 py-2 px-4 rounded-xl my-5 w-48 capitalize' />
        </div>

        {/* Support */}
        <div className='bg-blue-300 text-center py-8 px-8 rounded-3xl w-full md:w-1/3'>
          <h2 className='text-xl md:text-2xl my-2'>Talk to a member of our support team</h2>
          <p className='text-sm md:text-base'>We'd love to connect with you to learn more about what you have to say.</p>
          <input type="button" value="Contact Support" className='bg-black text-white hover:bg-blue-900 py-2 px-4 rounded-xl my-5 w-48 capitalize'/>
        </div>
      </div>
    </div>
  )
}


    // <div className='h-screen w-full bg-blue-400 text-center flex flex-col justify-evenly px-16 py-16'>
    {/* <div className={smart.luap}>
        <h1 className={`${smart.smart} bg-gradient-to-br from via-red-700 to-green-600`}>Get in touch with us</h1>
    </div> */}
