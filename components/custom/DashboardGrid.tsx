"use client";

import { ArrowDownCircle, ArrowLeftRight, ArrowUpCircle, DollarSign, MoreHorizontal, PiggyBank, PlusIcon, SquareArrowRight } from "lucide-react"
import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';
import { axisClasses } from "@mui/x-charts";

const DashboardGrid = () => {
  return (
    <div className="px-6 py-4 flex flex-col md:flex-row justify-between min-h-[90%]">
        <div className="flex flex-col w-full md:w-[70%]">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-2xl">
                    Welcome, Akshat
                </h1>
                <button className="flex gap-x-2 items-center px-4 py-2 transition-colors bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                    <PlusIcon className="h-4"/>
                    <p className="text-sm font-medium">New</p>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-6">
                <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                    <p className="text-sm font-light">Monthly Income</p>
                    <div className="flex items-baseline justify-between">
                        <p className="text-3xl font-medium tracking-wide">$ 5347.68</p>
                        <div className="flex items-center text-rose-500">
                            <ArrowDownCircle className="h-3"/>
                            <p className="text-xs font-semibold">20%</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                    <p className="text-sm font-light">Monthly Expense</p>
                    <div className="flex items-baseline justify-between">
                        <p className="text-3xl font-medium tracking-wide">$ 3403.45</p>
                        <div className="flex items-center text-green-500">
                            <ArrowUpCircle className="h-3"/>
                            <p className="text-xs font-semibold">10%</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8 border rounded-2xl p-6 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-neutral-950 dark:to-white/5">
                    <p className="text-sm font-light">Monthly Savings</p>
                    <div className="flex items-baseline justify-between">
                        <p className="text-3xl font-medium tracking-wide">$ 1944.23</p>
                        <div className="flex items-center text-rose-500">
                            <ArrowDownCircle className="h-3"/>
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
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center justify-center">
                            <svg className="w-56 h-56" viewBox="0 0 200 200">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: "#d6ade0", stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle 
                                    cx="100" 
                                    cy="100" 
                                    r="80" 
                                    stroke="currentColor" 
                                    strokeWidth="8" 
                                    fill="transparent"
                                    className="text-slate-300 dark:text-slate-700" 
                                />
                                <circle 
                                    cx="100" 
                                    cy="100" 
                                    r="80" 
                                    stroke="url(#gradient)" 
                                    strokeWidth="8" 
                                    fill="transparent"
                                    strokeDasharray={`${2 * Math.PI * 80}`}
                                    strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.7)}`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="absolute text-4xl text-indigo-500">70%</span>
                        </div>
                        <div className="flex flex-col p-6 gap-y-2">
                            <p className="text-sm font-medium">Apple iPhone 16 Pro</p>
                            <p className="text-sm font-light dark:text-slate-200">Required: <span className="font-medium">$ 1000</span></p>
                            <p className="text-sm font-light dark:text-slate-200">Saved: <span className="font-medium">$ 700</span></p>
                        </div>
                    </div>
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
                <SimpleChart />
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

const Card = () => {
    return (
        <div className="flex flex-col justify-between h-1/3 w-full text-white bg-gradient-to-tr from-indigo-700 to-pink-400 rounded-2xl p-6">
            <div className="flex justify-between w-full items-baseline">
                <p className="font-light">Current Card</p>
                <p className="font-medium text-sm">**** 6357</p>
            </div>
            <div className="text-4xl font-medium">
                $ 5347.68
            </div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                    <p className="text-sm tracking-widest font-light">10/27</p>
                    <p className="text-sm tracking-widest font-light">AKSHAT JHA</p>
                </div>
                <svg className="h-12" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z"></path></g></svg>
            </div>
        </div>
    )
}

const Options = () => {
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

const TransactionHistory = () => {
    return (
        <div className="flex flex-col w-full h-[42%] items-center p-6 border rounded-2xl border-neutral-300/70 dark:border-neutral-500 bg-gradient-to-t dark:bg-gradient-to-b from-purple-200 to-purple-100 dark:from-neutral-950 dark:to-white/5">
            <div className="flex w-full items-center justify-between">
                <p className="font-semibold">Transactions</p>
                <button className="text-xs font-medium dark:text-pink-400 text-pink-500 hover:underline">View All</button>
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

const Transaction = () => {
    return (
        <div className="flex items-center w-full py-2 pr-4">
            <div className="h-12 w-12 bg-purple-500 mr-2 rounded-full" />
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

const FundCard = () => {
    return (
        <div className="flex flex-col items-start gap-y-1 bg-indigo-200 dark:bg-white/10 rounded-2xl p-6">
            <p className="text-sm font-light">Mutual Fund</p>
            <p className="text-lg tracking-wide font-semibold">$ 120,653.01</p>
        </div>
    )
}

const labels: string[] = ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15', 'Oct 16', 'Oct 17', 'Oct 18', 'Oct 19', 'Oct 20', 'Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26', 'Oct 27', 'Oct 28', 'Oct 29', 'Oct 30', 'Oct 31'];
const lData: number[] = [42, 24, 56, 45, 3, 42, 24, 56, 45, 3, 42, 24, 56, 45, 3, 42, 24, 56, 45, 3, 42, 24, 56, 45, 3, 42, 24, 56, 45, 3, 12];
const rData: number[] = [57, 7, 19, 16, 22, 57, 7, 19, 16, 22, 57, 7, 19, 16, 22, 57, 7, 19, 16, 22, 57, 7, 19, 16, 22, 57, 7, 19, 16, 22, 1];
const mData: number[] = [17, 2, 49, 6, 12, 17, 2, 49, 6, 12, 17, 2, 49, 6, 12, 17, 2, 49, 6, 12, 17, 2, 49, 6, 12, 17, 2, 49, 6, 12, 20];
const colors: string[] = ['#db76b5', '#c4cff6', '#4e3dc1'];

const SimpleChart = () => {
    return (
        <BarChart
        sx={(theme) => ({
            [`.${axisClasses.root}`]: {
              [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                stroke: '#006BD6',
                strokeWidth: 3,
              },
              [`.${axisClasses.tickLabel}`]: {
                fill: '#006BD6',
              },
            },
            border: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '35px 35px',
            backgroundPosition: '20px 20px, 20px 20px',
            ...theme.applyStyles('dark', {
              borderColor: 'rgba(255,255,255, 0.1)',
              backgroundImage:
                'linear-gradient(rgba(255,255,255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255, 0.1) 1px, transparent 1px)',
            }),
          })}
          xAxis={[{ scaleType: 'band', data: labels }]}
          series={[
            { data: lData, label: 'Income', id: 'l_id' },
            { data: mData, label: 'Expense', id: 'm_id' },
            { data: rData, label: 'Savings', id: 'r_id' },
          ]}
          colors={colors}
            width={1200}
            height={400}
        />
    )
}

// xAxis={[{ 
//     scaleType: 'band', 
//     data: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5']
// }]}
// series={[{ data: [4, 3, 5, 2 ,1], color: "#4e3dc1" }, { data: [1, 6, 3, 0, 9], color: "#c4cff6" }, { data: [2, 5, 6, 2, 4], color: "#db76b5" }]}
