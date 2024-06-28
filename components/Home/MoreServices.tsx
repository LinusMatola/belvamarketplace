import Link from 'next/link'
import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

function MoreServices() {
  return (
    <section className='p-5 sm:px-10 md:px-20'>
        <div className='mt-10 flex flex-col md:flex-row items-start md:items-center justify-between'>
          {/* left items */}
          <div className='mb-4 md:mb-0'>
            <h2 className='text-xl font-semibold'>
              Featured Services
            </h2>
          </div>
          {/* right items */}
          <Link href='/marketplace' className='flex items-center justify-center gap-3 hover:cursor-pointer'>
            <h2 className='font-light text-sm whitespace-nowrap hover:font-semibold'>More Services</h2>
            <HiArrowLongRight />
          </Link>
        </div>
    </section>
  )
}

export default MoreServices