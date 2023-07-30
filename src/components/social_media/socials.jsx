import clsx from "clsx";
import React from "react";
import IconWrapper from "./icon-wrapper";

const Socials = () => {
  return (
    <div className={clsx("fixed", "right-[30px] top-[35px] lg:right-[50px] lg:top-[50px]")}>
      <div className={clsx("flex flex-col gap-y-5")}>
        <IconWrapper delay={200} icon="fa-regular fa-envelope" />
        <IconWrapper delay={300} icon="fa-brands fa-whatsapp" />
        <IconWrapper delay={400} icon="fa-brands fa-facebook-f" />
        <IconWrapper delay={500} icon="fa-brands fa-github" />
        <IconWrapper delay={600} icon="fa-brands fa-linkedin-in" />
      </div>
    </div>
  );
};

export default Socials;
