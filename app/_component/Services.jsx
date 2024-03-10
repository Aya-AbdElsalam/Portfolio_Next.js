import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { Josefin_Sans, Play } from "next/font/google";
import React from "react";
import { useTranslations } from "next-intl";
const mainFont = Play({
  subsets: ["latin"],
  weight: "700",
});
const TypographyFont = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function Services() {
  const t = useTranslations('Index');
  return (
    <div className=" bg-bgPrimary py-12" id="About">
      <div className="flex flex-wrap gap-10  container ">
        <div className="w-96 flex-col gap-12 flex">
          <div className="relative before:absolute before:bg-border before:w-3/12 before:h-1 before:-bottom-2 before:top-auto ">
            <h1 className={`${mainFont.className} text-base`}>{t('SERVICES')}</h1>
            <h2 className={`${mainFont.className} text-4xl `}>{t('WHAT I DO?')}</h2>
          </div>

          <p className={` ${TypographyFont.className} text-txtSecondary`}>
            {t('servicesTypography')}
          </p>
        </div>
        <div className="w-96 flex-1 flex flex-wrap gap-8">
          <div className="min-w-56 flex-1 flex flex-col gap-5">
            <div className=" before:transition before:border-border relative w-fit before:border before:hover:rotate-45 before:w-full before:h-full before:absolute">
              <FontAwesomeIcon
                icon={faLaptopCode}
               width={40}
                height={40}
                className="p-4 w-16 h-16"
                style={{width:"64px",height:"64px"}}
              />
            </div>
            <h3 className={`${mainFont.className} text-2xl`}>
              {t('SERVICES1')}
            </h3>
            <p className={` ${TypographyFont.className} text-txtSecondary`}>
             {t('SERVICES1Typography')}
            </p>
          </div>
          <div className="min-w-56 flex-1 flex flex-col gap-5">
            <div className=" before:transition before:border-border relative w-fit before:border before:hover:rotate-45 before:w-full before:h-full before:absolute">
              <FontAwesomeIcon
                icon={faTabletScreenButton}
                width={40}
                height={40}
                className="p-4 w-16 h-16"
                style={{width:"64px",height:"64px"}}
              />
            </div>
            <h3 className={`${mainFont.className} text-2xl`}>
              {t('SERVICES2')}
            </h3>
            <p className={` ${TypographyFont.className} text-txtSecondary`}>
             {t('SERVICES2Typography')}
            </p>
          </div>
          <div className="min-w-56 flex-1 flex flex-col gap-5">
            <div className=" before:transition before:border-border relative w-fit before:border before:hover:rotate-45 before:w-full before:h-full before:absolute">
              <FontAwesomeIcon
                icon={faReact}
               width={40}
                height={40}
                className="p-4 w-16 h-16"
                style={{width:"64px",height:"64px"}}
              />
            </div>
            <h3 className={`${mainFont.className} text-2xl`}>
              {t('SERVICES3')}
            </h3>
            <p className={` ${TypographyFont.className} text-txtSecondary`}>
             {t('SERVICES3Typography')}
            </p>
          </div>
          <div className="min-w-56 flex-1 flex flex-col gap-5">
            <div className="before:transition  before:border-border relative w-fit before:border before:hover:rotate-45 before:w-full before:h-full before:absolute">
              <FontAwesomeIcon
                icon={faGithub}
               width={40}
                height={40}
                className="p-4 w-16 h-16"
                style={{width:"64px",height:"64px"}}
              />
            </div>
            <h3 className={`${mainFont.className} text-2xl`}>
              {t('SERVICES4')}
            </h3>
            <p className={` ${TypographyFont.className} text-txtSecondary`}>
          {t('SERVICES4Typography')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
