"use client";

import { LogOut, Settings, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";


const UserButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const openMenu = () => {
        setIsMenuOpen((p) => !p);
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
          if (
            dropdownRef.current && 
            !dropdownRef.current.contains(e.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target as Node)
          ) {
            setIsMenuOpen(false);
          };
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        }
      }, [dropdownRef]);
  return (
    <div className="relative flex items-center gap-x-6">
        <p>Hi 👋🏻, Akshat</p>
        <div ref={buttonRef} onClick={openMenu} className="relative h-10 w-10 rounded-full transition bg-gradient-to-b from-indigo-600 to-indigo-900 hover:text-opacity-50 cursor-pointer text-white flex items-center justify-center">
            <User className="h-5"/>
        </div>
        <div className="absolute top-14 right-0" ref={dropdownRef}>
            <AnimatePresence>
                {isMenuOpen && (
                    <Dropdown />
                )}
            </AnimatePresence>
        </div>
    </div>
  )
}

const Dropdown = () => {
    return (
        <motion.div 
            className=" border dark:border-none rounded bg-gradient-to-b dark:from-indigo-600 from-slate-100 to-slate-200 shadow-sm dark:to-indigo-900 p-2 dark:text-white text-black"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
        >
            <div className="flex flex-col items-start gap-y-1 text-sm">
                <button className="py-2 px-4 transition-all hover:bg-slate-300 dark:hover:bg-opacity-10 rounded flex w-full items-center">
                    <Settings className="h-5 mr-2"/>
                    <p className="font-medium">Settings</p>
                </button>
                <button className="py-2 px-4 transition-all hover:bg-slate-300 dark:hover:bg-opacity-10 rounded flex w-full items-center">
                    <LogOut className="h-5 mr-2"/>
                    <p className="font-medium">Logout</p>
                </button>
            </div>
        </motion.div>
    )
}

export default UserButton