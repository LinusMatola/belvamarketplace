import React, { useState } from 'react';
import Image from 'next/image';
import PricingCard from './PricingCard';

const Info = () => {
  const [mainImage, setMainImage] = useState('/service-details-1.jpg');

  const images = [
    '/service-details-1.jpg',
    '/service-details-2.jpg',
    '/service-details-3.jpg',
    '/service-details-4.jpg'
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
      <div className='flex col-span-2'>
        <div className='bg-[#262D32] rounded-lg p-5 w-full h-auto'>
          <Image
            alt="Main image"
            height={300}
            width={300}
            src={mainImage}
            className="h-56 w-full object-cover sm:h-64 lg:h-96"
          />
          <div className='mt-4 flex gap-2'>
            {images.map((image, index) => (
              <div key={index} className='w-16 h-16 cursor-pointer'>
                <Image
                  alt={`Thumbnail ${index + 1}`}
                  height={64}
                  width={64}
                  src={image}
                  className="h-full w-full object-cover rounded-lg"
                  onClick={() => setMainImage(image)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mx-8'>
        <PricingCard />
      </div>
    </div>
  );
};

export default Info;
