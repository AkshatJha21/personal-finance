"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler, ArcElement, } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, ArcElement, Title, Tooltip, Legend, Filler);

const data = {
    labels: [
        'Income',
        'Expense',
        'Savings'
    ],
    datasets: [{
        label: '$',
        data: [5347, 3403, 1944],
        backgroundColor: [
            'rgb(75, 60, 193)',
            'rgb(157, 89, 239)',
            'rgb(220, 118, 180)'
        ],
        hoverOffset: 4,
        borderWidth: 1
    }]
};

export const PieChart = () => {
    return (
        <div className="md:h-[400px] flex flex-col-reverse md:flex-row items-center justify-around py-6">
            <div className="flex flex-col pt-6 gap-y-2">
                <p className="text-lg font-medium">October 2024</p>
                <p className="text-sm font-light dark:text-slate-200">Earned: <span className="font-medium">$ 1000</span></p>
                <p className="text-sm font-light dark:text-slate-200">Spent: <span className="font-medium">$ 700</span></p>
                <p className="text-sm font-light dark:text-slate-200">Saved: <span className="font-medium">$ 700</span></p>
            </div>
            <Pie data={data} />
        </div>
    )
}