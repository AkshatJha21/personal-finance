import BottomNav from '@/components/custom/BottomNav'
import GoalsTable from '@/components/custom/GoalsTable'
import Navbar from '@/components/custom/TopBar'
import React from 'react'

const InvestmentsPage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <GoalsTable />
      <BottomNav />
    </div>
  )
}

export default InvestmentsPage