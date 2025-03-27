import { ChangeEventHandler } from "react";

export interface RadioProps {
  className?: string;
  id?: string;
  name: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const Radio = (props: RadioProps) => {
  const {
    id,
    name,
    label,
    className = "",
    onChange,
    isChecked,
    isDisabled,
    isRequired,
  } = props;

  return (
    <div className={`radio-button ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        className="radio-button__input"
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
        required={isRequired}
      />
      <label className="radio-button__label" htmlFor={id}>
        <span className="radio-button__custom"></span>
        {label}
      </label>
    </div>
  );
};

export default Radio;
