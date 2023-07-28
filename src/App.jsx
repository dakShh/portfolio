// ** Components import
import Hero from "./components/hero";
import About from "./components/about";
import NavBar from "./components/navBar";
import Socials from "./components/social_media/socials";
import ParticleBackground from "./components/particleBackground";

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
      <About />
    </div>
  );
}

export default App;
