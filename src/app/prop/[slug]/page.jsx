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
      setPropItem([...propItem, {title: details.title, typ: details.type}])
    }


    const relatedProp = properties.filter((card => card.category == details.category && details.title !== card.title))

    const relatedCard = relatedProp.map((card, index) => <Link href={`/prop/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
    <PropertyCard title={card.title} type={card.type} rating={card.rating}/>
  </Link>)
  return (
    <div>
        <h1>{details.title}</h1>
        <p>{details.description}</p>
        <p>{details.image}</p>
        <button onClick={handlePropAdd} className='bg-blue-900 text-white p-3 rounded-md'>add property</button>

        <div>
            <h2 className='text-4xl font-bold'>related properties</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {relatedCard}
            </div>
        </div>
    </div>

  )
}