import Hero from "./components/hero";
import NavBar from "./components/navBar";
import ParticleBackground from "./components/particleBackground";
import Socials from "./components/social_media/socials";

function App() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <NavBar />
      <Socials />
      <Hero />
    </div>
  );
}

export default App;
