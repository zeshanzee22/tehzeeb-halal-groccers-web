import React, { useState } from 'react'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom' 
import { IoMdClose } from 'react-icons/io'
 


const Navbar = () => {
 
    const [openDrawer, setOpenDrawer] = useState(false)
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
    const toggleMobileNavDrawer = () => {
        setOpenMobileDrawer(!openMobileDrawer)
    }
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }


    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                 
                {/* CENTER NAVIGATION */}
                <div className='hidden md:flex flex-1 justify-center space-x-6'>
                    <Link to='/' className='px-2 text-xl  text-rabbit font-medium hover:text-black  '>Home</Link>
                    <Link to='/collections/all?gender=Women' className='px-2 text-xl text-rabbit  font-medium hover:text-black '>Shop</Link>
                    <Link to='/collections/all?category=Top Wear' className='px-2 text-xl text-rabbit  font-medium hover:text-black '>Categories</Link>
                    <Link to='/collections/all?category=Bottom Wear' className='px-2 text-xl text-rabbit  font-medium hover:text-black '>About</Link>
                    <Link to='/collections/all?category=Bottom Wear' className='px-2 text-xl text-rabbit  font-medium hover:text-black '>Pages</Link>
                    <Link to='/collections/all?category=Bottom Wear' className='px-2 text-xl text-rabbit  font-medium hover:text-black '>Find a Store</Link>
                </div>
                {/* RIGHT NAVIGATION */}
                <div className='flex items-center space-x-4'>
                   
                    {/* MOBILE MENU */}
                    <button
                        onClick={toggleMobileNavDrawer}
                        className='md:hidden hover:text-black'>
                        <HiBars3BottomRight className='h-5 w-5 text-gray-700' />
                    </button>

                </div>

            </nav>

           
            {/* Mobile  Navigation Drawer */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg 
                z-50 transform transition-transform duration-300 ease-in-out 
                ${openMobileDrawer ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex justify-end p-4'>
                    <button
                        onClick={toggleMobileNavDrawer}>
                        <IoMdClose className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to='/collections/all?gender=Men' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-black'>Home</Link>
                        <Link to='/collections/all?gender=Women' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-black'>Shop</Link>
                        <Link to='/collections/all?category=Top Wear' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-black'>Categories</Link>
                        <Link to='/collections/all?category=Bottom Wear' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-black'>About</Link>
                        <Link to='/collections/all?category=Bottom Wear' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-black'>Pages</Link>
                        <Link to='/collections/all?category=Bottom Wear' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-black'>Find a Store</Link>
                    </nav>
                </div>

            </div>

        </>
    )
}

export default Navbar