import React from 'react'

import image1 from '../assets/svg/1.svg'
import image2 from '../assets/svg/2.svg'
import image3 from '../assets/svg/3.svg'

function Numbers() {
    const items = [
        {
            image: image1,
            heading: "$30B",
            text: "Digital Currency Exchange"
        },
        {
            image: image3,
            heading: "$10M",
            text: "trusted wallet investors"
        },
        {
            image: image2,
            heading: "195",
            text: "Countries Around The World"
        },
    ]
    return (
        <div className='flex items-center gap-16 justify-center flex-wrap'>
            {items.map((item, index) => (
                <div key={index} className='flex gap-4 shadow-secondary shadow p-4 rounded-2xl rounded-tl-none rounded-br-none'>
                    <div className='p-2 rounded-full bg-gray-400'>
                        <img className='w-full' src={item.image} alt={item.image} />
                    </div>
                    <div>
                        <h3 className='text-xl'>
                            {item.heading}
                        </h3>
                        <p className='capitalize text-gray-400'>
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Numbers