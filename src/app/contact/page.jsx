import React from 'react'
// import smart from './contact.module.css'

export default function ContactPage() {
  return (
    <div>

    <div>
    <div className='relative w-full h-80 flex justify-center items-center'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.197072884662!2d3.356257074185503!3d6.580315093413179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9212d5bf9a33%3A0xc2187ade5bb7d451!2sIsaac%20John%20St%2C%20Ikeja%20GRA%2C%20Ikeja%20101233%2C%20Lagos%2C%20Nigeria!5e1!3m2!1sen!2sus!4v1727512474300!5m2!1sen!2sus"
    style={{ border: '0' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className='border-0 w-full h-full'
  ></iframe>
  <div className="absolute pointer-events-none inset-0 bg-blue-900 opacity-50"></div>
</div>

    </div>

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
    </div>
  )
}


    // <div className='h-screen w-full bg-blue-400 text-center flex flex-col justify-evenly px-16 py-16'>
    {/* <div className={smart.luap}>
        <h1 className={`${smart.smart} bg-gradient-to-br from via-red-700 to-green-600`}>Get in touch with us</h1>
    </div> */}
