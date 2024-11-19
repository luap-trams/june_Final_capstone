import React from 'react'
import PropertyCard from './PropertyCard'
import properties from '../data'
import Link from 'next/link'

// PROPERTY LIST CODE

export default function PropertyLists() {

    const cards = properties.sort((x,y) => y.category - x.category).map((card,index) => (
        <section key={index} className='rounded-md shadow-lg'>
            <Link href={`/prop/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'>
            <PropertyCard 
            title={card.title} 
            type={card.type}price={card.price}
            img={card.images}
            rating={card.rating} 
            location={card.location} 
            category={card.category} 
            status={card.status}/>
            </Link>
        </section>
    )).slice(0,3)
  return (
    <>

    <div className='grid md:grid-cols-3 gap-4 px-4 capitalize h-full rounded-sm'> {/* TOP PICKS*/}
    {cards}
        {/* <PropertyCard title="Penthouse In Ikoyi" type="Miniflat" pri="500,000"/> */}
    </div>
    <p className='flex items-center justify-center my-7'>
    <Link href={'/prop'} ><span className='bg-black text-white rounded-3xl p-3 uppercase text-sm hover:bg-blue-900'>view more properties</span>
    </Link>
    </p>
    </>
  )
}
