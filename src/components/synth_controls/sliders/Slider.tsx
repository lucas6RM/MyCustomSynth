import { useState } from "react";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onValueChange: (value: number) => void;
}

export function Slider(sliderProps: SliderProps) {
  const [newValue, setNewValue] = useState(sliderProps.value);
  
  const handleSliderValue = (value: number) => {
    setNewValue(value);
    sliderProps.onValueChange(value);
  };

 
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <label className="basis-1/2 pb-1">{sliderProps.label}</label>
      <input
        className="basis-1/2 accent-indigo-500"
        type="range"
        min={sliderProps.min}
        max={sliderProps.max}
        step={sliderProps.step}
        value={newValue}
        onChange={(e) => handleSliderValue(parseFloat(e.target.value))}
      ></input>
      
    </div>
  );
}
