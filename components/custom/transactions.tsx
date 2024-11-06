"use client";

export const Transaction = () => {
    return (
        <div className="flex items-center w-full py-2 pr-4">
            <div className="h-12 aspect-square bg-purple-500 mr-2 rounded-full" />
            <div className="flex flex-col w-[80%]">
                <div className="flex w-full items-center justify-between">
                    <p className="text-xs font-bold">John Doe</p>
                    <p className="text-xs font-semibold text-rose-500">$200</p>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-400 font-light py-1">Oct 25, 19:04</p>
            </div>
        </div>
    )
}