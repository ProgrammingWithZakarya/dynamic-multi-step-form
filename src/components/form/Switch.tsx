import { ChangeEventHandler } from "react";

export interface SwitchProps {
  name: string;
  className?: string;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isRequired?: boolean;
  errorMessage?: string;
}

const Switch = (props: SwitchProps) => {
  const {
    name,
    className = "",
    defaultChecked,
    isRequired,
    errorMessage,
  } = props;

  return (
    <div>
      <label className={`switch ${className}`} htmlFor={name}>
        <input
          id={name}
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
          required={isRequired}
        />
        <span className="slider"></span>
      </label>

      {!!errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default Switch;
