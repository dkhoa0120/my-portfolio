"use client";
import React, { useEffect, useRef, useState } from "react";
import About from "@/components/About/About";
import Header from "@/components/Header";
import Journey from "@/components/Journey/Journey";
import ParticlesContainer from "@/components/ParticlesContainer";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import Project from "@/components/Project/Project";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isProjectSectionInView, setIsProjectSectionInView] = useState(false);
  const [isJourneyInView, setIsJourneySectionInView] = useState(false);
  const [isAboutSectionInView, setIsAboutSectionInView] = useState(false);
  const [isContactSectionInView, setIsContactSectionInView] = useState(false);

  const projectSectionRef = useRef(null);
  const journeySectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "journey") {
          setIsJourneySectionInView(entry.isIntersecting);
        } else if (entry.target.id === "project") {
          setIsProjectSectionInView(entry.isIntersecting);
        } else if (entry.target.id === "about") {
          setIsAboutSectionInView(entry.isIntersecting);
        } else if (entry.target.id === "contact") {
          setIsContactSectionInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (journeySectionRef.current) {
      observer.observe(journeySectionRef.current);
    }
    if (projectSectionRef.current) {
      observer.observe(projectSectionRef.current);
    }
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (projectSectionRef.current) {
        observer.unobserve(projectSectionRef.current);
      }
      if (journeySectionRef.current) {
        observer.unobserve(journeySectionRef.current);
      }
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
      }
    };
  }, []);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed h-14 w-full bottom-0 flex items-center dark:bg-[#111111] justify-between p-5 bg-[#eeeeee] z-50 m-auto md:flex-col md:top-20 md:w-[20px] md:h-72 md:right-5 md:rounded-3xl">
        <button onClick={() => scrollToRef(aboutSectionRef)}>
          {" "}
          <IoMdHome
            className={`cursor-pointer ${
              isAboutSectionInView ? "text-[#ec4d37] text-3xl" : "text-lg"
            }`}
          />
        </button>
        <button onClick={() => scrollToRef(journeySectionRef)}>
          {" "}
          <FaUser
            className={`cursor-pointer ${
              isJourneyInView ? "text-[#ec4d37] text-3xl" : "text-lg"
            }`}
          />
        </button>
        <button onClick={() => scrollToRef(projectSectionRef)}>
          {" "}
          <AiFillProject
            className={`cursor-pointer ${
              isProjectSectionInView ? "text-[#ec4d37] text-3xl" : "text-lg"
            }`}
          />
        </button>

        <IoIosMail className="cursor-pointer text-lg" />
      </div>
      <main className="min-h-screen relative ">
        <ParticlesContainer />
        <div
          className={`flex-col items-center justify-between flex sticky top-0 z-50 ${
            scrolled ? "bg-[--body_background] shadow-md" : ""
          }`}
        >
          <Header />
        </div>{" "}
        <section id="about" ref={aboutSectionRef}>
          <About />
        </section>
        <section id="journey" ref={journeySectionRef} className="mt-20">
          <Journey />
        </section>
        <section id="project" ref={projectSectionRef}>
          <Project />
        </section>
      </main>
    </>
  );
}
