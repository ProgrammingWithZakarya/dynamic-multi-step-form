import { ChangeEvent, useState } from "react";

export interface SliderProps {
  name: string;
  label: string;
  hasInput?: boolean;
  min?: number;
  max?: number;
  step?: number;
  onChange?(value: string): void;
  isRequired?: boolean;
  defaultValue?: string;
  errorMessage?: string;
  unit?: string;
}

const Slider = (porps: SliderProps) => {
  const {
    label,
    onChange,
    hasInput,
    unit = "m²",
    isRequired,
    errorMessage,
    ...rest
  } = porps;

  const [value, setValue] = useState(rest.defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="slider-container">
      {hasInput && (
        <div className="input-wrapper">
          <label htmlFor={rest.name}>
            {label} {`(in ${unit})`}:
          </label>

          <input
            type="number"
            {...{
              ...rest,
              value,
              onChange: handleChange,
              required: isRequired,
            }}
          />
        </div>
      )}

      <div className="range-input-wrapper">
        <input type="range" {...{ ...rest, value, onChange: handleChange }} />

        <div className="range-input-labels">
          <span className="from-label">
            {rest.min ?? "0"} {unit}
          </span>
          <span className="to-label">
            {rest.max ?? "100"} {unit}
          </span>
        </div>
      </div>

      {!!errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default Slider;
