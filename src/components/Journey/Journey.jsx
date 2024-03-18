import React from "react";
import "./styles.css";

import "aos/dist/aos.css";

const skills = [
  {
    id: 1,
    img: "/img/icons/html-5.png",
  },
  {
    id: 2,
    img: "/img/icons/css.png",
  },
  {
    id: 3,
    img: "/img/icons/js.png",
  },
  {
    id: 4,
    img: "/img/icons/typescript.png",
  },
  {
    id: 5,
    img: "/img/icons/react.png",
  },
  {
    id: 6,
    img: "/img/icons/tw.png",
  },
  {
    id: 7,
    img: "/img/icons/sass.png",
  },
  {
    id: 8,
    img: "/img/icons/nextjs.png",
  },
];

function Journey() {
  return (
    <div className="w-full min-h-screen ">
      <div
        className="flex flex-col justify-center items-center"
        data-aos="fade-down"
      >
        <span className="sm:text-[16px] text-[10px] text-secondary uppercase tracking-wider text-center text-gray-500">
          What I have done so far
        </span>
        <span className="relative font-black md:text-[50px] sm:text-[40px] text-[30px] text-center before:absolute before:content-[''] max-sm:before:h-8 max-sm:before:w-8 before:w-16 before:h-16 before:-right-3 before:bottom-0 before:bg-[--body_second_theme] before:-z-10">
          My Journey.
        </span>
      </div>
      <div className="timeline">
        <div className="timeline-container left-timeline" data-aos="fade-right">
          <div className="time-left">September 2020</div>
          <div className="circle left"></div>
          <div className="text-box">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              UNIVERSITY OF GREENWICH
            </p>
            <p
              style={{
                fontFamily: "sans-serif",
                color: "gray",
                fontSize: "12px",
              }}
            >
              Summit - English Program
            </p>
            <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
              {" "}
              &#x25CF; <p>In the first year, I focus on studying English.</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              &#x25CF;{" "}
              <p>
                Improve my soft skills by participate soft skill classes and
                workshops, learn how to work in group and make a presentation.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-container right-timeline" data-aos="fade-left">
          <div className="time-right">May 2021</div>
          <div className="circle right"></div>
          <div className="text-box">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              UNIVERSITY OF GREENWICH
            </p>
            <p
              style={{
                fontFamily: "sans-serif",
                color: "gray",
                fontSize: "12px",
              }}
            >
              Bachelor of Science – Computing
            </p>
            <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
              {" "}
              &#x25CF;{" "}
              <p>
                Learning computing science, emphasizes problem-solving skills,
                critical thinking, and logical reasoning.
              </p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              &#x25CF;{" "}
              <p>
                Discovered a passion for crafting engaging and user-friendly web
                interfaces while ensuring that the underlying logic works
                perfectly.
              </p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              &#x25CF;{" "}
              <p>
                Have been awarded the most impressive web project in November
                2023 at the university Final Project Contest.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-container left-timeline" data-aos="fade-right">
          <div className="time-left">February 2024</div>
          <div className="circle left"></div>
          <div className="text-box">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              PATECAN SOFTWARE
            </p>
            <p
              style={{
                fontFamily: "sans-serif",
                color: "gray",
                fontSize: "12px",
              }}
            >
              Intern - Front End Developer
            </p>
            <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
              {" "}
              &#x25CF;{" "}
              <p>
                Developed user interface (UI) with a focus on responsive
                scalability, integrated APIs and wrote logic code.
              </p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              &#x25CF;{" "}
              <p>
                Worked within a Scrum/Agile SDLC, collaborating with designers
                and the back-end team to ensure customer requirements were met.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="experience"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        <div className="ex-text">
          Experienced With{" "}
          <div
            style={{ width: "2px", height: "16px", backgroundColor: "black" }}
          ></div>
        </div>
        <div className="skills">
          {skills.map((item) => (
            <div className="icon" key={item.id}>
              <img className="language" src={item.img} alt="js" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journey;
