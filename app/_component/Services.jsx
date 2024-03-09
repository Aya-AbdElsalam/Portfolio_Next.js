import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { Josefin_Sans, Play } from "next/font/google";
import React from "react";
const mainFont = Play({
  subsets: ["latin"],
  weight: "700",
});
const TypographyFont = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function Services() {
  return (
    <div className=" bg-bgPrimary py-12" id="About">
      <div className="flex flex-wrap gap-10  container ">
        <div className="w-96 flex-col gap-12 flex">
          <div className="relative before:absolute before:bg-border before:w-3/12 before:h-1 before:-bottom-2 before:top-auto ">
            <h1 className={`${mainFont.className} text-base`}>MY SERVICES</h1>
            <h2 className={`${mainFont.className} text-4xl `}>WHAT I DO?</h2>
          </div>

          <p className={` ${TypographyFont.className} text-txtSecondary`}>
            If you appoint me as a front-end developer to bring your idea to
            life, you will get a perfect website that achieves your goals as
            soon as the project is completed.
          </p>
        </div>
        <div className="w-96 flex-1 flex flex-wrap gap-8">
          <div className="min-w-56 flex-1 flex flex-col gap-5">
            <div className=" before:transition before:border-border relative w-fit before:border before:hover:rotate-45 before:w-full before:h-full before:absolute">
              <FontAwesomeIcon
                icon={faLaptopCode}
                width={80}
                height={80}
                className="p-4 w-16 h-16"
              />
            </div>
            <h3 className={`${mainFont.className} text-2xl`}>
              Web Development
            </h3>
            <p className={` ${TypographyFont.className} text-txtSecondary`}>
              Developing user-friendly and responsive websites using HTML, CSS,
              and JavaScript.
            </p>
          </div>
          <div className="min-w-56 flex-1 flex flex-col gap-5">
            <div className=" before:transition before:border-border relative w-fit before:border before:hover:rotate-45 before:w-full before:h-full before:absolute">
              <FontAwesomeIcon
                icon={faTabletScreenButton}
                width={80}
                height={80}
                className="p-4 w-16 h-16"
              />
            </div>
            <h3 className={`${mainFont.className} text-2xl`}>
              Responsive Design
            </h3>
            <p className={` ${TypographyFont.className} text-txtSecondary`}>
              Building websites that work seamlessly across various devices and
              screen sizes.{" "}
            </p>
          </div>
          <div className="min-w-56 flex-1 flex flex-col gap-5">
            <div className=" before:transition before:border-border relative w-fit before:border before:hover:rotate-45 before:w-full before:h-full before:absolute">
              <FontAwesomeIcon
                icon={faReact}
                width={80}
                height={80}
                className="p-4 w-16 h-16"
              />
            </div>
            <h3 className={`${mainFont.className} text-2xl`}>
              Front-End Frameworks
            </h3>
            <p className={` ${TypographyFont.className} text-txtSecondary`}>
              Utilizing framework React/ Next js to enhance development
              efficiency and maintainability.{" "}
            </p>
          </div>
          <div className="min-w-56 flex-1 flex flex-col gap-5">
            <div className="before:transition  before:border-border relative w-fit before:border before:hover:rotate-45 before:w-full before:h-full before:absolute">
              <FontAwesomeIcon
                icon={faGithub}
                width={80}
                height={80}
                className="p-4 w-16 h-16"
              />
            </div>
            <h3 className={`${mainFont.className} text-2xl`}>
              Version Control
            </h3>
            <p className={` ${TypographyFont.className} text-txtSecondary`}>
              Using tools like GitHub for version control and collaboration with
              other developers.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
