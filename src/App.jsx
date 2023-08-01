import { useEffect, useState } from "react";

// ** Components import
import Hero from "./components/hero";
import Summary from "./components/summary";
import NavBar from "./components/navBar";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Socials from "./components/social_media/socials";
import ParticleBackground from "./components/particleBackground";

// ** Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import MobileSideBar from "./components/mobileSideBar";

import clsx from "clsx";
import Resume from "./components/resume";

function App() {
  Aos.init({
    duration: 1000,
    offset: 0,
  });

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const [isInView, setIsInView] = useState("home");
  const [showResume, setShowResume] = useState(false);

  function toggleResume() {
    setShowResume((prevState) => !prevState);
  }

  function handleInView(state, inView) {
    if (state) {
      setIsInView(`${inView}`);
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden container mx-auto">
      <ParticleBackground />
      {!showResume && (
        <div>
          <div>
            {isMobile ? (
              <MobileSideBar isInView={isInView} toggleResume={() => toggleResume()} />
            ) : (
              <NavBar isInView={isInView} toggleResume={() => toggleResume()} />
            )}
          </div>

          <div className="lg:pl-[100px] xl:pl-[100px]">
            <Hero isInView={(state) => handleInView(state, "home")} />
            <Summary isInView={(state) => handleInView(state, "about")} />
            <Skills isInView={(state) => handleInView(state, "skills")} />
            <Projects isInView={(state) => handleInView(state, "projects")} />
          </div>
        </div>
      )}
      {showResume && <Resume toggleResume={() => toggleResume()} />}
    </div>
  );
}

export default App;
