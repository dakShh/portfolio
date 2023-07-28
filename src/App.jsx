// ** Components import
import { useEffect } from "react";
import Hero from "./components/hero";
import NavBar from "./components/navBar";
import ParticleBackground from "./components/particleBackground";
import Socials from "./components/social_media/socials";

// ** Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  return (
    <div className="min-h-screen relative overflow-hidden container mx-auto">
      <ParticleBackground />
      <NavBar />
      <Socials />
      <Hero />
    </div>
  );
}

export default App;
