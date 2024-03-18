"use client";
import React, { useState } from "react";
import { FaSquarePhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center items-center mb-24"
        data-aos="fade-down"
      >
        <span className="sm:text-[16px] text-[10px] text-secondary uppercase tracking-wider text-center text-gray-500">
          Connect with me
        </span>
        <span className="relative font-black md:text-[50px] sm:text-[40px] text-[30px] text-center before:absolute before:content-[''] max-sm:before:h-8 max-sm:before:w-8 before:w-16 before:h-16 before:-right-3 before:bottom-0 before:bg-[--body_second_theme] before:-z-10">
          Get In Touch.
        </span>
      </div>
      <div className="h-screen w-[80%] flex ">
        <div
          className="w-[50%] flex flex-col items-center"
          data-aos="fade-right"
        >
          <img src="/img/other/contact-img.png" alt="" />

          <img src="/img/other/curved-arrow.png" alt="" className="h-32 w-28" />
          <div className="w-[400px] flex items-center">
            <div className="p-3 flex flex-col w-[50%] gap-2">
              <span className="text-gray-500 text-[12px] font-bold">
                Does not send emails
              </span>
              <span className="font-bold">Call me by my phone number</span>
            </div>
            <div className="w-[50%] flex border-[--body_color] border-[3px] h-14 relative">
              <FaSquarePhone className="w-14 h-full" />
              <span className="font-bold">+84 70 328 7757</span>
            </div>
          </div>
        </div>
        <div
          className="h-[90%] w-[50%] flex items-center justify-center shadow-md relative ml-6 bg-[#ec4d37] "
          data-aos="fade-left"
          style={{ borderRadius: "12px" }}
        >
          <div className="h-[96%] w-[96%] flex flex-col ">
            <div className="w-full flex h-[20%] justify-start">
              <div
                style={{
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
                className="h-full w-[50%] bg-[--body_background] flex items-center justify-center"
              >
                <span className="relative font-black md:text-[45px] sm:text-[35px] text-[25px] text-center ">
                  Contact
                </span>
              </div>
              <div className="h-full w-[50%] bg-[#ec4d37] flex items-center justify-center">
                <span className="relative font-black md:text-[45px] sm:text-[35px] text-[25px] text-center flex text-[--body_background]">
                  Me 👇
                </span>
              </div>
            </div>
            <div
              className="w-full h-[80%] bg-[--body_background]"
              style={{
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            >
              <form className="flex flex-col p-4 items-center justify-start w-full gap-6">
                <input
                  type="text"
                  placeholder="What is your beautiful name?"
                  className="border p-6 rounded-lg w-full bg-[--body_background] border-[--body_scroll]"
                />
                <input
                  type="email"
                  placeholder="What's your email address?"
                  className="border p-6 rounded-lg w-full bg-[--body_background] border-[--body_scroll]"
                />
                <textarea
                  type="text"
                  rows="8"
                  placeholder="What do you want to say?"
                  className="border p-6 rounded-lg w-full resize-none bg-[--body_background] border-[--body_scroll]"
                />
                <button className="p-4 rounded-lg bg-[--body_color] text-[--body_background]">
                  Send Mail
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
