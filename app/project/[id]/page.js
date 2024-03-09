"use client";
//style sheet for arabic language
import projectsList from "../../_data/projectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Josefin_Sans, Play } from "next/font/google";
import Image from "next/image";
import {
  faArrowLeft,
  faArrowRight,
  faLinkSlash,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
const mainFont = Play({
  subsets: ["latin"],
  weight: "700",
});
const TypographyFont = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function page({ params }) {
  let choosenProject = projectsList.find((e) => {
    return e.id == params.id;
  });
  const aboutProject = useRef();
  const imgArr = choosenProject.images;
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(imgArr[index]);
  useEffect(() => {
    setImg(imgArr[index]);
    aboutProject.current.innerHTML = choosenProject.aboutTheSite;
  }, [choosenProject.aboutTheSite, imgArr, index]);
  //project details DOM
  return (
    <div className="bg-bgPrimary ">
      <div className="w-full h-[100vh]">
        <Image
          priority
          className="h-full w-full"
          width={1200}
          height={500}
          src={choosenProject.imgAllPages}
          alt="developer"
        />{" "}
      </div>
      <div className="flex container gap-3 pt-2">
        <Link
          target="_blank"
          href={choosenProject.liveMode}
          className="p-3 bg-bgThird"
        >
          Live Demo <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        <Link
          target="_blank"
          href={choosenProject.code}
          className="p-3 bg-bgThird"
        >
          Code <FontAwesomeIcon icon={faLinkSlash} />
        </Link>
      </div>
      <div className="py-8 container ">
        <div className=" flex-col gap-12 flex ">
          <div className="relative before:absolute before:bg-border before:w-3/12 before:h-1 before:-bottom-2 before:top-auto ">
            <h1 className={`${mainFont.className} text-base`}>PROJECT</h1>
            <h2 className={`${mainFont.className} text-4xl `}>
              {choosenProject.title}
            </h2>
          </div>

          <p
            className={` ${TypographyFont.className} text-txtSecondary text-xl`}
            ref={aboutProject}
          ></p>
          <h3>
            <span className="flex items-center">
              <span className="h-px flex-1 bg-txtSecondary"></span>
              <span className={`${mainFont.className} text-2xl shrink-0 px-6 `}>
                TOOLS
              </span>
              <span className="h-px flex-1 bg-txtSecondary"></span>
            </span>
          </h3>
          <div className="flex gap-3 flex-wrap justify-center">
            {choosenProject.tools.map((p) => (
              <div
                key={p}
                className=" group relative rounded-3xl  overflow-hidden border border-border px-8 py-3 focus:outline-none focus:ring w-fit"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-border transition-all group-hover:w-full group-active:bg-bgSecondary"></span>

                <span className="text-base relative font-medium text-border transition-colors group-hover:text-txtPrimary">
                  {p}
                </span>
              </div>
            ))}
          </div>
          <span className="flex items-center">
            <span className="h-px flex-1 bg-txtSecondary"></span>
            <span className={`${mainFont.className} text-2xl shrink-0 px-6 `}>
              THE SITE
            </span>
            <span className="h-px flex-1 bg-txtSecondary"></span>
          </span>
          <div className="container">
            <div className="info">
              <div className="slider">
                <Image
                  src={img}
                  width={"100%"}
                  height={"100%"}
                  alt={choosenProject.title}
                ></Image>
              </div>
              <div className="control flex justify-between mt-3">
                <span
                  className="p-3 bg-bgThird/75 cursor-pointer"
                  onClick={() => {
                    index == 0 ? setIndex(imgArr.length - 1) : setIndex(index - 1)

                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                <span
                  className="p-3 bg-bgThird/75 cursor-pointer"
                  onClick={() => {
                    index == imgArr.length - 1 ? setIndex(0) : setIndex(index + 1);

                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
