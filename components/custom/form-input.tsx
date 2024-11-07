import React from 'react'

interface FormProps {
    
}

const FormInput = () => {
    return (
        <div className='flex flex-col gap-y-1'>
            <p className='text-sm font-medium'>Label</p>
            <input className='border rounded-md bg-slate-50 px-4 py-2 dark:bg-neutral-900'/>
        </div>
    )
}

export default FormInput