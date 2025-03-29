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
      <label className="input-container__label">{label}</label>
      <input
        placeholder={placeholder}
        className="input-container__input"
        required={isRequired}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
      />
      {!!errorMessage && (
        <span className="input-container__error-message">{errorMessage}</span>
      )}
    </div>
  );
};

export default TextField;
