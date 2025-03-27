import { PropsWithChildren } from "react";

interface CenterProps {
  asCard?: boolean;
  className?: string;
  gap?: string | number;
}

const Center = (props: PropsWithChildren<CenterProps>) => {
  const { asCard, className = "", gap, children } = props;

  return (
    <div
      className={`center ${asCard ? "card" : ""} ${className}`}
      style={{ gap }}
    >
      {children}
    </div>
  );
};

export default Center;
