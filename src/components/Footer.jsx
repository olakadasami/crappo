import { FaYoutube, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

import logo from '../assets/logo.svg'
import image1 from '../assets/visa.png'
import image2 from '../assets/mastercard.png'
import image3 from '../assets/bitcoin.png'


function Footer() {
    return (
        <footer className='px-8 py-20 md:px-16 lg:px-24'>
            <div className='flex flex-wrap justify-between gap-12 mb-10 items-start'>
                <div className=' w-fit sm:w-1/3 lg:w-1/5'>
                    <img className='w-full' src={logo} alt="logo" />
                </div>

                <div className='w-full sm:w-1/3 lg:w-1/5'>
                    <h3 className='text-xl text-center mb-6'>We accept the following payment platforms</h3>
                    <div className='flex flex-wrap justify-center gap-4 items-center'>
                        <div className='w-20'>
                            <img className='w-full' src={image1} alt="visa" />
                        </div>
                        <div className='w-20'>
                            <img className='w-full' src={image2} alt="masterCard" />
                        </div>
                        <div className='w-20'>
                            <img className='w-full' src={image3} alt="Bitcoin" />
                        </div>
                    </div>
                </div>

                <ul className='flex flex-col text-center lg:text-left w-full sm:w-1/3 lg:w-1/5'>
                    <li className='mb-6'>
                        <h3 className='text-xl'>Quick Links</h3>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Products
                        </a>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Features
                        </a>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Contact
                        </a>
                    </li>

                </ul>

                <ul className='flex flex-col lg:text-left text-center w-full sm:w-1/3 lg:w-1/5'>
                    <li className='mb-6'>
                        <h3 className='text-xl'>Resources</h3>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Whitepaper
                        </a>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Smart Token
                        </a>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Explore Blockchain
                        </a>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Crypto API
                        </a>
                    </li>
                    <li className='hover:text-white mb-4 duration-200 hover:translate-x-2 text-gray-400'>
                        <a href="#">
                            Interest
                        </a>
                    </li>
                </ul>

            </div>

            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center mb-6 gap-6 md:justify-between'>
                <p>
                    &copy; 2022 CRAPPO. All rights reserved
                </p>
                <ul className='flex gap-4 items-center'>
                    <li className='hover:text-white text-gray-400 hover:-translate-y-1 duration-200'><FaYoutube size={24} /></li>
                    <li className='hover:text-white text-gray-400 hover:-translate-y-1 duration-200'><FaWhatsapp size={24} /></li>
                    <li className='hover:text-white text-gray-400 hover:-translate-y-1 duration-200'><FaInstagram size={24} /></li>
                    <li className='hover:text-white text-gray-400 hover:-translate-y-1 duration-200'><FaTwitter size={24} /></li>
                    <li className='hover:text-white text-gray-400 hover:-translate-y-1 duration-200'><FaLinkedin size={24} /></li>
                </ul>
            </div>
            <div className='text-center'>
                Built by Olakada Samuel
            </div>

        </footer>
    )
}

export default Footer