import React from "react";

// ** Third party imports
import clsx from "clsx";

const NavBar = () => {
  return (
    <div
      className={clsx(
        "px-4 py-14 lg:px-8 lg:py-14",
        "fixed left-0",
        "bg-black/60",
        "backdrop-blur-[3px]",
        "h-screen",
        "z-[999]",
        "hidden md:block"
      )}
    >
      <nav className={clsx("text-white ", "flex flex-col items-center ", "w-full h-full")}>
        {/* <div className="flex flex-col text-center">
          <div className="font-bold text-3xl">Daksh</div>
        </div> */}

        <ul className={clsx("flex flex-col gap-y-8", "")} id="nav-ul">
          <li data-aos="fade-right" data-aos-delay="200">
            <a
              className={clsx("font-bold text-lg lg:text-2xl text-white", "rotate-180")}
              style={{ writingMode: "tb" }}
            >
              Home
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="400">
            <a
              className={clsx("text-lg", "text-white/25", "rotate-180")}
              style={{ writingMode: "tb" }}
            >
              Project
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="500">
            <a
              className={clsx("text-lg", "text-white/25", "rotate-180")}
              style={{ writingMode: "tb" }}
            >
              About
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="600">
            <a
              className={clsx("text-lg", "text-white/25", "rotate-180")}
              style={{ writingMode: "tb" }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-auto cursor-pointer ">
          <div className="flex flex-col lg:flex-row gap-x-2 items-center">
            <i
              data-aos="fade-up"
              data-aos-delay="600"
              className="fa-solid fa-file-arrow-down text-xl"
            ></i>
            <span data-aos="fade-up" data-aos-delay="600" className="text-lg lg:text-2xl">
              Resume
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
