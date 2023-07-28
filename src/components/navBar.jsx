import React from "react";

// ** Third party imports
import clsx from "clsx";

const NavBar = () => {
  return (
    <div className={clsx("px-8 py-14", "absolute", "bg-transparent", "h-screen")}>
      <nav className={clsx("text-white ", "flex flex-col items-center ", "w-full h-full")}>
        {/* <div className="flex flex-col text-center">
          <div className="font-bold text-3xl">Daksh</div>
        </div> */}

        <ul className={clsx("flex flex-col gap-y-8", "")} id="nav-ul">
          <li>
            <a
              className={clsx("text-black font-bold text-2xl", "rotate-180")}
              style={{ writingMode: "tb" }}
            >
              Home
            </a>
          </li>
          <li>
            <a className={clsx("", "rotate-180")} style={{ writingMode: "tb" }}>
              Project
            </a>
          </li>
          <li>
            <a className={clsx("", "rotate-180")} style={{ writingMode: "tb" }}>
              About
            </a>
          </li>
          <li>
            <a className={clsx("", "rotate-180")} style={{ writingMode: "tb" }}>
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-auto ">
          <div className="flex gap-x-2 items-center cursor-pointer ">
            <i className="fa-solid fa-file-arrow-down text-xl text-purple-300"></i>
            <span className="text-2xl">Resume</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
