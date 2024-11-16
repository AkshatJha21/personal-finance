"use client";

import { X } from "lucide-react";
import React, { useState } from "react";
import PinInput from "./pin-input";
import FormInput from "./form-input";

interface WalletModalProps {
    onClose: () => void;
}

const WalletModal = ({ onClose }: WalletModalProps) => {
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
                        <h1 className="text-lg font-semibold pb-2">Add Money</h1>
                        <div className="py-6">
                            <FormInput type="text" label="Enter amount" handleChange={() => { }} />
                        </div>
                        <button
                            className="mt-6 px-4 py-2 text-center font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:opacity-80 cursor-pointer text-white"
                            onClick={handleNextStep}
                        >
                            Next
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h1 className="text-lg font-semibold pb-2">Enter PIN</h1>
                        <p className="text-sm text-gray-500 pb-4">Enter your 4-digit PIN to confirm payment.</p>
                        <PinInput onPinChange={handlePinChange} />
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

export default WalletModal