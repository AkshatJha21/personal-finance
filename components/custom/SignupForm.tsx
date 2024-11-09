"use client";

import React, { useState } from 'react';
import FormInput from './form-input';
import Link from 'next/link';

const SignupForm = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="h-[90%] flex flex-col items-center justify-center">
      {/* Progress Bar */}
      <div className="w-[80%] sm:w-[40%] lg:w-[30%] xl:w-[25%] mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className={step >= 1 ? 'text-indigo-600' : 'text-gray-400'}>Step 1</span>
          <span className={step >= 2 ? 'text-indigo-600' : 'text-gray-400'}>Step 2</span>
          <span className={step >= 3 ? 'text-indigo-600' : 'text-gray-400'}>Step 3</span>
        </div>
        <div className="relative h-1 w-full bg-gray-300">
          <div
            className="absolute top-0 h-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="flex flex-col gap-y-6 w-[80%] sm:w-[40%] lg:w-[30%] xl:w-[25%]">
        {step === 1 && (
          <>
            <h2 className="text-xl lg:text-2xl font-semibold">Step 1: Account Setup</h2>
            <FormInput label="Email" type="email" handleChange={() => {}} />
            <FormInput label="New Password" type="password" handleChange={() => {}} />
            <FormInput label="Confirm Password" type="password" handleChange={() => {}} />
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="text-xl lg:text-2xl font-semibold">Step 2: Personal Info</h2>
            <FormInput label="First Name" type="text" handleChange={() => {}} />
            <FormInput label="Last Name" type="text" handleChange={() => {}} />
            <FormInput label="Phone Number" type="text" handleChange={() => {}} />
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="text-xl lg:text-2xl font-semibold">Step 3: Profile Details</h2>
            <FormInput label="Account Number" type="text" handleChange={() => {}} />
            <FormInput label="Set Nex-PIN" type="text" handleChange={() => {}} />
            <FormInput label="Confirm Nex-PIN" type="text" handleChange={() => {}} />
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {step > 1 && (
            <button
              className="px-4 py-2 font-medium rounded-md bg-gray-400 hover:bg-gray-500 text-white"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              className="px-4 py-2 font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button className="px-4 py-2 font-medium rounded-md bg-green-600 hover:bg-green-700 text-white">
              Submit
            </button>
          )}
        </div>

        {/* Login Link */}
        <p className="text-sm">
          Existing user?&nbsp;
          <Link href={'/login'}>
            <span className="font-medium hover:underline cursor-pointer">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;