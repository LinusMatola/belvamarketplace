import React, { useState } from 'react';
import Options from './Options';
import Image from 'next/image';
import PasswordForm from './PasswordForm';
import DetailsForm from './DetailsForm';

function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Step 1: Account Type",
    "Step 2: Account Info",
    "Step 3: Create Password"
  ];

  const nextStep = () => {
    console.log('Next step called');
    setCurrentStep(prevStep => prevStep + 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <Options nextStep={nextStep} />;
      case 1:
        return <DetailsForm nextStep={nextStep} />;
      case 2:
        return <PasswordForm nextStep={nextStep} />;
      default:
        return <Options nextStep={nextStep} />;
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto mt-20">
      <div className="w-full max-w-md">
        <div className='flex flex-col items-center justify-center'>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize text-center dark:text-white">Create an Account</h1>
          <Image src='/belva.png' alt='logo' height={100} width={150}/>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-base font-semibold">{steps[currentStep]}</h3>
          <div className="flex max-w-xs space-x-4">
            {steps.map((step, index) => (
              <span key={index} className={`w-24 h-2 rounded-full ${index <= currentStep ? 'bg-black' : 'bg-gray-400 animate-pulse'}`}></span>
            ))}
          </div>
        </div>

        {renderCurrentStep()}
      </div>
    </div>
  );
}

export default SignUpForm;
