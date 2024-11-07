import React from 'react'
import FormInput from './form-input'

const LoginForm = () => {
  return (
    <div className='h-[90%] flex items-center justify-center'>
        <div className='flex flex-col gap-y-6 w-[80%] sm:w-[40%] lg:w-[30%] xl:w-[25%]'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-xl lg:text-2xl font-semibold'>Welcome back</h1>
                <p className='text-sm font-light opacity-80'>Sign in to continue</p>
            </div>
            <FormInput />
            <Input />
        </div>
    </div>
  )
}

export default LoginForm

const Input = () => {
    return (
        <div className='flex flex-col gap-y-1'>
            <p className='text-sm font-medium'>Label</p>
            <input className='border rounded-md bg-slate-50 px-4 py-2 dark:bg-neutral-900'/>
        </div>
    )
}