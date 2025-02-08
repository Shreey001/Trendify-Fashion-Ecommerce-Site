import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='./'  > <img src={assets.logo} className='w-35 h-12 sm:w-50 sm:h-18 ' alt="" /> </Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
                {/* Home menu */}
                <NavLink to='/' className='flex flex-col items-center gap-1'  >
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'  >
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'  >
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'  >
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </ul>
            <div className='flex items-center gap-6' >
                {/* search */}
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group relative'>
                    {/* profile_container */}
                    <img src={assets.profile_icon} className='w-6  cursor-pointer' alt="" />
                    {/* dropdown-container */}
                    <div className='group-hover:block hidden absolute dropdown-menu right-2 pt-4 '>
                        <div className='flex flex-col gap-2 w-29 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
                            <p className='cursor-pointer hover:text-black  '>My Profile</p>
                            <p className='cursor-pointer hover:text-black  '>Orders</p>
                            <p className='cursor-pointer hover:text-black  '>Logout</p>
                        </div>

                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-6 min-w-5' alt="" />
                    {/* card number of procucts added */}
                    <p className='absolute right-[-6px] bottom-4 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]  '> 10 </p>
                </Link>
                {/* add  vertical menu for smaller devices */}
                
                <img onClick={() => setVisible(true)}
                    src={assets.menu_icon} className='w-6 cursor-pointer sm:hidden ' alt="" />
                   
            </div>
            {/* SideBar menu for smalle screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ?'w-full': 'w-0'} `} >
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer' >
                  <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                   <p>Back</p>
                    </div>   
                    <NavLink onClick={() => setVisible(false)}
                        to='/' className='py-5 pl-6 border border-gray-200  ' >
                        <p>HOME</p>
                    </NavLink>

                    <NavLink onClick={() => setVisible(false)}
                        to='/collection' className='py-5 pl-6 border border-gray-200' >
                        <p>COLLECTION</p>
                    </NavLink>

                    <NavLink onClick={() => setVisible(false)}
                        to='/about' className='py-5 pl-6 border border-gray-200' >
                        <p>ABOUT</p>
                    </NavLink>
                    
                    <NavLink onClick={() => setVisible(false)}
                        to='/contact' className='py-5 pl-6 border border-gray-200' >
                        <p>CONTACT</p>
                    </NavLink>
            </div>

            </div>

        </div>
    )
}

export default Navbar
