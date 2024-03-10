'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { Play } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

const mainFont = Play({
  subsets: ["latin"],
  weight: "400"
});
export default function HeaderComponent() {
  const [activeLink,setActiveLink]=useState("")
  const t = useTranslations('Index');
console.log(window.location.pathname.split("/").length)
  return (

    <header className=" fixed w-full bg-bgPrimary shadow-md shadow-bgSecondary  text-txtPrimary z-50" >
      <div className={`flex flex-1 items-center  justify-between h-16 ${mainFont.className} px-4 sm:px-6 lg:px-8`}>
        <nav aria-label="Global">
          <ul className="flex items-center gap-6">
            <li >
              <Link className={`transition hover:text-border ${activeLink===t('Home')&&"text-border border-b-2 border-border"}`} href={window.location.pathname.split("/").length>2?"../../#Home":"#Home"} onClick={(e)=>{
                setActiveLink(e.target.innerText)
              }}> {t('Home')} </Link>
            </li>
            <li>
              <Link className={`transition hover:text-border ${activeLink===t('About')&&"text-border border-b-2 border-border"}`} href={window.location.pathname.split("/").length>2?"../../#About":"#About"}  onClick={(e)=>{
                setActiveLink(e.target.innerText)
              }}> {t('About')} </Link>
            </li>
            <li>
            <Link className={`transition hover:text-border ${activeLink===t('Projects')&&"text-border border-b-2 border-border"}`} href={window.location.pathname.split("/").length>2?"../../#Projects":"#Projects"}  onClick={(e)=>{
                setActiveLink(e.target.innerText)
              }}> {t('Projects')} </Link>
            </li>
            <li>
            <Link className={`transition hover:text-border ${activeLink===t('Contect')&&"text-border border-b-2 border-border"}`} href={window.location.pathname.split("/").length>2?"../../#Contect":"#Contect"}  onClick={(e)=>{
                setActiveLink(e.target.innerText)
              }}> {t('Contect')} </Link>
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
