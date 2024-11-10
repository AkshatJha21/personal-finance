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
          <span className={step >= 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-neutral-500'}>Step 1</span>
          <span className={step >= 2 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-neutral-500'}>Step 2</span>
          <span className={step >= 3 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-neutral-500'}>Step 3</span>
        </div>
        <div className="relative h-1 w-full bg-slate-300 dark:bg-neutral-700">
          <div
            className="absolute top-0 h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="flex flex-col gap-y-6 w-[80%] sm:w-[40%] lg:w-[30%] xl:w-[25%]">
        {step === 1 && (
          <>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold">Get Started</h2>
              <p className='text-sm font-light'>Create a new account</p>
            </div>
            <FormInput label="Email" type="email" handleChange={() => {}} />
            <FormInput label="New Password" type="password" handleChange={() => {}} />
            <FormInput label="Confirm Password" type="password" handleChange={() => {}} />
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold">Personal Information</h2>
              <p className='text-sm font-light'>Enter your detials to continue</p>
            </div>
            <FormInput label="First Name" type="text" handleChange={() => {}} />
            <FormInput label="Last Name" type="text" handleChange={() => {}} />
            <FormInput label="Phone Number" type="text" handleChange={() => {}} />
          </>
        )}
        {step === 3 && (
          <>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold">Setup Account</h2>
              <p className='text-sm font-light'>Fill payment detials to finish setup</p>
            </div>
            <FormInput label="Account Number" type="text" handleChange={() => {}} />
            <FormInput label="Set ePIN" type="text" handleChange={() => {}} />
            <FormInput label="Confirm ePIN" type="text" handleChange={() => {}} />
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {step > 1 && (
            <button
              className="px-4 py-2 font-medium rounded-md bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all w-full mr-2"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              className="px-4 py-2 font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:opacity-80 cursor-pointer text-white w-full"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button className="px-4 py-2 font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:opacity-80 cursor-pointer text-white w-full">
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