"use client";

import { X } from "lucide-react";
import React, { useState } from "react";
import PinInput from "./pin-input";

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal = ({ onClose }: PaymentModalProps) => {
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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition py-2"
          aria-label="Close"
        >
          <X className="h-5" />
        </button>

        {/* Step 1: Enter Wallet ID */}
        {step === 1 && (
          <>
            <h1 className="text-lg font-semibold pb-2">Pay Now</h1>
            <input
              placeholder="Enter Wallet ID"
              className="border rounded-md bg-slate-50 px-4 py-2 dark:bg-neutral-900 my-4"
            />
            <div className="py-2 flex flex-col">
              <h2 className="font-medium">Recents</h2>
              <div className="flex flex-row justify-between items-center py-2">
                <RecentUser />
                <RecentUser />
                <RecentUser />
                <RecentUser />
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 text-center font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:opacity-80 cursor-pointer text-white"
              onClick={handleNextStep}
            >
              Next
            </button>
          </>
        )}

        {/* Step 2: Enter Amount */}
        {step === 2 && (
          <>
            <h1 className="text-lg font-semibold pb-2">Enter Amount</h1>
            <p className="text-sm text-gray-500 pb-4">Sending money to User One</p>
            <input
              placeholder="Enter Amount"
              type="number"
              className="border rounded-md bg-slate-50 px-4 py-2 dark:bg-neutral-900 my-4"
            />
            <div className="flex">
              <button
                onClick={handleBack}
                className="mt-4 px-4 py-2 font-medium rounded-md bg-purple-200 hover:bg-indigo-200 dark:bg-white/10 dark:hover:bg-white/15 transition-all w-full mr-2"
              >
                Back
              </button>
              <button
                className="mt-4 px-4 py-2 text-center font-medium rounded-md transition bg-gradient-to-tr from-indigo-700 to-[#d6ade0] hover:opacity-80 cursor-pointer text-white w-full"
                onClick={handleNextStep}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 3: Enter PIN */}
        {step === 3 && (
          <>
            <h1 className="text-lg font-semibold pb-2">Enter PIN</h1>
            <p className="text-sm text-gray-500 pb-4">Enter your 4-digit PIN to confirm payment.</p>
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
  );
};

export default PaymentModal;

const RecentUser = () => {
  return (
    <div className="flex flex-col items-center gap-y-2 p-2 hover:bg-slate-200 rounded-lg cursor-pointer transition">
      <div className="w-14 aspect-square bg-purple-500 rounded-full" />
      <p className="text-xs sm:text-sm text-center">User One</p>
    </div>
  );
};
