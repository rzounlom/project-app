import { FC } from "react";
import clsx from "clsx";

interface GlassPaneProps {
  children: any;
  className: any;
}

const GlassPane: FC<GlassPaneProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
