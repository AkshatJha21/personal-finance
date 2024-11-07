"use client";

import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

const DashboardGrid = () => {
    return (
        <div className="px-6 py-4 mb-24 flex flex-col lg:flex-row justify-between min-h-[90%]">
            <LeftPanel />
            <RightPanel />
        </div>
    )
}

export default DashboardGrid