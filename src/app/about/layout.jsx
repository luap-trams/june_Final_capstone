export const metadata = {
    title: "About | Your Trusted Partner in Real Estate Management",
    description: "Invest | Find your dream home today",
    keywords: 'home ownership, apartment rental, sales'
};



import React from 'react'
import Image from 'next/image';
export default function layout( {children} ) {
  return (

    <div > { children }
        {/* <div>
          <Image src={'/aboutcover.jpeg'} alt={'about cover'} width={'1400'} height={'1400'} className='rounded-lg '/>
        </div> */}
      {/* <div className='bg-blue-400 p-5'>
        <h1>About Us</h1>

        <h2>Welcome to SmartOptions Property Solutions Limited!</h2>
        <p>At SmartOptions Property Solutions Limited, we pride ourselves on providing top-notch real estate management services tailored to meet the unique needs of our clients. With a commitment to excellence, transparency, and innovation, we strive to deliver unparalleled value in every property we manage.</p>
       </div>
       <div className='bg-blue-200 p-5'>
       <h2>Who We Are</h2>
       <p>SmartOptions Property Solutions Limited is a dynamic real estate management company dedicated to optimizing the potential of your real estate investments. Whether you're an individual property owner, an investor, or a commercial enterprise, our team of experienced professionals is here to ensure your properties are managed efficiently and profitably.</p>
       </div>
       <div className='bg-blue-400 p-5'>
        <h2>Our Mission</h2>
       Our mission is simple: to offer smart, effective solutions that enhance the value of every property under our care. We believe in building lasting relationships with our clients by providing personalized service, expert advice, and a proactive approach to property management.
       </div>
       <div className='bg-blue-200 p-5'>
       <h2>What We Offer</h2>
       - Comprehensive Property Management: From tenant relations and lease administration to maintenance and financial reporting, we handle every aspect of property management so you don’t have to.
       </div>

       
       
      <div className='bg-blue-400 p-5'>

      <h3>Customized Solutions:</h3>
      <p>We understand that every property and client is unique. That’s why we tailor our services to meet your specific needs and goals.</p>
      <h3>Expertise and Innovation:</h3>
      <p>Our team stays ahead of industry trends, utilizing the latest technologies and best practices to maximize the performance and value of your properties.</p>
      </div>

      <div className='bg-blue-200 p-5'>
      <h2>Why Choose Us?</h2>
      <p>At SmartOptions Property Solutions Limited, we go beyond traditional property      management. We are committed to delivering results that exceed expectations , ensuring     that your investment is in the best possible hands. With our expert team by your side,      you can enjoy peace of mind knowing that your property is being managed with the utmost care and professionalism.</p>
      </div>

        <div className='bg-blue-400 p-5'>
      <h2> Contact Us</h2>
      <p>Ready to experience the SmartOptions difference? Contact us today to learn more about how we can help you achieve your real estate goals.

      We look forward to partnering with you in managing your properties with intelligence, integrity, and a commitment to excellence.</p>




</div> */}



</div>



/* <section className='flex flex-row justify-between' >

    <div className='mx-6 my-3'>
    <Image src={'/sad.jpeg'} alt={'about cover'} width={'100'} height={'100'}/>
    </div>
    
    <div className='mx-6 my-10'> 
            <ul className='flex flex-row gap-10 justify-items-end'>
              <li>Home</li>
              <li>Movies</li>
              <li>About</li>
            </ul>
    </div>
         
  
</section> */

  )
}
