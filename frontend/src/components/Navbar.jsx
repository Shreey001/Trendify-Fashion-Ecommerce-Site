import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const { setShowSearch, getCartCount } = useContext(ShopContext)

    return (
        <>
            {/* Static Line Separator */}
            <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent'></div>

            <div className='sticky top-0 z-50'>
                {/* Enhanced Background Layers */}
                <div className='absolute inset-0 bg-white/70'></div>
                <div className='absolute inset-0 bg-gradient-to-r from-pink-50/50 via-purple-50/30 to-pink-50/50'></div>
                <div className='absolute inset-0 backdrop-blur-md'></div>
                
                {/* Main Navbar with Enhanced Bottom Border */}
                <div className='relative'>
                    {/* Main Content */}
                    <div className='relative flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
                        <Link to='./' className='transition-transform hover:scale-105 duration-300'>
                            <img src={assets.logo} className='w-35 h-12 sm:w-50 sm:h-18 drop-shadow-sm' alt="" />
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className='hidden sm:flex gap-8 text-sm font-medium text-gray-700'>
                            <NavLink 
                                to='/' 
                                className={({ isActive }) => `
                                    group flex flex-col items-center transition-colors duration-300 
                                    ${isActive ? 'text-pink-500' : 'hover:text-pink-500'}
                                `}
                            >
                                <p className='relative px-2 py-1 rounded-full hover:bg-white/50 transition-all duration-300'>
                                    HOME
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 
                                                   transition-all duration-300 group-hover:w-full'>
                                    </span>
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 
                                                   transition-all duration-300
                                                   ${({ isActive }) => isActive ? 'w-full' : 'w-0'}`}>
                                    </span>
                                </p>
                            </NavLink>

                            <NavLink 
                                to='/collection' 
                                className={({ isActive }) => `
                                    group flex flex-col items-center transition-colors duration-300 
                                    ${isActive ? 'text-pink-500' : 'hover:text-pink-500'}
                                `}
                            >
                                <p className='relative px-2 py-1 rounded-full hover:bg-white/50 transition-all duration-300'>
                                    COLLECTION
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 
                                                   transition-all duration-300 group-hover:w-full'>
                                    </span>
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 
                                                   transition-all duration-300
                                                   ${({ isActive }) => isActive ? 'w-full' : 'w-0'}`}>
                                    </span>
                                </p>
                            </NavLink>

                            <NavLink 
                                to='/about' 
                                className={({ isActive }) => `
                                    group flex flex-col items-center transition-colors duration-300 
                                    ${isActive ? 'text-pink-500' : 'hover:text-pink-500'}
                                `}
                            >
                                <p className='relative px-2 py-1 rounded-full hover:bg-white/50 transition-all duration-300'>
                                    ABOUT
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 
                                                   transition-all duration-300 group-hover:w-full'>
                                    </span>
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 
                                                   transition-all duration-300
                                                   ${({ isActive }) => isActive ? 'w-full' : 'w-0'}`}>
                                    </span>
                                </p>
                            </NavLink>

                            <NavLink 
                                to='/contact' 
                                className={({ isActive }) => `
                                    group flex flex-col items-center transition-colors duration-300 
                                    ${isActive ? 'text-pink-500' : 'hover:text-pink-500'}
                                `}
                            >
                                <p className='relative px-2 py-1 rounded-full hover:bg-white/50 transition-all duration-300'>
                                    CONTACT
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 
                                                   transition-all duration-300 group-hover:w-full'>
                                    </span>
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 
                                                   transition-all duration-300
                                                   ${({ isActive }) => isActive ? 'w-full' : 'w-0'}`}>
                                    </span>
                                </p>
                            </NavLink>
                        </ul>

                        {/* Right Icons */}
                        <div className='flex items-center gap-6'>
                            <button 
                                onClick={() => setShowSearch(true)}
                                className='p-2 hover:bg-white/50 rounded-full transition-all duration-300'
                            >
                                <img
                                    src={assets.search_icon} 
                                    className='w-5 ml-2 sm:ml-0 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70' 
                                    alt="" 
                                />
                            </button>
                            
                            <div className='group relative z-50'>
                                <button className='p-2 hover:bg-pink-300 rounded-full transition-all duration-300'>
                                    <img 
                                        src={assets.profile_icon} 
                                        className='w-8 sm:w-5 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70' 
                                        alt="" 
                                    />
                                </button>
                                <div className='invisible group-hover:visible opacity-0 group-hover:opacity-100 
                                                absolute dropdown-menu right-0 top-full mt-1
                                                transition-all duration-300 transform origin-top scale-95 group-hover:scale-100'>
                                    <div className='relative pt-2'>
                                        <div className='absolute -top-0 right-4 w-4 h-4 bg-white/90 transform rotate-45 border-l border-t border-white/20'></div>
                                        <div className='relative bg-white/90 backdrop-blur-lg shadow-lg rounded-xl border border-white/20'>
                                            <div className='flex flex-col gap-2 w-32 py-3 px-5'>
                                                <p className='cursor-pointer hover:text-pink-500 transition-colors duration-200 whitespace-nowrap'>
                                                    My Profile
                                                </p>
                                                <p className='cursor-pointer hover:text-pink-500 transition-colors duration-200 whitespace-nowrap'>
                                                    Orders
                                                </p>
                                                <p className='cursor-pointer hover:text-pink-500 transition-colors duration-200 whitespace-nowrap'>
                                                    Logout
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link to='/cart' className='relative p-2 hover:bg-white/50 rounded-full transition-all duration-300'>
                                <img src={assets.cart_icon} className='w-5  min-w-5 hover:opacity-70 transition-opacity duration-300' alt="" />
                                {getCartCount() > 0 && (
                                    <span className='absolute right-1 top-1 w-4 h-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] rounded-full animate-bounce'>
            {getCartCount()}
        </span>
                                )}
                            </Link>


                            <button 
                                onClick={() => setVisible(true)}
                                className='p-2 hover:bg-white/50 rounded-full transition-all duration-300 sm:hidden'
                            >
                                <img 
                                    src={assets.menu_icon} 
                                    className='w-6 cursor-pointer transition-transform duration-300 hover:opacity-70' 
                                    alt="" 
                                />
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        <div className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[60] 
                                        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <div className={`absolute top-0 right-0 bottom-0 w-64 bg-white shadow-xl 
                                            transition-transform duration-300 
                                            ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                                <div className='flex flex-col text-gray-600'>
                                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50'>
                                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                                        <p>Back</p>
                                    </div>
                                    
                                    <NavLink onClick={() => setVisible(false)}
                                        to='/' className='py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200'>
                                        <p>HOME</p>
                                    </NavLink>

                                    <NavLink onClick={() => setVisible(false)}
                                        to='/collection' className='py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200'>
                                        <p>COLLECTION</p>
                                    </NavLink>

                                    <NavLink onClick={() => setVisible(false)}
                                        to='/about' className='py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200'>
                                        <p>ABOUT</p>
                                    </NavLink>

                                    <NavLink onClick={() => setVisible(false)}
                                        to='/contact' className='py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200'>
                                        <p>CONTACT</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Bottom Border Effect */}
                    <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent z-40'></div>
                    <div className='absolute -bottom-[4px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pink-300/10 to-transparent blur-sm z-40'></div>
                    <div className='absolute -bottom-[8px] left-0 right-0 h-[8px] bg-gradient-to-b from-white/50 to-transparent blur-md z-40'></div>
                </div>
            </div>
        </>
    )
}

export default Navbar





















// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';


// const Navbar = () => {

//     const [visible, setVisible] = useState(false);

//     const { setShowSearch } = useContext(ShopContext);

//     return (
//         <div className='flex items-center justify-between py-5 font-medium'>
//             <Link to='./'  > <img src={assets.logo} className='w-35 h-12 sm:w-50 sm:h-18 ' alt="" /> </Link>
//             <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
//                 {/* Home menu */}
//                 <NavLink to='/' className='flex flex-col items-center gap-1'  >
//                     <p>HOME</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//                 <NavLink to='/collection' className='flex flex-col items-center gap-1'  >
//                     <p>COLLECTION</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//                 <NavLink to='/about' className='flex flex-col items-center gap-1'  >
//                     <p>ABOUT</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//                 <NavLink to='/contact' className='flex flex-col items-center gap-1'  >
//                     <p>CONTACT</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//             </ul>
//             <div className='flex items-center gap-6' >
//                 {/* search */}
//                 <img
//                 onClick={()=>setShowSearch(true)}
//                     src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
//                 <div className='group relative'>
//                     {/* profile_container */}
//                     <img src={assets.profile_icon} className='w-6  cursor-pointer' alt="" />
//                     {/* dropdown-container */}
//                     <div className='group-hover:block hidden absolute dropdown-menu right-2 pt-4 '>
//                         <div className='flex flex-col gap-2 w-29 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
//                             <p className='cursor-pointer hover:text-black  '>My Profile</p>
//                             <p className='cursor-pointer hover:text-black  '>Orders</p>
//                             <p className='cursor-pointer hover:text-black  '>Logout</p>
//                         </div>

//                     </div>
//                 </div>
//                 <Link to='/cart' className='relative'>
//                     <img src={assets.cart_icon} className='w-6 min-w-5' alt="" />
//                     {/* card number of procucts added */}
//                     <p className='absolute right-[-6px] bottom-4 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]  '> 10 </p>
//                 </Link>
//                 {/* add  vertical menu for smaller devices */}
                
//                 <img onClick={() => setVisible(true)}
//                     src={assets.menu_icon} className='w-6 cursor-pointer sm:hidden ' alt="" />
                   
//             </div>
//             {/* SideBar menu for small screen */}
//             <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ?'w-full': 'w-0'} `} >
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer' >
//                   <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
//                    <p>Back</p>
//                     </div>   
//                     <NavLink onClick={() => setVisible(false)}
//                         to='/' className='py-5 pl-6 border border-gray-200  ' >
//                         <p>HOME</p>
//                     </NavLink>

//                     <NavLink onClick={() => setVisible(false)}
//                         to='/collection' className='py-5 pl-6 border border-gray-200' >
//                         <p>COLLECTION</p>
//                     </NavLink>

//                     <NavLink onClick={() => setVisible(false)}
//                         to='/about' className='py-5 pl-6 border border-gray-200' >
//                         <p>ABOUT</p>
//                     </NavLink>
                    
//                     <NavLink onClick={() => setVisible(false)}
//                         to='/contact' className='py-5 pl-6 border border-gray-200' >
//                         <p>CONTACT</p>
//                     </NavLink>
//             </div>

//             </div>

//         </div>
//     )
// }

// export default Navbar






















// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';


// const Navbar = () => {

//     const [visible, setVisible] = useState(false);

//     const { setShowSearch } = useContext(ShopContext);

//     return (
//         <div className='flex items-center justify-between py-5 font-medium'>
//             <Link to='./'  > <img src={assets.logo} className='w-35 h-12 sm:w-50 sm:h-18 ' alt="" /> </Link>
//             <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
//                 {/* Home menu */}
//                 <NavLink to='/' className='flex flex-col items-center gap-1'  >
//                     <p>HOME</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//                 <NavLink to='/collection' className='flex flex-col items-center gap-1'  >
//                     <p>COLLECTION</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//                 <NavLink to='/about' className='flex flex-col items-center gap-1'  >
//                     <p>ABOUT</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//                 <NavLink to='/contact' className='flex flex-col items-center gap-1'  >
//                     <p>CONTACT</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//             </ul>
//             <div className='flex items-center gap-6' >
//                 {/* search */}
//                 <img
//                 onClick={()=>setShowSearch(true)}
//                     src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
//                 <div className='group relative'>
//                     {/* profile_container */}
//                     <img src={assets.profile_icon} className='w-6  cursor-pointer' alt="" />
//                     {/* dropdown-container */}
//                     <div className='group-hover:block hidden absolute dropdown-menu right-2 pt-4 '>
//                         <div className='flex flex-col gap-2 w-29 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
//                             <p className='cursor-pointer hover:text-black  '>My Profile</p>
//                             <p className='cursor-pointer hover:text-black  '>Orders</p>
//                             <p className='cursor-pointer hover:text-black  '>Logout</p>
//                         </div>

//                     </div>
//                 </div>
//                 <Link to='/cart' className='relative'>
//                     <img src={assets.cart_icon} className='w-6 min-w-5' alt="" />
//                     {/* card number of procucts added */}
//                     <p className='absolute right-[-6px] bottom-4 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]  '> 10 </p>
//                 </Link>
//                 {/* add  vertical menu for smaller devices */}
                
//                 <img onClick={() => setVisible(true)}
//                     src={assets.menu_icon} className='w-6 cursor-pointer sm:hidden ' alt="" />
                   
//             </div>
//             {/* SideBar menu for small screen */}
//             <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ?'w-full': 'w-0'} `} >
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer' >
//                   <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
//                    <p>Back</p>
//                     </div>   
//                     <NavLink onClick={() => setVisible(false)}
//                         to='/' className='py-5 pl-6 border border-gray-200  ' >
//                         <p>HOME</p>
//                     </NavLink>

//                     <NavLink onClick={() => setVisible(false)}
//                         to='/collection' className='py-5 pl-6 border border-gray-200' >
//                         <p>COLLECTION</p>
//                     </NavLink>

//                     <NavLink onClick={() => setVisible(false)}
//                         to='/about' className='py-5 pl-6 border border-gray-200' >
//                         <p>ABOUT</p>
//                     </NavLink>
                    
//                     <NavLink onClick={() => setVisible(false)}
//                         to='/contact' className='py-5 pl-6 border border-gray-200' >
//                         <p>CONTACT</p>
//                     </NavLink>
//             </div>

//             </div>

//         </div>
//     )
// }

// export default Navbar
