import React, { useState } from 'react';

function Options({ nextStep }:any) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option:any) => {
    setSelectedOption(option);
    console.log(option);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <section>
      <div
        className={`cursor-pointer border my-6 ${
          selectedOption === 'freelancer' ? 'border-black border-2 rounded-lg' : ''
        }`}
        onClick={() => handleSelect('freelancer')}
      >
        <input type="radio" className="peer sr-only" name="pricing" />
        <div className="w-full rounded-md bg-white dark:bg-gray-900 p-5 text-gray-600 dark:text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Freelancer</p>
              <div>
                {selectedOption === 'freelancer' && (
                  <svg className="text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" />
                  </svg>
                )}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-sm font-bold">For Creating different gigs</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`cursor-pointer border ${
          selectedOption === 'client' ? 'border-black border-2 rounded-lg' : ''
        }`}
        onClick={() => handleSelect('client')}
      >
        <input type="radio" className="peer sr-only" name="pricing" />
        <div className="w-full rounded-md bg-white dark:bg-gray-900 p-5 text-gray-600 dark:text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Clients</p>
              <div>
                {selectedOption === 'client' && (
                  <svg className="text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" />
                  </svg>
                )}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-sm font-bold">Engage Different Freelancers</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        onClick={handleSubmit}
      >
        Next
      </button>
    </section>
  );
}

export default Options;
