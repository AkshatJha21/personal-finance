"use client";

import { ArrowLeftRight, MoreHorizontal, SquareArrowRight } from "lucide-react"
import { useState } from "react";
import PaymentModal from "./PaymentModal";

export const Options = () => {
    const [openPaymentModal, setOpenPaymentModal] = useState(false);
    return (
        <>
            <div className="flex w-full items-center h-[25%] justify-between gap-x-6 dark:text-slate-200">
                <button onClick={() => setOpenPaymentModal(true)} className="bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all rounded-full flex flex-col items-center justify-center gap-y-2 aspect-square w-[30%]">
                    <SquareArrowRight className="h-4 sm:h-5"/>
                    <p className="text-xs font-medium">Pay</p>
                </button>
                <button className="bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all rounded-full flex flex-col items-center justify-center gap-y-2 aspect-square w-[30%]">
                    <ArrowLeftRight className="h-4 sm:h-5"/>
                    <p className="text-xs font-medium">Transfer</p>
                </button>
                <button className="bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all rounded-full flex flex-col items-center justify-center gap-y-2 aspect-square w-[30%]">
                    <MoreHorizontal className="h-4 sm:h-5"/>
                    <p className="text-xs font-medium">More</p>
                </button>
            </div>
            {openPaymentModal && (
                <PaymentModal onClose={() => setOpenPaymentModal(false)} />
            )}
        </>
    )
}