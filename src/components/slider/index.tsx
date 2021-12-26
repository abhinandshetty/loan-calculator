/* eslint-disable no-unused-vars */
import React from 'react';

export interface ISlider {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<ISlider> = ({ min, max, step, value, onChange }) => {
  return (
    <input
      type="range"
      className="w-full slider"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={({ target }) => onChange(target.valueAsNumber)}
    />
  );
};

export default Slider;
