import React from 'react'

const BottomNav = () => {
  return (
    <div className='fixed bottom-6 flex w-full items-center justify-center'>
        <div className='flex gap-x-2'>
            <div>Dashboard</div>
            <div>Expenses</div>
            <div>Income</div>
            <div>Credit</div>
        </div>
    </div>
  )
}

export default BottomNav