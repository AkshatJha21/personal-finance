"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, DollarSign, Home, TrendingUp, Wallet } from "lucide-react";

const tabs = ["Dashboard", "Expenses", "Income", "Credit"];

const BottomNav = () => {
    const [selected, setSelected] = useState(tabs[0]);
  return (
    <div className='fixed bottom-6 flex w-full items-center justify-center'>
        <div className='flex gap-x-4 p-2 bg-black/90 dark:bg-white/10 rounded-md'>
            {tabs.map((tab) => (
                <Tab 
                    text={tab}
                    selected={selected === tab}
                    setSelected={setSelected}
                    key={tab}
                />
            ))}
        </div>
    </div>
  )
}

interface TabProps {
    text: string;
    selected: boolean;
    setSelected: Dispatch<SetStateAction<string>>;
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
    const getIcon = () => {
        switch (text) {
            case "Dashboard":
                return <Home className="h-5"/>;
            case "Expenses":
                return <DollarSign className="h-5"/>;
            case "Income":
                return <TrendingUp className="h-5"/>;
            case "Credit":
                return <CreditCard className="h-5"/>;
        }
    }
    return (
        <button
            onClick={() => setSelected(text)}
            className={`${
                selected 
                ? "text-white"
                : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"  
            } text-sm transition-colors px-4 py-2 rounded-md relative`}
        >
            <div className="relative z-10 flex flex-col items-center">
                {getIcon()}
                <span className="hidden md:flex font-medium">{text}</span>
            </div>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 z-0 bg-indigo-400 rounded-md"
                >
                </motion.span>
            )}
        </button>
    )
}

export default BottomNav