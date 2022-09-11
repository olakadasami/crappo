import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'

import image1 from '../assets/bitcon.png'
import image2 from '../assets/ethereum.png'
import image3 from '../assets/litecoin.png'
import Button from './Button'

const items = [
    {
        image: image1,
        heading: "Bitcoin",
        small: "BTC",
        text: "Digital currency in which a record of transactions is maintained.",
    },
    {
        image: image2,
        heading: "Ethereum",
        small: 'ETH',
        text: "Blockchain technology to create and run decentralized digital applications.",
    },
    {
        image: image3,
        heading: "Litecoin",
        small: 'LTC',
        text: "Cryptocurrency that enables instant payments to anyone in the world.",
    },
]

const cardVariant = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1
    }
}

export function Card({ image, heading, small, text, index }) {

    const [show, setShow] = useState(false)

    const showHandler = () => {
        setShow(true)
    }
    const hideShowHandler = () => {
        setShow(false)
    }
    return (
        <motion.div
            variants={cardVariant}
            whileInView='end'
            initial="start"
            transition={{ delay: index - 1 }}

            onMouseOver={showHandler} onMouseOut={hideShowHandler} className='text-primary z-10 bg-white shadow-xl transition-all ease duration-400 hover:text-white hover:bg-violet-900 px-4 py-16
         rounded-3xl rounded-tl-none rounded-br-none flex flex-col text-center justify-center items-center w-80'>
            <div className='w-20 mb-8'>
                <img className='w-full' src={image} alt='image' />
            </div>
            <h2 className='flex mb-6 gap-3 items-center'>
                <span className='text-3xl font-bold'>
                    {heading}
                </span>
                <span className='text-gray-400 font-semibold'>
                    {small}
                </span>
            </h2>
            <p className='mb-6 font-medium'>
                {text}
            </p>
            <Button style={`${show ? "text-white bg-secondary border-none" : "text-secondary border-secondary bg-transparent"} border-2 `}>
                {show && <p>Start Mining</p>}

                <IoIosArrowForward size={28} />
            </Button>

        </motion.div>
    )
}

function Cards() {
    return (
        <div className='bg-white flex gap-10 px-8 items-center justify-center pt-80 flex-wrap py-40'>
            {items.map((item, index) => (
                <Card
                    key={index}
                    image={item.image}
                    heading={item.heading}
                    small={item.small}
                    text={item.text}
                    index={index}
                />
            ))}
        </div>
    )
}

export default Cards