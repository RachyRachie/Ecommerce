import React, { useContext } from 'react'
 import { Link } from 'react-router-dom';

import { BsPlus, BsEyeFill, } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
const { addToCart } = useContext(CartContext);

    const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300 ' src={image} alt=''/>
          </div>
        </div>
        {/* button */}
        <div className='absolute top-1 -right-10 group-hover:right-1  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={()=> addToCart(product, id)}>
            <div className='grid grid-cols-1 justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl'/>
              </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-purple-950 drop-shadow-xl'>
          <BsEyeFill/>
          </Link>
        </div>
       </div>

     {/* category, title & title*/}
       <div>
        <div className='text-sm capitaize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
       </div>
    </div>
  )
}

export default Product