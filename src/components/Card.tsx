import { FC } from "react";
import clsx from "clsx";

interface CardProps {
  children: any;
  className: any;
}

const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
