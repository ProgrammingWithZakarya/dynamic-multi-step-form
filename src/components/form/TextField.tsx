import { ChangeEventHandler } from "react";

export interface TextFieldProps {
  name: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  defaultValue?: string;
}

const TextField = (props: TextFieldProps) => {
  const {
    name,
    className = "",
    isRequired,
    label,
    placeholder,
    onChange,
    defaultValue,
    errorMessage,
  } = props;

  return (
    <div className={`input-container ${className}`}>
      <label className="label">{label}</label>
      <input
        placeholder={placeholder}
        className="input"
        required={isRequired}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
      />
      <div>
        {!!errorMessage && (
          <span className="error-message">{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default TextField;
