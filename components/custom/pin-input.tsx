import React, { useState, useRef } from "react";

interface PinInputProps {
  length?: number;
  onPinChange: (pin: string) => void;
}

const PinInput = ({ length = 4, onPinChange }: PinInputProps) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
    const handleChange = (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return; // Allow only numbers
  
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
  
      // Move focus to the next input
      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
  
      // Update the PIN in the parent component
      onPinChange(newValues.join(""));
    };
  
    const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
      if (event.key === "Backspace") {
        const newValues = [...values];
        newValues[index] = "";
        setValues(newValues);
  
        // Move focus to the previous input
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
  
        // Update the PIN in the parent component
        onPinChange(newValues.join(""));
      }
    };
  
    return (
      <div className="flex gap-x-3 justify-center">
        {values.map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="password" // Hidden input for security
            maxLength={1}
            value={values[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-lg font-medium border rounded-md bg-slate-50 dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        ))}
      </div>
    );
  };

export default PinInput;