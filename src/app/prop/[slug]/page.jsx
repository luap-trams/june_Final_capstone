"use client"
import React from 'react'
import { properties } from '@/app/data'
import Link from 'next/link'
import PropertyCard from '@/app/components/PropertyCard'
import { useContext } from 'react'
import { SidebarContext } from "@/app/providers"
import { FaCheck, FaHeart, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

// import { AiFillEnvironment } from 'react-icons/ai';

export default function PropDetails({params}) {

    const {setVal,propItem, setPropItem} = useContext(SidebarContext)
    
    const details = properties.find(prop => prop.title.split(' ').join('-') == params.slug)

    function handlePropAdd(){
      setVal(prev => prev + 1)
      setPropItem([...propItem, {title: details.title, type: details.type, description: details.description, price: details.price}])
    }

    const relatedProp = properties.filter
    ((card => card.category == details.category && details.title !== card.title))

    const relatedCard = relatedProp.map((card, index) => 

    // related card shadow code
    <Link href={`/prop/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer rounded-lg shadow-2xl' key={index}> 
    
    <PropertyCard 
    title={card.title} 
    type={card.type} 
    rating={card.rating} 
    location={card.location} 
    category={card.category} 
    status={card.status} 
    paymentfrequency={card.paymentfrequency} 
    price={card.price}/>
    
  </Link>);
// additional images upon request
const otherImages = details.images?.map((image, index) => ( <img src={image} alt={`${details.title} image ${index + 1}`} className='rounded-lg shadow-2xl mx-auto p-1' key={index} />
));

const featureList = details.features?.map((feature, index) => (
  <li key={index} className='flex flex-none text-center md:inline-flex mb-2.5 gap-5 mt-2 mx-1 p-0.5 rounded-sm text-black'>
    <FaCheck className='md:inline-flex mb-2.5 gap-5 mt-1  p-0.5 rounded-sm bg-blue-400  text-white' />{feature}</li>
));


  return (
    <div className='text-center rounded-md'>
        <div className='main-container flex justify-center mt-20 md:mt-5'>
            <div className='inner-container flex flex-row mb-1.5 gap-5 md:gap-10 place-items-center md:mb-3'>
                <div>
              <h1 className='text-lg text-left md:text-2xl font-semibold'>{details.title}</h1>
              <p className='text-left'>{details.location}</p>
                </div>
                <div>
                
                <div className="like flex flex-row items-end gap-2 m-auto group">
    <button onClick={handlePropAdd}>
        <FaHeart className="bg-blue-400 hover:bg-red-400 p-1.5 text-3xl hover:text-white rounded-md" />
    </button>
    <p className="absolute mb-8 -ml-4  hidden group-hover:block bg-green-500 text-white p-1 rounded-lg">LIKE ME</p>

                <button>
                  <a href={`mailto:luap.trams@gmail.com`} target="_blank"> 
                <FaEnvelope className='email-button bg-blue-400 text-black hover:bg-blue-400 p-1.5 text-3xl hover:text-white rounded-md'/></a>
                </button>

                <button>
                  <a href={`https://api.whatsapp.com/send?phone=2348020817992&text=Hello,%0A%0AI%27d%20love%20to%20view%20this%20property.%20When%20would%20be%20a%20good%20time%20to%20arrange%20a%20visit?`} target="_blank"> 
                <FaWhatsapp className='whatsapp-button bg-blue-400 text-black hover:bg-green-600 p-1.5 text-3xl hover:text-white rounded-md'/></a>
                </button>
                
                <button>
                  <a href={`tel:+2348020817992`} target="_blank">
                <FaPhone className="phone-button bg-blue-400 hover:text-white p-1.5 text-3xl rounded-md" />
                  </a> 
                </button>
                
              </div>
              <button>{details.price}</button>
      <div>
              </div>
              </div>
            </div>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {otherImages}
        </div>

        {/* Description, features and like button wrapped within a div to apply border */}
        <div>
          <h2 className='text-center text-lg font-bold capitalize mt-5 -mb-3 bg-blue-900 p-2 text-white'>property overview</h2>
        <p className='w-full md:flex place-items-center flex-nowrap mx-auto p-5 bg-transparent md:w-4/5'>{details.description}</p>
        {/* <img src={details.images[0]} alt={details.title} className="w-1/3 mx-auto" /> */}
        <div className='features-list text-center'>
            <h2 className='text-lg font-bold capitalize '>key features</h2>
              <ul className='text-left md:text-center gap-5 mx-auto'>
                {featureList}
              </ul>
      </div>

        {/* <div className='flex justify-center items-center mx-auto'> */}
        {/* <button onClick={handlePropAdd} className='bg-blue-900 text-white p-3 rounded-md m-2'>add property</button> */}
        {/* <button onClick={handlePropAdd} className='bg-blue-900 text-blue-300 text-2xl p-1.5 rounded-md m-2 h-10 w-22 px-8 hover:bg-red-400 hover:text-white'><FaHeart /></button>
        </div> */}

      </div>
            <div className='px-24 pb-6'>
              <h2 className='text-2xl font-bold p-2'>Related properties</h2>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {relatedCard}
              </div>
            </div>
    </div>

  )
}
