import { MouseEventHandler, PropsWithChildren } from "react";

interface ContainerProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children, className = "", onClick } = props;

  return (
    <div className={`container ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;
