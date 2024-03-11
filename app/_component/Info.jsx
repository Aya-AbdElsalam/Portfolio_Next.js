"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import bg from "../_images/bg5.webp"
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Info() {
  const t = useTranslations('Index');
  const info = useRef(null);
  const Education = useRef(null);
  const contact = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: info.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../_images/_animation/info.json"),
    });
    lottie.loadAnimation({
      container: Education.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../_images/_animation/education.json"),
    });
    lottie.loadAnimation({
      container: contact.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../_images/_animation/contact.json"),
    });
  }, []);
  return (
    <div className=" bg-cover relative" >
      <Image src={bg} className="absolute w-full top-0 left-0 h-full -z-10" alt="background" width={1000} height={500}/>
      <div className="container flex flex-wrap py-11">
        <div className="w-64 grow bg-overlay/75 lg:mt-28 border-4 border-bgThird/45">
          <div className="bg-bgThird/45 h-16 relative">
            <div
              ref={info}
              className="rounded-full absolute w-16 h-16 border-4 border-bgThird/45 bg-overlay/75 overflow-hidden"
              style={{
                left: "calc(50% - 30px)",
                top: "50%",
              }}
            ></div>
          </div>
          <div className="mt-10 p-4">
            <p className="border-b-bgThird/45 border-b-4 py-2">
              <span className="text-border">{t('Data of birth')}:</span>{t('birthday')}
            </p>
            <p className="border-b-bgThird/45 border-b-4 py-2">
              <span className="text-border"> {t('Address')}:</span>{t('addressDetails')}
            </p>
            <p className="border-b-bgThird/45 border-b-4 py-2">
              <span className="text-border"> {t('Phone')}:</span> {t('phoneNumber')}
            </p>
            <p className=" py-2">
              <span className="text-border"> {t('Email')}:</span> {t('gmail')}
            </p>
          </div>
        </div>
        <div className="w-64 grow bg-overlay/75 lg:mt-14 lg:mb-14 border-4 border-bgThird/45">
          <div className="bg-bgThird/45 h-16 relative">
            <div
              ref={Education}
              className="rounded-full absolute w-16 h-16 border-4 border-bgThird/45 bg-overlay/75 overflow-hidden"
              style={{
                left: "calc(50% - 30px)",
                top: "50%",
              }}
            ></div>
          </div>
          <div className="mt-10 p-4">
            <h4 className="text-border border-b-2 border-b-border">
              {t('Education')}
            </h4>
            <p>
            {t('educationDetails')}.
            </p>
          </div>
        </div>
        <div className="w-64 grow bg-overlay/75  lg:mb-28 border-4 border-bgThird/45 ">
          <div className="bg-bgThird/45 h-16 relative">
            <div
              ref={contact}
              className="rounded-full absolute w-16 h-16 border-4 border-bgThird/45 bg-overlay/75 overflow-hidden"
              style={{
                left: "calc(50% - 30px)",
                top: "50%",
              }}
            ></div>
          </div>
          <div className="mt-10 p-4">
            <p>
             {t('letsContact')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
