"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Home, TrendingUp, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";

const tabs = ["Home", "Transactions", "Investments", "Wallet"];
const navs = [
    {
        name: "Home",
        page: "/home",
    },
    {
        name: "Transactions",
        page: "/transactions"
    },
    {
        name: "Investments",
        page: "/investments"
    },
    {
        name: "Wallet",
        page: "/wallet"
    }
]

const BottomNav = () => {
    const [selected, setSelected] = useState(tabs[0]);
  return (
    <div className='fixed bottom-6 flex w-full items-center justify-center'>
        <div className='flex gap-x-4 p-2 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-neutral-700 dark:to-neutral-800  rounded-md w-[80%] sm:w-[60%] shadow-md justify-between'>
            {navs.map((tab) => (
                <Tab 
                    text={tab.name}
                    selected={selected === tab.name}
                    setSelected={setSelected}
                    key={tab.name}
                    pageName={tab.page}
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
    pageName: string;
}

const Tab = ({ text, selected, setSelected, pageName }: TabProps) => {
    const router = useRouter();
    const getIcon = () => {
        switch (text) {
            case "Home":
                return <Home className="h-5"/>;
            case "Transactions":
                return <DollarSign className="h-5"/>;
            case "Investments":
                return <TrendingUp className="h-5"/>;
            case "Wallet":
                return <Wallet className="h-5"/>;
        }
    }
    return (
        <button
            onClick={() => {
                setSelected(text);
                router.push(pageName);
            }}
            className={`${
                selected 
                ? "text-white"
                : "text-slate-900 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-black/30"  
            } text-sm transition-colors px-4 py-2 rounded-md relative w-1/6 md:w-1/4`}
        >
            <div className="relative z-10 flex flex-col items-center gap-y-1">
                {getIcon()}
                <span className="hidden md:flex font-medium">{text}</span>
            </div>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-700 to-[#d6ade0] dark:from-indigo-700 dark:to-[#d6ade0] rounded-md"
                >
                </motion.span>
            )}
        </button>
    )
}

export default BottomNav