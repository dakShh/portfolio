import React from "react";

import ResumeSrc from "../assets/resume/resume.png";
import clsx from "clsx";

const Resume = ({ toggleResume }) => {
  return (
    <div className="z-50">
      <div className={clsx("max-w-5xl", "py-40 px-6 ", "mx-auto")}>
        <div className="w-full flex justify-center mb-8">
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1200"
            className="relative z-50 mx-auto"
            onClick={() => toggleResume()}
          >
            Back
          </button>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1500"
          className=""
          src={ResumeSrc}
        ></img>
      </div>
    </div>
  );
};

export default Resume;
