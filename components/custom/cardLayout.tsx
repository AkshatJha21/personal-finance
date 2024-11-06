"use client";

export const Card = () => {
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
                    <p className="text-sm tracking-widest font-light">04/27</p>
                    <p className="text-sm tracking-widest font-light">AKSHAT JHA</p>
                </div>
                <svg className="h-12" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z"></path></g></svg>
            </div>
        </div>
    )
}