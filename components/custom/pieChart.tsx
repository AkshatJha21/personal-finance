"use client";

import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { ArrowLeft, ArrowRight } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, ArcElement, Title, Tooltip, Legend, Filler);

const yearData = [
  {
    year: 2024,
    months: [
      { month: "January", earned: 1000, spent: 500, saved: 500 },
      { month: "February", earned: 2000, spent: 500, saved: 1500 },
      { month: "March", earned: 1500, spent: 500, saved: 1000 },
      { month: "April", earned: 2500, spent: 500, saved: 2000 },
      { month: "May", earned: 500, spent: 500, saved: 0 },
      { month: "June", earned: 1500, spent: 500, saved: 1000 },
      { month: "July", earned: 5000, spent: 500, saved: 4500 },
      { month: "August", earned: 2500, spent: 200, saved: 2300 },
      { month: "September", earned: 5500, spent: 5000, saved: 500 },
      { month: "October", earned: 3600, spent: 500, saved: 3100 },
      { month: "November", earned: 2500, spent: 1500, saved: 1000 },
      { month: "December", earned: 5100, spent: 5000, saved: 100 },
    ],
  },
];

export const PieChart = () => {
  const [monthIndex, setMonthIndex] = useState(0);

  const currentMonthData = yearData[0].months[monthIndex];

  const data = {
    labels: ["Income", "Expense", "Savings"],
    datasets: [
      {
        label: "$",
        data: [currentMonthData.earned, currentMonthData.spent, currentMonthData.saved],
        backgroundColor: ["rgb(75, 60, 193)", "rgb(157, 89, 239)", "rgb(220, 118, 180)"],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };

  const handleNextMonth = () => {
    setMonthIndex((prevIndex) => (prevIndex + 1) % yearData[0].months.length);
  };

  const handlePreviousMonth = () => {
    setMonthIndex((prevIndex) =>
      prevIndex === 0 ? yearData[0].months.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around py-6 px-6">
      <div className="flex flex-col pt-6 gap-y-2">
        <p className="text-sm md:text-lg font-medium">{currentMonthData.month} 2024</p>
        <p className="text-sm font-light dark:text-slate-200">
          Earned: <span className="font-medium">$ {currentMonthData.earned}</span>
        </p>
        <p className="text-sm font-light dark:text-slate-200">
          Spent: <span className="font-medium">$ {currentMonthData.spent}</span>
        </p>
        <p className="text-sm font-light dark:text-slate-200">
          Saved: <span className="font-medium">$ {currentMonthData.saved}</span>
        </p>
        <div className="flex gap-4 justify-between items-center mt-4 w-[200px] mx-auto">
          <button
            onClick={handlePreviousMonth}
            className="p-2 hover:bg-black/5 rounded dark:hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="h-5"/>
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-black/5 rounded dark:hover:bg-white/10 transition-all"
          >
            <ArrowRight className="h-5"/>
          </button>
        </div>
      </div>
      <div style={{
        
      }}>
        <Pie data={data} /> 
      </div>
    </div>
  );
};
