"use client";

import { ArrowLeftRight, MoreHorizontal, SquareArrowRight } from "lucide-react"

export const Options = () => {
    return (
        <div className="flex w-full items-center justify-between py-8 h-[25%] gap-x-6 dark:text-slate-200">
            <button className="bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all rounded-full flex flex-col items-center justify-center gap-y-2 w-1/3 h-[90%]">
                <SquareArrowRight className="h-5"/>
                <p className="text-xs font-medium">Pay</p>
            </button>
            <button className="bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all rounded-full flex flex-col items-center justify-center gap-y-2 w-1/3 h-[90%]">
                <ArrowLeftRight className="h-5"/>
                <p className="text-xs font-medium">Transfer</p>
            </button>
            <button className="bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all rounded-full flex flex-col items-center justify-center gap-y-2 w-1/3 h-[90%]">
                <MoreHorizontal className="h-5"/>
                <p className="text-xs font-medium">More</p>
            </button>
        </div>
    )
}