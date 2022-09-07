import React from 'react'
import Button from './Button'

function Earn() {
    return (
        <div className='relative  px-8 md:px-16 lg:px-24'>
            <div className='text-center'>
                <h2 className='text-4xl mb-4 font-bold capitalize'>
                    How much you can earn with us
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum at deserunt, quaerat illum reprehende.
                </p>
            </div>

            <div className='bg-white w-11/12 py-8 px-6 md:px-12 translate-y-40 rounded-3xl mx-auto max-w-5xl text-primary shadow-xl'>
                <form className='mb-4 flex justify-center md:justify-between md:gap-8 gap-2 flex-wrap items-center'>
                    <input className='block w-72 placeholder-primary outline-none py-2 mb-2 border-primary border-b bg-transparent' type="text" placeholder='Enter your hash rate' />
                    <div className='flex md:w-1/2 justify-between gap-4'>
                        <select className='p-3 w-32'>
                            <option value="TH/s">TH/s</option>
                            <option value="H/s">H/s</option>
                            <option value="KH/s">KH/s</option>
                            <option value="MH/s">MH/s</option>
                        </select>
                        <Button>
                            Calculate
                        </Button>
                    </div>
                </form>

                <div>
                    <p className='text-secondary mb-4 font-semibold'>
                        ESTIMATED 24 HOUR REVENUE:
                    </p>
                    <p className='font-bold text-2xl mb-4'>
                        0.055 130 59 ETH ($1275)
                    </p>
                    <p className='text-gray-500 mb-4'>
                        Revenue will change based on mining difficulty and Ethereum price.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Earn