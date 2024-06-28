"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function NavBar({ isHomePage }: any) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (isHomePage) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isHomePage]);

    return (
        <nav
            className={`px-4 py-2 fixed w-full top-0 z-50 sm:px-10 md:px-20 flex justify-between items-center ${
                isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white dark:bg-gray-900 shadow-md'
            }`}
        >
            <div className='flex justify-between gap-4'>
                <a className="text-2xl font-bold dark:text-white" href="/">
                    <Image src='/belva.png' alt='logo' height={100} width={150} />
                </a>
                <div className="hidden items-center lg:flex md:space-x-4">
                    <a href="#home"
                        className={`font-normal ${isHomePage && !isScrolled ? 'text-white' : 'text-black'} hover:text-white transition duration-150 ease-in-out hover:bg-gray-800 p-2 px-4 rounded-full`}>Home</a>
                    <a href="#about"
                        className={`font-normal ${isHomePage && !isScrolled ? 'text-white' : 'text-black'} hover:text-white transition duration-150 ease-in-out hover:bg-gray-800 p-2 px-4 rounded-full`}>About Us</a>
                    <a href="#contact"
                        className={`font-normal ${isHomePage && !isScrolled ? 'text-white' : 'text-black'} hover:text-white transition duration-150 ease-in-out hover:bg-gray-800 p-2 px-4 rounded-full`}>Contact Us</a>
                </div>
            </div>
            <div className="hidden md:flex md:space-x-4">
                <a href="#seller"
                    className={`font-normal ${isHomePage && !isScrolled ? 'text-white' : 'text-black'} hover:text-white transition duration-150 ease-in-out hover:bg-gray-800 p-2 px-4 rounded-full`}>Become a Seller</a>
                <button className={`${isHomePage && !isScrolled ? 'bg-white text-black' : 'bg-[#262D32] text-white'} rounded-full py-2 px-6`}>Sign In</button>
                <a href='/auth' className={`bg-transparent ${isHomePage && !isScrolled ? 'border-white text-white' : 'border-[#262D32] text-black'} rounded-full border-2 py-2 px-6`}>Join</a>
            </div>
        </nav>
    );
}

export default NavBar;
