import { X } from 'lucide-react';
import React from 'react'

interface PaymentModalProps {
    onClose: () => void;
}

const PaymentModal = ({ onClose }: PaymentModalProps) => {
  return (
    <div className='fixed w-screen h-screen flex items-center justify-center top-0 left-0 bg-black/50 z-50'>
        <div className='relative p-6 bg-white rounded-lg w-[90%] sm:w-[450px] flex flex-col'>
            <h1 className='text-lg font-semibold pb-2'>Pay Now</h1>
            <input placeholder='Enter Wallet ID' className='border rounded-md bg-slate-50 px-4 py-2 dark:bg-neutral-900 my-4'/>
            <div className='py-2 flex flex-col'>
                <h2 className='font-medium'>Recents</h2>
                <div className='flex flex-row justify-between items-center py-2'>
                    <RecentUser />
                    <RecentUser />
                    <RecentUser />
                    <RecentUser />
                </div>
            </div>
            <button className='mt-4 px-4 py-2 text-center font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:text-opacity-50 cursor-pointer text-white'>
              Continue
            </button>
            <button onClick={onClose} className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition py-2'>
                <X className='h-5'/>
            </button>
        </div>
    </div>
  )
}

export default PaymentModal

const RecentUser = () => {
    return (
        <div className='flex flex-col items-center gap-y-2 p-2 hover:bg-slate-200 rounded-lg cursor-pointer transition'>
            <div className='w-14 aspect-square bg-purple-500 rounded-full' />
            <p className='text-xs sm:text-sm text-center'>User One</p>
        </div>
    )
}