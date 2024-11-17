"use client";

import { Transaction } from "./transactions"

export const TransactionHistory = () => {
    return (
        <div className="flex flex-col w-full sm:w-1/2 lg:w-full h-[42%] items-center p-6 border rounded-2xl border-neutral-300/70 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-purple-200 to-purple-100 dark:from-neutral-950 dark:to-white/5">
            <div className="flex w-full items-center justify-between">
                <p className="font-semibold">Transactions</p>
                <a href="/transactions" className="text-xs font-medium dark:text-pink-400 text-pink-500 hover:underline">View All</a>
            </div>
            <div className="flex flex-col w-full mt-6 overflow-y-scroll gap-y-1 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent dark:scrollbar-thumb-white/15 dark:scrollbar-track-transparent">
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
            </div>
        </div>
    )
}