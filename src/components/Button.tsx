import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  type?: HTMLButtonElement["type"];
  onClick?(event: MouseEvent): void;
  icon?: ReactNode;
  isDisabled?: boolean;
  children?: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = (props: ButtonProps) => {
  const {
    icon,
    className = "",
    variant = "primary",
    isDisabled,
    children,
    ...rest
  } = props;
  return (
    <button
      className={`button button-${variant} ${className}`}
      disabled={isDisabled}
      {...rest}
    >
      {!!children && <span className="button__label">{children}</span>}
      {!!icon && <span className="button__icon-wrapper">{icon}</span>}
    </button>
  );
};

export default Button;
