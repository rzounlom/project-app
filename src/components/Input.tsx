import { FC } from "react";
import clsx from "clsx";

interface InputProps {
  children?: any;
  className?: any;
}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;
