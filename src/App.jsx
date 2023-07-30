import { useEffect, useState } from "react";

// ** Components import
import Hero from "./components/hero";
import About from "./components/about";
import NavBar from "./components/navBar";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Socials from "./components/social_media/socials";
import ParticleBackground from "./components/particleBackground";

// ** Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import MobileSideBar from "./components/mobileSideBar";

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
  return (
    <div className="min-h-screen relative overflow-hidden container mx-auto">
      <ParticleBackground />
      {isMobile ? <MobileSideBar /> : <NavBar />}

      <Socials />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
