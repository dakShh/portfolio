import clsx from "clsx";
import React, { useState } from "react";

const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div className={clsx("absolute", "left-[30px] top-[35px]")}>
      {!isOpen && (
        <div>
          <i
            onClick={() => toggleOpen()}
            className={clsx(
              "fixed",
              "text-white",
              "fa-solid fa-bars-staggered",
              "text-2xl",
              "cursor-pointer"
            )}
          ></i>
        </div>
      )}

      <div
        className={clsx(
          "pl-3 pr-4 py-8 ",
          "fixed left-0 top-0",
          "bg-black/75",
          "backdrop-blur-[4px]",
          "h-screen",
          "z-[999]",
          `${isOpen ? "opacity-[1]" : "opacity-[0]"}`,
          "transition duration-500",
          `${isOpen ? "translate-x-0" : "-translate-x-24"}`
        )}
      >
        <nav className={clsx("text-white ", "flex flex-col items-center ", "w-full h-full")}>
          <i
            onClick={() => toggleOpen()}
            className={clsx(
              "text-white",
              "mb-7",
              "fa-solid fa-xmark",
              "text-3xl",
              "cursor-pointer"
            )}
          ></i>

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
    </div>
  );
};

export default MobileSideBar;