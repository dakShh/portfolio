import clsx from "clsx";
import React from "react";

const ProjectCard = ({ name, link, image, stack, delay }) => {
  return (
    <a data-aos="zoom-in-up" data-aos-delay={delay ?? "300"} target="_blank" href={`${link}`}>
      <div
        className={clsx(
          "border-[1px] border-white overflow-hidden rounded-lg backdrop-blur-[2px] bg-white/10",
          "cursor-pointer hover:border-white/40 hover:bg-white/20"
        )}
      >
        <div className="h-[250px] md:h-[210px] lg:h-[200px] xl:h-[300px] mb-2 overflow-hidden p-3 xl:p-5">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className={clsx("p-2")}>
          <div className={clsx("text-xl xl:text-2xl font-bold", "text-center")}>{name}</div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
