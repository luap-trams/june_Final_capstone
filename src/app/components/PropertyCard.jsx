import Image from 'next/image';
import React from 'react';
import { Rating } from '@mui/material';

import { properties } from '../data';

export default function PropertyCard({ rating, title, type, description, category, price, location, status,paymentfrequency, state }) {
  
    const isAvailable = properties.find(prop => prop.status === status)?.status === "available";
    // const isAvailable = status === "available";
  
  return (
    // Images Displayed in Flex-cols-3 for the Property List Page where you can perform search function
    <div className='flex flex-col items-center capitalize'> 
      <div className='group items-center relative'>
        
      <a href='https://api.whatsapp.com/send?phone=2348020817992&text=Hello,%0A%0AI%27d%20love%20to%20view%20this%20property.%20When%20would%20be%20a%20good%20time%20to%20arrange%20a%20visit?' target="_blank"> 
      <p className={`property-status font-bold text-xs uppercase absolute  w-full ${isAvailable ? 'text-white bottom-0 bg-blue-900  group-hover:bg-green-600' : 'text-white bottom-0 bg-blue-900'} text-center p-2`}>
        {isAvailable ? "schedule an inspection" : status } 
      </p>
        </a>

           
      {/* <p className={`property-status font-bold text-xs uppercase absolute m-auto ${isAvailable ? 'text-white bottom-0 bg-blue-900 group-hover:bg-green-600' : 'text-white bottom-0 bg-red-600 bg-opacity-50 w-4/5'} text-center p-2`}><a href='https://api.whatsapp.com/send?phone=2348020817992&text=Hello,%0A%0AI%27d%20love%20to%20view%20this%20property.%20When%20would%20be%20a%20good%20time%20to%20arrange%20a%20visit?' target="_blank">
        {isAvailable ? "schedule an inspection" : status } </a>
      </p> */}
        


     {/* All images */}
      <Image src={`/images/${title.split(' ').join('')}.jpeg`} alt={title} width={'400'} height={'400'} className='rounded-t-md'/>
      </div>
      {/* Material UI rating component */}
      
      {/* Property Details */}
      <p className='m-3'>
        <Rating name='half-rating-read' defaultValue={rating} precision={0.5} max={5} readOnly  className='text-base'/>
      </p>

      <h1 className='text-lg md:text-xl font-semibold -mt-3'>{title}</h1>
      <h2 className='text-xs md:text-sm font-medium -mt-1'>{location}</h2>
      <div className='flex flex-row justify-center text-base md:text-lg gap-5 mt-2 text-white'>
      <p className='bg-blue-400 p-0.5 px-2 rounded-md '>{category}</p>
      <p className='bg-blue-400 p-0.5 px-2 rounded-md'>{type}</p>
      <p className='bg-blue-400 p-0.5 px-2 rounded-md '>{paymentfrequency}</p>
      </div>
      <p className='text-gray-700 mt-2'>{description}</p>
      <p className='text-lg font-bold text-blue-700 mb-3'>{price}</p>
    </div>
  );
}
