
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-gray-700 cursor-pointer group' to={`/product/${id}`}>
            <div className='relative overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 group-hover:shadow-md'>
                <img 
                    className='w-full h-[300px] object-cover hover:scale-110 transition ease-in-out' 
                    src={image[0]} 
                    alt={name} 
                />
                <div className='absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                    <span className='float-right text-white text-xs px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors'>
                        View Details →
                    </span>
                </div>
            </div>
            <div className='px-2 py-3'>
                <p className='pt-1 pb-1 text-sm font-medium truncate'>{name}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-sm font-bold text-gray-900'>
                        {currency} {price}
                    </p>
                    <div className='h-1 w-10 bg-pink-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem














// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { Link } from 'react-router-dom';

// const ProductItem = ({ id, image, name, price }) => {
    
//     const { currency, } = useContext(ShopContext);

//   return (
//     <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//     <div className='overflow-hidden'>
//         <img 
//             className='w-full h-[300px] object-cover  hover:scale-110 transition ease-in-out' 
//             src={image[0]} 
//             alt="" 
//         />
//     </div>
//     <p className='pt-3 pb-1 text-sm'>{name}</p>
//     <p className='text-sm font-medium'>{currency} {price}</p>
// </Link>

//   )
// }

// export default ProductItem
