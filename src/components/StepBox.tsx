import { MouseEventHandler, ReactNode } from "react";

interface StepBoxProps {
  icon?: ReactNode;
  label: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StepBox = (props: StepBoxProps) => {
  const { icon, label, onClick, className = "" } = props;

  return (
    <button className={`step-box ${className}`} type="button" onClick={onClick}>
      <div>
        {!!icon && <span className="step-box__icon">{icon}</span>}
        <span className="step-box__label">{label}</span>
      </div>
    </button>
  );
};

export default StepBox;
