import { useState } from "react";
import Checkbox from "./Checkbox";

export interface CheckboxOption {
  id: string;
  label: string;
  value: string;
}

export interface CheckboxGroupProps {
  name: string;
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  className?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
}

const CheckboxGroup = ({
  name,
  options,
  value = [],
  onChange,
  className = "",
  isDisabled = false,
  isRequired,
  errorMessage,
}: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  const handleChange = (newValue: string) => {
    const updatedValues = selectedValues.includes(newValue)
      ? selectedValues.filter((val) => val !== newValue)
      : [...selectedValues, newValue];

    setSelectedValues(updatedValues);
    if (onChange) {
      onChange(updatedValues);
    }
  };

  return (
    <div className={`checkbox-group ${className}`}>
      {options.map((option) => (
        <Checkbox
          key={option.id}
          id={option.id}
          name={name}
          label={option.label}
          onChange={() => handleChange(option.value)}
          defaultChecked={selectedValues.includes(option.value)}
          isRequired={isRequired}
          isDisabled={isDisabled}
        />
      ))}

      {!!errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default CheckboxGroup;
