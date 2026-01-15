import React from 'react'
import { Link } from 'react-router-dom'
import featuredImage from "../../assets/meat-feature.png";
const FeaturedCollection = () => {
    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-lg'>
                {/* LEFT CONTENT  */}
                <div className='lg:w-1/2 p-8 text-center lg:text-left'>
                    <h2 className='text-lg font-semibold text-rabbit-light mb-2'>Pure Halal, Everyday Fresh</h2>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-6 text-rabbit'>Quality meats and groceries, delivered fresh</h2>
                    <p className='text-lg text-gray-500 font-light mb-6'>
                        Experience the perfect balance of quality, hygiene, and halal authenticity. Our meats are freshly
                         prepared, and our groceries are carefully chosen to support your everyday cooking—delivered 
                         fresh, fast, and reliable.
                    </p>
                    <Link
                        className='bg-rabbit text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800'
                        to='/collections/all'>
                        Shop Now
                    </Link>
                </div>
                {/* RIGHT CONTENT  */}
                <div className='lg:w-1/2'>
                    <img
                        className='h-full w-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl'
                        src={featuredImage} alt="Featured image" />
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection