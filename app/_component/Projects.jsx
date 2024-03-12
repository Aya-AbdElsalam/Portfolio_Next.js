"use client";
//list of projects
import projectList from "../_data/projectsList";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
//import font
import { Play } from "next/font/google";
const mainFont = Play({
  subsets: ["latin"],
  weight: "700",
});
export default function Projects({ params }) {
  const [translate, setTranslate] = useState(0);
  const [width] = useState(
    (projectList.length - 2) * 320 + (projectList.length - 1) * 8
  );
  const projects = useRef();
  const handleNext = () => {
    setTranslate(params.locale === "en" ? translate + 320 : translate - 320);
    projects.current.style.transform =
      params.locale === "en"
        ? `translateX(${translate + 320}px)`
        : `translateX(${translate - 320}px)`;
  };
  const handleBack = () => {
    setTranslate(params.locale === "en" ? translate - 320 : translate + 320);
    projects.current.style.transform =
      params.locale === "en"
        ? `translateX(${translate - 320}px)`
        : `translateX(${translate + 320}px)`;
  };
  return (
    <div className="bg-bgPrimary overflow-hidden py-11" id="Projects">
      <div
        ref={projects}
        className="block md:flex md:flex-wrap md:gap-4  whitespace-nowrap md:whitespace-normal projectsSlider "
      >
        {projectList.map((p) => (
          <Link
            key={p.title}
            href={`${params.locale}/project/${p.id}`}
            className="group relative inline-block md:block bg-overlay w-80 h-80 flex-grow mx-2 box-border"
          >
            <Image
              alt={p.title}
              src={p.img}
              loading="lazy"
              className="absolute  h-full w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-25 top-0 "
            />
            <div
              className={`w-full  p-4 sm:p-6 lg:p-8 absolute bottom-0 bg-bgThird/75`}
            >
              <p className="text-xl font-bold text-white sm:text-2xl border-b-2 mb-2">
                {params.locale === "en" ? p.title : p.title_ar}
              </p>
              <p
                className={`text-sm font-medium  tracking-widest  line-clamp-1 ${mainFont.className}`}
              >
                {params.locale === "en" ? p.aboutTheSite : p.aboutTheSite_ar}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className=" justify-between container flex md:hidden ">
        <button
          aria-label="next"
          className={`p-3 bg-bgThird/75 ${translate === 0 && `invisible`}`}
          disabled={translate === 0 && true}
          onClick={() => {
            handleNext();
          }}
        >
          {"<"}
        </button>
        <button
          aria-label="back"
          className={`p-3 bg-bgThird/75 ${
            params.locale === "en"
              ? translate <= -width && `invisible`
              : translate >= width && `invisible`
          }`}
          disabled={
            params.locale === "en"
              ? translate <= -width && true
              : translate >= width && true
          }
          onClick={() => {
            handleBack();
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
