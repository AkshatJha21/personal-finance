"use client";

import { ModeToggle } from "../ModeToggle";
import UserButton from "../ui/UserButton"


const Navbar = () => {
  return (
    <div className="flex w-full py-4 px-6 items-center justify-between">
        <h1 className="text-lg md:text-xl font-semibold">Nexpense</h1>
        <div className="flex items-center gap-x-6">
        <ModeToggle />
        <UserButton />
        </div>
    </div>
  )
}

export default Navbar