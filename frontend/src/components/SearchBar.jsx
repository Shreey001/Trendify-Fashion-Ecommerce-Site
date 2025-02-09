
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

    return showSearch && visible ? (
        <div className='border-t border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300'>
            <div className='container mx-auto px-4 py-3 flex items-center justify-center'>
                <div className='relative w-full max-w-2xl group'>
                    <div className='flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-6 py-3
                                  transition-all duration-300 hover:border-pink-200 hover:shadow-md
                                  focus-within:border-pink-500 focus-within:shadow-lg focus-within:shadow-pink-100'>
                        <img 
                            className='h-5 w-5 opacity-40 group-hover:opacity-60 transition-opacity duration-300' 
                            src={assets.search_icon} 
                            alt="Search" 
                        />
                        <input 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='flex-1 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400'
                            type='text'
                            placeholder='Search for products...'
                        />
                        {search && (
                            <button 
                                onClick={() => setSearch('')}
                                className='text-gray-400 hover:text-gray-600 transition-colors duration-200'
                            >
                                <img 
                                    className='h-4 w-4 opacity-60 hover:opacity-100 transition-opacity duration-200' 
                                    src={assets.cross_icon} 
                                    alt="Clear" 
                                />
                            </button>
                        )}
                    </div>
                </div>
                
                <button 
                    onClick={() => setShowSearch(false)}
                    className='ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'
                >
                    <img
                        className='w-5 h-5 opacity-60 hover:opacity-100 transition-opacity duration-200' 
                        src={assets.cross_icon} 
                        alt="Close" 
                    />
                </button>
            </div>
        </div>
    ) : null
}

export default SearchBar















// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import { useLocation } from 'react-router-dom';

// const SearchBar = () => {

//     const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
//     const [visible, setVisible] = useState(false);

//     const location = useLocation();

//     useEffect(() => {
//         if (location.pathname.includes('collection') ) {
//             setVisible(true);
//         }
//         else {
//             setVisible(false);
//         }
//     },[location]
    
//     )

//     return showSearch && visible ? (
      
//         <div className='border-t border-b bg-gray-50 text-center'>
//             <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                
//                 <input value={search} 
//                 onChange={(e) => setSearch(e.target.value)}
                    
//                     className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search' />
                
//                 <img className='h-5 w-5' src={assets.search_icon} alt="" />
//             </div>
//             <img
//             onClick={()=>setShowSearch(false)}
//                 className='inline w-5 cursor-pointer h-5' src={assets.cross_icon} alt="" />
      
//         </div>
//     ) : null;
// }

// export default SearchBar
