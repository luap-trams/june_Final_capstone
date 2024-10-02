"use client"
import React from 'react'
import { properties } from '@/app/data'
import Link from 'next/link'
import PropertyCard from '@/app/components/PropertyCard'
import { useContext } from 'react'
import { SidebarContext } from "@/app/providers"
import { FaCheck } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { AiFillEnvironment } from 'react-icons/ai';

export default function PropDetails({params}) {

    const {setVal,propItem, setPropItem} = useContext(SidebarContext)
    
    const details = properties.find(prop => prop.title.split(' ').join('-') == params.slug)

    function handlePropAdd(){
      setVal(prev => prev + 1)
      setPropItem([...propItem, {title: details.title, type: details.type, description: details.description, price: details.price}])
    }


    const relatedProp = properties.filter((card => card.category == details.category && details.title !== card.title))

    const relatedCard = relatedProp.map((card, index) => <Link href={`/prop/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index} className='rounded-lg shadow-2xl'>
    <PropertyCard title={card.title} type={card.type} rating={card.rating} location={card.location} category={card.category} price={card.price}/>
  </Link>);

const otherImages = details.images?.map((image, index) => (
  <img src={image} alt={`${details.title} image ${index + 1}`} className='rounded-lg shadow-2xl mx-auto p-1' key={index} />
));

const featureList = details.features?.map((feature, index) => (
  <li key={index}><FaCheck className='md:inline-flex mb-2.5 gap-5 mt-2 mx-1 p-0.5 rounded-sm bg-blue-400  text-white' />{feature}</li>
));


  return (
    <div className='text-center rounded-md'>
        <h1 className='md:text-2xl py-3 font-medium -mb-4'>{details.title}</h1>
      <div className='flex flex-row gap-2 justify-center m-auto'>
        <p><AiFillEnvironment size={20} /></p>
        <h2 className='text-sm font-medium mb-1'>{details.location}</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {otherImages}
        </div>

        {/* Description, features and like button wrapped within a div to apply border */}
        <div>
        <p className='w-full md:flex place-items-center flex-nowrap mx-auto p-5 bg-transparent md:w-4/5'>{details.description}</p>
        {/* <img src={details.images[0]} alt={details.title} className="w-1/3 mx-auto" /> */}
        <div className='features-list'>
            <h2 className='text-lg font-bold'>Features</h2>
              <ul className='flex-col md:inline-flex md:flex-row justify-center gap-5 mx-auto'>
                {featureList}
              </ul>
      </div>

        <div className='flex justify-center items-center mx-auto'>
        {/* <button onClick={handlePropAdd} className='bg-blue-900 text-white p-3 rounded-md m-2'>add property</button> */}
        <button onClick={handlePropAdd} className='bg-blue-900 text-blue-300 text-2xl p-1.5 rounded-md m-2 h-10 w-22 px-8 hover:bg-red-400 hover:text-white'><FaHeart /></button>
        </div>

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
