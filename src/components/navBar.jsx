import React from "react";

// ** Third party imports
import clsx from "clsx";

const NavBar = () => {
  return (
    <div className={clsx("px-8 py-14", "fixed", "bg-black/40", "backdrop-blur-[2px]", "h-screen")}>
      <nav className={clsx("text-white ", "flex flex-col items-center ", "w-full h-full")}>
        {/* <div className="flex flex-col text-center">
          <div className="font-bold text-3xl">Daksh</div>
        </div> */}

        <ul className={clsx("flex flex-col gap-y-8", "")} id="nav-ul">
          <li data-aos="fade-right" data-aos-delay="200">
            <a
              className={clsx(" font-bold text-2xl text-white", "rotate-180")}
              style={{ writingMode: "tb" }}
            >
              Home
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="400">
            <a className={clsx("text-white/25", "rotate-180")} style={{ writingMode: "tb" }}>
              Project
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="500">
            <a className={clsx("text-white/25", "rotate-180")} style={{ writingMode: "tb" }}>
              About
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="600">
            <a className={clsx("text-white/25", "rotate-180")} style={{ writingMode: "tb" }}>
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-auto cursor-pointer ">
          <div className="flex gap-x-2 items-center">
            <i
              data-aos="fade-up"
              data-aos-delay="600"
              className="fa-solid fa-file-arrow-down text-xl"
            ></i>
            <span data-aos="fade-up" data-aos-delay="600" className="text-2xl">
              Resume
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
