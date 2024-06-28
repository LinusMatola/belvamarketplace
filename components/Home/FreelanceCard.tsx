"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { IoMdHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
function FreelanceCard(props: any) {

  const [freelancer, setFreelancer] = useState<any>();
    useEffect(() =>{
      setFreelancer(props.freelancer)
    }, [props.freelancer])
  return freelancer&&(
    <Link href={'/marketplace/'+freelancer?.slug} className="w-full max-w-sm overflow-hidden cursor-pointer bg-white rounded-lg border shadow-lg dark:bg-gray-800">
    <div className='relative'>
        <Image src={freelancer.projectImages[0]?.url} height={200} width={200} alt='product image' className="object-cover object-center w-full h-56"/>
        <span className="absolute top-2 right-2 bg-white hover:bg-[#c51616] hover:text-white shadow-gray-300 shadow-lg text-gray-800 flex items-center justify-center w-10 h-10 m-2 rounded-full text-sm font-medium hover:ease-in-out">
        <IoMdHeartEmpty className='text-xl'/>
        </span>
    </div>
    <div className="px-4 py-4">
        <p className="py-2 text-gray-700 font-light dark:text-gray-400">{freelancer.category.categoryName}</p>

        <h1 className="text-lg font-medium text-gray-800 dark:text-white hover:underline hover:text-[#c51616] truncate">{freelancer.description}</h1>

        <div className='flex justify-start mt-4'>
        <FaStar className='text-[#c51616]'/>
        <h1 className="px-2 text-sm text-gray-500">{freelancer.rating}</h1>
        <h1 className="px-2 text-sm text-gray-500">{freelancer.reviews} Reviews</h1>
        </div>
       <hr className='mt-2'/>
       <div className='flex justify-between mt-4'>
       <div className="flex items-center text-gray-700 dark:text-gray-200">
       <span className="bg-[#262D32] text-white flex items-center justify-center w-8 h-8 rounded-full text-sm">
        <h2 className='font-bold text-xl'>L</h2>
        </span>

            <h1 className="px-2 text-sm">Linus Matola</h1>
        </div>
        <div className='flex items-center'>
        <h1 className="px-2 text-sm text-gray-500">From KES {freelancer.from}</h1>
        </div>

       </div>

    </div>

</Link>

  )
}

export default FreelanceCard