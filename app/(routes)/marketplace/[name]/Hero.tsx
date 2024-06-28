import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function Hero({freelanceProfile}:any) {
  return (
    <section className='bg-[#ffede8] relative my-8 lg:mt-20'>
        <div className="container sm:px-10 md:px-20">
        <div className="items-center grid grid-cols-1 md:grid-cols-3">
          <div className="w-full col-span-2">
              <h1 className="text-2xl font-semibold text-black dark:text-white lg:text-3xl">
              {/* I will design modern websites in figma or adobe xd */}
              {freelanceProfile[0]?.description}
              </h1>
              <div className='flex items-center mt-4 gap-4'>
                <span className="bg-[#262D32] text-white flex items-center justify-center w-8 h-8 rounded-full text-sm">
                    <h2 className='font-bold text-xl'>L</h2>
                </span>
                <h1 className="text-sm">Linus Matola</h1>
                <div className='flex justify-start gap-1'>
                <MdLocationPin className='text-gray-500 text-lg'/>
                <h1 className="text-sm text-gray-500">Nairobi</h1>
                </div>
                <div className='flex justify-start gap-1'>
                <FaStar className='text-[#c51616]'/>
                <h1 className="text-sm text-gray-500">{freelanceProfile[0]?.rating}</h1>
                </div>
                <h1 className="px-2 text-sm text-gray-500">{freelanceProfile[0]?.reviews} Reviews</h1>
                </div>
          </div>
          <div className='hidden md:flex justify-end'>
            <Image src='/vector-service-v1.png' alt='' width={500} height={500} className='' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero