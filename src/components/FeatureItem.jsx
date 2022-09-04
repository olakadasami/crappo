import React from 'react'
import Button from './Button'

function FeatureItem({ heading, image, button, style, text }) {
    return (
        <div className={`${style} py-20 flex flex-col md:flex-row md:justify-between gap-12 md:gap-20 md:items-center `}>
            <div className='w-full md:w-1/2'>
                <h3 className='font-bold text-3xl capitalize mb-6'>
                    {heading}
                </h3>
                <p className='text-gray-400 mb-6'>
                    {text}
                </p>
                <Button style=''>
                    {button}
                </Button>

            </div>
            <div className='w-full md:w-1/2'>
                <img className='w-full' src={image} alt="features image" />
            </div>
        </div>
    )
}

export default FeatureItem