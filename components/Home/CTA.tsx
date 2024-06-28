import Image from 'next/image'
import React from 'react'

function CTA() {
  return (
    <section className='bg-[#ffede8] relative sm:px-10 md:px-20 lg:mt-52'>
        <div className="container py-20 px-4">
        <div className="items-center lg:flex gap-12">
          <div className="w-full lg:w-1/2">
            <div className="w-full">
              <h1 className="text-2xl font-semibold text-black dark:text-white lg:text-3xl">
                Find the talent needed to get your business growing.
              </h1>
              <p className="mt-3 text-black">
              Advertise your jobs to millions of monthly users and search 15.8 million CVs
              </p>

              <div className='mt-6 flex justify-left gap-4'>
                <button className="rounded-full text-white py-3 px-8 bg-black text-sm">Designer</button>
                <button className="rounded-full text-black py-3 px-8 bg-transparent border-2 border-black text-sm">Developer</button>

            </div>

            </div>
          </div>
          <div className="hidden lg:flex justify-right gap-2 mt-6 lg:mt-0 lg:w-1/2">
          <Image className='absolute bottom-0 right-0' src='/cta2.png' alt='cta' height={400} width={450}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA