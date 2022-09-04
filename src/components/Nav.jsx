import logo from '../assets/logo.svg'

function Nav() {
    return (
        <nav className='flex justify-between h-20 items-center px-8 md:px-20'>

            <div>
                <img className='w-full' src={logo} alt="logo" />
            </div>

            <ul className='flex items-center'>
                <li className='ml-8 hover:border-b border-secondary cursor-pointer'>Products</li>
                <li className='ml-8 hover:border-b border-secondary cursor-pointer'>Features</li>
                <li className='ml-8 hover:border-b border-secondary cursor-pointer'>About</li>
                <li className='ml-8 hover:border-b border-secondary cursor-pointer'>Contact</li>
            </ul>

        </nav>
    )
}

export default Nav