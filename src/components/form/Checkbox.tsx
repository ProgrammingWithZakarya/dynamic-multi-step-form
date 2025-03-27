import { ChangeEventHandler } from "react";

export interface CheckboxProps {
  name: string;
  label: string;
  id: string;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isRequired?: boolean;
  isDisabled?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const { id, name, label, defaultChecked, onChange, isRequired, isDisabled } =
    props;

  return (
    <div className="checkbox-wrapper">
      <input
        className="inp-cbx"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        type="checkbox"
        onChange={onChange}
        required={isRequired}
        disabled={isDisabled}
      />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="12px" height="10px"></svg>
        </span>
        <span>{label}</span>
      </label>
      <svg className="inline-svg">
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default Checkbox;
