import React, { useEffect } from "react";

import clsx from "clsx";

import skillSet from "./skillSet";
import SkillCard from "./skillCard";

import { useInView } from "react-intersection-observer";

const Skills = ({ isInView }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    isInView(inView);
  }, [inView]);
  return (
    <div className="container mx-auto relative  text-white">
      <div id="skills" className="text-center mt-24 md:mt-52 pt-20">
        <div
          ref={ref}
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
