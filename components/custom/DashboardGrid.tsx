import { PlusIcon } from "lucide-react"

const DashboardGrid = () => {
  return (
    <div className="px-6 py-4 flex justify-between min-h-[90%]">
        <div className="flex flex-col w-full md:w-[70%]">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-2xl">
                    Welcome, Akshat
                </h1>
                <button className="flex gap-x-2 items-center px-4 py-2 transition bg-gradient-to-bl from-indigo-700 to-indigo-500 hover:to-indigo-600 hover:text-opacity-80 rounded-md text-white">
                    <PlusIcon className="h-4"/>
                    <p className="text-sm font-medium">New Transaction</p>
                </button>
            </div>
        </div>
        <div className="flex flex-col w-full md:w-[30%] items-center h-[85vh] p-8 border ml-6 rounded-2xl dark:border-neutral-500 bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
            <Card />
        </div>
    </div>
  )
}

export default DashboardGrid

const Card = () => {
    return (
        <div className="flex flex-col justify-between h-1/3 w-full text-white bg-gradient-to-tr from-indigo-700 to-pink-400 rounded-2xl p-6">
            <div className="flex justify-between w-full items-baseline">
                <p className="font-light">Current Card</p>
                <p className="font-medium text-sm">**** 6357</p>
            </div>
            <div className="text-4xl">
                $ 5347.68
            </div>
            <div>
                AKSHAT JHA
            </div>
        </div>
    )
}