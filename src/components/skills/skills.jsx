import React from "react";

import clsx from "clsx";

import skillSet from "./skillSet";
import SkillCard from "./skillCard";

const Skills = () => {
  return (
    <div className="container mx-auto relative min-h-screen text-white">
      <div className="text-center mt-52">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className={clsx(
            "text-3xl lg:text-5xl font-extrabold",
            "mb-10",
            "underline underline-offset-4"
          )}
        >
          Skills
        </div>
      </div>
      <div className={clsx("max-w-xl", "mx-auto", "px-5")}>
        <div className={clsx("grid grid-cols-4 gap-2 md:gap-5 justify-center")}>
          {skillSet.map((skill, index) => (
            <SkillCard name={skill.name} image={skill.image} delay={skill.delay} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
