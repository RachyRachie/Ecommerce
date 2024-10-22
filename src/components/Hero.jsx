import React from 'react';
import hero from '../assets/hero.jpg'
import { Link } from 'react-router-dom';
import grey from '../assets/grey.png'

const Hero = () => {
  return (
    <section className="bg-[url('/src/assets/hero.jpg')] h-[800px] bg-hero w-full object-cover bg-no-repeat bg-center py-24">
         <div className='container mx-auto flex justify-around h-full'>
            {/* text */}
            <div className='flex flex-col justify-center'>
        {/* pre-title */}
            <div className='font-semibold flex items-center uppercase'>
                <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
            </div>
       {/* title */}
            <h1 className='text-[70px] leading-[-1.1] font-light mb-4'>
              COZYCORNER SALE STYLISH <br/>
              <span className='font-semibold'>WOMENS</span>
            </h1>
            <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-purple-950'>Discover More</Link>
            </div>
             {/* image */}
             <div className='hidden lg:block'>
            <img src={grey} alt='fashion wear'  />
             </div>
         </div>
    </section>
  )
}

export default Hero

// import React from 'react'
// import hero from '../assets/hero.jpg'
// import jean from '../assets/jean.png'

// const Hero = () => {
//   return (
//     <section className=''>
//         <img src={hero} alt='' className='w-full h-[750px] relative' />
//         <img src={jean} alt='' className='absolute right-10 top-20 h-screen w-1/2 object-cover rounded-3xl' />
        
//     </section>
//   )
// }

// export default Hero