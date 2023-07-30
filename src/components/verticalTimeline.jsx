import React from "react";

// ** Vertical timeline imports
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const VerticalTimelineComponent = () => {
  const WorkIcon = () => {
    return <i className="fa-solid fa-laptop-code text-3xl"></i>;
  };

  const SchoolIcon = () => {
    return <i className="fa-solid fa-graduation-cap text-3xl"></i>;
  };

  const StarIcon = () => {
    return <i className="fa-solid fa-briefcase "></i>;
  };
  return (
    <VerticalTimeline className="border-0  border-none">
      <VerticalTimelineElement
        className=" pr-10 border-0  border-none shadow-inherit bg-transparent "
        style={{ background: "transparent", border: "none", boxShadow: "inherit" }}
        contentStyle={{
          background: "rgb(33, 150, 243, 0)",
          padding: "0",
          color: "#fff",
          boxShadow: "inherit",
        }}
        contentArrowStyle={{ borderRight: "10px solid  rgb(255, 255, 255)" }}
        date="Sept 2023 - Aug 2024 "
        dateClassName="ml-10 text-5xl"
        iconStyle={{
          background: "rgb(255, 255, 255)",
          color: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<SchoolIcon />}
      >
        <div className="border-2 border-white px-8 py-10 rounded-xl w-[300px] xl:ml-auto">
          <div className="vertical-timeline-element-title mb-5 font-bold text-xl">
            Centennial College
          </div>
          <h3 className="vertical-timeline-element-title text-white/60">
            IOT (Internet of Things)
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white/60">Toronto, ON</h4>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="border-0  border-none shadow-inherit bg-transparent "
        style={{ background: "transparent", border: "none", boxShadow: "inherit" }}
        contentStyle={{
          background: "rgb(33, 150, 243, 0)",
          padding: "0",
          color: "#fff",
          boxShadow: "inherit",
        }}
        contentArrowStyle={{ borderRight: "10px solid  rgb(255, 255, 255)" }}
        date="April 2021 - July 2023"
        dateClassName="text-5xl"
        iconStyle={{
          background: "rgb(255, 255, 255,20)",
          color: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<WorkIcon />}
      >
        <div className="border-2 border-white px-8 py-10 rounded-xl w-[300px] mr-auto">
          <div className="vertical-timeline-element-title mb-5 font-bold text-xl">
            Coense Solutions Pvt. Ltd.
          </div>
          <h3 className="vertical-timeline-element-title text-white/60">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle text-white/60">
            Mumbai, Maharashtra, India
          </h4>
          {/* <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p> */}
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className=" pr-10 border-0  border-none shadow-inherit bg-transparent "
        style={{ background: "transparent", border: "none", boxShadow: "inherit" }}
        contentStyle={{
          background: "rgb(33, 150, 243, 0)",
          padding: "0",
          color: "#fff",
          boxShadow: "inherit",
        }}
        contentArrowStyle={{ borderRight: "10px solid  rgb(255, 255, 255)" }}
        date="April 2021 - July 2023"
        dateClassName="ml-10 text-5xl"
        iconStyle={{
          background: "rgb(255, 255, 255)",
          color: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<SchoolIcon />}
      >
        <div className="border-2 border-white px-8 py-10 rounded-xl w-[300px] xl:ml-auto">
          <div className="vertical-timeline-element-title mb-5 font-bold text-xl">
            S.K. Somaiya College
          </div>
          <h3 className="vertical-timeline-element-title text-white/60">
            Bachelor of Science, Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white/60">
            Mumbai, Maharashtra, India
          </h4>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
