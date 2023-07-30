import clsx from "clsx";
import React from "react";
import skillSet from "./skillSet";

const SkillCard = ({ name, percent, image, delay }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={delay ?? "200"}
      className={clsx(
        "aspect-square",
        "flex flex-col justify-center items-center",
        // "border-2 border-white",
        "backdrop-blur-sm",
        "rounded-xl shadow-md relative shadow-black/25",
        "bg-white rounded-xl p-2 lg:p-4",
        "overflow-hidden"
      )}
    >
      <div
        className={clsx(
          "text-black text-[10px] lg:text-xs tracking-wider font-bold",
          "whitespace-nowrap"
        )}
      >
        {name}
      </div>

      <div>
        <img
          src={image}
          className={clsx("aspect-square object-contain", "w-[45px] md:w-[70px] lg:w-full")}
        />
      </div>
    </div>
  );
};

export default SkillCard;
