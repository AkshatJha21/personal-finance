"use client";

import React from 'react'
import FormInput from './form-input';
import Link from 'next/link';

const SignupForm = () => {
  return (
    <div className='h-[90%] flex items-center justify-center'>
        <div className='flex flex-col gap-y-6 w-[80%] sm:w-[40%] lg:w-[30%] xl:w-[25%]'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-xl lg:text-2xl font-semibold'>Get started</h1>
                <p className='text-sm font-light opacity-80'>Create a new account</p>
            </div>
            <FormInput label='Email' type='email' handleChange={() => {}}/>
            <FormInput label='New Password' type='password' handleChange={() => {}}/>
            <FormInput label='Confirm Password' type='password' handleChange={() => {}}/>
            <button className='mt-2 px-4 py-2 font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:text-opacity-50 cursor-pointer text-white'>
                Next
            </button>
            <p className='text-sm'>Existing user? &nbsp;
              <Link href={'/login'}>
                <span className='font-medium hover:underline cursor-pointer'>Login</span>
              </Link>
            </p>
        </div>
    </div>
  )
}

export default SignupForm