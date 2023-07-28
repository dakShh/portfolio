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
        "bg-white rounded-xl p-4",
        "text-xl"
      )}
    >
      <div className="text-black text-xs tracking-wider font-bold">{name}</div>

      <div>
        <img src={image} className="aspect-square object-contain" />
      </div>
    </div>
  );
};

export default SkillCard;
