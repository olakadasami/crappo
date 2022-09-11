import { IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'

import Button from './Button'
import heroImage from '../assets/hero-img.png'

const headerVariant = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const imageVariant = {
    start: {
        rotate: "-180deg"
    },
    end: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}

const textVariant = {
    start: {
        x: "-100",
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1
    }
}


function Header() {
    return (
        <motion.header
            variants={headerVariant}
            animate="end"
            initial='start'
            className='flex px-8 flex-col md:flex-row py-20 md:py-10 lg:py-4 relative md:px-16 lg:px-24 gap-20 items-center md:justify-between'>
            <div id="text" className='w-full z-10 md:w-1/2 '>
                <motion.div
                    variants={textVariant}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    className='flex mb-6 text-sm bg-gray-500 w-fit items-center px-1 py-1 rounded-3xl '>
                    <div className='bg-white rounded-2xl px-2 text-primary py-1'>75% save</div>
                    <p className='px-2'>For the best black friday deals</p>
                </motion.div>
                <motion.h1
                    variants={textVariant}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className='capitalize font-bold mb-6 text-5xl'>
                    fastest & secure platform to invest in cypto
                </motion.h1>
                <motion.p
                    variants={textVariant}
                    transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
                    className='mb-6 text-gray-400'>
                    Buy and sell cyptocurrencies by trusted 10M wallets, in over 100m transactions
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", damping: 6, delay: 0.8, duration: 0.6 }}
                    className='mt-6 w-fit'>
                    <Button style="">
                        try for free
                        <div className='p-1 bg-white rounded-full text-secondary'>
                            <IoIosArrowForward size={18} />
                        </div>
                    </Button>
                </motion.div>

            </div>
            <motion.div
                variants={imageVariant}
                id="image" className='w-full absolute left-0 z-0 top-0 opacity-30 md:opacity-100 md:relative md:w-1/2'>
                <img className='w-full' src={heroImage} alt="hero image" />
            </motion.div>
        </motion.header>
    )
}

export default Header