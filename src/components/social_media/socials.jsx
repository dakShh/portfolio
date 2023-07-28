import clsx from "clsx";
import React from "react";
import IconWrapper from "./icon-wrapper";

const Socials = () => {
  return (
    <div className="absolute right-[50px] top-[50px]">
      <div className={clsx("flex flex-col gap-y-5")}>
        <IconWrapper icon="fa-regular fa-envelope" />
        <IconWrapper icon="fa-brands fa-whatsapp" />
        <IconWrapper icon="fa-brands fa-facebook-f" />
        <IconWrapper icon="fa-brands fa-github" />
        <IconWrapper icon="fa-brands fa-linkedin-in" />
      </div>
    </div>
  );
};

export default Socials;
