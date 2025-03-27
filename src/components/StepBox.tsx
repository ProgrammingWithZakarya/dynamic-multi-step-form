import { MouseEventHandler, PropsWithChildren } from "react";

interface StepBoxProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const StepBox = (props: PropsWithChildren<StepBoxProps>) => {
  const { className = "", onClick, children } = props;

  return (
    <div className={`step-box center ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default StepBox;
