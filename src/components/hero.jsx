import React from "react";

// **
import clsx from "clsx";

const Hero = () => {
  // px-[420px] pt-[230px]
  return (
    <div className={clsx("", "container mx-auto", "z-50")}>
      <div className={clsx("flex justify-center items-center", "min-h-screen")}>
        <div
          className={clsx(
            "text-center",
            "mt-[-100px]",
            "border border-white/10 rounded-xl",
            "p-10",
            "backdrop-blur-sm"
          )}
        >
          <div className={clsx("relative", "font-light", "text-5xl ", "text-white", "mb-2")}>
            Daksh Khatri
          </div>
          <div className={clsx("relative", "text-7xl font-extrabold", "text-white", "max-w-lg")}>
            Full Stack Web Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
