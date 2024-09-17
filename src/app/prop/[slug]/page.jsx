"use client"
import React from 'react'
import { properties } from '@/app/data'
import Link from 'next/link'
import PropertyCard from '@/app/components/PropertyCard'
import { useContext } from 'react'
import { SidebarContext } from "@/app/providers"

export default function PropDetails({params}) {

    const {setVal,propItem, setPropItem} = useContext(SidebarContext)
    
    const details = properties.find(prop => prop.title.split(' ').join('-') == params.slug)

    function handlePropAdd(){
      setVal(prev => prev + 1)
      setPropItem([...propItem, {title: details.title, type: details.type}])
    }


    const relatedProp = properties.filter((card => card.category == details.category && details.title !== card.title))

    const relatedCard = relatedProp.map((card, index) => <Link href={`/prop/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
    <PropertyCard title={card.title} type={card.type} rating={card.rating} category={card.category}/>
  </Link>);

const otherImages = details.images?.map((image, index) => (
  <img src={image} alt={`${details.title} image ${index + 1}`} className="w-1/3 mx-auto" key={index} />
));

const featureList = details.features?.map((feature, index) => (
  <li key={index}>{feature}</li>
));


  return (
    <div className='text-center'>
        <h1>{details.title}</h1>
        <div className='flex justify-center mx-auto px-10 gap-x-8'>
          {otherImages}
        </div>
        <p className='flex place-items-center flex-nowrap mx-auto p-5 bg-transparent h-1/3 w-1/3'>{details.description}</p>
        {/* <img src={details.images[0]} alt={details.title} className="w-1/3 mx-auto" /> */}
        <div className='features-list'>
            <h2 className='text-2xl font-bold'>Features</h2>
              <ul className='md:inline-flex gap-5 mx-auto'>
                {featureList}
              </ul>
      </div>

        
        <button onClick={handlePropAdd} className='bg-blue-900 text-white p-3 rounded-md m-2'>add property</button>

            <div>
              <h2 className='text-4xl font-bold'>related properties</h2>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {relatedCard}
              </div>
            </div>
    </div>

  )
}
