import { useEffect, useState } from "react";
import Radio from "./Radio";

export interface RadioOption {
  id: string;
  label: string;
  value: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
}

const RadioGroup = ({
  name,
  options,
  value,
  onChange,
  className = "",
  isDisabled = false,
  isRequired,
  errorMessage,
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`radio-button-container ${className}`}>
      {options.map((option) => (
        <Radio
          key={option.id}
          id={option.id}
          name={name}
          label={option.label}
          onChange={() => handleChange(option.value)}
          isChecked={selectedValue === option.value}
          isDisabled={isDisabled}
          isRequired={isRequired}
        />
      ))}

      {!!errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default RadioGroup;
