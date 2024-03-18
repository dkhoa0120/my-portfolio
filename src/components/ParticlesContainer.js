"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="w-full h-[98%] absolute translate-z-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          mode: {
            push: {
              quantity: 40, // Reduced particle quantity for better performance
            },
            repulse: {
              distance: 120, // Reduced repulse distance for better performance
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ec4d37",
          },
          links: {
            color: "#e68e2e",
            distance: 120, // Reduced link distance for better performance
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true, // Corrected enable value to boolean
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 700,
            },
            value: 40, // Reduced particle value for better performance
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
