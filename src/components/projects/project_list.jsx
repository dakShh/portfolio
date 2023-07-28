import juicebox from "../../assets/projects/juicebox.png";
import landing from "../../assets/projects/landing.png";
import yaamidesign from "../../assets/projects/yaamidesign.png";

// stack images
import react from "../../assets/skills/react.png";
import firebase from "../../assets/skills/firebase.png";

const project_list = [
  {
    name: "JuiceBox Project",
    link: "https://juicebox-beta.vercel.app/",
    image: juicebox,
    desc: "Production ready e-commerce website build using ReactJs to create frontend and used firebase as a backend service.",
    stack: [{ image: react }, { image: firebase }],
    delay: "400",
  },
  {
    name: "Yaami Designs",
    link: "https://yaami-designs.vercel.app/",
    image: yaamidesign,
    delay: "500",
  },
  {
    name: "Platform Landing Page",
    link: "https://delivery-platform-landing-page.vercel.app/",
    image: landing,
    delay: "600",
  },
];

export default project_list;
