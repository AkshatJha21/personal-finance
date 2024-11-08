import React from 'react'

interface FormProps {
    label: string;
    type: string;
    handleChange: () => void; 
}

const FormInput = ({ label, type, handleChange }: FormProps) => {
    return (
        <div className='flex flex-col gap-y-1'>
            <p className='text-sm font-medium'>{label}</p>
            <input className='border rounded-md bg-slate-50 px-4 py-2 dark:bg-neutral-900' type={type} onChange={handleChange}/>
        </div>
    )
}

export default FormInput