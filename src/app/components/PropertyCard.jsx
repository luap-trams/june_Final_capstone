// import Image from 'next/Image'
// import React from 'react'
// import { Rating } from '@mui/material'

// export default function PropertyCard({img,rating,title,type,description,category,price}) {
//   return (
//     <div className='flex flex-col items-center' >
        
//         <Image src={`/${img}.jpeg`} alt={title} width={'400'} height={'500'} className='rounded-md'/>

//         <p>
//           <Rating name='half-rating-read' defaultValue={rating} precision={0.5} max={5} readOnly />
//         </p>
//         <h1 className='text-xl font-semibold'>{title}</h1>
//         <p className='text-gray-500'>{type}</p>
//         <p className='text-gray-700 mt-2'>{description}</p>
//         <p className='text-gray-500 italic'>{category}</p>
//         <p className='text-lg font-bold text-blue-700 mt-4'>{price}</p>
//     </div>
    
//   )
// }

import Image from 'next/Image';
import React from 'react';
import { Rating } from '@mui/material';

export default function PropertyCard({ rating, title, type, description, category, price }) {
  return (
    <div className='flex flex-col items-center'>
      <Image src={`/images/${title.split(' ').join('')}.jpeg`} alt={title} width={'400'} height={'400'} className='rounded-md'/>
      {/* Material UI rating component */}
      <p>
        <Rating name='half-rating-read' defaultValue={rating} precision={0.5} max={5} readOnly />
      </p>

      {/* Property Details */}
      <h1 className='text-xl font-semibold'>{title}</h1>
      <p className='text-gray-500'>{type}</p>
      <p className='text-gray-700 mt-2'>{description}</p>
      <p className='text-gray-500 italic'>{category}</p>
      <p className='text-lg font-bold text-blue-700 mt-4'>{price}</p>
    </div>
  );
}
