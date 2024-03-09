"use client";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Play } from "next/font/google";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
const mainFont = Play({
  subsets: ["latin"],
  weight: "700",
});
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_doe3x9g",
        "template_wxhvxyk",
        form.current,
        "0OAz84xqssxDSzV8U"
      )
      .then(
        (result) => {
          //message has been sent
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: `#100028`,
            title: `Thanks!`,
            text: `Your Message has been sent`,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" bg-bgPrimary py-12" id="Contect">
      <div className="flex flex-wrap gap-10  container ">
        <div className="w-96 flex-col gap-12 flex">
          <div className="relative before:absolute before:bg-border before:w-3/12 before:h-1 before:-bottom-2 before:top-auto ">
            <h2 className={`${mainFont.className} text-4xl `}>GET IN TOUCH</h2>
          </div>

          <p className={` text-txtSecondary`}>
            Don't be shy to contact me. I am always available to discuss new
            projects and creative ideas to be part of your vision
          </p>
        </div>
        <div className="w-96 flex-1 flex flex-wrap gap-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 w-full"
          >
            <div className="flex flex-col w-full">
              <label htmlFor="name">{"YourName"}</label>
              <input
                name="from_name"
                className="w-full border p-3 bg-txtPrimary/0"
                type="text"
                placeholder={"YourName"}
                id="name"
                required
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">{"YourEmail"}</label>
              <input
                className="w-full border p-3 bg-txtPrimary/0"
                type="email"
                placeholder={"YourEmail"}
                id="email"
                name="from_email"
                required
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="Subject">{"Subject"}</label>
              <input
                className="w-full border p-3 bg-txtPrimary/0"
                type="text"
                placeholder={"Subject"}
                id="Subject"
                name="subject"
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="msg">{"YourMessage"}</label>
              <textarea
                className="w-full border p-3 bg-txtPrimary/0"
                placeholder={"YourMessage"}
                id="msg"
                name="message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="group relative inline-block focus:outline-none focus:ring"
                href="#"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-bgPrimary transition-transform group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-border"></span>
                <span className="relative text-txtPrimary inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  Send Message &nbsp; &nbsp;
                  <i>
                    <FontAwesomeIcon icon={faComment} />
                  </i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
