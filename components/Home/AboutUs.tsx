import Image from 'next/image';
import React from 'react';
import { FaHandsHolding, FaPeopleArrows } from "react-icons/fa6";
import { GiJetPack } from "react-icons/gi";

function AboutUs() {
  return (
    <section className='bg-white relative sm:px-10 md:px-10 mx-4 md:mx-10 my-8 flex justify-left items-center'>
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        {/* rounded card */}
        <div className="bg-[#ffede8] rounded-l-[25px] relative flex flex-col p-4 md:p-16 gap-12 w-full lg:flex-row">
          <div className="lg:w-3/4">
            <h1 className="text-2xl font-semibold text-black dark:text-white lg:text-2xl tracking-wide">
              ABOUT STARTUP BY BELVA
            </h1>
            <h1 className="text-2xl font-bold text-black dark:text-white lg:text-3xl tracking-wide">
              The Ultimate Digital Marketplace
            </h1>
            <p className="mt-3 text-black tracking-wide">
              Welcome to our digital marketplace where small businesses can connect with freelancers offering a wide range of digital services. Our platform is designed to create a seamless experience for both businesses and freelancers alike.
            </p>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-8 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white">
                    <GiJetPack className='text-xl text-white' />
                  </div>
                  <h1 className="ml-16 text-lg leading-6 font-semibold text-gray-900">Mission</h1>
                  <p className="mt-2 ml-16 text-base text-gray-900 tracking-wide">
                    Our mission is to make it easy for small businesses to find and work with top-quality digital freelancers, helping them grow and thrive in the digital age.
                  </p>
                </div>

                <div className="relative mt-4">
                  <div className="absolute flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white">
                    <FaHandsHolding className='text-xl text-white' />
                  </div>
                  <h1 className="ml-16 text-lg leading-6 font-semibold text-gray-900">Vision</h1>
                  <p className="mt-2 ml-16 text-base text-gray-900 tracking-wide">
                    Our vision is to empower small businesses across Africa to compete on a level playing field with the biggest players in their industry, by providing them with access to the best digital talent.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white">
                    <FaPeopleArrows className='text-xl text-white' />
                  </div>
                  <h1 className="ml-16 text-lg leading-6 font-semibold text-gray-900">Core Values</h1>
                  <p className="mt-2 ml-16 text-base text-gray-900 tracking-wide">
                    Our values are bespoke, valuable and accountable.
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className="absolute right-[-240px] top-1/2 transform -translate-y-1/2 w-1/2">
            <Image src='/12297.jpg' width={800} height={850} alt='aboutus image' className="object-cover rounded-r-[25px] opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
