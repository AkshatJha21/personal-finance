"use client";

import React, { useState } from 'react'
import PinInput from './pin-input';
import FormInput from './form-input';
import { X } from 'lucide-react';

interface EditGoalModalProps {
    onClose: () => void;
}

const EditGoalModal = ({ onClose }: EditGoalModalProps) => {
    const [step, setStep] = useState(1);
    const [pin, setPin] = useState("");

    const handlePinChange = (enteredPin: string) => {
        setPin(enteredPin);
    };

    const handleNextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    const handleConfirm = () => {
        console.log("PIN Confirmed");
        onClose();
    };

    return (
        <div className="fixed w-screen h-screen flex items-center justify-center top-0 left-0 bg-black/50 dark:bg-black/85 z-50">
        <div className="relative p-6 bg-white dark:bg-gradient-to-b dark:from-neutral-950 dark:to-neutral-800 dark:border rounded-lg w-[90%] sm:w-[450px] flex flex-col">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition py-2"
                aria-label="Close"
            >
                <X className="h-5" />
            </button>
            {step === 1 && (
                <>
                    <h1 className="text-lg font-semibold pb-2">Update Goal</h1>
                    <div className='flex flex-col gap-y-4 pt-6'>   
                        <FormInput label='Your Goal' type='text' handleChange={() => {}}/>
                        <FormInput label='Amount Needed' type='text' handleChange={() => {}}/>
                        <FormInput label='Amount Saved' type='text' handleChange={() => {}}/>
                    </div>
                    <div className='flex pt-8'>
                        <button onClick={onClose} className='px-4 py-2 font-medium rounded-md bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all w-full mr-2'>
                            Update Goal
                        </button>
                        <button onClick={handleNextStep} className='px-4 py-2 text-center font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:opacity-80 cursor-pointer text-white w-full'>
                            Add Money
                        </button>
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <h1 className="text-lg font-semibold pb-2">Add Money to Goal</h1>
                    <div className='flex flex-col gap-y-4 pt-6'>
                        <FormInput label='Amount' type='text' handleChange={() => {}}/>
                    </div>
                    <div className='flex pt-8'>
                        <button onClick={handleBack} className='px-4 py-2 font-medium rounded-md bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all w-full mr-2'>
                            Back
                        </button>
                        <button onClick={handleNextStep} className='px-4 py-2 text-center font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:opacity-80 cursor-pointer text-white w-full'>
                            Proceed
                        </button>
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <h1 className="text-lg font-semibold pb-2">Enter PIN</h1>
                    <p className="text-sm text-gray-500 pb-4">Enter your 4-digit PIN to confirm.</p>
                    <PinInput onPinChange={handlePinChange}/>
                    <button
                        onClick={handleConfirm}
                        className="mt-4 px-4 py-2 text-center font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:opacity-80 cursor-pointer text-white"
                        disabled={pin.length !== 4}
                    >
                        Confirm
                    </button>
                </>
            )}
        </div>
    </div>
    )
}

export default EditGoalModal