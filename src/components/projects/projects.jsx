import clsx from "clsx";
import React from "react";
import project_list from "./project_list";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div className={clsx("container mx-auto relative text-white min-h-screen", "mb-24")}>
      <div className="text-center mt-52">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className={clsx("text-5xl font-extrabold", "mb-10", "underline underline-offset-4")}
        >
          Projects
        </div>
      </div>

      <div className={clsx("max-w-5xl", "mx-auto")}>
        <div className={clsx("grid grid-cols-2 gap-16 justify-center")}>
          {project_list.map((project, index) => (
            <ProjectCard
              name={project.name}
              link={project.link}
              image={project.image}
              stack={project.stack}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;