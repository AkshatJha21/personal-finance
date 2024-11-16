"use client";

import WalletModal from '@/components/custom/WalletModal';
import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'

const WalletPage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="min-h-screen relative">
        <div className="flex items-center justify-between px-6 py-2">
          <h1 className="font-semibold text-2xl">
            Your Wallet
          </h1>
          <button onClick={() => setOpenModal(true)} className="flex gap-x-2 items-center px-4 py-2 transition-colors bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
            <PlusIcon className="h-4" />
            <p className="text-sm font-medium">Add Money</p>
          </button>
        </div>
      </div>
      {openModal && (
        <WalletModal onClose={() => setOpenModal(false)}/>
      )}
    </>
  )
}

export default WalletPage