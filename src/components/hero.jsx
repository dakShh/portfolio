import React, { useEffect } from "react";

// ** Third party imports
import clsx from "clsx";

import { useInView } from "react-intersection-observer";

const Hero = ({ isInView }) => {
  // px-[420px] pt-[230px]

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    isInView(inView);
  }, [inView]);

  return (
    <div id="hero" className={clsx("px-3 md:px-0", "container mx-auto", "z-50")}>
      <div className={clsx("flex justify-center items-center", "min-h-screen")}>
        <div className={clsx("md:text-center")}>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="800"
            className={clsx("relative", "font-thin", "text-2xl lg:text-4xl ", "text-white", "mb-2")}
          >
            DAKSH KHATRI
          </div>
          <div
            ref={ref}
            data-aos="zoom-in-up"
            data-aos-delay="950"
            className={clsx(
              "relative",
              "text-5xl lg:text-7xl font-extrabold",
              "text-white",
              "max-w-[300px] md:max-w-lg"
            )}
          >
            Full Stack Web Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
