'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { Play } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
const mainFont = Play({
  subsets: ["latin"],
  weight: "400"
});
export default function HeaderComponent() {
  const [activeLink,setActiveLink]=useState("")
  return (
    <header className=" fixed w-full bg-bgPrimary shadow-md shadow-bgSecondary  text-txtPrimary z-50" >
      <div className={`flex flex-1 items-center  justify-between h-16 ${mainFont.className} px-4 sm:px-6 lg:px-8`}>
        <nav aria-label="Global">
          <ul className="flex items-center gap-6">
            <li >
              <Link className={`transition hover:text-border ${activeLink==="Home"&&"text-border border-b-2 border-border"}`} href="../#Home" onClick={(e)=>{
                setActiveLink(e.target.innerText)
              }}> Home </Link>
            </li>
            <li>
              <Link className={`transition hover:text-border ${activeLink==="About"&&"text-border border-b-2 border-border"}`} href="../#About" onClick={(e)=>{
                setActiveLink(e.target.innerText)
              }}> About </Link>
            </li>
            <li>
            <Link className={`transition hover:text-border ${activeLink==="Projects"&&"text-border border-b-2 border-border"}`} href="../#Projects" onClick={(e)=>{
                setActiveLink(e.target.innerText)
              }}> Projects </Link>
            </li>
            <li>
            <Link className={`transition hover:text-border ${activeLink==="Contect"&&"text-border border-b-2 border-border"}`}  href="../#Contect" onClick={(e)=>{
                setActiveLink(e.target.innerText)
              }}> Contect </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 ">
          <div className="sm:flex sm:gap-4">
            <a
              className="inline-block rounded-md px-2 w-10"
              href="https://github.com/Aya-AbdElsalam"
              target="_blank"
              aria-label="github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
