import clsx from "clsx";
import React from "react";
import IconWrapper from "./icon-wrapper";

const Socials = () => {
  return (
    <div
      className={clsx(
        // "fixed",
        "absolute right-[30px] top-[35px] lg:right-[50px] lg:top-[50px]"
      )}
    >
      <div className={clsx("flex flex-col gap-y-5")}>
        <IconWrapper
          delay={200}
          icon="fa-regular fa-envelope"
          content={"daksh.dk207@gmail.com"}
          link={"mailto:daksh.dk207@gmail.com"}
        />
        <IconWrapper
          delay={300}
          icon="fa-brands fa-whatsapp"
          content={"+91 9769104428"}
          link={"https://api.whatsapp.com/send?phone=9769104428&text=Hello"}
        />
        <IconWrapper
          delay={400}
          icon="fa-brands fa-facebook-f"
          content={"https://www.facebook.com/daksh.khatri/"}
          link={"https://www.facebook.com/daksh.khatri/"}
        />
        <IconWrapper
          delay={500}
          icon="fa-brands fa-github"
          content={"https://github.com/dakShh"}
          link={"https://github.com/dakShh"}
        />
        <IconWrapper
          delay={600}
          icon="fa-brands fa-linkedin-in"
          content={"https://www.linkedin.com/in/daksh-khatri/"}
          link={"https://www.linkedin.com/in/daksh-khatri/"}
        />
      </div>
    </div>
  );
};

export default Socials;
