import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  type?: HTMLButtonElement["type"];
  onClick?(event: MouseEvent): void;
  icon?: ReactNode;
  isDisabled?: boolean;
  label?: string;
  variant?: "primary" | "secondary";
}

const Button = (props: ButtonProps) => {
  const {
    label,
    icon,
    className = "",
    variant = "primary",
    isDisabled,
    ...rest
  } = props;
  return (
    <button
      className={`button button-${variant} ${className}`}
      disabled={isDisabled}
      {...rest}
    >
      {!!label && <span className="button__label">{label}</span>}
      {!!icon && <span className="button__icon-wrapper">{icon}</span>}
    </button>
  );
};

export default Button;
