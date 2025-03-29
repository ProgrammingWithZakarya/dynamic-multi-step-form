import { ChangeEventHandler } from "react";

export interface TextFieldProps {
  name: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  errorMessage?: string;
  defaultValue?: string;
  asTextArea?: boolean;
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
    asTextArea = false,
  } = props;

  return (
    <div className={`input-container ${asTextArea ? "as-textarea" : ""} ${className}`}>
      {asTextArea ? (
        <textarea
          placeholder={placeholder}
          className="input-container__textarea"
          required={isRequired}
          onChange={onChange}
          name={name}
          defaultValue={defaultValue}
        />
      ) : (
        <>
          <label className="input-container__label">{label}</label>
          <input
            placeholder={placeholder}
            className="input-container__input"
            required={isRequired}
            onChange={onChange}
            name={name}
            defaultValue={defaultValue}
          />
        </>
      )}
      {!!errorMessage && (
        <span className="input-container__error-message">{errorMessage}</span>
      )}
    </div>
  );
};

export default TextField;
