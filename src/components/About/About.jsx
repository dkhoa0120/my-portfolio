"use client";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Image } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);

  return (
    <div className="flex justify-center items-center max-md:flex-col h-screen -mt-12 gap-3 ">
      <div
        className="md:hidden max-md:mt-12 block relative w-44 h-44"
        data-aos="zoom-in"
      >
        <Image
          className="w-full h-full object-cover rounded-full max-md:-mt-16 border border-[#ec4d37]"
          src="/img/avatar/khoa.jpg"
          alt="Avatar"
        />
      </div>
      <div className="md:w-[35%] mx-4 text-left p-3 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
        <p className="font-black text-4xl max-lg:text-3xl flex gap-3">
          Hi, I Am <span className="text-[#ec4d37]"> Khoa</span> Le{" "}
          <span className="text-[#ec4d37]">👋</span>
        </p>
        <h2 className="font-black text-4xl max-lg:text-3xl  max-md:hidden">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Front-End React Developer").start();
            }}
          />
        </h2>
        <p className="intro">
          <span className="des">Hello, my name is Le Dong Khoa,</span> a recent
          fresher in front-end development. I am enthusiastic about designing
          UI-UX, proficient in managing front-end logic, and skilled in working
          with APIs. I am hoping for your guidance and support in my journey.{" "}
        </p>
        <div className="flex absolute gap-4 mt-4 max-md:static">
          <a href="cv.pdf" download="CV.pdf">
            <FaDownload className="text-[#EC4D37] text-[26px] cursor-pointer" />
          </a>
          <a href="https://github.com/dkhoa0120">
            <FaSquareGithub className="text-[#EC4D37] text-[26px] cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/khoa-le-b1a03b254/">
            <FaLinkedin className="text-[#EC4D37] text-[26px] cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="box" data-aos="zoom-in">
        <Image
          className="avatar"
          src="/img/avatar/khoa-nobg.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default About;
