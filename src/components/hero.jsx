import React from "react";

// ** Third party imports
import clsx from "clsx";

const Hero = () => {
  // px-[420px] pt-[230px]

  return (
    <div className={clsx("", "container mx-auto", "z-50")}>
      <div className={clsx("flex justify-center items-center", "min-h-screen")}>
        <div
          className={clsx(
            "text-center"
            // "mt-[-100px]",
            // "bg-white/5",
            // "border border-white/5 rounded-xl",
            // "p-20",
            // "backdrop-blur-[3px]"
          )}
        >
          <div
            data-aos="zoom-in-up"
            data-aos-delay="800"
            className={clsx("relative", "font-thin", "text-4xl ", "text-white", "mb-2")}
          >
            DAKSH KHATRI
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="950"
            className={clsx("relative", "text-7xl font-extrabold", "text-white", "max-w-lg")}
          >
            Full Stack Web Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
