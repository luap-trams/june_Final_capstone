import Image from 'next/image';
import React from 'react';
import { Rating } from '@mui/material';

import { properties } from '../data';

export default function PropertyCard({ rating, title, type, description, category, price, location, status }) {
  
    const isAvailable = properties.find(prop => prop.id === status)?.status === "available";
  
  return (
    // Images Displayed in Flex-cols-3 for the Property List Page where you can perform search function
    <div className='flex flex-col items-center'> 
      <div className='items-center'>
        
      {/* <p className={`property-status absolute font-bold text-1xl uppercase ${isAvailable ? 'text-green-500' : 'text-red-500'} text-center rounded-lg`}>{status}</p> */}
      <Image src={`/images/${title.split(' ').join('')}.jpeg`} alt={title} width={'400'} height={'400'} className='rounded-t-md'/>
      </div>
      {/* Material UI rating component */}
      
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
