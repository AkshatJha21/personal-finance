"use client";

import React from 'react'
import { Card } from './cardLayout';

const WalletPanel = () => {
    return (
        <div className='lg:w-[40%] xl:w-[30%] mt-6 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row sm:gap-x-6 lg:flex-col p-6 gap-y-6 border dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5 rounded-2xl h-full'>
                <div className='flex flex-col gap-y-6 w-full sm:w-1/2 lg:w-full'>
                    <Card />
                </div>
                <Grid />
        </div>
    )
}

export default WalletPanel

const Grid = () => {
    return (
        <div className="flex flex-col gap-6 w-full sm:w-1/2 lg:w-full">
            <div className="flex items-baseline justify-between border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-200 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                <p className="text-sm font-light">Added</p>
                <div className="flex items-baseline justify-between">
                    <p className="text-2xl md:text-3xl font-medium tracking-wide">$ 5347.68</p>
                </div>
            </div>
            <div className="flex items-baseline justify-between border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-200 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                <p className="text-sm font-light">Spent</p>
                <div className="flex items-baseline justify-between">
                    <p className="text-2xl md:text-3xl font-medium tracking-wide">$ 3403.45</p>
                </div>
            </div>
        </div>
    )
}