import clsx from "clsx";
import React from "react";

const IconWrapper = ({ children, icon }) => {
  return (
    <div
      className={clsx(
        "p-3",
        "rounded-full shadow-md relative w-[50px] h-[50px] shadow-black/50",
        "flex justify-center items-center",
        "backdrop-blur-sm",
        "bg-white/10"
      )}
    >
      <i className={clsx("absolute", "text-2xl font-base", "text-white", `${icon}`)}></i>
    </div>
  );
};

export default IconWrapper;
