"use client";

export const GoalChart = () => {
    return (
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
    )
}