"use client"
import Link from 'next/link'
import PropertyCard from "../components/PropertyCard"
import { IoMdSearch } from 'react-icons/io'
import { properties } from "../data"
import { useState } from "react"
import '../globals.css';

//SEARCH BAR CODE

export default function PropertyPage() {
    const [searchProp, setSearchProp] = useState('')
    
    function filterSearch(e){
      setSearchProp(e.target.value)
    }
    const filterLists = properties.filter( prop => prop.title.toLowerCase().includes(searchProp.toLowerCase()) || prop.category.toLowerCase().includes(searchProp.toLowerCase()) || prop.type.toLowerCase().includes(searchProp.toLowerCase()) || prop.price.toLowerCase().includes(searchProp.toLowerCase()))
    
    const cards = filterLists.length == 0 ?(
      <h1 className='flex items-center justify-center w-screen'>Oops, No results found. Explore other options or contact us for assistance.</h1>
    ) : filterLists.map((card,index) => (
      <section key={index} className='rounded-lg shadow-2xl'>
      
      <Link href={`/prop/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'>
        <PropertyCard title={card.title} location={card.location} category={card.category} type={card.type} price={card.price} rating={card.rating} status={card.status}/>
      </Link>
    </section>
    ))
  return (
   
    <>
    {/* <div className='flex items-center justify-between p-3 border-4 rounded-full mt-4 border-blue-400 bg-white w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 m-auto'></div> */}
    
    <div className='flex items-center justify-between p-3 border-2 rounded-full mt-4 border-none bg-white w-3/4 max-sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 m-auto'>
    
    <input type="text" name='search' id='search' className='outline-none block w-4/5 text-xl' placeholder='Search available properties…' defaultValue={searchProp} onChange={(e)=>filterSearch(e)} style={{ backgroundColor: 'transparent'}}/>
    
    <IoMdSearch className='text-4xl mr-2 my-8-[50px] w-[50px] p-[6px] rounded-full bg-blue-400'/>
    </div>

    <div className='grid grid-cols-1 gap-4 px-8 py-16 bg-blue-200 h-full max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {cards}
    </div>
    </>
  )
}
