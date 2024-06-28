import Image from 'next/image';
import React from 'react';
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <section style={{ backgroundImage: "url('/herobg.png')" }} className='relative flex items-center justify-center h-screen bg-cover bg-center'>
      <div className="container px-6 py-16 mx-auto sm:px-10 md:px-20">
        <div className="items-center lg:flex gap-12">
          <div className="w-full lg:w-1/2">
            <div className="w-full">
              <h1 className="text-sm font-semibold my-12 text-white dark:text-white lg:text-xl">ULTIMATE DIGITAL MARKETPLACE</h1>
              <h1 className="text-2xl font-bold text-white dark:text-white lg:text-5xl">
              Connecting Businesses & Freelancers
              </h1>
              <p className="mt-3 text-gray-200 dark:text-gray-400">
              Our platform seamlessly links you with skilled freelancers, meticulously vetted to provide exceptional digital services. Elevate your endeavors by tapping into their expertise, guiding you towards achieving your desired milestones and objectives.
              </p>

              <div className='flex justify-left mt-8'>
            <div className='flex bg-gray-100 divide-x rounded-full p-1 px-2 py-2 gap-4'>
                <div className='flex items-center'>
                    <CiSearch className='text-gray-500 text-xl'/>
                    <input type="text" placeholder='What are you looking for?' className='p-2 outline-none bg-transparent font-light text-gray-800 placeholder-gray-900'/>
                </div>
                <div className='flex justify-between gap-2'>
                <select className="select select-ghost p-2 bg-transparent outline-none w-full max-w-xs mx-8">
                    <option disabled selected>Choose Category</option>
                    <option>Digital Marketing</option>
                    <option>Graphics and Design</option>
                    <option>Programming & Tech</option>
                </select>
                <button className="rounded-full text-white py-4 px-8 bg-[#262D32]">Search</button>
                </div>
            </div>

            </div>
            <h2 className='font-semibold text-gray-200 mt-12 text-sm'>Popular Searches</h2>
            <div className='mt-6 flex justify-left gap-3'>
            <button className="rounded-full text-white py-2 px-6 bg-white bg-opacity-10 text-sm">Designer</button>
            <button className="rounded-full text-white py-2 px-6 bg-white bg-opacity-10 text-sm">Developer</button>
            <button className="rounded-full text-white py-2 px-6 bg-white bg-opacity-10 text-sm">Web</button>
            <button className="rounded-full text-white py-2 px-6 bg-white bg-opacity-10 text-sm">Mobile</button>
            <button className="rounded-full text-white py-2 px-6 bg-white bg-opacity-10 text-sm">Java</button>

            </div>

            </div>
          </div>
          <div className="hidden md:flex justify-between gap-2 mt-6 lg:mt-0 lg:w-1/2">

            <div className="flex-grow-0 self-end">
              <Image className="rounded-tl-[40px] object-cover" src="/hero2.jpg" alt="hero 2" width={250} height={300} />
            </div>
            <div className="flex-grow">
              <Image className="rounded-tr-[40px] object-cover" src="/hero3.jpg" alt="hero 1" width={350} height={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
