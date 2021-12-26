/* eslint-disable no-unused-vars */
import React, { SetStateAction, Dispatch } from 'react';
import Slider, { ISlider } from '@/components/slider';

interface ISliderInputSection {
  title: string;
  inputLabel: string;
  inputValue: string | number;
  value: number;
  min: number;
  max: number;
  onChange: Dispatch<SetStateAction<number>>;
}

const SliderInputSection: React.FC<ISliderInputSection> = ({
  title,
  inputLabel,
  inputValue,
  value,
  min,
  max,
  onChange,
}) => {
  const onChangeValue = (value: string, setter: Dispatch<SetStateAction<number>>): void => {
    const numberValue = Number(value);
    setter(numberValue >= min && numberValue <= max ? numberValue : numberValue < min ? min : max);
  };

  return (
    <div className="my-12">
      <div className="grid grid-cols-3">
        <div className="text-gray-500 col-start-1">{title}</div>
        <div className="text-gray-500 col-start-2 text-right">{inputLabel}</div>
        <div className="col-start-3">
          <input
            type="text"
            className="border-b-2 border-gray focus:outline-none w-full px-3 text-center font-medium"
            value={inputValue}
            onChange={({ target }) => onChangeValue(target.value.replaceAll(',', ''), onChange)}
          />
        </div>
      </div>
      <div className="my-5">
        <Slider min={100000} max={50000000} value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default SliderInputSection;
