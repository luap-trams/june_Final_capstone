import Image from 'next/image';
import React from 'react';
import { Rating } from '@mui/material';

export default function PropertyCard({ rating, title, type, description, category, price }) {
  return (
    // Images Displayed in Flex-cols-3 for the Property List Page where you can perform search function
    <div className='flex flex-col items-center'>
      <Image src={`/images/${title.split(' ').join('')}.jpeg`} alt={title} width={'400'} height={'400'} className='rounded-t-md'/>
      {/* Material UI rating component */}
      
      <p className='m-3'>
        <Rating name='half-rating-read' defaultValue={rating} precision={0.5} max={5} readOnly />
      </p>

      {/* Property Details */}
      <h1 className='text-xl font-semibold'>{title}</h1>
      <div className='flex flex-row justify-center gap-10 text-white'>
      <p className=' bg-blue-400 py-1 px-2 rounded-lg'>{category}</p>
      <p className=' bg-blue-400 p-1 rounded-lg'>{type}</p>
      </div>
      <p className='text-gray-700 mt-2'>{description}</p>
      <p className='text-lg font-bold text-blue-700 mt-2'>{price}</p>
    </div>
  );
}
