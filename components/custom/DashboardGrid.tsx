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
        <div className="flex flex-col w-full md:w-[30%] items-center justify-center">
            Right
        </div>
    </div>
  )
}

export default DashboardGrid