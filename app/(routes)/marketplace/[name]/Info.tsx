'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PricingCard from './PricingCard';
import GlobalApis from '@/services/GlobalApis';
import { usePathname } from 'next/navigation';

const Info = ({ freelanceProfile }: any) => {
  const [mainImage, setMainImage] = useState('');
  const param = usePathname();
  const [projectId, setProjectId] = useState('');
  const [basicPricing, setBasicPricing] = useState<any>([]);
  const [standardPricing, setStandardPricing] = useState<any>([]);
  const [premiumPricing, setPremiumPricing] = useState<any>([]);

  useEffect(() => {
    const slug = param.split('/')[2];
    const id = slug.substring(slug.lastIndexOf('-') + 1);
    setProjectId(id);

    if (freelanceProfile[0]?.projectImages) {
      setMainImage(freelanceProfile[0].projectImages[0]?.url);
    }

    const getPricing = async(profileId: string) => {
      try {
        const result: any = await GlobalApis.getPricing(profileId);
        setBasicPricing(result.pricings[0]?.basicPricing);
        setStandardPricing(result.pricings[0]?.standardPricing);
        setPremiumPricing(result.pricings[0]?.premiumPricing);
      } catch (error) {
        console.error('Error fetching pricing:', error);
      }
    }

    getPricing(id);
  }, [param, freelanceProfile]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
      <div className='flex col-span-2 flex-col gap-4'>
        <div className='bg-[#262D32] rounded-lg p-5 w-full h-auto'>
          {mainImage && (
            <Image
              alt="Main Project Image"
              height={300}
              width={300}
              src={mainImage}
              className="h-56 w-full object-cover sm:h-64 lg:h-96"
            />
          )}
        </div>
        <div className='flex gap-2'>
          {freelanceProfile[0]?.projectImages?.map((image: any, index: number) => (
            <div key={index} className='w-16 h-16 cursor-pointer'>
              <Image
                alt={`Thumbnail ${index + 1}`}
                height={64}
                width={64}
                src={image.url}
                className="h-full w-full object-cover rounded-lg"
                onClick={() => setMainImage(image.url)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='mx-8'>
        <PricingCard basicPricing={basicPricing} standardPricing={standardPricing} premiumPricing={premiumPricing}/>
      </div>
    </div>
  );
};

export default Info;
