import Image from 'next/image';
import React from 'react';
import { Rating } from '@mui/material';

import { properties } from '../data';

const WHATSAPP_PHONE_NUMBER = "+2348020817992";

export default function PropertyCard({ rating, title, type, description, category, price, location, status }) {
  
    // const isAvailable = properties.find(prop => prop.id === status)?.status === "available";
    const isAvailable = status === "available";
  
  return (
    // Images Displayed in Flex-cols-3 for the Property List Page where you can perform search function
    <div className='flex flex-col items-center relative'> 
      
      <div className='items-center relative'>
        {/* <p className={`property-status absolute font-bold text-1xl uppercase ${isAvailable ? 'text-green-500' : 'text-red-500'} text-center rounded-lg`}>{status}</p> */}
      <p className={`property-status font-bold text-xs uppercase absolute pointer-events: auto ${isAvailable ? 'text-white bottom-1 right-1 bg-blue-900 hover:bg-green-500 absolute' : 'text-white top-1 left-1 bg-red-600'} text-center rounded-md p-2`}>
        <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=Hello,%0A%0AI%27d%20love%20to%20view%20this%20property.%20When%20would%20be%20a%20good%20time%20to%20arrange%20a%20visit?`} target="_blank"> 
  {isAvailable ? "book a viewing" : "Unavailable"}</a></p>

      <Image src={`/images/${title.split(' ').join('')}.jpeg`} alt={title} width={'400'} height={'400'} className='rounded-t-md'/>
      </div>
   
      
     {/* Property Details */}
      <p className='m-3'>
        <Rating name='half-rating-read' defaultValue={rating} precision={0.5} max={5} readOnly  className='text-lg'/>
      </p>

      <h1 className='text-xl font-semibold -mt-3'>{title}</h1>
      <h2 className='text-sm font-medium -mt-1'>{location}</h2>
      <div className='flex flex-row justify-center gap-10 mt-2 text-white'>
      <p className=' bg-blue-400 p-0.5 px-2 rounded-lg'>{category}</p>
      <p className=' bg-blue-400 p-0.5 px-2 rounded-lg'>{type}</p>
      </div>
      <p className='text-gray-700 mt-2'>{description}</p>
      <p className='text-lg font-bold text-blue-700 mb-3'>{price}</p>
    </div>
  );
}
