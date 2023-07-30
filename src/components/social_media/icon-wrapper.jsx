import clsx from "clsx";
import React from "react";

const IconWrapper = ({ children, icon, delay }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={delay ?? "200"}
      className={clsx(
        "p-3",
        "w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]",
        "rounded-full shadow-md relative  shadow-black/50",
        "flex justify-center items-center",
        "backdrop-blur-sm",
        "bg-white/10"
      )}
    >
      <i className={clsx("absolute", "text-xl lg:text-2xl font-base", "text-white", `${icon}`)}></i>
    </div>
  );
};

export default IconWrapper;
