import React, { useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='bg-dark border-b border-border sticky top-0 z-50'>
            <div className='flex justify-between items-center py-6 px-6 md:px-10'>
                <Logo />
                <div className='hidden md:flex text-gray gap-6 font-semibold text-sm tracking-wider'>
                    <a href="#programs" className='hover:text-primaryDark'>PROGRAMS</a>
                    <a href="#trainers" className='hover:text-primaryDark'>TRAINERS</a>
                    <a href="#plans" className='hover:text-primaryDark'>PRICING</a>
                    <a href="#gallery" className='hover:text-primaryDark'>GALLERY</a>
                    <a href="#about" className='hover:text-primaryDark'>ABOUT</a>
                </div>
                <a href="#footer"><Button title='JOIN NOW' buttonStyle='hidden md:block text-white cursor-pointer' /></a>
                <button className='md:hidden text-primary'
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isOpen &&
            <div className='md:hidden bg-dark border-t border-border px-6 py-4 flex flex-col gap-4 text-xs text-gray font-semibold tracking-wider'>
                <a href="" className='hover:text-primary' onClick={()=>setIsOpen((prev)=>!prev)}>PROGRAMS</a>
                <a href="" className='hover:text-primary' onClick={()=>setIsOpen((prev)=>!prev)}>TRAINERS</a>
                <a href="" className='hover:text-primary' onClick={()=>setIsOpen((prev)=>!prev)}>PRICING</a>
                <a href="" className='hover:text-primary' onClick={()=>setIsOpen((prev)=>!prev)}>GALLERY</a>
                <a href="" className='hover:text-primary' onClick={()=>setIsOpen((prev)=>!prev)}>ABOUT</a>
            </div>
            }
        </nav>
    )
}

export default Navbar