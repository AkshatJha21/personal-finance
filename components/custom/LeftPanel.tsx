"use client";

import { ArrowDownCircle, ArrowUpCircle, PlusIcon } from 'lucide-react'
import React from 'react'
import { GoalChart } from './goalChart'
import { FundCard } from './fundcard'
import { PieChart } from './pieChart';

const LeftPanel = () => {
    return (
        <div className="flex flex-col w-full lg:w-[60%] xl:w-[70%]">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-2xl">
                    Welcome, Akshat
                </h1>
                <button className="flex gap-x-2 items-center px-4 py-2 transition-colors bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                    <PlusIcon className="h-4" />
                    <p className="text-sm font-medium">New</p>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8 gap-6">
                <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                    <p className="text-sm font-light">Monthly Income</p>
                    <div className="flex items-baseline justify-between">
                        <p className="text-2xl md:text-3xl font-medium tracking-wide">$ 5347.68</p>
                        <div className="flex items-center text-rose-500">
                            <ArrowDownCircle className="h-3" />
                            <p className="text-xs font-semibold">17%</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                    <p className="text-sm font-light">Monthly Expense</p>
                    <div className="flex items-baseline justify-between">
                        <p className="text-2xl md:text-3xl font-medium tracking-wide">$ 3403.45</p>
                        <div className="flex items-center text-green-500">
                            <ArrowUpCircle className="h-3" />
                            <p className="text-xs font-semibold">10%</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8 md:col-span-2 xl:col-span-1 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                    <p className="text-sm font-light">Monthly Savings</p>
                    <div className="flex items-baseline justify-between">
                        <p className="text-2xl md:text-3xl font-medium tracking-wide">$ 1944.23</p>
                        <div className="flex items-center text-rose-500">
                            <ArrowDownCircle className="h-3" />
                            <p className="text-xs font-semibold">15%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                    <div className="flex items-baseline justify-between">
                        <p className="text-lg md:text-xl font-semibold">Goals</p>
                        <button className="text-xs font-medium dark:text-pink-400 text-pink-500 hover:underline">View All</button>
                    </div>
                    <GoalChart />
                </div>
                <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                    <div className="flex items-baseline justify-between">
                        <p className="text-lg md:text-xl font-semibold">Funds</p>
                        <button className="text-xs font-medium dark:text-pink-400 text-pink-500 hover:underline">View All</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-6">
                        <FundCard />
                        <FundCard />
                        <FundCard />
                        <FundCard />
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-6 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                <div className="flex w-full items-baseline justify-between">
                    <p className="text-lg md:text-xl font-semibold">Spending Analytics</p>
                    <button className="text-xs font-medium dark:text-pink-400 text-pink-500 hover:underline">View All</button>
                </div>
                <PieChart />
            </div>
        </div>
    )
}

export default LeftPanel