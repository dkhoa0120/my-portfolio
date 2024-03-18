"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaSquarePhone } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if any input field is empty
    const inputs = form.current.querySelectorAll("input");
    let allInputsFilled = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allInputsFilled = false;
        return;
      }
    });

    if (!allInputsFilled) {
      toast.error("Please fill in all fields before sending the email.");
      return;
    }

    emailjs
      .sendForm("service_8in43aq", "template_9ejw2fi", form.current, {
        publicKey: "_dUAMn_iwPtvIB1xa",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Reset the form
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <ToastContainer />
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
      <div className="h-screen w-[80%] flex max-lg:flex-col gap-10 relative">
        <div
          className="w-[50%] max-lg:w-full flex flex-col items-center"
          data-aos="fade-right"
        >
          <img src="/img/other/contact-img.png" alt="" />

          <img src="/img/other/curved-arrow.png" alt="" className="h-32 w-28" />
          <div className="w-[400px] flex items-center max-lg:flex-col">
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
          className="h-[90%] w-[50%] max-lg:h-[70%] flex items-center justify-center shadow-md relative bg-[#ec4d37] max-lg:w-full "
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
              <div className="h-full w-[50%] bg-[#ec4d37]  flex items-center justify-center">
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
              <form
                className="flex flex-col p-4 h-full items-center justify-start w-full gap-6"
                ref={form}
                onSubmit={sendEmail}
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="What is your beautiful name?"
                  className="border p-6 rounded-lg w-full bg-[--body_background] border-[--body_scroll] max-lg:p-3"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="What's your email address?"
                  className="border p-6 rounded-lg w-full bg-[--body_background] border-[--body_scroll] max-lg:p-3"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="What do you want to say?"
                  className="border p-6 rounded-lg w-full resize-none bg-[--body_background] border-[--body_scroll] max-lg:p-3"
                />
                <button
                  className="p-4 rounded-lg bg-[--body_color] text-[--body_background] max-lg:p-2"
                  type="submit"
                  value="Send"
                >
                  Send Mail
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[380px] w-full md:hidden"></div>
    </div>
  );
};

export default Contact;
