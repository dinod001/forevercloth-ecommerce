import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-row border border-gray-400'>
                
                {/* Hero Left Side */}
                <div className='w-full sm:w-1/2 flex flex-col justify-center px-6 py-10 sm:py-0 text-[#414141]'>
                    <div className='flex items-center gap-2 mb-4'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>

                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>

                    <div className='flex items-center gap-2 mt-4'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>

                {/* Hero Right Side */}
                <img className='w-full sm:w-1/2 object-cover' src={assets.hero_img} alt="Hero" />
            </div>
        </div>
    )
}

export default Hero
