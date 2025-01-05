import React from 'react'
import PropertyCard from './PropertyCard'
import properties from '../data'
import Link from 'next/link'

// PROPERTY LIST CODE

export default function PropertyLists() {

    const cards = properties.sort((x,y) => y.category - x.category).map((card,index) => (
        <section key={index} className='rounded-md shadow-2xl m-auto'>
            <Link href={`/prop/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'>
            <PropertyCard 
            title={card.title} 
            type={card.type}price={card.price}
            img={card.images}
            rating={card.rating} 
            location={card.location} 
            category={card.category} 
            status={card.status}
            paymentfrequency={card.paymentfrequency}/>
            </Link>
        </section>
    )).slice(0,8)
  return (
    <>

    <div className='grid md:grid-cols-2 gap-4 px-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 capitalize h-full rounded-sm'> {/* TOP PICKS*/}
    {cards}
        {/* <PropertyCard title="Penthouse In Ikoyi" type="Miniflat" pri="500,000"/> */}
    </div>
    <p className='flex items-center justify-center my-7'>
    <Link href={'/prop'} ><span className='p-1.5 text-xs  md:text-sm md:bg-blue-200 border-2 border-blue-900 text-black rounded-md md:p-3 uppercase  hover:text-white hover:bg-blue-900'>view more properties</span>
    </Link>
    </p>
    </>
  )
}
