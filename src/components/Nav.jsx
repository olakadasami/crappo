import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import Button from '../components/Button'
import logo from '../assets/logo.svg'

function Nav() {

    const [nav, setNav] = useState(false)

    const navToogle = () => {
        setNav(!nav)
    }

    return (
        <nav className='flex justify-between h-20 relative items-center px-8 lg:px-20'>

            <div>
                <img className='w-full' src={logo} alt="logo" />
            </div>

            <ul className='hidden md:flex md:gap-6 items-center'>
                <li className='hover:border-b border-secondary cursor-pointer'>Products</li>
                <li className='hover:border-b border-secondary cursor-pointer'>Features</li>
                <li className='hover:border-b border-secondary cursor-pointer'>About</li>
                <li className='hover:border-b border-secondary cursor-pointer'>Contact</li>
                <li className='flex gap-3 items-center'>
                    <Button style={'bg-transparent border px-3 py-2 '}>
                        Log In
                    </Button>
                    <div>
                        |
                    </div>
                    <Button style={'px-3 py-2'}>
                        Register
                    </Button>
                </li>
            </ul>

            <div onClick={navToogle} className='md:hidden'>
                <FaBars size={24} />
            </div>

            <nav id='mobileNav' className={`fixed h-[90vh] duration-300 text-lg md:hidden z-20 top-0 bg-primary shadow w-full ${nav ? 'right-0' : '-right-full'}`}>
                <div className='pt-40'>
                    <div onClick={navToogle} className='absolute right-8 top-8 md:hidden'>
                        <FaTimes size={24} />
                    </div>
                    <ul className='flex-col gap-8 flex items-center'>
                        <li className='cursor-pointer'>Products</li>
                        <li className='cursor-pointer'>Features</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='flex gap-3 items-center'>
                            <Button style={'bg-transparent border px-3 py-2 '}>
                                Log In
                            </Button>
                            <div>
                                |
                            </div>
                            <Button style={'px-3 py-2'}>
                                Register
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>

        </nav>
    )
}

export default Nav