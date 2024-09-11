import Image from 'next/image'
import PropertyLists from './components/PropertyLists'
import Header from './components/Header'
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";


export default function Home() {
  return (
    // <div className='bg-amber-600 h-screen text-white flex flex-row justify-center items-center text-6xl'>
  <div className='text-center'>
      

          <p className='text-8xl py-20 inline-flex justify-center text-center text-blue-900 font-bold'>Unlock the door to your dream home</p>
  

        <div className='inline-flex flex-wrap justify-center gap-4 w-full'>
          <Image src={'/aboutcover.jpeg'} alt={'Tall building'} width={'1400'} height={'1500'}/>
          
       
         
          {/* <Image src={'https://images.pexels.com/photos/7447654/pexels-photo-7447654.jpeg'} alt={'Skycrapper'} width={'200'} height={'200'}/> */}
        
        </div>

          <div className='py-3'>
          <h2 className='flex justify-center text-center text-4xl text-black-900 px-5'>Exclusive Luxury Properties in Lagos</h2>
          <p className='flex justify-center text-center text-md'>Curated selection of the market's finest listings, chosen just for you.</p>

          <div className='flex items-center justify-center my-2'><span className='bg-blue-900 text-white rounded-t-2xl p-2.5 uppercase'>Top Picks</span>
          </div>

          </div>
          <PropertyLists />
          <Header />
     
          
         
          
    
  </div>
  
  
  )
}
