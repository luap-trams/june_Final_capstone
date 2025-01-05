import Image from 'next/image'
import PropertyLists from './components/PropertyLists'
import Header from './components/Header'
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { Roboto } from 'next/font/google';


export default function Home() {
  return (
    // <div className='bg-amber-600 h-screen text-white flex flex-row justify-center items-center text-6xl'>
  <div className='main-1 mt-16 md:mt-0 w-screen'>

        <div className='inner-1 w-full  flex justify-center items-center '>
              <Image src={'/images/PenthouseInLekkiCopy.jpeg'} alt={'home cover'} width={'2200'} height={'1300'} loading="lazy" className='flex justify-items-center items-center  m-auto'
              />
              <p className='text-center text-white text-3xl p-4 rounded-none  md:text-5xl  w-4/6 uppercase bg-blue-900 md:rounded-lg md:p-14 lg:text-7xl xl:text-9xl bg-opacity-50  absolute m-auto h-auto font-semibold '>Unlock the door<br /><span className='text-center text-xs md:text-3xl font-thin '>to your dream home</span></p>
          {/* <Image src={'https://images.pexels.com/photos/7447654/pexels-photo-7447654.jpeg'} alt={'Skycrapper'} width={'200'} height={'200'}/> */}
        </div>

        <div className='inner-2 py-3 mt-3 md:mt-10'>
          <h2 className='flex justify-center text-center text-2xl px-2 md:text-5xl md:px-4 font-extrabold'>Exclusive Luxury Properties in Lagos</h2>
          <h2 className='flex justify-center text-center text-xs mb-4 md:text-xl md:mb-10'>Curated selection of the market's finest listings, chosen just for you.</h2>
          <p className='flex items-center justify-center -mb-2 mt-1 md:-mb-1.5 md:mt-2'><span className='text-xs px-2 py-1 md:text-base bg-blue-900 text-white rounded-t-2xl md:p-2.5  uppercase'>Top Picks</span></p>
        </div>
        
{/* PropertyList component on main div */}
        <PropertyLists /> 

        <div className='newsletter h-44 w-full pt-8 bg-blue-400 m-auto text-center'>
          <p className='text-md md:text-2xl font-semibold'>Get the latest news, expert tips, and exclusive opportunities.</p>

<form action="https://formsubmit.co/3084d15bc47759fb2b4ce5bf4dfd3a91" method="POST" >
         <div className=''> 
          <label htmlFor="email" id='email' name='email'></label>
          <input className='rounded-l-lg h-auto outline-none w-3/6 text-xs mt-3 p-1.5 md:text-lg md:h-11 md:w-2/6 md:mt-5 md:p-3'type='email' id='email' name='email' placeholder='Subscribe to newsletter' required />
          <button className=' rounded-r-lg text-white text-xs h-auto w-24 p-1.5 md:text-base md:h-11 md:w-40 md:mb-2 md:p-3 bg-blue-900 hover:bg-blue-800 text-center uppercase' type='submit' name='Sign up' id='Signup'>subscribe</button>
          </div>
</form>
          <small className='text-xs mb-2 md:mb-7 md:text-sm md:pb-3'>By signing up, you agree to receive marketing emails from SmartOptions. Unsubscribe at any time.</small>
        </div>
          {/* <Header /> */}
          
          {/* <div className='relative group h-24 w-24 bg-blue-600 rounded-full  m-auto'> */}

            {/* <FaStar size={25} color='white' className='absolute bottom-9 left-9 hidden group-hover:block'/> */}
            {/* <p className=' absolute bottom-full mb-1 hidden group-hover:block text-xs text-white bg-black px-2 py-1 rounded'>Favourites</p> */}
          
          {/* </div> */}

  </div>
  
  )
}
