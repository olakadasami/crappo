import { IoIosArrowForward } from 'react-icons/io'

import Button from './Button'
import heroImage from '../assets/hero-img.png'

function Header() {
    return (
        <header className='flex px-8 flex-col md:flex-row py-20 md:p-0 relative md:px-16 lg:px-24 gap-20 items-center md:justify-between'>
            <div id="text" className='w-full z-10 md:w-1/2 '>
                <div className='flex mb-6 text-sm bg-gray-500 w-fit items-center px-2 py-2 rounded-3xl '>
                    <div className='bg-white rounded-3xl px-2 text-primary py-1'>75% save</div>
                    <p className='px-3'>For the best black friday deals</p>
                </div>
                <h1 className='capitalize font-bold mb-6 text-5xl'>
                    fastest & secure platform to invest in cypto
                </h1>
                <p className='mb-6 text-gray-200'>
                    Buy and sell cyptocurrencies by trusted 10M wallets, in over 100m transactions
                </p>
                <Button style="mt-6">
                    try for free
                    <div className='p-1 bg-white rounded-full text-secondary'>
                        <IoIosArrowForward size={18} />
                    </div>
                </Button>

            </div>
            <div id="image" className='w-full absolute left-0 z-0 top-0 opacity-30 md:opacity-100 md:relative md:w-1/2'>
                <img className='w-full' src={heroImage} alt="hero image" />
            </div>
        </header>
    )
}

export default Header