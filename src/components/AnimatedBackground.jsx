// src/components/AnimatedBackground.jsx
import React, { useCallback, useState,useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";



const AnimatedBackground = () => {
  const [particlesColor, setParticlesColor] = useState("");
  useEffect(() =>{
          const getTheme = localStorage.getItem("theme");
          if(getTheme === "light"){
              setParticlesColor("#7F6CE0");  
          }
          else{
              setParticlesColor("#8B9099");
          }
      }, [])
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0 h-full w-full"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: "#7F6CE0" },
          links: {
            color: "#8B9099",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            outModes: { default: "bounce" },
          },
          number: { value: 60, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "polygon" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBackground;
