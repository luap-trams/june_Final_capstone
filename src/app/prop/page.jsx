"use client"
import Link from 'next/link'
import PropertyCard from "../components/PropertyCard"
import { IoMdSearch } from 'react-icons/io'
import { properties } from "../data"
import { useState } from "react"

//SEARCH BAR CODE

export default function PropertyPage() {
    const [searchProp, setSearchProp] = useState('')
    
    function filterSearch(e){
      setSearchProp(e.target.value)
    }
    const filterLists = properties.filter( prop => prop.title.toLowerCase().includes(searchProp.toLowerCase()) || prop.category.toLowerCase().includes(searchProp.toLowerCase()))
    
    const cards = filterLists.length == 0 ?(
      <h1>Oops, No results found. Explore other options or contact us for assistance.</h1>
    ) : filterLists.map((card,index) => (
      <section key={index}>
      
      <Link href={`/prop/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'>
        <PropertyCard title={card.title} category={card.category} type={card.type} price={card.price} rating={card.rating}/>
      </Link>
    </section>
    ))
  return (
   
    <>
    <div className='flex items-center justify-between p-3 border-4 rounded-full mt-4 border-blue-400 w-3/5 m-auto'>
    
    <input type="text" name='search' id='search' className='outline-none block mt-4 w-4/5 text-2xl' placeholder='Discover available properties…' defaultValue={searchProp} onChange={(e)=>filterSearch(e)}/>
    
    <IoMdSearch className='text-4xl mr-2 my-8-[50px] w-[50px] p-[6px] rounded-full bg-blue-400'/>
    </div>

    <div className='grid grid-cols-4 gap-4 px-16 py-32'>
    {cards}
    </div>
    </>
  )
}