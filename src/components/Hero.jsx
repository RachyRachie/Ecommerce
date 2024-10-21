import React from 'react';
//import rachael from '../assets/rachael.jpg';
import { Link } from 'react-router-dom';
import rachael from '../assets/rachael.jpg'

const Hero = () => {
  return (
    <section >
        <img className='bg-pink-200 h-[800px] bg-hero w-full object-cover bg-no-repeat bg-center' src={rachael} />
    </section>
  )
}

export default Hero