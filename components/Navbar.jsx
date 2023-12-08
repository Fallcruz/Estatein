'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/assets/logo/logo.svg'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function Navbar() {
    const pathname = usePathname()
    const [showNavbar, setShowNavbar] = useState(false)
    const handleNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    useEffect(() => {
        setShowNavbar(false)
    }, [pathname]);
    return (
        <nav className='sticky top-0 flex flex-row items-center justify-between bg-grey-blur backdrop-blur-lg border-y-[0.2px] border-grey-20 py-4 lg:px-14 px-8 z-50'>
            <div className='lg:ps-5 ps-0'>
                <Image className='w-auto lg:h-11 h-8' src={logo} alt='estatein' width={500} height={500} quality={100} sizes='100vw' />
            </div>
            <ul className={`navbar-menu ${showNavbar ? 'flex' : 'hidden'} lg:flex lg:flex-row md:flex-row flex-col items-center lg:justify-center justify-between lg:px-0 lg:py-0 px-16 md:py-5 py-7 pb-5 lg:gap-3 gap-3`}>
                <li className='active lg:text-base text-sm font-medium px-5 lg:py-[10px] py-2 rounded-lg'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='lg:text-base text-sm font-medium px-5 lg:py-[10px] py-2 rounded-lg'>
                    <Link href='/'>About Us</Link>
                </li>
                <li className='lg:text-base text-sm font-medium px-5 lg:py-[10px] py-2 rounded-lg'>
                    <Link href='/'>Properties</Link>
                </li>
                <li className='lg:text-base text-sm font-medium px-5 lg:py-[10px] py-2 rounded-lg'>
                    <Link href='/'>Services</Link>
                </li>
                <li className='lg:text-base text-sm font-medium px-5 lg:py-3 py-2 rounded-lg'>
                    <Link href='/'>Contact Us</Link>
                </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:hidden block cursor-pointer" onClick={() => handleNavbar()}>
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
        </nav>
    )
}

export default Navbar