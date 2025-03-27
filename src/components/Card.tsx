import { MouseEventHandler, PropsWithChildren } from "react";

interface CardProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const { children, className = "", onClick } = props;

  return (
    <div className={`card ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
