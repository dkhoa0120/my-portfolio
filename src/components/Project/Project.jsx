import React from "react";
import "./styles.css";
import { FaGithub } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "3K Manga",
    details:
      "A social media manga platform.  Allow user to find, filter and follow manga, follow other users. Read manga, browsing the newsfeed, interact with other users. Join a group and upload a manga in several language.",
    img: "/img/show/final/fp1.png",
    code: "https://github.com/dkhoa0120/FinalProject",
    mob: "/img/show/final/finalM.png",
    live: "https://bakamanga.vercel.app",
  },
  {
    id: 2,
    name: "3K Car Service",
    details:
      "A website allow user to post a car for rent or sell. User can browse to choose their suitable car. This website will connect between car's owner and customer.",
    img: "/img/show/car/car.png",
    mob: "/img/show/car/carM.png",
    live: "https://threekcar-service.onrender.com",
    code: "https://github.com/dkhoa0120/3K-CarService",
  },
  {
    id: 3,
    name: "3K Shoes",
    details:
      "A single page showing cutting-edge commercial shopping website, where every click brings closer to a seamless and delightful shopping journey, prioritizing the UI-UX experience.",
    img: "/img/show/shoes/shoes1.png",
    mob: "/img/show/shoes/shoesM.png",
    live: "https://3k-shoes.vercel.app",
    code: "https://github.com/dkhoa0120/3kShoes",
  },
];

const Project = () => {
  return (
    <div className="w-full min-h-screen">
      {" "}
      <div
        className="flex flex-col justify-center items-center"
        data-aos="fade-down"
      >
        <span className="sm:text-[16px] text-[10px] text-secondary uppercase tracking-wider text-center text-gray-500">
          Get to know more
        </span>
        <span className="relative font-black md:text-[50px] sm:text-[40px] text-[30px] text-center before:absolute before:content-[''] max-sm:before:h-8 max-sm:before:w-8 before:w-16 before:h-16 before:-right-3 before:bottom-0 before:bg-[--body_second_theme] before:-z-10">
          My Project.
        </span>
      </div>
      <div className="project">
        {data.map((i) => (
          <div className="project-container" key={i.id} data-aos="flip-left">
            <div className="project-img">
              <img className="pc-img" src={i.img} alt="" />
              <div className="image-container">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    objectFit: "cover",
                    borderRadius: "9px",
                  }}
                  src={i.mob}
                  alt=""
                />
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="details-info">
              <div className="info">
                <h2
                  style={{
                    fontWeight: "900",
                    fontSize: "30px",
                    textAlign: "center",
                  }}
                >
                  Project: <span>{i.name}</span>
                </h2>
                <p style={{ textAlign: "center", color: "gray" }}>
                  {i.details}
                </p>
                <div className="to-ref">
                  <a href={i.code} className="flex items-center gap-2">
                    <FaGithub /> Code
                  </a>
                  &nbsp; &nbsp; &nbsp;
                  <a href={i.live} className="flex items-center gap-2">
                    <FaShareSquare /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
