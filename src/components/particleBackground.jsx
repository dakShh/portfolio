import React, { useCallback } from "react";
import Particles from "react-particles";
import particle_config from "../config/particle_config";
import { loadSlim } from "tsparticles-slim";

// ** Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

export default function ParticleBackground() {
  Aos.init({
    duration: 1000,
    offset: 0,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particle_config}
    ></Particles>
  );
}
