import { MouseEvent, PropsWithChildren } from "react";

interface ButtonProps {
  className?: string;
  type?: HTMLButtonElement["type"];
  onClick?(event: MouseEvent): void;
  isDisabled?: boolean;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { className = "", isDisabled, ...rest } = props;
  return (
    <button className={`button ${className}`} disabled={isDisabled} {...rest} />
  );
};

export default Button;
