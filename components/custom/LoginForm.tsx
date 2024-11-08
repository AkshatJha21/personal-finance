"use client";

import React from 'react'
import FormInput from './form-input'
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className='h-[90%] flex items-center justify-center'>
        <div className='flex flex-col gap-y-6 w-[80%] sm:w-[40%] lg:w-[30%] xl:w-[25%]'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-xl lg:text-2xl font-semibold'>Welcome back</h1>
                <p className='text-sm font-light opacity-80'>Sign in to continue</p>
            </div>
            <FormInput label='Email' type='email' handleChange={() => {}}/>
            <FormInput label='Password' type='password' handleChange={() => {}}/>
            <button className='mt-2 px-4 py-2 font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:text-opacity-50 cursor-pointer text-white'>
                Continue
            </button>
            <p className='text-sm'>New here? &nbsp;
              <Link href={'/signup'}>
                <span className='font-medium hover:underline cursor-pointer'>Sign up</span>
              </Link>
            </p>
        </div>
    </div>
  )
}

export default LoginForm