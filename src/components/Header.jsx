import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa'

import Button from './Button'
import heroImage from '../assets/hero-img.png'

function Header() {
    return (
        <header className='flex px-8 flex-col md:flex-row py-20 md:px-16 lg:px-24 gap-20 items-center md:justify-between'>
            <div id="text" className='w-full md:w-1/2 '>
                <div className='flex gap-4 mb-6 bg-gray-500 w-fit items-center px-2 py-2 rounded-3xl'>
                    <div className='bg-white rounded-3xl px-4 text-primary py-1'>70% save</div>
                    <p className='px-4'>For the best black friday deals</p>
                </div>
                <h1 className='capitalize font-bold mb-6 text-5xl'>
                    fastest & secure platform to invest in cypto
                </h1>
                <p className='mb-6 text-gray-400'>
                    Buy and sell cyptocurrencies by trusted 10M wallets, in over 100m transactions
                </p>
                <Button style="mt-6">
                    try for free <FaArrowAltCircleRight size={20} />
                </Button>
                <Button style="mt-6">
                    try for free <FaArrowCircleRight size={20} />
                </Button>

            </div>
            <div id="image" className='w-full md:w-1/2'>
                <img className='w-full' src={heroImage} alt="hero image" />
            </div>
        </header>
    )
}

export default Header