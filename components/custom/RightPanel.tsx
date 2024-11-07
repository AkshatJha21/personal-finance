"use client";

import React from 'react'
import { Card } from './cardLayout';
import { Options } from './options';
import { TransactionHistory } from './transactionHistory';

const RightPanel = () => {
  return (
    <div className='lg:w-[30%] mt-6 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row sm:gap-x-6 lg:flex-col p-6 gap-y-6 border dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5 rounded-2xl h-full'>
            <div className='flex flex-col gap-y-6 w-full sm:w-1/2 lg:w-full'>
                <Card />
                <Options />
            </div>
            <TransactionHistory /> 
        </div>
  )
}

export default RightPanel