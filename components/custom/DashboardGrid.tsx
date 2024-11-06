"use client";

import { ArrowDownCircle, ArrowUpCircle, PlusIcon } from "lucide-react";
import { FundCard } from "./fundcard";
import { TransactionHistory } from "./transactionHistory";
import { Options } from "./options";
import { Card } from "./cardLayout";
import { GoalChart } from "./goalChart";
import { PieChart } from "./pieChart";

const DashboardGrid = () => {
    return (
        <div className="px-6 py-4 flex flex-col md:flex-row justify-between min-h-[90%]">
            <div className="flex flex-col w-full md:w-[70%]">
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-2xl">
                        Welcome, Akshat
                    </h1>
                    <button className="flex gap-x-2 items-center px-4 py-2 transition-colors bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                        <PlusIcon className="h-4" />
                        <p className="text-sm font-medium">New</p>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-6">
                    <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                        <p className="text-sm font-light">Monthly Income</p>
                        <div className="flex items-baseline justify-between">
                            <p className="text-3xl font-medium tracking-wide">$ 5347.68</p>
                            <div className="flex items-center text-rose-500">
                                <ArrowDownCircle className="h-3" />
                                <p className="text-xs font-semibold">17%</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                        <p className="text-sm font-light">Monthly Expense</p>
                        <div className="flex items-baseline justify-between">
                            <p className="text-3xl font-medium tracking-wide">$ 3403.45</p>
                            <div className="flex items-center text-green-500">
                                <ArrowUpCircle className="h-3" />
                                <p className="text-xs font-semibold">10%</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                        <p className="text-sm font-light">Monthly Savings</p>
                        <div className="flex items-baseline justify-between">
                            <p className="text-3xl font-medium tracking-wide">$ 1944.23</p>
                            <div className="flex items-center text-rose-500">
                                <ArrowDownCircle className="h-3" />
                                <p className="text-xs font-semibold">15%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                        <div className="flex items-baseline justify-between">
                            <p className="text-xl font-semibold">Goals</p>
                            <button className="text-xs font-medium dark:text-pink-400 text-pink-500 hover:underline">View All</button>
                        </div>
                        <GoalChart />
                    </div>
                    <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                        <div className="flex items-baseline justify-between">
                            <p className="text-xl font-semibold">Funds</p>
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
                        <p className="text-xl font-semibold">Spending Analytics</p>
                        <button className="text-xs font-medium dark:text-pink-400 text-pink-500 hover:underline">View All</button>
                    </div>
                    <PieChart />
                </div>
            </div>
            <div className="flex flex-col w-full md:w-[30%] items-center h-[85vh] p-8 border md:ml-6 rounded-2xl dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                <Card />
                <Options />
                <TransactionHistory />
            </div>
        </div>
    )
}

export default DashboardGrid