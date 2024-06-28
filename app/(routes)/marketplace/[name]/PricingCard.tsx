'use client'
import React, { useEffect, useState } from 'react';
import { BsCheckLg } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";

const PricingCard = ({basicPricing, standardPricing, premiumPricing}: any) => {
  const [activeTab, setActiveTab] = useState<'Basic' | 'Standard' | 'Premium'>('Basic');

  const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        if(basicPricing && standardPricing && premiumPricing){
            setIsLoaded(true);
        }
    },[])

  const renderContent = () => {
    switch (activeTab) {
      case 'Basic':
        return isLoaded&&(
          <div>
            <h2 className="text-xl font-bold">KES {basicPricing?.cost?.toLocaleString() ?? '0'}</h2>
            <div className='flex justify-start gap-2 items-center my-2'>
                <FaRegClock className='font-bold text-gray-600'/>
                <p className='text-sm font-semibold text-gray-600'>{basicPricing?.deliveryTime} delivery</p>
            </div>
            <h2 className='text-sm font-medium my-1 text-gray-500'>{basicPricing?.revisions} revision(s)</h2>
            <h2 className='text-sm font-semibold my-2'>What's included</h2>
            {basicPricing?.features&&basicPricing?.features.map((feature:any, index:number)=>(
              <div className='flex justify-start gap-2'>
                <BsCheckLg className='font-bold'/>
                <p className='text-sm font-light'>{feature}</p>
              </div>

            ))}
            <button className="rounded-sm text-white w-full py-3 px-8 bg-black text-sm mt-4">Continue</button>
          </div>
        );
      case 'Standard':
        return isLoaded&&(
          <div>
            <h2 className="text-xl font-bold">KES {standardPricing?.cost?.toLocaleString() ?? '0'}</h2>
            <div className='flex justify-start gap-2 items-center my-2'>
                <FaRegClock className='font-bold text-gray-600'/>
                <p className='text-sm font-semibold text-gray-600'>{standardPricing?.deliveryTime} delivery</p>
            </div>
            <h2 className='text-sm font-medium my-1 text-gray-500'>{standardPricing?.revisions} revision(s)</h2>
            <h2 className='text-sm font-semibold my-2'>What's included</h2>
            {standardPricing?.features&&standardPricing?.features.map((feature:any, index:number)=>(
              <div className='flex justify-start gap-2'>
                <BsCheckLg className='font-bold'/>
                <p className='text-sm font-light'>{feature}</p>
              </div>

            ))}

            <button className="rounded-sm text-white py-3 px-8 bg-black text-sm mt-4 w-full">Continue</button>
          </div>
        );
      case 'Premium':
        return isLoaded&&(
          <div>
            <h2 className="text-xl font-bold">KES {premiumPricing?.cost?.toLocaleString() ?? '0'}</h2>
            <div className='flex justify-start gap-2 items-center my-2'>
                <FaRegClock className='font-bold text-gray-600'/>
                <p className='text-sm font-semibold text-gray-600'>{premiumPricing?.deliveryTime} delivery</p>
            </div>
            <h2 className='text-sm font-medium my-1 text-gray-500'>{premiumPricing?.revisions} revision(s)</h2>
            <h2 className='text-sm font-semibold my-2'>What's included</h2>
            {premiumPricing?.features&&premiumPricing?.features.map((feature:any, index:number)=>(
              <div className='flex justify-start gap-2'>
                <BsCheckLg className='font-bold'/>
                <p className='text-sm font-light'>{feature}</p>
              </div>

            ))}
            <button className="rounded-sm text-white py-3 px-8 bg-black text-sm mt-4 w-full">Continue</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="container mx-auto p-6 rounded-sm border w-full h-auto">
      <div className=''>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">Tab</label>
          <select
            id="Tab"
            className="w-full rounded-md border-gray-200"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as 'Basic' | 'Standard' | 'Premium')}
          >
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <button
                className={`shrink-0 border-b-2 px-1 pb-4 text-lg font-semibold ${
                  activeTab === 'Basic' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('Basic')}
              >
                Basic
              </button>
              <button
                className={`shrink-0 border-b-2 px-1 pb-4 text-lg font-semibold ${
                  activeTab === 'Standard' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('Standard')}
              >
                Standard
              </button>
              <button
                className={`shrink-0 border-b-2 px-1 pb-4 text-lg font-semibold ${
                  activeTab === 'Premium' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('Premium')}
              >
                Premium
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {renderContent()}
      </div>
    </section>
  );
};

export default PricingCard;
