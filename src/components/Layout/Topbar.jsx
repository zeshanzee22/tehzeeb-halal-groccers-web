import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import { LuPhone } from "react-icons/lu";
import Marquee from "react-fast-marquee";
import Logo from '../../assets/logo2.png'

const Topbar = () => {
    return (
        <div
            className='bg-white text-zinc-950 '>
            <div className='container  flex justify-between items-center py-4'>
                {/* Left Section - Call Us */}
                <div className="text-sm hidden md:flex items-center space-x-4">

                    <div className="flex flex-col items-end">
                        <p className='text-base'>call us today</p>
                        <a href="tel:+441273257154" className="text-lg text-green-600 hover:text-green-300">
                            +44 1273 257154
                        </a>
                    </div>
                    <LuPhone className="h-8 w-8 text-green-600" />
                </div>

                
                {/* Logo - Centered */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                    <img src={Logo} alt="Logo" className="h-15 md:h-22" />
                </div>
                <div className='hidden md:flex items-center space-x-4'>
                    <a href='#' className='hover:text-gray-300'>
                        <TbBrandMeta className='h-6 w-6' />
                    </a>
                    <a href='#' className='hover:text-gray-300'>
                        <IoLogoInstagram className='h-6 w-6' />
                    </a>
                    <a href='#' className='hover:text-gray-300'>
                        <RiTwitterXLine className='h-6 w-6' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar