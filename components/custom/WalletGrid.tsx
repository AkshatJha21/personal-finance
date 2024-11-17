"use client";

import { ArrowLeft, PlusIcon } from 'lucide-react';
import React, { useState } from 'react'
import WalletModal from './WalletModal';
import WalletTable from './WalletTable';
import WalletPanel from './WalletPanel';

const WalletGrid = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
        <div className='px-6 py-2'>
            <div className='flex flex-col gap-y-4'>
                <a href='/home' className='flex items-center gap-x-2 hover:opacity-70 transition'>
                    <ArrowLeft className='h-5' />
                    <p className='text-sm'>Back</p>
                </a>
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-2xl">
                        Your Wallet
                    </h1>
                    <button onClick={() => setOpenModal(true)} className="flex gap-x-2 items-center px-4 py-2 transition-colors bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                        <PlusIcon className="h-4" />
                        <p className="text-sm font-medium">Add Money</p>
                    </button>
                </div>
                <div className='flex flex-col-reverse gap-y-6 lg:flex-row'>
                    <WalletTable />
                    <WalletPanel />
                </div>
            </div>
        </div>
        {openModal && (
        <WalletModal onClose={() => setOpenModal(false)}/>
        )}
    </>
  )
}

export default WalletGrid