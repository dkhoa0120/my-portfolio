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
        fps_limit: 60, // Reduced FPS limit for smoother performance
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true, // Disabled hover interaction for better performance
              mode: "repulse",
            },
            resize: true,
          },
          mode: {
            push: {
              quantity: 30, // Further reduced particle quantity for better performance
            },
            repulse: {
              distance: 100, // Further reduced repulse distance for better performance
              duration: 0.2, // Reduced repulse duration for smoother interaction
            },
          },
        },
        particles: {
          color: {
            value: "#ec4d37",
          },
          links: {
            color: "#e68e2e",
            distance: 100, // Further reduced link distance for better performance
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
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
              area: 500,
            },
            value: 20, // Further reduced particle value for better performance
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 }, // Reduced maximum particle size for better performance
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
